interface InventoryItem {
  uuid: string;
  ingredientUuid: string;
  name: string;
  amount: number;
  measure: string;
  expiration: Date;
}

interface CreateInventoryItem {
  ingredientUuid: string;
  amount: number;
  expiration: Date;
}

interface Ingredient {
  uuid: string;
  name: string;
  measure: string;
}

interface CreateIngredient {
  name: string;
  measure: string;
}

interface Recipe {
  uuid: string;
  name: string;
  ingredients: RecipeIngredient[];
}

interface CreateRecipe {
  name: string;
}

interface RecipeIngredient {
  uuid: string;
  name: string;
  measure: string;
  amount: number;
}

interface CreateRecipeIngredient {
  recipeUuid: string;
  ingredientUuid: string;
  amount: number;
}
