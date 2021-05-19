import React from 'react';
import Nav from "./Nav";
import "./Components_CSS/Header.css"
import logo2 from "../assets/recipe_logo.svg";

const Header = () => {
    return (
        <header>
            <img id='logo' src={logo2} alt='LOGO'></img>
            <Nav />
        </header>
    );
};

export default Header;