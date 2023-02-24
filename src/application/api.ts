import { useEffect, useState } from 'react';

import { Image } from '../types';
import { fromCache, toCache } from './cache';
import {DateTime} from 'luxon';

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

export const usePictureOfTheDay = (): [Image|null, () => void, () => void, boolean, boolean] => {
    const [ date, setDate ] = useState<DateTime>(DateTime.now());
    const [ image, setImage ] = useState<Image|null>(null);

    const dateString = date.toFormat('yyyy-LL-dd');

    const toPrevious = () => setDate(date.minus({ days: 1}));
    const toNext = () => setDate(date.plus({ days: 1}));
    const hasPrevious = date.startOf('day') >= DateTime.fromFormat('2015-01-01 0:0:0', 'yyyy-LL-dd H:m:s');
    const hasNext = date.startOf('day') < DateTime.now().startOf('day');

    useEffect(
        () => {
            const cacheKey = `apod/${ dateString }`;
            const cachedImage = fromCache<Image>(cacheKey);

            if (cachedImage === null) {
                const url = `${ baseUrl}planetary/apod`;
                const query = `?api_key=${ apiKey }&date=${ dateString }`;

                fetch(`${ url }${ query }`)
                    .then((response) => response.json())
                    .then(json => {
                        setImage(json);

                        toCache(json, cacheKey);
                    });
            } else {
                setImage(cachedImage);
            }
        },
        [ dateString ]
    )

    return [ image, toNext, toPrevious, hasNext, hasPrevious ];
}

export default useFetch;
