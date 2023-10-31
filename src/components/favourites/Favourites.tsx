import React, { useEffect, useState } from "react";
import DogImage from "../dog-image/DogImage.tsx";
import RemoveAllButton from "../remove-all-button/RemoveAllButton.tsx";
import { removeDog, getAllDogs, DOG_UPDATE_KEY } from "../localstorage/FavoriteStorage.tsx";

const Favourites:React.FC = () => {
    const [dogList, setDogList] = useState<string[]>([]);
    const updateDogList = () => {
        setDogList(getAllDogs());
    }

    // Update favorites list at load, and when localStorage updates.
    useEffect(() => {
        updateDogList()
    }, []);
    window.addEventListener(DOG_UPDATE_KEY, () => {
        updateDogList()
    });
    
    return <>
        <main className="main" style={{ color: "black" }}>
            <h1 >Favorites</h1>
            <RemoveAllButton />
            {dogList.map((url: string) => (
                <div className="dogImageItem">
                    <DogImage imgUrl={url} hasLikeButton={false} />
                    <button className="remove-dog" onClick={() => removeDog(url)}>
                        Remove dog
                    </button>
                </div>
            ))}
        </main>
    </>
}

export default Favourites