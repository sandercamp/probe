import React, { PropsWithChildren ,} from 'react';

import styles from './Menu.module.css';

const Menu: React.FC<PropsWithChildren> = ({ children }) => {
    if (React.Children.count(children) === 0) {
        return null;
    }

    return (
        <nav
            className={ styles.menu }
            role={ 'navigation' }
        >
            <ul
                role={ 'menu' }
                aria-label={ 'Main navigation' }
            >
                {
                    React.Children.map(children, child => (
                        <li
                            role={ 'presentation' }
                        >
                            { child }
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
};

export default Menu;
