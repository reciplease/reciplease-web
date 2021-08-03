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

export const createIngredient = async (createIngredient: CreateIngredient): Promise<void> => {
  await fetch(`${API_ROOT}/api/ingredients`, {
    method: 'POST',
    body: JSON.stringify(createIngredient),
    headers: { 'Content-Type': 'application/json' }
  });
  return Promise.resolve();
};
