import React from "react";
import { UseQueryResult } from '@tanstack/react-query';
import LikeButton from "./LikeButton";


interface DogImageProps {
    imgUrl?: string,
    apiQuery?: UseQueryResult,
    hasLikeButton?: boolean,
}


const DogImage: React.FC<DogImageProps>  = ({ imgUrl, apiQuery, hasLikeButton = true }) => {
    if (imgUrl === undefined && apiQuery == undefined) {
        throw TypeError("Both url and api query cannot be undefined.");
    }
    if (imgUrl !== undefined && apiQuery !== undefined) {
        throw TypeError("Both url and api query cannot be defined.");
    }
    const altText = "Dog image";
    return <>
        { imgUrl !== undefined &&
            <>
                <img src={imgUrl} alt={altText}/>
                { hasLikeButton &&
                    <LikeButton imageURL={imgUrl} />
                }
            </>
        }
        { apiQuery !== undefined &&
        <>
            { apiQuery.isSuccess && typeof apiQuery?.data === 'string' &&
                <>
                    <img src={apiQuery.data} alt={altText} />
                    { hasLikeButton &&
                        <LikeButton imageURL={apiQuery.data} />
                    }
                </>
            }
            { apiQuery.isLoading &&
                <p>Loading image...</p>
            }
            {
                apiQuery.isError &&
                <p>Error getting image: {apiQuery.error.message}</p>
            }
        </>
        }
        { apiQuery !== undefined && typeof apiQuery.data !== 'string' &&
            <p>The api query was wrong in some way.</p>
        }
    </>;
}
export default DogImage