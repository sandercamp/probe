import React, { PropsWithChildren } from 'react';

import styles from './Space.module.scss';

const Space: React.FC<PropsWithChildren> = ({ children })  => (
    <div className={ styles.space }>
        <div className={ styles.smallStars }>
            <div className={ styles.mediumStars }>
                <div className={ styles.largeStars }>
                    { children }
                </div>
            </div>
        </div>
    </div>
);

export default Space;
