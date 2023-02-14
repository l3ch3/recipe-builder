import React from "react";

export default function ({ recipes }) {
  return (
    <div>
      {recipes.map((recipe) => (
        <p key={recipe.Name}>{recipe.Name}</p>
      ))}
    </div>
  );
}
