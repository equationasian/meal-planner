import { Form, redirect, useLoaderData, useParams } from "react-router-dom";
import "./css/Search.css";
import { useEffect, useState } from "react";
import Loading from "./Loading.jsx";
import { fetchRandom } from "./fetchRecipe.js";
import Preview from "./Preview.jsx";

/*export async function searchLoader({ request }) {
    const url = new URL(request.url);
    const search = url.searchParams.get("s");
    if (!search) {
        return null;
    }

    return redirect(`/recipes/${search}`);
}*/

function SearchBar() {
    return (
        <div className="search-bar">
            <Form id="search" role="search">
                <input id="s" type="search" placeholder="Search" name="s" autoComplete="off"></input>
            </Form>
        </div>
    );
}

function WorldCuisines({ areaList, onAreaClick }) {
    return (
        <div className="tags-container">
            <h2 className="small-heading">World Cuisines</h2>
            <div className="search-tags-list">
                {areaList.map(area =>
                    <button 
                        key={area.strArea} 
                        value={area.strArea} 
                        className="search-tag" 
                        onClick={onAreaClick}
                    >
                        {area.strArea + " Recipes"}
                    </button>
                )}
            </div>
        </div>
    );
}

function Dishes({ dishesList, onDishClick }) {
    return (
        <div className="tags-container">
            <h2 className="small-heading">Dishes</h2>
            <div className="search-tags-list">
                {dishesList.map(dish =>
                    <button 
                        key={dish.strCategory} 
                        value={dish.strCategory} 
                        className="search-tag" 
                        onClick={onDishClick}
                    >
                        {dish.strCategory + " Recipes"}
                    </button>
                )}
            </div>
        </div>
    );
}

function Description() {
    return (
        <div className="description-container">
            <h1 className="large-heading">Indulge in Culinary Delights</h1>
            <p className="description">
                Unlock the secret to stress-free dining with our meal planning magic!
                Say goodbye to last-minute scrambles and hello to deliciously organized days.
                With our intuitive tools and mouthwatering recipes, every meal becomes a masterpiece.
                Embrace efficiency, savor variety, and reclaim your kitchen throne – because when it comes to meal planning, 
                we've got your back, and your taste buds!
            </p>
        </div>
    );
}

function RecipesList({ name, recipeList }) {
    return (
        <div className="recipes-list-container">
            <h2 className="small-heading">{name}</h2>
            <div className="recipes-container">
                <ul className="recipes-list">
                    {recipeList.map(recipe =>
                        <li key={recipe.strMeal}>
                            <Preview recipeName={recipe.strMeal} recipeThumbnail={recipe.strMealThumb} />
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default function Search() {
    const tagsList = useLoaderData();
    const [recipeList, setRecipeList] = useState(null);
    const [recipeHeader, setRecipeHeader] = useState("Not sure where to start? Try these recipes!");
    useEffect(() => {
        fetchRandom().then(list => setRecipeList(list));
    }, []);

    function handleAreaClick(e) {
        setRecipeHeader(e.target.value + " Recipes");
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${e.target.value}`)
            .then(response => response.json())
            .then(data => setRecipeList(data["meals"]));
    }

    function handleDishClick(e) {
        setRecipeHeader(e.target.value + " Recipes");
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${e.target.value}`)
            .then(response => response.json())
            .then(data => setRecipeList(data["meals"]));
    }

    if (!recipeList) {
        return <Loading />
    }
    
    return (
        <div className="search-container">
            <SearchBar />
            <WorldCuisines areaList={tagsList[0]["meals"]} onAreaClick={handleAreaClick} />
            <Dishes dishesList={tagsList[1]["meals"]} onDishClick={handleDishClick} />
            <Description />
            <RecipesList name={recipeHeader} recipeList={recipeList} />
        </div>
    );
}