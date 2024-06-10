const { data } = require("../data/mydata");

const categoryController = {
  GetAllCategories: () => {
    return data.categories.map((x) => ({
      categoryId: x.categoryId,
      name: x.name,
    }));
  },
};

module.exports = categoryController;
