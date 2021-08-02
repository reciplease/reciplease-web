import React from 'react';
import styles from './navbar.module.css';
import { Link } from 'react-router-dom';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  if (!className) className = '';

  return (
    <nav className={`${className} ${styles.nav}`}>
      <ul className={styles.list}>
        <li><Link to='/inventory' className={styles.link}>Inventory</Link></li>
        <li><Link to='/recipes' className={styles.link}>Recipes</Link></li>
        <li><Link to='/planner' className={styles.link}>Planner</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
