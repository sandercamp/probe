import React, {useState} from 'react';

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

const Slideshow: React.FC<SlideshowProps> = ({ currentImage, hasPrevious = true, hasNext= true, onNext, onPrevious }) => {
    const [ loading, isLoading ] = useState(true);

    const onClick = () => {
        console.log('click');
    };

    return (
        <div className={ styles.container }>
            { (!loading && hasPrevious) && <ArrowButton direction={ 'left' } onClick={ onPrevious } /> }
            <Image
                src={ currentImage.url }
                alt={ currentImage.title }
                title={ `${ currentImage.title } | ${ currentImage.date }` }
                caption={ currentImage.explanation }
                onLoad={ () => isLoading(false) }
                loading={ loading }
            />
            { (!loading && hasNext) && <ArrowButton direction={ 'right' } onClick={ onNext } /> }
        </div>
    );
}

export default Slideshow;
