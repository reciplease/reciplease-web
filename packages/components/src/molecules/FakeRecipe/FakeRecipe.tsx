import React from 'react';
import {loremIpsum} from 'react-lorem-ipsum';

import styles from './fakerecipe.module.css';

const removePunctuation = (text : string) => {
  return text
    .replace(/[^\w\s]|_/g, '')
    .replace(/\s+/g, ' ');
};

const createListItem = (item : string, index : number) => <li key={index}>{item}</li>;

type FakeRecipeProps = {
  ingredients? : number,
  steps? : number
}

const FakeRecipe : React.FunctionComponent<FakeRecipeProps> = ({ingredients = 8, steps = 5}) => {
  const ingredientContents : string[] = loremIpsum({
    p: ingredients,
    avgWordsPerSentence: 1,
    avgSentencesPerParagraph: 1,
    startWithLoremIpsum: false
  });
  const stepContents : string[] = loremIpsum({
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