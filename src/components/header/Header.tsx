import React from "react";
import { Link } from "react-router-dom";

import './Header.css';



const Header:React.FC = () => {
    return <>
        <div id = 'header'>
            <img id="logo" src="https://dog.ceo/img/dog-api-logo.svg" alt="logo" />
            <h1 id='title'>Random Dog of the Day</h1>
            <div id="navbar">
                <Link to="/">home</Link>
                <Link to ="/about">about us</Link>
                <Link to ="/breeds">breeds</Link>
                <Link to ="/favourites">favourites</Link>
            </div>
        </div>
    </>
}

export default Header