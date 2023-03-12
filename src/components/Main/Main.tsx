import React, { useState } from "react";
import "./Main.scss";
import { Button, Card, TextField, Typography } from "@mui/material";

interface MainProps {}

function Main(props: MainProps) {
  const [alcoholList, setAlcoholList] = useState([
    "Vodka",
    "Rum",
    "Gin",
    "Tequila",
  ]);
  const [alcoholInput, setAlcoholInput] = useState("");
  const addElement: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      if (!alcoholList.includes(alcoholInput))
        setAlcoholList((prev) => [alcoholInput, ...prev]);
      setAlcoholInput("");
    }
  };

  return (
    <Card className="Main" variant="outlined" data-testtid="Main">
      <Typography variant="h6">List of Alcohols</Typography>
      <div className="alcohol-list">
        {alcoholList.map((al, index) => (
          <Button size="small" color="primary" variant="contained" key={index}>
            {al}
          </Button>
        ))}
        <TextField
          className="list-input"
          size="small"
          id="outlined-basic"
          label="Add Alcohol"
          variant="outlined"
          value={alcoholInput}
          onChange={(e) => setAlcoholInput(e.target.value)}
          onKeyDown={addElement}
        />
      </div>
    </Card>
  );
}

export default Main;
