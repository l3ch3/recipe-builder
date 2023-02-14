import React from "react";
import AllRecipes from "./AllRecipes";
import recipes from "../assets/recipes.json";
import TestObject from "../assets/TestObject.json";
import { useState } from "react";

export default function Search() {
  const test = TestObject.map((order) => <p>{order.Number}</p>);

  const [search, setSearch] = useState("");

  return (
    <main>
      <div>
        <input placeholder="Search for recipes here"></input>
      </div>
      <div className="search-results">
        <AllRecipes recipes={recipes} />
      </div>
    </main>
  );
}
