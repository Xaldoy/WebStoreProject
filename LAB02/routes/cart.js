const cartController = require("../controllers/cartController");
var express = require("express");

var router = express.Router();

router.get("/AddProductToCart/:id", (req, res, next) => {
  const itemId = req.params.id;
  try {
    const item = cartController.AddToCart(parseInt(itemId));
    if (item) {
      res.status(200).json({ message: "Item added to cart", item });
    } else {
      res.status(404).json({ message: "Item not found" });
    }
  } catch (error) {
    next(error);
  }
});

router.get("/GetAllProductsInCart", (req, res) => {
  try {
    const products = cartController.GetAllProductsInCart();
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
