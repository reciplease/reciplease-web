import React from 'react';
import styles from './layout.module.css';

const Layout = ({children}) => {
  return (
    <div className={styles.container}>
      {children[0]}
      {children.slice(1, -1)}
      {children.slice(-1)[0]}
    </div>
  )
}

export default Layout;
