import React from "react";
import "./Button.css"

interface ButtonProps {
    updateFunction: () => void
}

const Button: React.FC<ButtonProps> = ({ updateFunction }) => {
    const handleClick = () => {
        updateFunction();
    }

    return <>
        <button id="my-button" onClick={handleClick}>Click here to see more dog</button>
    </>
}

export default Button;