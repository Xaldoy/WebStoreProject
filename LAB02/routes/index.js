var express = require("express");
const { data, cartData } = require("../data/mydata");
var router = express.Router();

router.get("/", (req, res) => {
  res.render("home", {
    data: data,
    selectedCategory: data.categories[1],
    cartData: cartData,
  });
});

module.exports = router;
