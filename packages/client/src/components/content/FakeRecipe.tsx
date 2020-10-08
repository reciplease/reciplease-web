import React from 'react';
import styles from './fakerecipe.module.css';
import {loremIpsum} from 'react-lorem-ipsum';

const removePunctuation = (text) => {
  return text
    .replace(/[^\w\s]|_/g, '')
    .replace(/\s+/g, ' ');
};

const createListItem = (item, index) => <li key={index}>{item}</li>;

const FakeRecipe : React.FunctionComponent = ({ingredients = 8, steps = 5}) => {
  const ingredientContents = loremIpsum({
    p: ingredients,
    avgWordsPerSentence: 1,
    avgSentencesPerParagraph: 1,
    startWithLoremIpsum: false
  });
  const stepContents = loremIpsum({
    p: steps,
    avgSentencesPerParagraph: 2,
    startWithLoremIpsum: false
  });

  return (
    <>
      <h1>Recipe: Lorem Ipsum</h1>
      <h3 className={styles.sectionHeader}>Ingredients</h3>
      <ul>
        {ingredientContents
          .map(removePunctuation)
          .map(text => text.toLowerCase())
          .map(createListItem)}
      </ul>
      <h3 className={styles.sectionHeader}>Steps</h3>
      <ol className={styles.steps}>
        {stepContents.map(createListItem)}
      </ol>
    </>
  );
}

export default FakeRecipe;