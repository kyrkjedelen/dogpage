import React, { useState, useEffect } from "react";
import "./BreedGenerator.css"
import LikeButton from "../../dog-generator/button/LikeButton.tsx";
import BreedsOptions from "./BreedsOptions.tsx";

const makeInputToBreedUrl = (input: string): string => {
    const words = input.trim().toLowerCase().split(" ")

    let new_string = ""
    for (let i = words.length - 1; i >= 0; i--) {
        new_string += words[i]
        if (i !== 0) {
            new_string += "/"
        }
    }
    return new_string
}

const DogGenerator: React.FC = () => {
    const [breedInputValue, setBreedInputValue] = useState<string>("");
    const [dogBreedUrl, setDogBreedUrl] = useState<string>("");
    //const [dogUrl, setDogUrl] = useState<string>("");
    const [dogUrls, setDogUrls] = useState<string[]>([]);
    const [error, setError] = useState<string>("");

    const updateDog = async () => {
        try {
            const newDogUrls = []
            for (let i=0; i < 10; i++){
                const response = await fetch(`https://dog.ceo/api/breed/${dogBreedUrl}/images/random`)
                const json = await response.json();
                if (json.code === 404 || !json) {
                    throw `The breed ${breedInputValue} doesn't exist.`
                }
                newDogUrls.push(json.message);
            }
            setDogUrls(newDogUrls);

        } catch (e) {
            setDogUrls([])
            setError(String(e))
        }
    }
    const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
        const value = (event.target as HTMLInputElement).value
        console.log(value)
        setBreedInputValue(value.trim().toLowerCase());
        setDogBreedUrl(makeInputToBreedUrl(value))
    };
    const updateAll = () => {
        console.log("Click!")
        setError("")
        if (breedInputValue.trim() !== "") {
            updateDog();
        }
    }
    useEffect(() => {
        updateAll();
    }, []);

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        console.log(value);
        setBreedInputValue(value.trim().toLowerCase());
        setDogBreedUrl(makeInputToBreedUrl(value));
        updateAll();
    }

    return (<>
        <select name="selectedBreed" onChange={(event) => {handleSelectChange(event)}}>
            {BreedsOptions.map(breed => (
                <option key={breed.toLowerCase()} value={breed.toLowerCase()}>
                    {breed}
                </option>
            ))}
        </select>
        
        <div className="dog-images">
        {dogUrls.map((url, index) => (
                <div className="dog">
                    <img key={index} src={url} alt={`Dog ${index}`} />
                    <LikeButton imageURL={dogUrls[index]}/>
                </div>
        ))}
        </div>
        
        <div className="breed-generator">
            <div className="input-container">
                <input id="breed-input" type="text" onChange={handleInputChange} />
                <button id="breed-button" onClick={updateAll}>Load more Dogs</button>
                {error !== "" && <p>{error}</p>}
            </div>
            
        </div>
    </>
    );
    
};
export default DogGenerator


