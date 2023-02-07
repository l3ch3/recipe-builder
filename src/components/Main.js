import React from "react";
import recipes from "../assets/recipes";
import { useState } from "react";

export default function Main() {
  const [recipe, setRecipe] = useState();

  function getRecipe() {
    let randomNumber = Math.floor(Math.random() * recipes.length);
    let randomRecipe = recipes[randomNumber];
    let recipeIngredient = recipe.Ingredients.map((Ingredient) => (
      <p>{Ingredient}</p>
    ));
    //why getting an error

    setRecipe(randomRecipe);
    console.log(recipe.Ingredients);
  }

  return (
    <main>
      <button className="main-button" onClick={getRecipe}>
        Random Recipe
      </button>

      <div className="recipe">
        <h2 className="recipe-title">{recipe.Name} </h2>
        {/* <h2 className="recipe-title">{randomRecipe} </h2> 
        error - undifiened */}
        <hr></hr>
        <p className="recipe-description">{recipe.Description} </p>
        <div>
          <h4>Ingredients</h4>
          <p>{recipe.Ingredients}</p>
        </div>
        <div className="recipe-method">
          <h4>Method</h4>
          <p>{recipe.Method}</p>
        </div>
      </div>
    </main>
  );
}
