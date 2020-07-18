import React from 'react';
import styles from './fakerecipe.module.css';
import {loremIpsum} from 'react-lorem-ipsum';

const removePunctuation = (text) => {
  return text.replace(/[^\w\s]|_/g, "")
    .replace(/\s+/g, " ")
};

export default ({ingredients = 8, steps = 5}) => {
  let ingredientContents = loremIpsum({
    p: ingredients,
    avgWordsPerSentence: 1,
    avgSentencesPerParagraph: 1,
    startWithLoremIpsum: false
  });
  let ingredientsContent = (
    <ul>
      {ingredientContents.map(ingredientContent => <li>{removePunctuation(ingredientContent).toLowerCase()}</li>)}
    </ul>
  );

  let stepContents = loremIpsum({p: steps, avgSentencesPerParagraph: 2, startWithLoremIpsum: false});
  let stepsContent = (
    <ol className={styles.steps}>
      {stepContents.map(stepContent => <li>{stepContent}</li>)}
    </ol>
  );

  return (
    <>
      <h3 className={styles.sectionHeader}>Ingredients</h3>
      {ingredientsContent}
      <h3 className={styles.sectionHeader}>Steps</h3>
      {stepsContent}
    </>
  );
}
