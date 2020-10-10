import React from 'react';

import styles from './layout.module.css';

const LayoutComponent : React.FunctionComponent = ({children}) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}

export default LayoutComponent;