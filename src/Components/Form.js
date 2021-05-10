import React from "react";
import "./Components_CSS/Form.css";

const Form = ({ change, submit }) => {
  return (
    <form onSubmit={submit}>
      <h1>Add your recipe here</h1>
      <label>Recipe name</label>
      <input type="text" id="name" onChange={change} />
      <label>Description of the dish</label>
      <input type="text" id="description" onChange={change} />
      <label>Image</label>
      <input type="url" id="image" onChange={change} />
      <label>Category</label>
      <select id="recipeCategory" onChange={change}>
        <option value="select">Select</option>
        <option value="main dish">Main dish</option>
        <option value="side dish">Side dish</option>
        <option value="dessert">Dessert</option>
      </select>
      <label>Proportions</label>
      <input type="text" id="recipeYield" onChange={change} />
      <label>Cooking time</label>
      <input type="text" id="totalTime" onChange={change} />
      <label>Ingredient 1</label>
      <input type="text" id="ingredient1" onChange={change} />
      <label>Ingredient 2</label>
      <input type="text" id="ingredient2" onChange={change} />
      <label>Instructions</label>
      <input type="text" id="recipeInstructions" placeholder="Step 1" onChange={change} />
      <input type="text" id="recipeInstructions" placeholder="Step 2" onChange={change} />
      <input type="text" id="recipeInstructions" placeholder="Step 3" onChange={change} />
      <input type="text" id="recipeInstructions" placeholder="Step 4" onChange={change} />
      <input type="text" id="recipeInstructions" placeholder="Step 5" onChange={change} />

      <button type="submit">Add recipe</button>
    </form>
  );
};

export default Form;
