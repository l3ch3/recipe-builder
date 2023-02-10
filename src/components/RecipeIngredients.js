import React from "react";

export default function RecipeIngredients(props) {
  const recipeIngredients = () =>
    props.Ingredients.map((Ingredient) => (
      <p key={Ingredient}> {Ingredient}</p>
    ));

  // function recipeIngredients{
  //   props.Ingredients.map((Ingredient) => <p key={Ingredient}> {Ingredient})</p>
  // }
  /*  const recipeIngredients = () => {
    props.Ingredients.map((Ingredient) => (
      <p key={Ingredient.Name}> {Ingredient}</p>
    ));
  };
  
  SAM - what do the brackets do 
  */
  return <div>{recipeIngredients()}</div>;
}
