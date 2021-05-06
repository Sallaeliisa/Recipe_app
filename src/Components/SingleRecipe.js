import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const SingleRecipe = () => {
  const [recipe, setRecipe] = useState();
  let { id } = useParams();

  useEffect(() => {
    if (!recipe) {
      axios
        .get("http://localhost:3001/recipe/" + id)
        .then((res) => setRecipe(res.data));
    }
  });

  let recipeData = undefined;

  if (!recipe) {
    recipeData = <h1>Loading...</h1>;
  }

  if (recipe) {
    recipeData = (
      <div className="singleRecipe">
      <h2>{recipe.name}</h2>
      <img src={recipe.image} alt="meal prepared"/>
      <h3>{recipe.description}</h3>
      <div className="cardText">
        <p>Servings: {recipe.recipeYield}</p>
        <p>Cooking time: {recipe.totalTime}</p>
        <h4>Ingredients:</h4>
        <ul>
          {recipe.recipeIngredients.map((item) => {
            return <p>{item}</p>;
          })}
        </ul>
        <h4>Instructions:</h4>
        <p>
          {recipe.recipeInstructions.map((item) => {
            return (
              <p>
                {item.name}
                <div className="item">
                <ul>
                  <p>{item.text}</p>
                </ul>
                </div>
              </p>
            );
          })}
        </p>
      </div>
      <Link to={`/recipes`}><button>Back to recipes</button></Link>
    </div>
    );
  }
  return <div>{recipeData}</div>;
};

export default SingleRecipe;
