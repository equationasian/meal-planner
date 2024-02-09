import "./css/Recipe.css";
import Loading from "./Loading.jsx";
import { Link, useLoaderData } from "react-router-dom";

function LinkHistory({ recipeName }) {
    return (
        <div className="link-history-container">
            <ul className="link-history-list">
                <li key="meal-planner">
                    <Link to="/" className="history-link">Meal Planner</Link>
                </li>
                <li key="first-arrow" className="arrow">&gt;</li>
                <li key="recipes">
                    <Link to="/recipes" className="history-link">Recipes</Link>
                </li>
                <li key="second-arrow" className="arrow">&gt;</li>
                <li key={recipeName}>
                    {recipeName}
                </li>
            </ul>
        </div>
    );
}

function Thumbnail({ imgURL, altText }) {
    return (
        <div className="thumbnail-container">
            <img id="thumbnail" src={imgURL} alt={altText}></img>;
        </div>
    );
}

function RecipeName({ name }) {
    return <h1 className="heading">{name}</h1>;
}

function Tags({ area, category, tagsArray }) {
    return (
        <div className="tags-container">
            <ul className="tags-list">
                <li key="area" className="tag" id="area-tag">{area}</li>
                <li key="category" className="tag" id="category-tag">{category}</li>
                {tagsArray ? tagsArray.split(",").map(item => (
                    <li key={item} className="tag">{item}</li>
                )) : null}
            </ul>
        </div>
    );
}

function Ingredients({ ingredientsArray }) {
    return (
        <div className="ingredients-container">
            <h2 className="heading">Ingredients</h2>
            <ul className="ingredients-list">
                {ingredientsArray.map((obj, index) => (
                    <li key={obj.ingredient} className="ingredient-item">
                        <div className="ingredient-thumbnail-container">
                            <img src={obj.imageURL} alt={obj.ingredient} className="ingredient-thumbnail"></img>
                        </div>
                        <div className="measure-ingredient-container">
                            <span className="measure">{obj.measure}</span>
                            <span className="ingredient">{obj.ingredient}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function Instructions({ instructionsArray }) {
    return (
        <div className="instructions-container">
            <h2 className="heading">Instructions</h2>
            <ol className="instructions-list">
                {instructionsArray.split(/[\r\n]+/).map(item => (
                    <li key={item} className="instruction">{item}</li>
                ))}
            </ol>
        </div>
    );
}

export default function Recipe() {
    const recipeInfo = useLoaderData()["meals"][0];
    if (!recipeInfo) {
        return <Loading />;
    }

    function readIngredients() {
        let ingredientArray = [];
        for (let ingredientNum = 1; ingredientNum <= 20; ++ingredientNum) {
            let currentIngredient;
            let currentMeasure;
            
            eval("currentIngredient = recipeInfo.strIngredient" + ingredientNum + ";");
            eval("currentMeasure = recipeInfo.strMeasure" + ingredientNum + ";");

            if (!currentIngredient) {
                break;
            }

            let ingredientObject = {
                ingredient: currentIngredient,
                measure: currentMeasure,
                imageURL: "https://www.themealdb.com/images/ingredients/" + currentIngredient + "-Small.png"
            };

            ingredientArray.push(ingredientObject);
        }
        return ingredientArray;
    }

    return (
        <div className="recipe-container">
            <LinkHistory recipeName={recipeInfo.strMeal} />
            <Thumbnail 
                imgURL={recipeInfo.strMealThumb} 
                alt={recipeInfo.strMeal} 
            />
            <div className="recipe-text-container">
                <RecipeName name={recipeInfo.strMeal} />
                <Tags 
                    area={recipeInfo.strArea} 
                    category={recipeInfo.strCategory} 
                    tagsArray={recipeInfo.strTags} 
                />
                <hr className="divider"></hr>
                <Ingredients ingredientsArray={readIngredients()} />
                <Instructions instructionsArray={recipeInfo.strInstructions} />
            </div>
        </div>
    );
}