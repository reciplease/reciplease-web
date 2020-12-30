import {useEffect, useState} from 'react';
import {API_ROOT} from './config';

export const useIngredientList = (): Ingredient[] | undefined => {
    const [ingredients, setIngredients] = useState<Ingredient[] | undefined>(undefined);

    useEffect(() => {
        fetch(`${API_ROOT}/api/ingredients`, {headers: {Accept: 'application/json'}})
            .then(response => response.json())
            .then((response: Ingredient[]) => {
                setIngredients(response);
            });
    }, []);

    return ingredients;
};
