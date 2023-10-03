import React, { useState, useEffect } from "react";
import "./BreedGenerator.css"

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

const DogGenerator:React.FC  = () => {
    const [breedInputValue, setBreedInputValue] = useState<string>("");
    const [dogBreedUrl, setDogBreedUrl] = useState<string>("");
    const [dogUrl, setDogUrl] = useState<string>("");
    const [noBreedError, setNoBreedError] = useState<string>("");

    const updateDog = async () => {
        const response = await fetch(`https://dog.ceo/api/breed/${dogBreedUrl}/images/random`)
        const json = await response.json();

        if (json.code === 404) {
            setDogUrl("")
            setNoBreedError(`The breed ${breedInputValue} doesn't exist.`)
        } else {
            setDogUrl(json.message);
            setNoBreedError("")
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
        if (breedInputValue.trim() !== "") {
            updateDog();
        }
    }
    useEffect(() => {
        updateAll();
    }, []);
    return <>
        <div className="breed-generator">
            <input type="text" onChange={handleInputChange}/>
            <button onClick={updateAll}>Trykk her for å se mer dog.</button>
            { dogUrl !== "" &&
                <img src={dogUrl} />
            }
            { noBreedError !== "" &&
                <p>{noBreedError}</p>
            }
        </div>
    </>;
}
export default DogGenerator