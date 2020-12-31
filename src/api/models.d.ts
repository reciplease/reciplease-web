interface InventoryItem {
    uuid: string;
    ingredientUuid: string;
    name: string;
    amount: number;
    measure: string;
    expiration: Date;
}

interface Ingredient {
    uuid: string;
    name: string;
    measure: string;
}

interface Recipe {
    uuid: string;
    name: string;
    ingredients: RecipeIngredient[];
}

interface RecipeIngredient {
    uuid: string;
    name: string;
    measure: string;
    amount: number;
}
