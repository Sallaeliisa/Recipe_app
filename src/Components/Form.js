import React from "react";
import { useState, useEffect } from "react";
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

  const changeHandler = (e) => {
    setNewRecipe({
      ...newRecipe,
      [e.target.id]: e.target.value,
    });
    console.log(newRecipe);
  };

  const addIngredient = (e) => {
    e.preventDefault();
    const ing = document.getElementById('recipeIngredient');
    const i = ing.value;
    newRecipe.recipeIngredients.push(i);
    const showIng = document.createElement("P");
    showIng.textContent=i;
    showIng.className="addedIngredients";
    document.getElementById("showIngredients").appendChild(showIng);
  };

  const addInstruction = (e) => {
    e.preventDefault();
    const inst = document.getElementById('recipeInstruction');
    const a = inst.value;
    newRecipe.recipeInstructions.push(a);
    const showInst = document.createElement("P");
    showInst.textContent=a;
    showInst.className="addedInstructions";
    document.getElementById("showInstructions").appendChild(showInst);
  };

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
      <h1>Your recipe</h1>
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
      <h2>Ingredients</h2>
      <section id='showIngredients'></section>
      <label>Ingredient and amount</label>
      <input type="text" id="recipeIngredient" placeholder='eg. 1 pot basil' />
      <button onClick={addIngredient}>Add ingredient</button>
      <h2>Instructions</h2>
      <section id='showInstructions'></section>
      <label>Step</label>
      <input type="text" id="recipeInstruction" placeholder='eg. Boil the water.' />
      <button onClick={addInstruction}>Add step</button>
      <br></br>

      <button type="submit">Add recipe</button>
    </form>
  );
};

export default Form;
