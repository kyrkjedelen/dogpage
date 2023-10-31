import React from "react";
import { addDog } from "../localstorage/FavoriteStorage.tsx"

interface Props {
    imageURL: string,
}


const LikeButton: React.FC<Props> = ({ imageURL }) => {
    const likeDog = () => {
        addDog(imageURL);
    }

    return (
        <>
            <button className="like-button" onClick={likeDog}>Like dog</button>
        </>
    );
}

export default LikeButton;