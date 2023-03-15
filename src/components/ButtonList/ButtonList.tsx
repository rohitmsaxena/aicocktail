import React, { FC, useState } from "react";
import "./ButtonList.scss";
import { Button, Card, TextField, Typography } from "@mui/material";
import { Ingredient, IngredientType } from "../Main/Ingredient";

interface ButtonListProps {
  listName: string;
  appendList: (newInput: string) => void;
  selectAlcoholFromList: (element: Ingredient) => void;
  // onSelectedList: (prev: (prev: string[]) => string[]) => void;
  list: Ingredient[];
}

function ButtonList({
  listName,
  appendList,
  selectAlcoholFromList,
  list,
}: ButtonListProps) {
  const [newInput, setNewInput] = useState("");

  const addElement: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      if (!list.map((value) => value.name).includes(newInput)) {
        appendList(newInput);
      }
      setNewInput("");
    }
  };

  return (
    <Card className="ButtonList">
      <Typography variant="h6">List of {listName}</Typography>
      <div className="list">
        {list.map((element: Ingredient, index: number) => (
          <Button
            size="small"
            color="primary"
            variant={element.isSelected ? "contained" : "outlined"}
            key={index}
            onClick={(event) => selectAlcoholFromList(element)}
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
