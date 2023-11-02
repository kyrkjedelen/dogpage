import React from "react";
import BreedGenerator from "./breed-generator/BreedGenerator.tsx";
import style from "./Breeds.module.css";


const Breeds:React.FC = () => {
    return <>
        <main className={style.main} style={{color: "black"}}>
            <h1>Breeds</h1>
            <BreedGenerator />
        </main>
    </>
}

export default Breeds