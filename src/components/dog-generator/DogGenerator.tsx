import DogImage from "./dog-image/DogImage.tsx";
import Button from "./button/Button.tsx";
import Factbox from "./factbox/Factbox.tsx";

import './DogGenerator.css'
import LikeButton from "./button/LikeButton.tsx";
import { useQuery, useQueryClient } from '@tanstack/react-query'

const fetchFact = async () => {
    const response = await fetch("https://dogapi.dog/api/v2/facts?limit=1")
    const json = await response.json();
    return json.data[0].attributes.body;
}
const fetchDog = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random")
    const json = await response.json();
    return json.message;
}

const DogGenerator:React.FC  = () => {
    const factResult = useQuery({ queryKey: ['fact'], queryFn: fetchFact });
    const dogResult = useQuery({ queryKey: ['dog'], queryFn: fetchDog });
    const queryClient = useQueryClient();

    const updateAll = () => {
        queryClient.invalidateQueries({ queryKey: ['fact'] });
        queryClient.invalidateQueries({ queryKey: ['dog'] });
    }
    return <>
        <div className="dog-generator">
                {dogResult.isPending &&
                    <span>Loading dog...</span>
                }
                {dogResult.isError &&
                    <span>Error: {dogResult.error.message}</span>
                }
                {dogResult.isSuccess &&
                    <DogImage imageUrl={dogResult.data} />
                }
                <div>
                    {factResult.isLoading &&
                        <div>Loading fact...</div>
                    }
                    {factResult.isError &&
                        <div>Error: {factResult.error.message}</div>
                    }
                    {factResult.isSuccess &&
                        <Factbox fact={factResult.data} />
                    }
                    {dogResult.isSuccess && factResult.isSuccess &&
                        <>
                        <Button updateFunction={updateAll} />
                        <LikeButton imageURL={dogResult.data} />
                        </>
                    }
                </div>
        </div>
    </>;
}
export default DogGenerator