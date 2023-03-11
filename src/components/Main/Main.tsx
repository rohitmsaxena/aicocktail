import React, { useState } from "react";
import styles from "./Main.module.scss";
import { Button } from "@mui/material";

interface MainProps {}

function Main(props: MainProps) {
  const [alcoholList, setAlcoholList] = useState([
    "Vodka",
    "Rum",
    "Gin",
    "Tequila",
  ]);

  return (
    <div className={styles.Main} data-testtid="Main">
      {alcoholList.map((al, index) => (
        <Button
          className="alcohols"
          color="primary"
          variant="contained"
          key={index}
        >
          {al}
        </Button>
      ))}
    </div>
  );
}

export default Main;
