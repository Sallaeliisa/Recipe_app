import React from 'react';
import {Link} from "react-router-dom";
import "./Components_CSS/Nav.css"

const Nav = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/recipes">Recipes</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;