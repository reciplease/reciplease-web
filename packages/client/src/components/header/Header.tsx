import React from 'react';
import styles from './header.module.css';
import {Link} from 'react-router-dom';

const HeaderComponent : React.FunctionComponent = () => (
  <header className={styles.header}>
    <Link to='/' className={styles.link}><h2 className={styles.title}>Reciplease</h2></Link>
  </header>
);

export default HeaderComponent;