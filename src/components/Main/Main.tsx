import React, { useState } from "react";
import "./Main.scss";
import ButtonList from "../ButtonList/ButtonList";
import { Ingredient } from "./Ingredient";
import {
  getIngredients,
  updateIngredients,
} from "../../services/IngredientService";

interface MainProps {}

function Main(props: MainProps) {
  // get data
  React.useEffect(() => {
    getIngredients().then((ingredients: Ingredient[]) =>
      setAlcoholList(ingredients)
    );
  });

  const [alcoholList, setAlcoholList] = useState<Ingredient[]>([]);

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
      {JSON.stringify(alcoholList)}
      <ButtonList
        listName="Alcohol"
        appendList={appendAlcoholList}
        selectAlcoholFromList={selectAlcoholFromList}
        list={alcoholList}
      />
      {/*<ButtonList*/}
      {/*  listName="Ingredients"*/}
      {/*  onAppendList={setIngredientsList}*/}
      {/*  onSelectedList={setSelectedIngredientsList}*/}
      {/*  list={ingredientsList}*/}
      {/*/>*/}
    </div>
  );
}

export default Main;
