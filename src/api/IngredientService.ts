import {useEffect} from 'react';
import {API_ROOT} from './config';
import {useRecoilState} from 'recoil';
import * as atoms from '../state/atoms';

export const useIngredientList = (): Ingredient[] | undefined => {
    const [ingredients, setIngredients] = useRecoilState(atoms.ingredients);

    useEffect(() => {
        fetch(`${API_ROOT}/api/ingredients`, {headers: {Accept: 'application/json'}})
            .then(response => response.json())
            .then((response: Ingredient[]) => {
                setIngredients(response);
            });
    }, []);

    return ingredients;
};
