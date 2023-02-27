import React, {useEffect, useState} from 'react';

import Placeholder from './Placeholder';

import styles from './Image.module.css';

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
                <Placeholder/>
            ) }

            <img
                src={ src }
                alt={ alt }
                onLoad={ () => setLoadComplete(true) }
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
