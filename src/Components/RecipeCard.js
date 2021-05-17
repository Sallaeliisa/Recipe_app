  
import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  return (
    <div className="recipesList">
      <div className="recipeCard">
        <Link to={`/recipes/${props.id}`}>
          <h1>{props.name}</h1>
        </Link>
        <Link to={`/recipes/${props.id}`}>
          <img src={props.image} alt="meal prepared" />
        </Link>
        <h2>{props.description}</h2>
        <div className="cardText">
          <p>Cooking time: {props.totalTime}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
