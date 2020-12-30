import React from 'react';
import styles from './main.module.css';
import Content from '../content/Content';
import Footer from '../footer/Footer';

interface MainProps {
    className?: string
}

export default ({className}: MainProps) => {
    if (!className) className = '';

    return (
        <main className={`${className} ${styles.main}`}>
            <Content/>
            <Footer/>
        </main>
    );
}
