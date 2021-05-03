import React from "react";

const SearchBox = (props) => {
  return (
    <div className="searchBox">
      <h1>Recipes</h1>
      <input type="text" onChange={props.search} placeholder="Search recipe" />
    </div>
  );
};

export default SearchBox;