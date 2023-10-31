import { useQuery, UseQueryResult } from '@tanstack/react-query';

export const FACT_QUERY_KEY = "dogFacts";

const fetchFact = async () => {
    const response = await fetch("https://dogapi.dog/api/v2/facts?limit=1")
    const json = await response.json();
    return json.data[0].attributes.body;
}

export const returnFactQuery = (): UseQueryResult => {
    return useQuery({ queryKey: [FACT_QUERY_KEY], queryFn: fetchFact });;
}