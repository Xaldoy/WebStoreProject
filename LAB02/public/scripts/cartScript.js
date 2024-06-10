function printProductsForCart() {
  const container = document.getElementById("cartItemsContainer");

  container.innerHTML = "";

  cartData.forEach((entry) => {
    const productDiv = document.createElement("div");
    productDiv.className = "cartItem";

    const name = document.createElement("span");
    name.innerHTML = entry.product.name;
    productDiv.appendChild(name);

    const cartItemOptions = document.createElement("span");
    cartItemOptions.className = "cartItemOptions";

    const remove = document.createElement("span");
    remove.className = "circleIcon";
    remove.addEventListener("click", function () {
      removeFromCart(entry.product);
      setCartSize();
      printProductsForCart();
    });
    remove.innerHTML = "-";

    const count = document.createElement("span");
    count.innerHTML = entry.count;

    const add = document.createElement("span");
    add.className = "circleIcon";
    add.addEventListener("click", function () {
      addToCart(entry.product);
      setCartSize();
      printProductsForCart();
    });
    add.innerHTML = "+";

    cartItemOptions.appendChild(remove);
    cartItemOptions.appendChild(count);
    cartItemOptions.appendChild(add);

    productDiv.appendChild(cartItemOptions);

    container.appendChild(productDiv);
  });
}
setCartSize();
printProductsForCart();
