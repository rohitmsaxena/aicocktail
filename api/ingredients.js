var express = require("express");
var router = express.Router();
var fs = require("fs");

//Middle ware that is specific to this router
// router.use(function timeLog(req, res, next) {
//   console.log("Time: ", Date.now());
//   console.log(req.body);
//   next();
// });

router.get("/list", (req, res) => {
  res.send(db());
});

function generateIngredient(ingredient) {
  return {
    name: ingredient,
  };
}

router.put("/list", (req, res) => {
  const ingredients = db();
  console.log(req.body);
  if (
    !ingredients
      .map((ingredient) => ingredient.name)
      .includes(req.body.ingredient)
  ) {
    const update = JSON.stringify([
      generateIngredient(req.body.ingredient),
      ...ingredients,
    ]);

    fs.writeFile("./resources/db.json", update, "utf-8", (error) => {
      if (error) res.sendStatus(401);
    });
  }
  res.sendStatus(200);
});

router.delete("/list", (req, res) => {
  res.send(200);
});

const db = () => {
  delete require.cache[require.resolve("./resources/db.json")];
  return require("./resources/db.json");
};

module.exports = router;
