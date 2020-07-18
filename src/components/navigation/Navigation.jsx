import React from 'react';
import styles from './navigation.module.css';

export default () => (
  <nav className={styles.nav}>
    <ul className={styles.list}>
      <li><a href="/" className={styles.link}>Inventory</a></li>
      <li><a href="/" className={styles.link}>Recipes</a></li>
      <li><a href="/" className={styles.link}>Planner</a></li>
    </ul>
  </nav>
)
