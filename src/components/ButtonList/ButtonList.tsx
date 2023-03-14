import React, { FC, useState } from "react";
import "./ButtonList.scss";
import { Button, Card, TextField, Typography } from "@mui/material";
import { Ingredient, IngredientType } from "../Main/Ingredient";

interface ButtonListProps {
  listName: string;
  onAppendList: (prev: (prev: Ingredient[]) => Ingredient[]) => void;
  onSelectedList: (prev: (prev: string[]) => string[]) => void;
  list: Ingredient[];
}

function ButtonList({ listName, onAppendList, list }: ButtonListProps) {
  const [newInput, setNewInput] = useState("");

  const generateNewIngredient = (): Ingredient => {
    return {
      name: newInput,
    } as Ingredient;
  };

  const addElement: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      if (!list.map((value) => value.name).includes(newInput)) {
        onAppendList((prev) => [generateNewIngredient(), ...prev]);
      }
      setNewInput("");
    }
  };

  function addElementToSelectedList(
    e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>
  ) {
    console.log(e);
    console.log(e.currentTarget.id);
    console.log(e.currentTarget.innerText);
  }

  return (
    <Card className="ButtonList">
      <Typography variant="h6">List of {listName}</Typography>
      <div className="list">
        {list.map((element: Ingredient, index: number) => (
          <Button
            size="small"
            color="primary"
            variant="contained"
            key={index}
            onClick={addElementToSelectedList}
          >
            {element.name}
          </Button>
        ))}
        <TextField
          className="list-input"
          size="small"
          id="outlined-basic"
          label={`Add ${listName}`}
          variant="outlined"
          value={newInput}
          onChange={(e) => setNewInput(e.target.value)}
          onKeyDown={addElement}
        />
      </div>
    </Card>
  );
}

export default ButtonList;
