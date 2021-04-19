import React from 'react';

const RecipesList = ({ recipe }) => {
    return (
            <section id="recipes">
            {recipe.map((recipes) => {
              return (
                <div>
                  <h2>{recipes.name}</h2>
                  <h3>{recipes.description}</h3>
                  <p>{recipes.recipeYield} servings</p>
                  <p>Cooking takes {recipes.totalTime}</p>
                  <p>{recipes.recipeIngredients}</p>
                  <p>{recipes.recipeInstructions[0]}</p>
                  </div>
              );
            })}
            </section>
    );
};

export default RecipesList;