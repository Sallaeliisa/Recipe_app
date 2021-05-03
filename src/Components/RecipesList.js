import React from "react";
import "./Components_CSS/Recipes.css";

const RecipesList = ({ recipe }) => {
  return (
    <main id="recipes">
      <div className="recipesList">
        {recipe.map((recipes) => {
          return (
            <div className="recipeCard">
              <h2>{recipes.name}</h2>
              <img src={recipes.image} alt="meal prepared"/>
              <h3>{recipes.description}</h3>
              <div className="cardText">
                <p>Servings: {recipes.recipeYield}</p>
                <p>Cooking time: {recipes.totalTime}</p>
                <h4>Ingredients:</h4>
                <ul>
                  {recipes.recipeIngredients.map((item) => {
                    return <p>{item}</p>;
                  })}
                </ul>
                <h4>Instructions:</h4>
                <p>
                  {recipes.recipeInstructions.map((item) => {
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
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default RecipesList;