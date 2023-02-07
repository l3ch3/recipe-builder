import React from "react";
import recipes from "../assets/recipes";

export default function Main() {
  function getRecipe() {
    console.log(recipes[900]);
  }

  return (
    <main>
      <button className="main-button" onClick={getRecipe}>
        Random Recipe
      </button>

      <div className="recipe">recipe goes here</div>
    </main>
  );
}
