import {API_ROOT} from './config';
import {selector, selectorFamily} from 'recoil';

const getRecipes = async (): Promise<Recipe[]> => {
    const response = await fetch(`${API_ROOT}/api/recipes`, {headers: {Accept: 'application/json'}});
    return await response.json();
};

export const recipes = selector<Recipe[]>({
    key: 'Recipes',
    get: getRecipes
});

const getRecipe = async (uuid: string): Promise<Recipe> => {
    const response = await fetch(`${API_ROOT}/api/recipes/${uuid}`, {headers: {Accept: 'application/json'}});
    return await response.json();
};

export const recipe = selectorFamily<Recipe, string>({
    key: 'Recipe',
    get: uuid => () => getRecipe(uuid)
});
