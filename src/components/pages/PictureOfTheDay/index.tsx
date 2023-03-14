import React from 'react';

import { usePictureOfTheDay } from '../../../application/api';

import Slideshow from '../../organisms/Slideshow';
import Page from '../../templates/Page';

import styles from './index.module.css';

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
