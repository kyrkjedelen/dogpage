import React from "react";
import { UseQueryResult } from '@tanstack/react-query';

interface DogFactProps {
    fact?: string
    apiQuery?: UseQueryResult
}

const DogFact: React.FC<DogFactProps>  = ({fact, apiQuery}) => {
    if (fact === undefined && apiQuery == undefined) {
        throw TypeError("Both url and api query cannot be undefined.");
    }
    if (fact !== undefined && apiQuery !== undefined) {
        throw TypeError("Both url and api query cannot be defined.");
    }
    return <>
        { fact !== undefined &&
            <p>{fact}</p>
        }
        { apiQuery !== undefined &&
            <>
                { apiQuery.isSuccess && typeof apiQuery.data === "string" &&
                    <p>{apiQuery.data}</p>
                }
                { apiQuery.isLoading &&
                    <p>Loading fact...</p>
                }
                { apiQuery.isError &&
                    <p className="error-message">Error getting fact: {apiQuery.error.message}</p>
                }
            </>
        }
    </>;
}
export default DogFact;