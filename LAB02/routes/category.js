var express = require("express");
const categoryController = require("../controllers/categoryController");

var router = express.Router();

router.get("/GetAllCategories", async (req, res) => {
  try {
    const categories = categoryController.GetAllCategories();
    res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
