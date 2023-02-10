import React from "react";

export default function RecipeIngredients(props) {
  const recipeIngredients = () =>
    props.Ingredients.map((Ingredient) => (
      <p key={Ingredient.Name}> {Ingredient}</p>
    ));
  /*  const recipeIngredients = () => {
    props.Ingredients.map((Ingredient) => (
      <p key={Ingredient.Name}> {Ingredient}</p>
    ));
  };*/
  return <div>{recipeIngredients()}</div>;
}
