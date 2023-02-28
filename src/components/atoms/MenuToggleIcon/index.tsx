import React from 'react';
import classnames from 'classnames';

import styles from './index.module.scss';

type MenuToggleIconProps = {
    open: boolean;
}

const MenuToggleIcon: React.FC<MenuToggleIconProps> = ({ open }) => (
    <svg
        className={ styles.icon }
        viewBox="0 0 100 100"
        onClick={ () => console.log('test') }
    >
        <line
            className={ classnames(styles.bar, styles.top, { [`${ styles.open }`]: open }) }
            x1="6.25%"
            y1="50%"
            x2="93.75%"
            y2="50%"
        />
        <line
            className={ classnames(styles.bar, styles.middle, { [`${ styles.open }`]: open }) }
            x1="6.25%"
            y1="50%"
            x2="93.75%"
            y2="50%"
        />
        <line
            className={ classnames(styles.bar, styles.bottom, { [`${ styles.open }`]: open }) }
            x1="6.25%"
            y1="50%"
            x2="93.75%"
            y2="50%"
        />
    </svg>
);
export default MenuToggleIcon;
