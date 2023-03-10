import React, { useDeferredValue } from "react";
import { useState, useEffect } from "react";

export default function ({ recipes, input }) {
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  useEffect(() => {
    const filtered = recipes.filter((recipe) => {
      // receipe refers to each object in the array- look at filter parameters
      if (input === "") return recipe;
      else if (recipe.Name.toLowerCase().includes(input.toLowerCase())) {
        return recipe;
      }
      return null; // requires null when both statements do not run
    }); // new array is created
    setFilteredRecipes(filtered);
  }, [input, recipes]); //run useEffect when depenecies change
  //dont update the depencies within the useEffect

  return (
    <div>
      <p className="fw-bold">
        {filteredRecipes.length} {""}
        {filteredRecipes.length >= 2 ? "Recipes Found" : "Recipe Found"}
      </p>
      {filteredRecipes.map(
        // maps the new array of the  filtered recipes
        (
          retrunedRecipe, //returnedRecipe is the name given to each object
          index
        ) => {
          return <p key={index}>{retrunedRecipe.Name}</p>;
          //add bootstrap dropdown here
        }
      )}
    </div>
  );
}
