import React from 'react';
import styles from './main.module.css';
import Navigation from '../navigation/Navigation';
import Content from '../content/Content';

const MainComponent: React.FunctionComponent = () => (
  <main className={styles.main}>
    <Navigation/>
    <Content/>
  </main>
)

export default MainComponent