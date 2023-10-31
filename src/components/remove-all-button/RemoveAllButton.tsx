import React from "react";
import { resetAllDogs } from "../localstorage/FavoriteStorage.tsx";

const RemoveAllButton: React.FC = () => {
    return (
        <>
            <button onClick={resetAllDogs}>Remove all saved dogs</button>
        </>
    );
}
export default RemoveAllButton;