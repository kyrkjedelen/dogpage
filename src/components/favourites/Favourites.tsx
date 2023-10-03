import React from "react";
import DogImage from "../dog-generator/dog-image/DogImage.tsx";
//import LikeButton from "/dog-generator/button/LikeButton.tsx";


const Favourites:React.FC = () => {
    const dogListJSON = localStorage.getItem("dog");
    const dogList = dogListJSON ? JSON.parse(dogListJSON) : [];

    return <>
        <main style={{ color: "black" }}>
            <h1>Favorites</h1>
            {dogList.map((imageUrl: string, index: number) => (
                <DogImage key={index} imageUrl={imageUrl} />
            ))}
        </main>
    </>
}

export default Favourites