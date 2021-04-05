// Here is the router for main (what content is shown in main)

import React from 'react';
import {Switch, Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Recipes from "./Recipes";
import "./Components_CSS/Main.css"

const Main = () => {
    return (
        <main>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/recipes" component={Recipes} />
            </Switch>
        </main>
    );
};

export default Main;