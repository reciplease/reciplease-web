import React from 'react';
import styles from './navigation.module.css';
import { Link } from 'react-router-dom';

const NavigationComponent : React.FunctionComponent = () => (
  <nav className={styles.nav}>
    <ul className={styles.list}>
      <li><Link to="/inventory" className={styles.link}>Inventory</Link></li>
      <li><Link to="/recipes" className={styles.link}>Recipes</Link></li>
      <li><Link to="/planner" className={styles.link}>Planner</Link></li>
    </ul>
  </nav>
)

export default NavigationComponent;