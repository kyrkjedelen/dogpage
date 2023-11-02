import React, { useEffect, useState } from "react";
import DogImage from "../../dog-image/DogImage.tsx";
import { returnImageQuery, IMAGE_QUERY_KEY } from "../../apis/ImageApi.tsx";
import { UseQueryResult, useQueryClient } from "@tanstack/react-query";
import BreedsOptions from "./BreedsOptions.tsx";
import style from "./BreedGenerator.module.css";

const BreedGenerator: React.FC = () => {
    
    const queryClient = useQueryClient();
    const [breed, setBreed] = useState("");
    const imageQueries: UseQueryResult[] = [];

    for (let i = 1; i <= 10; i++){
        imageQueries.push(returnImageQuery(i.toString(), breed));
    }


    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value.trim().toLowerCase();
        setBreed(value);
        updateDog();
    }

    const handleBreedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.trim().toLowerCase();
        setBreed(value);
    };


    const updateDog = () => { 
        imageQueries.forEach((query, index) => {
            queryClient.invalidateQueries({ queryKey: [IMAGE_QUERY_KEY + index]})

        }

        )
    }

    return (
    <div className={style.breedsGenerator}>
        <div className="dog-images">
            {imageQueries.map((query, index) => (
                <DogImage key={index} apiQuery={query} />
            ))}
        </div>
        <div className={style.inputContainer}>
            <input id="breed-input" type="text" onChange={handleBreedChange} />
            <select name="selectedBreed" onChange={(event) => {handleSelectChange(event)}}>
                {BreedsOptions.map(breed => (
                    <option key={breed.toLowerCase()} value={breed.toLowerCase()}>
                        {breed}
                    </option>
                ))}
            </select>
            <button id="breed-button" onClick={updateDog} >Load more Dogs</button>
        </div>
    </div>
    )
}


export default BreedGenerator;