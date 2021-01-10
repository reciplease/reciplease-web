import {useEffect} from 'react';
import {API_ROOT} from './config';
import {useRecoilState} from 'recoil';
import * as atoms from '../state/atoms';

export const useRecipeList = (): Recipe[] | undefined => {
    const [items, setItems] = useRecoilState(atoms.recipes);

    useEffect(() => {
        fetch(`${API_ROOT}/api/recipes`, {headers: {Accept: 'application/json'}})
            .then(response => response.json())
            .then((response: Recipe[]) => setItems(response));
    }, []);

    return items;
};

export const useRecipe = (uuid: string): Recipe | undefined => {
    const [recipe, setRecipe] = useRecoilState(atoms.recipe(uuid));

    useEffect(() => {
        fetch(`${API_ROOT}/api/recipes/${uuid}`, {headers: {Accept: 'application/json'}})
            .then(response => response.json())
            .then((response: Recipe) => setRecipe(response));
    }, [uuid]);

    return recipe;
};
