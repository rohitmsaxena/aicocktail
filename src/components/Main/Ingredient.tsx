export enum IngredientType {
  Alcohol = "Alcohol",
  NonAlcoholic = "NonAlcoholic",
}
export interface Ingredient {
  name: string;
  isSelected?: boolean;
  // type: IngredientType;
  // price?: number;
}
