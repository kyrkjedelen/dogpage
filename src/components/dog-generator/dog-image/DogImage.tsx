import React from "react"

interface DogImageProps {
    imageUrl: string
    style?: React.CSSProperties;
}

const DogImage: React.FC<DogImageProps> = ({ imageUrl, style} )  => {
    return <>
        <img className="dog-image" src={imageUrl} alt="Random dog." style={style} />
    </>
}

export default DogImage