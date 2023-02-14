import React from "react";

export default function RecipeIngredients(props) {
  // const recipeIngredients = () =>
  //   props.Ingredients.map((Ingredient) => (
  //     <p key={Ingredient}> {Ingredient}</p>
  //   ));

  function recipeIngredients() {
    return props.Ingredients.map((Ingredient) => (
      <p key={Ingredient}> {Ingredient}</p>
    ));
  }
  // const recipeIngredients = () => {
  //   return props.Ingredients.map((Ingredient) => (
  //     <p key={Ingredient.Name}> {Ingredient}</p>
  //   ));
  // };

  return <div>{recipeIngredients()}</div>;
}

//How sam would it do
// const recipientIngredients = ({ ingredients }) => (
//   <div>
//      {ingredients.map((ingredient) =>  (<p>{ingredient}</p>))}
//   </div>
// )
// export default recipientIngredients
