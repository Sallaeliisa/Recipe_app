import React from "react";
import { useState, useEffect } from 'react';
import "./Components_CSS/Form.css";

const Form = () => {
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    image: "",
    description: "",
    recipeYield: "",
    totalTime: "",
    recipeIngredients: [],
    recipeInstructions: [],
});

//   const [instructions, setInstructions] = useState([
//     { id: "", name: "", text: "" },
// ]);

const changeHandler = (e) => {
  setNewRecipe({
    ...newRecipe, [e.target.id]: e.target.value
  });
  console.log(newRecipe);
}

const addIngredient = (e) => {
  newRecipe.recipeIngredients.push(e.target.value);
}

const addIngredientLine = (event) => {
  event.preventDefault();
  const newLine = document.createElement('INPUT');
  newLine.id = 'recipeIngredients';
  newLine.onchange = addIngredient;
  document.getElementById("moreIngredients").appendChild(newLine);
  
}


  const submitRecipe = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newRecipe),
    };
    fetch("http://localhost:3001/recipe", requestOptions);
    alert("Recipe is posted", window.location.reload());
  };


  return (
    <form onSubmit={submitRecipe}>
      <h1>Add your recipe here</h1>
      <label>Recipe name</label>
      <input type="text" id="name" onChange={changeHandler} />
      <label>Description of the dish</label>
      <input type="text" id="description" onChange={changeHandler} />
      <label>Image</label>
      <input type="url" id="image" onChange={changeHandler} />
      <label>Category</label>
      <select id="recipeCategory" onChange={changeHandler}>
        <option value="select">Select</option>
        <option value="main dish">Main dish</option>
        <option value="side dish">Side dish</option>
        <option value="dessert">Dessert</option>
      </select>
      <label>Proportions</label>
      <input type="text" id="recipeYield" onChange={changeHandler} />
      <label>Cooking time</label>
      <input type="text" id="totalTime" onChange={changeHandler} />
      <label>Ingredient and amount</label>
      <input type="text" id="recipeIngredients" onChange={addIngredient} />
      <div id="moreIngredients"></div>
      <button onClick={addIngredientLine}>Add new ingredient</button>
      <br></br>


      {
      /* <label>Ingredient 1</label>
      <input type="text" id="ingredient1" onChange={changeHandler} />
      <label>Ingredient 2</label>
      <input type="text" id="ingredient2" onChange={changeHandler} />
      <label>Instructions</label>
      <input type="text" id="recipeInstructions" placeholder="Step 1" onChange={change} />
      <input type="text" id="recipeInstructions" placeholder="Step 2" onChange={change} />
      <input type="text" id="recipeInstructions" placeholder="Step 3" onChange={change} />
      <input type="text" id="recipeInstructions" placeholder="Step 4" onChange={change} />
      <input type="text" id="recipeInstructions" placeholder="Step 5" onChange={change} /> */}

      <button type="submit">Add recipe</button>
    </form>
  );
};

export default Form;
