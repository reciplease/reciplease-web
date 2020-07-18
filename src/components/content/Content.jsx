import React from 'react';
import styles from './content.module.css'
import FakeRecipe from "./FakeRecipe";

export default () => {
  return (
    <article className={styles.article}>
      <h1>Recipe: Lorem Ipsum</h1>
      <FakeRecipe/>
    </article>
  )
}
