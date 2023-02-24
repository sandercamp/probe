import React from 'react';

import styles from './index.module.css';

import { Image as ImageType } from '../../../types';

import Image from '../../molecules/Image';
import ArrowButton from '../../atoms/ArrowButton';

type SlideshowProps = {
    currentImage: ImageType
    hasPrevious?: boolean
    onPrevious: () => void
    hasNext?: boolean
    onNext: () => void

}

const Slideshow: React.FC<SlideshowProps> = ({ currentImage, hasPrevious = true, hasNext= true, onNext, onPrevious }) => (
    <div className={ styles.container }>
        { hasPrevious && <ArrowButton direction={ 'left' } onClick={ onPrevious } /> }
        <Image
            src={ currentImage.url }
            alt={ currentImage.title }
            title={ `${ currentImage.title } | ${ currentImage.date }` }
            caption={ currentImage.explanation }
        />
        { hasNext && <ArrowButton direction={ 'right' } onClick={ onNext } /> }
    </div>
);

export default Slideshow;
