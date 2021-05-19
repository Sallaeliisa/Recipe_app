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
        <img src={recipe.image} alt="meal prepared" />
        <h3>{recipe.description}</h3>
        <div className="cardText">
          <p>Servings: {recipe.recipeYield}</p>
          <p>Cooking time: {recipe.totalTime}</p>
          <h4>Ingredients:</h4>
          <ul>
            {recipe.recipeIngredients.map((item) => {
              return <p key={recipe.recipeIngredients.indexOf(item)}>{item}</p>;
            })}
          </ul>
          <h4>Instructions:</h4>
        <ul>
          {recipe.recipeInstructions.map((item) => {
            return (
              <h5 key={recipe.recipeInstructions.indexOf(item)}>
                Step {recipe.recipeInstructions.indexOf(item) + 1}
                <div className="item">
                  <p>{item}</p>
                </div>
              </h5>
            );
          })}
        </ul>
        </div>
        <Link to={`/recipes`}>
          <button>Back to recipes</button>
        </Link>
      </div>
    );
  }
  return <div>{recipeData}</div>;
};

export default SingleRecipe;
