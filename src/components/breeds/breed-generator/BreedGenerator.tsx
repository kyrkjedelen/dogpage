import React, { useState, useEffect } from "react";

const DogGenerator:React.FC  = () => {
    const [breedInputValue, setBreedInputValue] = useState<string>("");
    const [dogUrl, setDogUrl] = useState<string>("");
    const [noBreedError, setNoBreedError] = useState<string>("");

    const updateDog = async () => {
        const response = await fetch(`https://dog.ceo/api/breed/${breedInputValue}/images/random`)
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
        console.log((event.target as HTMLInputElement).value)
        setBreedInputValue((event.target as HTMLInputElement).value.trim().toLowerCase());
      };
    const updateAll = () => {
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
            <button onClick={updateAll}>Klikk</button>
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