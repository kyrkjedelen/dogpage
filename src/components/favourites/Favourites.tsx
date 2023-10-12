import React, { useEffect, useState } from "react";
import DogImage from "../dog-generator/dog-image/DogImage.tsx";
import "./Favourites.css"


const Favourites:React.FC = () => {
    const [dogList, setDogList] = useState<string[]>([]);

    useEffect(() => {
    const dogListJSON = localStorage.getItem("dog");
    const initialDogList = dogListJSON ? JSON.parse(dogListJSON) : [];
    setDogList(initialDogList);
    }, []);

    const removeDog = (index: number) => {
        const updatedDogList = [...dogList];
        updatedDogList.splice(index,1);
        setDogList(updatedDogList);
        localStorage.setItem("dog", JSON.stringify(updatedDogList));    
    };
    

    return <>
        <main className="main" style={{ color: "black" }}>
            <h1 >Favorites</h1>
            {dogList.map((imageUrl: string, index: number) => (
                <div className="dogImageItem">
                    <DogImage
                        key={index} imageUrl={imageUrl}
                        style={{
                            width: "250px",
                            height: "auto",
                            marginLeft: "160px",
                            marginRight: "20px"
                        }} 
                    />
                    <button id="removeDog" onClick={() => removeDog(index)}>
                            Remove dog
                    </button>
                </div>
            ))}
        </main>
    </>
}

export default Favourites