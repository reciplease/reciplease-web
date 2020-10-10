import React from 'react';

import Navigation from '../Navigation/Navigation';
import Content from '../Content/Content';

import styles from './main.module.css';

const MainComponent: React.FunctionComponent = () => (
  <main className={styles.main}>
    <Navigation/>
    <Content/>
  </main>
);

export default MainComponent;