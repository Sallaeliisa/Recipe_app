import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./Components_CSS/Form.css";

const RecipeForm = () => {
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    image: "",
    description: "",
    recipeCategory: "",
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
    const ingredientValue = document.getElementById("recipeIngredient");
    const ingredient = ingredientValue.value;
    newRecipe.recipeIngredients.push(ingredient);
    const showIngredient = document.createElement("P");
    showIngredient.textContent = ingredient;
    showIngredient.className = "addedIngredients";
    document.getElementById("showIngredients").appendChild(showIngredient);
    document.getElementById("recipeIngredient").value = "";
    document.getElementById("showIngredients").classList.add("ingredientList");
  };

  const addInstruction = (e) => {
    e.preventDefault();
    const instructionValue = document.getElementById("recipeInstruction");
    const instruction = instructionValue.value;
    newRecipe.recipeInstructions.push(instruction);
    const showInstruction = document.createElement("P");
    showInstruction.textContent = instruction;
    showInstruction.className = "addedInstructions";
    document.getElementById("showInstructions").appendChild(showInstruction);
    document.getElementById("recipeInstruction").value = "";
    document
      .getElementById("showInstructions")
      .classList.add("instructionList");
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
    <div className="formContainer">
      <Form onSubmit={submitRecipe}>
        <h1>Your recipe</h1>
        <div className="recipeInfo">
        <Form.Row>
          <Col>
            <Form.Group controlId="name">
              <Form.Label>Recipe name</Form.Label>
              <Form.Control type="text" required onChange={changeHandler} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="image">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="url"
                placeholder="URL"
                onChange={changeHandler}
              />
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Group controlId="description">
          <Form.Label>Description of the dish</Form.Label>
          <Form.Control as="textarea" onChange={changeHandler} />
        </Form.Group>
        <Form.Row>
          <Col>
            <Form.Group controlId="recipeCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                defaultValue="select"
                onChange={changeHandler}
              >
                <option value="select">Select</option>
                <option value="main course">Main course</option>
                <option value="side dish">Side dish</option>
                <option value="dessert">Dessert</option>
                <option value="other">Other</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="recipeYield">
              <Form.Label>Servings</Form.Label>
              <Form.Control type="text" onChange={changeHandler} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="totalTime">
              <Form.Label>Cooking time</Form.Label>
              <Form.Control type="text" onChange={changeHandler} />
            </Form.Group>
          </Col>
        </Form.Row>
        </div>
        <div className="ingredientSection">
        <h2>Ingredients</h2>
        <section id="showIngredients"></section>
        <Form.Group controlId="recipeIngredient">
          <Form.Label>Ingredient and amount</Form.Label>
          <Form.Control type="text" placeholder="eg. 1 pot basil" />
        </Form.Group>
        <Button variant="outline-primary" onClick={addIngredient}>
          Add ingredient
        </Button>
        </div>
        <div className="instructionSection">
        <h2>Instructions</h2>
        <section id="showInstructions"></section>
        <Form.Group controlId="recipeInstruction">
          <Form.Label>Step</Form.Label>
          <Form.Control as="textarea" placeholder="eg. Boil the water." />
        </Form.Group>
        <Button variant="outline-primary" onClick={addInstruction}>Add step</Button>
        <Button variant="primary" type="submit">Add recipe</Button>
        </div>
      </Form>
    </div>
  );
};

export default RecipeForm;
