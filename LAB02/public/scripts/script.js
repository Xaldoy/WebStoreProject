let selectedCategory = null;
let categories = [];
let cartData = [];

const GetApi = async (apiCall) => {
  try {
    const response = await fetch(apiCall);
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch API:", error);
  }
};

const GetCategories = async () => {
  categories = await GetApi("http://localhost:3000/Products/GetAllCategories");
  printCategories();
};

const GetCartData = async () => {
  cartData = await GetApi("http://localhost:3000/Cart/GetAllProductsInCart");
};

function printCategories() {
  const container = document.getElementById("categoryList");
  container.innerHTML = "";

  categories.forEach((category) => {
    const categoryListItem = document.createElement("li");
    categoryListItem.className =
      selectedCategory && category.name === selectedCategory.name
        ? "selectedCategory"
        : "";
    categoryListItem.classList.add("categoryListItem");
    categoryListItem.addEventListener("click", () =>
      setSelectedCategory(category)
    );

    const categorySpan = document.createElement("span");
    categorySpan.textContent = category.name;
    categoryListItem.appendChild(categorySpan);

    container.appendChild(categoryListItem);
  });
}

async function printProductsForCategory() {
  const container = document.getElementById("itemsContainer");
  container.innerHTML = "";

  const products = await GetApi(
    `http://localhost:3000/Products/GetProductsForCategoryId/${selectedCategory.categoryId}`
  );

  products &&
    products.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.className = "product";

      const cartCount = document.createElement("span");
      cartCount.className = "cartCount circleIconNonHoverable";
      const found = cartData.find((x) => x.product.name === product.name);
      if (found) {
        cartCount.innerHTML = found.count;
        productDiv.appendChild(cartCount);
      }

      const addToCartSpan = document.createElement("span");
      addToCartSpan.className = "addToCart circleIcon hidden";
      addToCartSpan.addEventListener("click", function () {
        addToCart(product);
        printProductsForCategory();
      });
      addToCartSpan.innerHTML = "+";
      addToCartSpan.addEventListener("mouseenter", function () {
        addToCartSpan.classList.remove("hidden");
      });
      addToCartSpan.addEventListener("mouseleave", function () {
        addToCartSpan.classList.add("hidden");
      });
      productDiv.appendChild(addToCartSpan);

      const image = document.createElement("img");
      image.src = product.image;
      const imageWrapper = document.createElement("div");
      imageWrapper.classList.add("productImageWrapper");
      imageWrapper.appendChild(image);
      imageWrapper.addEventListener("mouseenter", function () {
        addToCartSpan.classList.remove("hidden");
      });
      imageWrapper.addEventListener("mouseleave", function () {
        addToCartSpan.classList.add("hidden");
      });
      productDiv.appendChild(imageWrapper);

      const header3 = document.createElement("h3");
      header3.innerHTML = product.name;
      productDiv.appendChild(header3);

      const header5 = document.createElement("h5");
      header5.innerHTML = selectedCategory.name;
      productDiv.appendChild(header5);

      container.appendChild(productDiv);
    });
}

function printSelectedCategory(category) {
  const selectedCategoryContainer = document.getElementById(
    "currentCategoryContainer"
  );
  selectedCategoryContainer.innerHTML = category.name;
}

function changeHeadlineBackground(category) {
  const headline = document.getElementById("headlineContainer");
  headline.style.background = `linear-gradient(0deg, #00000088 40%, #ffffff44 100%), url(${category.image})`;
  headline.style.backgroundSize = "cover";
}

function setItemsDisplay(display) {
  const products = document.getElementById("itemsContainer");
  display
    ? products.classList.remove("hidden")
    : products.classList.add("hidden");
}

function setSelectedCategory(category) {
  selectedCategory = category;
  printCategories();
  if (selectedCategory !== null) {
    setItemsDisplay(true);
    printProductsForCategory();
    changeHeadlineBackground(category);
    printSelectedCategory(category);
  }
  setHeadlineSize();
}

function setHeadlineSize() {
  const headline = document.getElementById("headlineContainer");
  if (!selectedCategory) {
    headline.classList.add("headlineContainerFullSize");
  } else {
    headline.classList.remove("headlineContainerFullSize");
  }
}

GetCategories();
GetCartData();

setHeadlineSize();
setItemsDisplay(false);
printSelectedCategory({ name: "Home" });
