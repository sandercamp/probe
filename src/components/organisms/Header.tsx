import React from 'react';

import styles from './Header.module.css';

import MenuButton from '../atoms/MenuButton';
import Menu from '../molecules/Menu';

const Header: React.FC = () => (
    <header className={ styles.header }>
        <h1>discover</h1>
        <Menu>
            <MenuButton
                text={ 'Picture of the day'}
                active={ true }
            />
            <MenuButton
                text={ 'NeoWs'}
            />
            <MenuButton
                text={ 'Moon Trek'}
            />
            <MenuButton
                text={ 'Library'}
            />
        </Menu>
    </header>
);

export default Header;
