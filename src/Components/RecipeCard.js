import React from 'react';

const RecipeCard = (props) => {
    return (
        <div className="recipesList">
        <div className="recipeCard">
            <h1>{props.name}</h1>
              <img src={props.image} alt="meal prepared"/>
              <h2>{props.description}</h2>
              <div className="cardText">
                <p>Servings: {props.recipeYield}</p>
                <p>Cooking time: {props.totalTime}</p>
        </div>
        </div>
        </div>
    );
};

export default RecipeCard;