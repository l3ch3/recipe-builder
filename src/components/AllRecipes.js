import React from "react";
import { useState } from "react";

export default function ({ recipes, input }) {
  const [recipeNo, setRecipeNo] = useState(recipes.length);

  console.log(recipes.arrayRef);

  return (
    <div>
      <p>{recipeNo} Recipes</p>
      {recipes
        .filter((recipe) => {
          // receipe refers to each object in the array- look at filter parameters
          if (input === "") return recipe;
          else if (recipe.Name.toLowerCase().includes(input.toLowerCase())) {
            return recipe;
          }
          return null; // requires null when both statements do not run
        }) // new array is created
        .map(
          // maps the new array of the  filtered recipes
          (
            retrunedRecipe, //returnedRecipe is the name given to each object
            index,
            arrayRef // map (element, index, array) -> use index for the key
          ) => {
            return (
              <p key={index}>
                {retrunedRecipe.Name} {arrayRef.length}
              </p>
            );
            //add bootstrap dropdown here
          }
        )}
    </div>
  );
}
