import React from "react";
import AllRecipes from "./AllRecipes";
import recipes from "../assets/recipes.json";
import { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");

  return (
    <main>
      <div>
        <input
          placeholder="Search for recipes here"
          onChange={(e) => {
            setSearch(e.target.value);
            //store input as search value
          }}
        ></input>
      </div>
      <div className="search-results">
        <AllRecipes recipes={recipes} input={search} />
      </div>
    </main>
  );
}
