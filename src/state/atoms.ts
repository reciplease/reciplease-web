import {atom, atomFamily} from 'recoil';


export const inventoryItems = atom<InventoryItem[] | undefined>({
    key: 'InventoryItems',
    default: undefined
});

export const inventoryItem = atomFamily<InventoryItem | undefined, string>({
    key: 'InventoryItem',
    default: undefined
});

export const ingredients = atom<Ingredient[] | undefined>({
    key: 'Ingredients',
    default: undefined
});

export const recipes = atom<Recipe[] | undefined>({
    key: 'Recipes',
    default: undefined
});

export const recipe = atomFamily<Recipe | undefined, string>({
    key: 'Recipe',
    default: undefined
});
