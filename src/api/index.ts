import {useRecoilValue} from 'recoil';
import {ingredients} from './IngredientService';
import {inventoryItem, inventoryItems} from './InventoryService';
import {recipe, recipes} from './RecipeService';

export const useIngredients = () => useRecoilValue(ingredients);

export const useInventory = () => useRecoilValue(inventoryItems);
export const useInventoryItem = (uuid: string) => useRecoilValue(inventoryItem(uuid));

export const useRecipes = () => useRecoilValue(recipes);
export const useRecipe = (uuid: string) => useRecoilValue(recipe(uuid));
