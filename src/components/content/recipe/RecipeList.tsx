import React from 'react';
import {useRecipeList} from '../../../api/RecipeService';
import {Link} from 'react-router-dom';
import Loading from '../Loading';

const RecipeList = () => {
    const recipeList = useRecipeList();

    if (!recipeList) {
        return <Loading/>;
    }

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
