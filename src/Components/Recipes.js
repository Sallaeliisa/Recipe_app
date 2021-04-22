import React, { Component } from 'react';
import RecipesList from "./RecipesList";
import "./Components_CSS/Recipes.css";

class Recipes extends Component {
    state = {
        recipe: [],
      };

      componentDidMount() {
        fetch("http://localhost:3001/recipe")
          .then((resp) => resp.json()) 
          .then((data) => this.setState({ recipe: data }))
          .then((data) => console.log(data));
      }


render() {
    
    return (
      <section>
      <RecipesList recipe={this.state.recipe} />
      </section>
    );
    
}
}

export default Recipes;