import React from 'react';

import styles from './MenuButton.module.css';

type MenuButtonProps = {
    text: string
    active?: boolean
    url?: string
}
/**
 * Menu button for the top menu
 */
const MenuButton: React.FC<MenuButtonProps> = ({ text, active= false,  url = '/' }) => (
    <a
        className={ `${ styles.menuButton } ${ active && styles.active }` }
        role={ 'menuitem' }
        href={ url }
    >
        { text }
    </a>
);

export default MenuButton;
