const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use("/ingredients", require("./ingredients"));
app.use("/auth", require("./authentication"));

app.get("/", (request, response) => {
  response.send("Hello from Express!");
});

app.listen(port, (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }

  console.log(`server is listening on ${port}`);
});
