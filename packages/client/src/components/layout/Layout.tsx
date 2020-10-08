import React from 'react';
import styles from './layout.module.css';

const LayoutComponent : React.FunctionComponent = (props: React.ReactNode) => {
  return (
    <div className={styles.container}>
      {props.children}
    </div>
  );
}

export default LayoutComponent;