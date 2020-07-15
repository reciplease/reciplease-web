import React from "react";
import styles from './navigation.module.css';

export default () => (
  <nav className={styles.nav}>
    <ul>
      <li><a href="/">Ingredients</a></li>
      <li><a href="/">Inventory</a></li>
      <li><a href="/">Recipes</a></li>
      <li><a href="/">Planner</a></li>
    </ul>
  </nav>
)
