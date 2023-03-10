import React from "react";

export default function RecipeMethod(props) {
  const recipeMethod = () =>
    props.Method.map((step) => (
      <p key={step}>
        {props.Method.indexOf(step) + 1}.{step}
      </p>
    ));
  return <div>{recipeMethod()}</div>;

  //ALWAYS NEED TO CALL THE FUNCTION
}
