import React, { PropsWithChildren } from 'react';

import styles from './Page.module.css';

const Page = ({ children }: PropsWithChildren)  => (
    <div className={ styles.page }>
        <header>Header</header>
        <nav>Navigation</nav>
        <main>
            { children }
        </main>
        <footer>Footer</footer>
    </div>
);

export default Page;
