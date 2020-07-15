import React from 'react';
import styles from './layout.module.css';

export default ({children}) => {
  return (
    <div className={styles.container}>
      {children[0]}
      {children.slice(1, -1)}
      {children.slice(-1)[0]}
    </div>
  )
}
