import React from "react";
import { Link } from "react-router-dom";



import './Header.css';
import './darkmode.css'


const Header:React.FC = () => {

    const darkmode = () => {
        var element = document.body;
        element.classList.toggle("dark-mode");
    }

    return <>
        <div id = 'header'>
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet"></link>
            <div id="navbar-left">
                <Link to="/dogpage"><i  id="logo" className='bx bxs-dog bx-lg'></i></Link>
                <Link to="/dogpage"><h1 id='title'>Random Dog of the Day</h1></Link>
            </div>
            <div id="navbar-right">
                <Link to="/dogpage">home</Link>
                <Link to ="/dogpage/about">about us</Link>
                <Link to ="/dogpage/breeds">breeds</Link>
                <Link to ="/dogpage/favourites">favourites</Link>
                <div className="toggle-container">
                <label className="switch">
                    <input onClick={darkmode} type="checkbox"/>
                    <span className="slider round"></span>
                </label>
                </div>
            </div>
        </div>
    </>
}

export default Header