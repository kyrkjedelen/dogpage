import React from "react";
import DogImage from "../dog-generator/dog-image/DogImage.tsx";
import "./Favourites.css"


const Favourites:React.FC = () => {
    const dogListJSON = localStorage.getItem("dog");
    const dogList = dogListJSON ? JSON.parse(dogListJSON) : [];

    return <>
        <main style={{ color: "black" }}>
            <div className="dogImage">
            <h1 >Favorites</h1>
            {dogList.map((imageUrl: string, index: number) => (
                <DogImage key={index} imageUrl={imageUrl} 
                style={{ width: "200px", height: "auto", margin: "25px 400px"}} />
            ))}
            </div>
        </main>
    </>
}

export default Favourites