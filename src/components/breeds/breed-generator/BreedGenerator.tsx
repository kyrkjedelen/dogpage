import React, { useState } from "react";
import "./BreedGenerator.css"
import LikeButton from "../../dog-generator/button/LikeButton.tsx";
import { useQuery, useQueryClient, QueryFunction, QueryKey } from '@tanstack/react-query';

const SHORTEST_BREED_LENGTH = 3

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
    const [dogBreedUrl, setDogBreedUrl] = useState<string>("");
    const updateDog: QueryFunction<string,QueryKey> = async ({queryKey}) => {
        const breed = queryKey[1] as string;
        if (breed.trim().length < SHORTEST_BREED_LENGTH) {
            throw Error("")
        }
        
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        const json = await response.json();
        if (json.code == 404) {
            throw Error(`"${breed}" breed is not in API.`)
        }
        if (json.status == "error") {
            throw Error(`Unkown error with API happened.`)
        }
        return json.message;
    }
    const breedQuery = useQuery({ queryKey: ['breed-img', dogBreedUrl], queryFn: updateDog, retry: false });
    const queryClient = useQueryClient();

    const refreshImage = () => {
        queryClient.invalidateQueries({ queryKey: ['breed-img'] });
    }
    const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
        const value = (event.target as HTMLInputElement).value;
        setDogBreedUrl(makeInputToBreedUrl(value))
    };
    return <>
    <div className="breed-generator">
        <div className="input-container">
            <input id="breed-input" type="text" onChange={handleInputChange} />
            { breedQuery.isSuccess &&
                <>
                   <LikeButton imageURL={breedQuery.data} />
                   <button onClick={refreshImage}>Refresh</button>
                </>
            }
            { breedQuery.isError && breedQuery.error.message &&
                <p>{breedQuery.error.message}</p>
            }
            { breedQuery.isLoading &&
                <p>Loading...</p>
            }
        </div>
        { breedQuery.isSuccess && 
            <img src={breedQuery.data} alt="Dog" />
        }
    </div>
    </>;
}
export default DogGenerator


