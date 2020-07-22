import React from 'react';
import styles from './content.module.css'
import FakeRecipe from "./FakeRecipe";

export default () => {
  return (
    <article className={styles.article}>
      <FakeRecipe steps={20}/>
    </article>
  )
}
