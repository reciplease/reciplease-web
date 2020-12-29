import React from 'react';
import styles from './header.module.css';
import {Link} from 'react-router-dom';

export default () => (
    <header className={styles.header}>
        <Link to='/' className={styles.link}><h2 className={styles.title}>Reciplease</h2></Link>
    </header>
);
