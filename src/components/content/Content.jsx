import React from 'react';
import styles from './content.module.css'
import LoremIpsum from "../LoremIpsum";

export function Content() {
  return (
    <article className={styles.article}>
      <h1>Content</h1>
      <LoremIpsum paragraphs={5}/>
    </article>
  )
}
