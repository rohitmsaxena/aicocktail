import React, { FC, useState } from "react";
import "./Recipe.scss";
import { Button, Card, TextField, Typography } from "@mui/material";
import { Ingredient, IngredientType } from "../Main/Ingredient";

interface RecipeProps {
  recipe: string;
}

function Recipe({ recipe }: RecipeProps) {
  const rs = recipe.split("\n").filter((y) => y !== "");
  const ingredientsIndex = rs.findIndex((elem) => elem.includes("Ingredients"));
  const instructionsIndex = rs.findIndex((elem) =>
    elem.includes("Instructions")
  );

  const ingredientList = rs.slice(ingredientsIndex + 1, instructionsIndex);
  const instructionsList = rs.slice(instructionsIndex + 1);

  return (
    <Card variant="outlined" className="Recipe">
      <Typography className="recipe-title" variant="h4">
        {rs[0]}
      </Typography>
      <Typography className="ingredient-title" variant="h6">
        {rs[ingredientsIndex]}
      </Typography>
      {ingredientList.map((ig, index) => (
        <Typography
          className="ingredient"
          variant="body1"
          key={index}
        >{`${ig}`}</Typography>
      ))}
      <Typography className="instruction-title" variant="h6">
        {rs[instructionsIndex]}
      </Typography>
      {instructionsList.map((il, index) => (
        <Typography className="instruction" variant="body1" key={index}>
          {il}
        </Typography>
      ))}
    </Card>
  );
}

export default Recipe;
