import React from 'react';

import styles from './Image.module.css';

type ImageProps = {
    src: string;
    alt: string;
    title?: string;
    caption?: string;
}

const Image = ({ src, alt, title, caption }: ImageProps) => {

    return (
        <figure className={ styles.container }>
            <img src={ src } alt={ alt } />
            { caption && (
                <figcaption>
                    { title && (<h3>{ title }</h3>) }

                    { caption }
                </figcaption>
            ) }
        </figure>
    );
}

export default Image;
