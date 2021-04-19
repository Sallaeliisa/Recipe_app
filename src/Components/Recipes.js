import React, { Component } from 'react';
import RecipesList from "./RecipesList";

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
        <section id="recipes">
            <h1>Recipes</h1>
      <RecipesList recipe={this.state.recipe} />
        </section>
    );
    
}
}

export default Recipes;