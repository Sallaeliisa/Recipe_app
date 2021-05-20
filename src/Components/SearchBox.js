import React from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SearchBox = (props) => {
  return (
    <div className="searchBox">
      <h1>Recipes</h1>
      <Form inline>
      <Form.Control type="text" placeholder="Search recipe" className="mr-sm-2" onChange={props.search} />
      </Form>
      <Link to={`/recipes/new`}>
        <Button variant="outline-primary">Add a new recipe</Button>
      </Link>
    </div>
  );
};

export default SearchBox;
