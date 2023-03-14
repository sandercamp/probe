import React from 'react';
import classnames from 'classnames';

import Placeholder from '../Placeholder';

import styles from './index.module.scss';

type ImageProps = {
    src: string;
    alt: string;
    title?: string;
    caption?: string;
    loading: boolean;
    onLoad: () => void;
}

const Image = ({ src, alt, title, caption, loading, onLoad }: ImageProps) => (
    <figure
        className={ classnames(styles.container, {[`${ styles.loading }`]: loading }) }
    >
        { loading && <Placeholder/> }

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

export default Image;
