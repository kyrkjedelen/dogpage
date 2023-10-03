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
        const updateList = [...dogList, imageURL];
        setList(updateList);
        localStorage.setItem("dog", JSON.stringify(updateList));
    }
};


    return(
        <>
        <button id="like-button" onClick={likeDog}>Lik dog</button>
        </>
    );
}




export default LikeButton;