import React from "react";
import recipes from "../assets/recipes";
import { useState } from "react";

export default function Main() {
  function getRandomRecipe() {
    const randomNumber = Math.floor(Math.random() * recipes.length);
    const randomRecipe = recipes[randomNumber];
    return randomRecipe;
    //remember to return
  }
  const [recipe, setRecipe] = useState(getRandomRecipe());

  const recipeMethod = () =>
    recipe.Method.map((step) => (
      <p key={step}>
        {recipe.Method.indexOf(step) + 1}. {step}
      </p>
    ));
  //need to be function else it will always run and will throw an error at the inital state when
  // recipe = null

  const recipeIngredients = () =>
    recipe.Ingredients.map((Ingredient) => (
      <p key={Ingredient.Name}>{Ingredient}</p>
    ));

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
          <hr></hr>
          <p className="recipe-description">{recipe.Description} </p>
          <div>
            <h4>{`(${recipe.Ingredients.length}) Ingredients`}</h4>
            {/* <p>{recipeIngredients()}</p> */}
            <p>{recipeIngredients()}</p>
          </div>
          <div className="recipe-method">
            <h4>Method</h4>
            <p>{recipeMethod()}</p>
            {/* dont forget to call the function  */}
          </div>
        </div>
      )}
    </main>
  );
}
