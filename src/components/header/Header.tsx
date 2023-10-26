import React from "react";
import { Link } from "react-router-dom";

import './Header.css';


const Header:React.FC = () => {
    return <>
        <div id = 'header'>
            <div id="navbar-left">
                <Link to="/"><img id="logo" src="https://dog.ceo/img/dog-api-logo.svg" alt="logo" /></Link>
                <Link to="/"><h1 id='title'>Random Dog of the Day</h1></Link>
            </div>
            <div id="navbar-right">
                <Link to="/">home</Link>
                <Link to ="/about">about us</Link>
                <Link to ="/breeds">breeds</Link>
                <Link to ="/favourites">favourites</Link>
            </div>
        </div>
    </>
}

export default Header