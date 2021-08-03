import { API_ROOT } from './config';
import { selector } from 'recoil';

const getIngredients = async (): Promise<Ingredient[]> => {
  const response = await fetch(`${API_ROOT}/api/ingredients`, { headers: { Accept: 'application/json' } });
  return await response.json();
};

export const ingredients = selector<Ingredient[]>({
  key: 'Ingredients',
  get: getIngredients
});
