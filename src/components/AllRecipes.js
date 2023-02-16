import React from "react";

export default function ({ recipes, input }) {
  return (
    <div>
      {recipes
        .filter((recipe) => {
          if (input === "") return recipe;
          else if (recipe.Name.toLowerCase().includes(input.toLowerCase()))
            return recipe;
          return null; // requires null when both statements do not run
        })
        .map(
          // maps the array of the returned searched
          (
            retrunedRecipe,
            index // map (element, index) -> use index for the key
          ) => (
            <p key={index}>{retrunedRecipe.Name}</p> //add bootstrap dropdown here
          )
        )}
    </div>
  );
}
