import React from 'react';
import {Link} from 'react-router-dom';

import styles from './header.module.css';

const HeaderComponent : React.FunctionComponent = () => (
  <header className={styles.header}>
    <Link to='/' className={styles.link}><h2 className={styles.title}>Reciplease</h2></Link>
  </header>
);

export default HeaderComponent;