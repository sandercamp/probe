import React from 'react';

import styles from './PictureOfTheDay.module.css';

import { usePictureOfTheDay } from '../../application/api';

import Slideshow from '../organisms/Slideshow';
import Page from '../templates/Page';

const PictureOfTheDay: React.FC = () => {
    const [ image, toNext, toPrevious, hasNext, hasPrevious ] = usePictureOfTheDay();

    if (image === null) {
        // TODO: Implement loader
        return null;
    }

    return (
        <Page>
            <article
                className={ styles.content }
            >
                <h2>Picture of the day</h2>
                <Slideshow
                    currentImage={ image }
                    onPrevious={ toPrevious }
                    onNext={ toNext }
                    hasNext={ hasNext }
                    hasPrevious={ hasPrevious }
                />
            </article>
        </Page>
    );
}

export default PictureOfTheDay;
