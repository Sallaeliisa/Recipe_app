import React, { Component } from 'react';
import RecipesList from "./RecipesList";
import SearchBox from "./SearchBox";
import RecipeCard from './RecipeCard';
import "./Components_CSS/Recipes.css";
import "./Components_CSS/searchArea.css";


class Recipes extends Component {
    state = {
        recipe: [],
        searchInput: "",
      };

      componentDidMount() {
        fetch("http://localhost:3001/recipe")
          .then((resp) => resp.json()) 
          .then((data) => this.setState({ recipe: data }))
          .then((data) => console.log(data));
      }

      searchValueHandler = (e) => {
        this.setState({
          searchInput: e.target.value,
        });
        console.log(this.state.searchInput);
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
      key={recipe.name}
      image={recipe.image}
      description={recipe.description}
      recipeYield={recipe.recipeYield}
      totalTime={recipe.totalTime}
      />
    );
  });
    
    return (
      <section>
      <SearchBox search={this.searchValueHandler}/>
      <div className="filteredRecipes">{filteredRecipes}</div>
      </section>
    );
    
}
}

export default Recipes;