import React, { useState, useEffect } from "react";

interface Props {
    imageURL: string,
}

const LikeButton: React.FC<Props> = ({imageURL}) => {
    const [isActive, setIsActive] = useState(false);

    const [dogList, setList] = useState<string[]>([]);
    useEffect(() => {
        const storedList = localStorage.getItem("dog");
        if (storedList) {
            setList(JSON.parse(storedList));
        }
    }, [])

const likeDog = () => {
    if (imageURL){
        if (!dogList.includes(imageURL)){
            //setIsActive(true);
            localStorage.clear();
            const updateList = [...dogList, imageURL];
            setList(updateList);
            localStorage.setItem("dog", JSON.stringify(updateList));
        }
        else {
            setIsActive(false);
        }
    }
};

const clearImages = () => {
    localStorage.removeItem("dog");
}

    return(
        <>
        <button 
            id="like-button"
            onClick={likeDog}
            className={isActive ? "active" : ""}
            >Lik dog
        </button>
        <button onClick={clearImages}>Fjern alle favoritter</button>
        </>
    );
}

export default LikeButton;