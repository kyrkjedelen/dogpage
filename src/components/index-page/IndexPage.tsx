import React from "react";
import DogImage from "../dog-image/DogImage.tsx";
import DogFact from "../dog-fact/DogFact.tsx";
import { returnImageQuery, IMAGE_QUERY_KEY } from "../apis/ImageApi.tsx";
import { returnFactQuery, FACT_QUERY_KEY } from "../apis/FactApi.tsx";
import { useQueryClient } from "@tanstack/react-query";
import styles from "./IndexPage.module.css";

const IndexPage: React.FC = () => {
    const imageQuery = returnImageQuery("");
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
        <main className={styles.main}>
            <figure>
                <DogImage apiQuery={imageQuery}  />
            </figure>
            <article>
                <DogFact apiQuery={factQuery} />
                <button onClick={updateBoth}>Oppdater</button>
            </article>
        </main>
    </>
}

export default IndexPage;