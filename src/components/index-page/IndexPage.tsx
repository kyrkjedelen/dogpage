import React from "react";
import DogImage from "../dog-image/DogImage.tsx";
import DogFact from "../dog-fact/DogFact.tsx";
import { returnImageQuery, IMAGE_QUERY_KEY } from "../apis/ImageApi.tsx";
import { returnFactQuery, FACT_QUERY_KEY } from "../apis/FactApi.tsx";
import { useQueryClient } from "@tanstack/react-query";

const IndexPage: React.FC = () => {
    const imageQuery = returnImageQuery("terrier");
    const factQuery = returnFactQuery();
    const queryClient = useQueryClient();
    const updateDog = () => {
        queryClient.invalidateQueries({ queryKey: [IMAGE_QUERY_KEY] });
    }
    const updateFact = () => {
        queryClient.invalidateQueries({ queryKey: [FACT_QUERY_KEY] });
    }
    const updateBoth = () => {
        updateDog();
        updateFact();
    }
    return <>
        <main>
            <DogImage apiQuery={imageQuery}  />
            <DogFact apiQuery={factQuery} />
            <button onClick={updateBoth}>Oppdater</button>
        </main>
    </>
}

export default IndexPage;