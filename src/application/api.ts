import { useEffect, useState } from 'react';

import { Image } from '../types';
import { fromCache, toCache } from './cache';

const baseUrl = 'https://api.nasa.gov/';
const apiKey = process.env.REACT_APP_API_KEY;

const useFetch = <Type>(url: string): Type|null => {
    const [ response, setResponse ] = useState<Type|null>(null);

    useEffect(
        () => {
            fetch(`${ url }?api_key=${ apiKey }`)
                .then((response) => response.json())
                .then(json => setResponse(json));
        },
        [ url ]
    )

    return response;
}

export const usePictureOfTheDay = (): Image|null => {
    const cacheKey = 'apod';
    const [ image, setImage ] = useState<Image|null>(fromCache<Image>(cacheKey));

    useEffect(
        () => {
            if (image === null) {
                const url = `${ baseUrl}planetary/apod`;

                fetch(`${ url }?api_key=${ apiKey }`)
                    .then((response) => response.json())
                    .then(json => {
                        setImage(json);

                        const expiryDate = new Date(new Date().setUTCHours(24, 0, 0, 0));

                        toCache(json, cacheKey, expiryDate);
                    });
            }
        },
        [ image ]
    )

    return image;
}

export default useFetch;
