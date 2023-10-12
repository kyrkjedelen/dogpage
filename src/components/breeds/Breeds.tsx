import React from "react";
import BreedGenerator from "./breed-generator/BreedGenerator"
import "./Breeds.css"

const Breeds:React.FC = () => {
    return <>
        <main className="main" style={{color: "black"}}>
            <h1>Breeds</h1>
            <BreedGenerator />
        </main>
    </>
}

export default Breeds