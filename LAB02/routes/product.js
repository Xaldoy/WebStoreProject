var express = require("express");
const productController = require("../controllers/productController");
const categoryController = require("../controllers/categoryController");

var router = express.Router();

router.get("/GetAllProducts", async (req, res) => {
  try {
    const data = productController.GetAllProducts();
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

router.get("/GetAllCategories", async (req, res) => {
  try {
    const categories = categoryController.GetAllCategories();
    res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
});

router.get("/GetProductsForCategoryId/:categoryId", async (req, res) => {
  console.log("Called");
  try {
    const products = productController.GetAllProductsForCategoryId(
      req.params.categoryId
    );
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
