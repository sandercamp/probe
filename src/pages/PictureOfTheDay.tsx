import React from 'react';

import Page from '../templates/Page';

import { usePictureOfTheDay } from '../api';

const PictureOfTheDay = () => {
    const image = usePictureOfTheDay();

    return (
        <Page>
            { image !== null && (
                <img src={ image.url } alt={ image.title } />
            )}
        </Page>
    );
}

export default PictureOfTheDay;
