import React, { PropsWithChildren ,} from 'react';

import classnames from 'classnames';

import MenuIcon from '../../atoms/MenuToggleIcon';
import MenuToggle from '../../atoms/MenuToggleIcon';
import MenuToggleIcon from '../../atoms/MenuToggleIcon';

import styles from './index.module.scss';

const Menu: React.FC<PropsWithChildren> = ({ children }) => {
    const [ open, isOpen ] = React.useState(false);

    if (React.Children.count(children) === 0) {
        return null;
    }

    console.log(open);

    return (
        <div
            className={styles.container}
        >
            <button
                className={ styles.menuToggle }
                onClick={ () => isOpen(!open) }
            >
                <MenuToggleIcon open={ open } />
            </button>

            <nav
                className={ styles.menu }
                role={ 'navigation' }
            >

                <ul
                    className={ classnames({ [`${ styles.open }`]: open }) }
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
        </div>
    );
};

export default Menu;
