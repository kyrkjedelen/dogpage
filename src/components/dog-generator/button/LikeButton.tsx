import React, { useState, useEffect } from "react";

interface Props {
    imageURL: string,
}

const LikeButton: React.FC<Props> = ({imageURL}) => {

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
            localStorage.clear();
            const updateList = [...dogList, imageURL];
            setList(updateList);
            localStorage.setItem("dog", JSON.stringify(updateList));
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
            >Like dog
        </button>
        <button onClick={clearImages}>Remove all saved dogs</button>
        </>
    );
}

export default LikeButton;