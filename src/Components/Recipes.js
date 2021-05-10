import React, { Component } from "react";
import SearchBox from "./SearchBox";
import RecipeCard from "./RecipeCard";
import SingleRecipe from "./SingleRecipe";
import Form from "./Form";
import { Switch, Route } from "react-router-dom";
import "./Components_CSS/Recipes.css";
import "./Components_CSS/searchArea.css";

class Recipes extends Component {
  state = {
    recipe: [],
    newRecipe: [],
    searchInput: "",
  };

  componentDidMount() {
    fetch("http://localhost:3001/recipe")
      .then((resp) => resp.json())
      .then((data) => this.setState({ recipe: data }));
  }

  searchValueHandler = (e) => {
    this.setState({
      searchInput: e.target.value,
    });
  };

  setNewRecipe = (e) => {
    this.setState({
      newRecipe: { ...this.state.newRecipe, [e.target.id]: e.target.value },
    });
  };

  render() {
    const recipeFilter = this.state.recipe.filter((recipe) => {
      return recipe.name
        .toLowerCase()
        .includes(this.state.searchInput.toLowerCase());
    });

    const filteredRecipes = recipeFilter.map((recipe) => {
      return (
        <RecipeCard
          name={recipe.name}
          id={recipe.id}
          key={recipe.name}
          image={recipe.image}
          description={recipe.description}
          recipeYield={recipe.recipeYield}
          totalTime={recipe.totalTime + " minutes"}
        />
      );
    });

    const submitRecipe = (e) => {
      e.preventDefault();
      const requestOptions = {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(this.state.newRecipe),
      };
      fetch("http://localhost:3001/recipe", requestOptions);
      alert("Recipe is posted", window.location.reload());
      console.log(this.state.newRecipe);
    };

    return (
      <section>
        <Switch>
          <Route path="/recipes/new">
            <Form change={this.setNewRecipe} submit={submitRecipe} />
          </Route>
          <Route path="/recipes/:id">
            <SingleRecipe />
          </Route>
          <Route path="/recipes" exact>
            <SearchBox search={this.searchValueHandler} />
            <div className="filteredRecipes">{filteredRecipes}</div>
          </Route>
        </Switch>
      </section>
    );
  }
}

export default Recipes;
