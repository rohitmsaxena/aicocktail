import axios from "axios";
import { Ingredient } from "../components/Main/Ingredient";

const url = "http://localhost:3001";

let ingredients: Ingredient[] = [];

function enrichIngredients(ingredients: Ingredient[]): Ingredient[] {
  // enrich ingredients with any additional information
  return ingredients.map((ingredients: Ingredient) => {
    ingredients.isSelected = false;
    return ingredients;
  });
}

function wipeIngredients(): void {
  ingredients = [];
}

const getIngredients: () => any = () => {
  if (ingredients.length === 0) {
    return axios
      .get<Ingredient[]>(`${url}/ingredients/list`)
      .then(({ data }) => {
        ingredients = enrichIngredients(data);
        return ingredients;
      });
  }
  return Promise.resolve(ingredients);
};

const updateIngredients = (ingredient: string) => {
  wipeIngredients();
  return axios.put<Ingredient[]>(`${url}/ingredients/list`, { ingredient });
};

export { getIngredients, updateIngredients };
