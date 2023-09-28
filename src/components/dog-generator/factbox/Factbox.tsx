import './Factbox.css'
import React from "react";

interface FactboxProps {
    fact: string
}

const Factbox: React.FC<FactboxProps> = ({ fact }) => {
    return <>
        <div id = 'factbox'>
            <p><b>Funfact:</b> {fact}</p>
        </div>
    </>
}

export default Factbox