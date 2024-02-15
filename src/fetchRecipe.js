export async function recipePageLoader({ params }) {
    return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.recipeName}`);
}

export async function searchTagsLoader() {
    const areasList = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
    const dishesList = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list");
    const areasAndDishesList = [await areasList.json(), await dishesList.json()];
    return areasAndDishesList;
}

export async function fetchRandom() {
    let randomRecipes = [];
    for (let i = 0; i < 5; ++i) {
        const random = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
        const data = await random.json();
        randomRecipes.push(await data["meals"][0]);
    }
    return randomRecipes;
}