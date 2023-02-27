import React, { useEffect, useState } from 'react';

import Placeholder from '../Placeholder';

import styles from './index.module.css';

type ImageProps = {
    src: string;
    alt: string;
    title?: string;
    caption?: string;
    loading: boolean;
    onLoad: () => void;
}

const Image = ({ src, alt, title, caption, loading, onLoad }: ImageProps) => {
    return (
        <figure className={ styles.container }>
            { loading && (
                <Placeholder/>
            ) }

            <img
                src={ src }
                alt={ alt }
                onLoad={ onLoad }
            />
            { (!loading && caption) && (
                <figcaption>
                    { title && (<h3>{ title }</h3>) }

                    { caption }
                </figcaption>
            ) }
        </figure>
    );
}

export default Image;
