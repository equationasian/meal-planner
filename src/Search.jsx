import { Form, redirect } from "react-router-dom";
import "./css/Search.css";

export async function searchLoader({ request }) {
    const url = new URL(request.url);
    const search = url.searchParams.get("s");
    if (!search) {
        return null;
    }

    return redirect(`/recipes/${search}`);
}

function SearchBar() {
    return (
        <div className="search-bar">
            <Form id="search" role="search">
                <input id="s" type="search" placeholder="Search" name="s" autoComplete="off"></input>
            </Form>
        </div>
    );
}

function WorldCuisines() {
    return (
        <div className="world-cuisines-container">
            <h2 className="small-heading">World Cuisines</h2>
            <ul className="search-tags-list">
                <li key="arrow1" className="search-arrow">&lt;</li>
                <li key="area1" className="search-tag">American Recipes</li>
                <li key="area2" className="search-tag">Italian Recipes</li>
                <li key="area3" className="search-tag">Asia Recipes</li>
                <li key="arrow2" className="search-arrow">&gt;</li>
            </ul>
        </div>
    );
}

function Dishes() {
    return (
        <div className="dishes-container">
            <h2 className="small-heading">Dishes</h2>
            <ul className="search-tags-list">
                <li key="arrow1" className="search-arrow">&lt;</li>
                <li key="dish1" className="search-tag">Flatbread Recipes</li>
                <li key="dish2" className="search-tag">Taco Recipes</li>
                <li key="dish3" className="search-tag">Pasta Recipes</li>
                <li key="arrow2" className="search-arrow">&gt;</li>
            </ul>
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

function RecipesList({ recipesList }) {
    return (
        <div className="recipes-list-container">
            <h2 className="small-heading">Italian Recipes</h2>
            <div className="recipes-container">
                <ul className="recipes-list">
                    <li key="recipe1">Recipe1</li>
                </ul>
            </div>
        </div>
    );
}

export default function Search() {
    return (
        <div className="search-container">
            <SearchBar />
            <WorldCuisines />
            <Dishes />
            <Description />
            <RecipesList />
        </div>
    );
}