import { useQuery, UseQueryResult, QueryFunction, QueryKey } from '@tanstack/react-query';

export const SHORTEST_BREED_LENGTH = 3
export const IMAGE_QUERY_KEY = "dogImage";


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
const fetchDog = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random")
    const json = await response.json();
    return json.message;
}
const fetchDogWithBreed: QueryFunction<string,QueryKey> = async ({queryKey}) => {
    const breed = queryKey[1] as string;
    if (breed.trim().length < SHORTEST_BREED_LENGTH) {
        throw Error("");
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

export const returnImageQuery = (key: string, breed?: string): UseQueryResult => {
    let query: UseQueryResult;
    if (breed === undefined) {
        query = useQuery({ queryKey: [IMAGE_QUERY_KEY + key], queryFn: fetchDog });
    } else {
        let breedUrl = makeInputToBreedUrl(breed);
        query = useQuery({ queryKey: [IMAGE_QUERY_KEY + key, breedUrl], queryFn: fetchDogWithBreed });
    }
    return query;
}