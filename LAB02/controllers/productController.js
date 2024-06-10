const { data } = require("../data/mydata");

const productController = {
  GetAllProducts: () => {
    const products = data.categories.flatMap((category) => category.products);
    return products;
  },
  GetAllProductsForCategoryId: (categoryId) => {
    const products = data.categories.find(
      (x) => x.categoryId === parseInt(categoryId)
    ).products;
    return products;
  },
};

module.exports = productController;
