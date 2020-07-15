import React from 'react';
import styles from './body.module.css';
import {Navigation} from "../navigation/Navigation";
import {Content} from "../content/Content";

function Body() {
  return (
    <main className={styles.main}>
      <Navigation/>
      <Content/>
    </main>
  )
}


export default Body;
