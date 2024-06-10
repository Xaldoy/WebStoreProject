const { cartData } = require("../data/mydata");
const productController = require("./productController");

const cartController = {
  AddToCart: (id) => {
    const products = productController.GetAllProducts();
    const product = products.find((x) => x.productId === id);
    console.log(JSON.stringify(id));
    if (product) {
      const alreadyInCart = cartData.find((x) => x.product.productId === id);
      cartData.push({
        product: product,
        count: alreadyInCart ? alreadyInCart.count + 1 : 1,
      });
      return product;
    }
    return null;
  },
  GetAllProductsInCart: () => {
    return cartData;
  },
};

module.exports = cartController;
