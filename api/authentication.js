var express = require("express");
var router = express.Router();

//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});
router.get("/", (req, res) => {
  console.log("in auth");
  res.send("in auth!!");
});

module.exports = router;
