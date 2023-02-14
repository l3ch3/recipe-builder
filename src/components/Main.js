import React from "react";
import recipes from "../assets/recipes";
import { useState } from "react";
import RecipeMethod from "./RecipeMethod";
import RecipeIngredients from "./RecipeIngredients";

export default function Main() {
  function getRandomRecipe() {
    const randomNumber = Math.floor(Math.random() * recipes.length);
    const randomRecipe = recipes[randomNumber];
    return randomRecipe;
    //remember to return
  }
  const [recipe, setRecipe] = useState(getRandomRecipe());

  function getRecipe() {
    setRecipe(getRandomRecipe());
  }

  return (
    <main>
      <button className="main-button" onClick={getRecipe}>
        Random Recipe
      </button>
      {recipe && ( // if recipe is not Null - run this statement
        <div className="recipe">
          <a href={recipe.url} target="_blank">
            <h2 className="recipe-title">{recipe.Name}</h2>
          </a>
          <div className="d-flex justify-content-center">
            <hr className="col-8 border border-2  border-dark"></hr>
          </div>
          <p className="recipe-description">{recipe.Description} </p>
          <div>
            <h4>{`(${recipe.Ingredients.length}) Ingredients`}</h4>
            <RecipeIngredients Ingredients={recipe.Ingredients} />
          </div>
          <div className="recipe-method">
            <h4>Method</h4>
            <RecipeMethod Method={recipe.Method} />
            {/* Method is the prop name in RecipeMethod */}
          </div>
        </div>
      )}
    </main>
  );
}
