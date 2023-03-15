var express = require("express");
var router = express.Router();
var fs = require("fs");
var { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

function generatePrompt(liquorList) {
  const ingredients = liquorList
    .reduce((prev, curr) => `${prev},${curr.name}`, "")
    .substring(1);
  const resp = `Generate a cocktail using any number of the following ingredients: ${ingredients}. Do not use any ingredients not in the list. No other ingredients in the list are available.`;
  console.log(resp);
  return resp;
}

router.put("/", async (req, res) => {
  res
    .status(200)
    .json(
      "\n" +
        "\n" +
        "Elderflower Gin Fizz\n" +
        "\n" +
        "Ingredients:\n" +
        "- 2 ounces gin\n" +
        "- 1 ounce elderflower liqueur\n" +
        "- 1 ounce freshly squeezed lemon juice\n" +
        "- 1 teaspoon sugar\n" +
        "- 2 ounces club soda\n" +
        "\n" +
        "Instructions:\n" +
        "1. In a shaker filled with ice, combine the gin, elderflower liqueur, lemon juice, and sugar.\n" +
        "2. Shake vigorously for 30 seconds.\n" +
        "3. Strain into a Collins glass filled with ice.\n" +
        "4. Top with club soda and stir.\n" +
        "5. Garnish with a lemon wheel.\n"
    );
  // const ingredients = req.body.ingredients;
  // console.log(ingredients);
  // try {
  //   const completion = await openai.createCompletion({
  //     model: "text-davinci-003",
  //     prompt: generatePrompt(ingredients),
  //     temperature: 0.2,
  //     max_tokens: 1000,
  //   });
  //   console.log(completion.data.choices[0].text);
  //   res.status(200).json(completion.data.choices[0].text);
  // } catch (error) {
  //   if (error.response) {
  //     console.error(error.response.status, error.response.data);
  //     res.status(error.response.status).json(error.response.data);
  //   } else {
  //     console.error(`Error with OpenAI API request: ${error.message}`);
  //     res.status(500).json({
  //       error: {
  //         message: "An error occurred during your request.",
  //       },
  //     });
  //   }
  // }
});

module.exports = router;
