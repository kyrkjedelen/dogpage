import React from "react";
import "./About.css"

const About:React.FC = () => {
    return <>
        <main className="main"  style={{color: "black"}}>
            <h1>About us</h1>
            <a href="https://github.com/kyrkjedelen/dogpage/tree/main">Github</a>
            <p>Dette er et prosjekt lagd i forbindelse med <a target="_blank" href="https://vektorprogrammet.no">vektorprogrammet</a>.</p>
        </main>
    </>
}

export default About