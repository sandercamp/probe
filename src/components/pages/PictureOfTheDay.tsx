import React from 'react';

import styles from './PictureOfTheDay.module.css';

import Image from '../molecules/Image';
import Page from '../templates/Page';

import { usePictureOfTheDay } from '../../application/api';


const PictureOfTheDay: React.FC = () => {
    const image = usePictureOfTheDay();

    if (image === null) {
        // TODO: Implement loader
        return null;
    }

    return (
        <Page>
            <div
                className={ styles.potd }
            >
                <h2>Picture of the day</h2>
                <Image
                    src={ image.url }
                    alt={ image.title }
                    title={ `${ image.title } | ${ image.date }` }
                    caption={ image.explanation }
                />
            </div>
        </Page>
    );
}

export default PictureOfTheDay;
