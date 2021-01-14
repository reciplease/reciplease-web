export declare const useIngredients: () => globalThis.Ingredient[];
export declare const useInventory: () => globalThis.InventoryItem[];
export declare const useInventoryItem: (uuid: string) => globalThis.InventoryItem;
export declare const useRecipes: () => globalThis.Recipe[];
export declare const useRecipe: (uuid: string) => globalThis.Recipe;
export interface InventoryItem {
    uuid: string;
    ingredientUuid: string;
    name: string;
    amount: number;
    measure: string;
    expiration: Date;
}
export interface Ingredient {
    uuid: string;
    name: string;
    measure: string;
}
export interface Recipe {
    uuid: string;
    name: string;
    ingredients: RecipeIngredient[];
}
export interface RecipeIngredient {
    uuid: string;
    name: string;
    measure: string;
    amount: number;
}
