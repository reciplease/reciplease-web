import React from 'react';
import {useParams} from 'react-router-dom';
import {useRecipe} from '@reciplease/api';
import styles from './recipe.module.css';

interface RecipeUrl {
    uuid: string
}

const Recipe = () => {
        const {uuid} = useParams<RecipeUrl>();
        const recipe = useRecipe(uuid);

        return (
            <>
                <h1>Recipe: {recipe.name}</h1>
                <h3 className={styles.sectionHeader}>Ingredients</h3>
                <ul>
                    {recipe.ingredients
                        .map(ingredient => (
                            <li
                                key={ingredient.uuid}>{ingredient.name}: {ingredient.amount} {ingredient.measure.toLowerCase()}
                            </li>))}
                </ul>
                <h3 className={styles.sectionHeader}>Steps</h3>
                <ol className={styles.steps}>
                    <li>Not returned by API... yet</li>
                </ol>
            </>
        );
    }
;

export default Recipe;
