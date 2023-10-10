import React from "react";
import BreedGenerator from "./breed-generator/BreedGenerator"

const Breeds:React.FC = () => {
    return <>
        <main style={{color: "black"}}>
            <h1>Breeds</h1>
            <BreedGenerator />
        </main>
    </>
}

export default Breeds