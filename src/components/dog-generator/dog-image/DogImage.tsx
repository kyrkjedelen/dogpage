import React from "react"

interface DogImageProps {
    imageUrl: string
}

const DogImage: React.FC<DogImageProps> = ({ imageUrl } )  => {
    return <>
        <img src={imageUrl} alt="Random dog." />
    </>
}

export default DogImage