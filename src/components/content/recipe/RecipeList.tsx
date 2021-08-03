import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipes } from '../../../api';

const RecipeList = () => {
  const recipeList = useRecipes();

  return (
    <>
      <h1>Recipes</h1>
      <ul>
        {recipeList.map(recipe =>
          <li key={recipe.uuid}>
            <Link to={'/recipes/' + recipe.uuid}>{recipe.name}</Link>
          </li>
        )}
      </ul>
    </>
  );
};

export default RecipeList;
