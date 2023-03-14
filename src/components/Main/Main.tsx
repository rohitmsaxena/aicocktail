import React, { useState } from "react";
import "./Main.scss";
import ButtonList from "../ButtonList/ButtonList";
import { Ingredient, IngredientType } from "./Ingredient";

interface MainProps {}

function Main(props: MainProps) {
  const [alcoholList, setAlcoholList] = useState<Ingredient[]>([
    {
      name: "Rum",
    },
    {
      name: "Vodka",
    },
    {
      name: "Gin",
    },
    {
      name: "Elderflower liquor",
    },
  ]);
  const [selectedAlcoholList, setSelectedAlcoholList] = useState<string[]>([]);

  const [ingredientsList, setIngredientsList] = useState<Ingredient[]>([
    {
      name: "Lemon",
    },
    {
      name: "Salt",
    },
    {
      name: "Sugar",
    },
  ]);

  const [selectedIngredientsList, setSelectedIngredientsList] = useState<
    string[]
  >([]);

  return (
    <div className="Main">
      <ButtonList
        listName="Alcohol"
        onAppendList={setAlcoholList}
        onSelectedList={setSelectedAlcoholList}
        list={alcoholList}
      />
      <ButtonList
        listName="Ingredients"
        onAppendList={setIngredientsList}
        onSelectedList={setSelectedIngredientsList}
        list={ingredientsList}
      />
    </div>
  );
}

export default Main;
