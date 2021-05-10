import React from "react";
import { Link } from "react-router-dom";

const SearchBox = (props) => {
  return (
    <div className="searchBox">
      <h1>Recipes</h1>
      <input type="text" onChange={props.search} placeholder="Search recipe" />
      <Link to={`/recipes/new`}>
        <button>Add a new recipe</button>
      </Link>
    </div>
  );
};

export default SearchBox;
