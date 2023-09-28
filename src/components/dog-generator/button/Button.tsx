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
        <button id="my-button" onClick={handleClick}>Trykk her for å se mer dog.</button>
    </>
}

export default Button;