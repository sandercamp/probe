import React from 'react';

import styles from './index.module.css';

import MenuButton from '../../atoms/MenuButton';
import Menu from '../../molecules/Menu';
import {useLocation} from 'react-router-dom';

const Header: React.FC = () => {
    const location = useLocation();

    console.log(location);

    return (
        <header className={ styles.header }>
            <h1>discover</h1>
            <Menu>
                <MenuButton
                    text={ 'Picture of the day'}
                    url={ '/' }
                    active={ location.pathname === '/' }
                />
                <MenuButton
                    text={ 'Solar system'}
                    url={ '/solar-system' }
                    active={ location.pathname === '/solar-system'}
                />
                <MenuButton
                    text={ 'Moon Trek'}
                    disabled={ true }
                />
                <MenuButton
                    text={ 'Library'}
                    disabled={ true }
                />
            </Menu>
        </header>
    );
}

export default Header;
