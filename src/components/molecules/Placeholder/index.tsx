import React from 'react';

import styles from './index.module.css';

import Spinner from '../../atoms/Spinner';

const Placeholder = (): React.ReactElement => (
    <div className={ styles.container }>
        <Spinner/>
    </div>
);

export default Placeholder;
