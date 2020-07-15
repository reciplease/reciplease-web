import React from 'react';
import styles from './body.module.css';
import Navigation from "../navigation/Navigation";
import Content from "../content/Content";

export default () => (
  <main className={styles.main}>
    <Navigation/>
    <Content/>
  </main>
)
