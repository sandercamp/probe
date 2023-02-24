import React, {useEffect, useState} from 'react';

import styles from './Image.module.css';
import Spinner from '../atoms/Spinner';

type ImageProps = {
    src: string;
    alt: string;
    title?: string;
    caption?: string;
}

const Image = ({ src, alt, title, caption }: ImageProps) => {
    const [loadComplete, setLoadComplete] = useState(false);

    console.log(loadComplete);


    useEffect(() => {
        setLoadComplete(false);

    }, [src]);

    return (
        <figure className={ styles.container }>
            { !loadComplete && (
                <div className={ styles.placeholder }>
                    <Spinner />
                </div>
            ) }

            <img
                src={ src }
                alt={ alt }
                onLoad={ () => setTimeout(() => { console.log('load'); setLoadComplete(true) }, 2000) }
            />
            { (loadComplete && caption) && (
                <figcaption>
                    { title && (<h3>{ title }</h3>) }

                    { caption }
                </figcaption>
            ) }
        </figure>
    );
}

export default Image;
