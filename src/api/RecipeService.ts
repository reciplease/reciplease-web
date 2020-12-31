import {useEffect, useState} from 'react';
import {API_ROOT} from './config';

export const useRecipeList = (): Recipe[] | undefined => {
    const [items, setItems] = useState<Recipe[] | undefined>(undefined);

    useEffect(() => {
        fetch(`${API_ROOT}/api/recipes`, {headers: {Accept: 'application/json'}})
            .then(response => response.json())
            .then((response: Recipe[]) => setItems(response));
    }, []);

    return items;
};

export const useRecipe = (uuid: string): Recipe | undefined => {
    const [recipe, setRecipe] = useState<Recipe | undefined>(undefined);

    useEffect(() => {
        fetch(`${API_ROOT}/api/recipes/${uuid}`, {headers: {Accept: 'application/json'}})
            .then(response => response.json())
            .then((response: Recipe) => setRecipe(response));
    }, [uuid]);

    return recipe;
};
