import React, { PropsWithChildren } from 'react';

import styles from './Page.module.css';

import Header from '../organisms/Header';

const Page: React.FC<PropsWithChildren> = ({ children })  => (
    <div className={ styles.page }>
        <Header />
        <main>
            { children }
        </main>
        {/*<footer>Footer</footer>*/}
    </div>
);

export default Page;
