import React, { useState, useEffect } from "react";
import DogImage from "./dog-image/DogImage.tsx";
import Button from "./button/Button.tsx";
import Factbox from "./factbox/Factbox.tsx";

import './DogGenerator.css'
import LikeButton from "./button/LikeButton.tsx";

const DogGenerator:React.FC  = () => {
    const [dogUrl, setDogUrl] = useState<string>("");
    const [dogFact, setDogFact] = useState<string>("");

    const updateFact = async () => {
        const response = await fetch("https://dogapi.dog/api/v2/facts?limit=1")
        const json = await response.json();
        console.log(json);

        setDogFact(json.data[0].attributes.body);
    }
    const updateDog = async () => {
        const response = await fetch("https://dog.ceo/api/breeds/image/random")
        const json = await response.json();

        setDogUrl(json.message);
    }
    const updateAll = () => {
        updateDog();
        updateFact();
    }
    useEffect(() => {
        updateAll();
    }, []);
    return <>
        <div className="dog-generator">
            <DogImage imageUrl={dogUrl} />
            <div>
                <Factbox fact={dogFact} />
                <Button updateFunction={updateAll} />
                <LikeButton imageURL={dogUrl} />
            </div>
        </div>
    </>;
}
export default DogGenerator