import React, { PropsWithChildren } from 'react';

import styles from './Page.module.css';

import Header from '../organisms/Header';
import Space from './Space';

const Page: React.FC<PropsWithChildren> = ({ children })  => (
    <Space>
        <div className={ styles.page }>
            <Header />
            <main>
                { children }
            </main>
            {/*<footer>Footer</footer>*/}
        </div>
    </Space>
);

export default Page;
