function setCartSize() {
  const cartIcon = document.getElementById("cartIconContent");
  cartIcon.innerHTML = "";
  const cartSize = document.createElement("span");
  cartSize.innerHTML = `${cartData.reduce(
    (acc, entry) => acc + entry.count,
    0
  )}`;
  cartIcon.appendChild(cartSize);
}

function saveCartData() {
  localStorage.setItem("cartData", JSON.stringify(cartData));
  setCartSize();
}

function addToCart(product) {
  const alreadyInCart = cartData.find(
    (entry) => entry.product.name === product.name
  );
  if (alreadyInCart !== undefined) {
    alreadyInCart.count++;
  } else cartData.push({ product: product, count: 1 });
  saveCartData();
  /* alert(product.name + " added to Cart."); */
}

function removeFromCart(product) {
  const storedInCart = cartData.find(
    (entry) => entry.product.name === product.name
  );
  storedInCart.count--;
  if (storedInCart.count === 0) {
    cartData = cartData.filter(
      (entry) => entry.product.name !== storedInCart.product.name
    );
  }
  saveCartData();
  /* alert(product.name + " removed from Cart."); */
}
