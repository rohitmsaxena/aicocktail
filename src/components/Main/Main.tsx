import React, { useState } from "react";
import "./Main.scss";
import ButtonList from "../ButtonList/ButtonList";
import { Ingredient } from "./Ingredient";
import {
  getIngredients,
  updateIngredients,
  sendCocktailIngredients,
} from "../../services/IngredientService";
import { Button } from "@mui/material";
import Recipe from "../Recipe/Recipe";

interface MainProps {}

function Main(props: MainProps) {
  // get data
  React.useEffect(() => {
    getIngredients().then((ingredients: Ingredient[]) =>
      setAlcoholList(ingredients)
    );
  });

  // states
  const [alcoholList, setAlcoholList] = useState<Ingredient[]>([]);
  const [recipe, setRecipe] = useState<string>("");

  const appendAlcoholList = (ingredient: string) => {
    updateIngredients(ingredient).then(() => {});
    setAlcoholList((prev) => [
      {
        name: ingredient,
        isSelected: false,
      } as Ingredient,
      ...prev,
    ]);
  };

  const selectAlcoholFromList = (element: Ingredient) => {
    element.isSelected = !element.isSelected;
    setAlcoholList((prev) => [...prev, element]);
  };

  const generateCocktail = (
    element:
      | React.MouseEvent<HTMLAnchorElement>
      | React.MouseEvent<HTMLButtonElement>
  ) => {
    const selectedAlcohols = alcoholList.filter(
      (alcohol) => alcohol.isSelected
    );
    sendCocktailIngredients(selectedAlcohols).then((response) => {
      setRecipe(response.data);
    });
  };

  // const [ingredientsList, setIngredientsList] = useState<Ingredient[]>([
  //   {
  //     name: "Lemon",
  //   },
  //   {
  //     name: "Salt",
  //   },
  //   {
  //     name: "Sugar",
  //   },
  // ]);
  //
  // const [selectedIngredientsList, setSelectedIngredientsList] = useState<
  //   string[]
  // >([]);

  return (
    <div className="Main">
      {recipe != "" && <Recipe recipe={recipe} />}
      <ButtonList
        listName="Alcohol"
        appendList={appendAlcoholList}
        selectAlcoholFromList={selectAlcoholFromList}
        list={alcoholList}
      />
      <Button
        className="submit-button"
        variant="contained"
        size="large"
        color="secondary"
        onClick={generateCocktail}
      >
        Generate Cocktail
      </Button>
      <Button
        className="submit-button"
        variant="contained"
        size="large"
        color="secondary"
      >
        Random Cocktail
      </Button>
    </div>
  );
}

export default Main;
