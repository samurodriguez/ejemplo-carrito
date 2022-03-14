"use strict";

import { getCartFromLocalStorage } from "./helpers/getCartFromLocalStorage.js";
import { generateProductsList } from "./helpers/generateProductsList.js";

const deleteProductFromCart = (product) => {
  const cart = getCartFromLocalStorage();

  const filteredCart = cart.filter((cartProduct) => {
    return cartProduct.name !== product.name;
  });

  localStorage.setItem("cart", JSON.stringify(filteredCart));

  generateProductsList(filteredCart, "Eliminar", deleteProductFromCart);
};

generateProductsList(
  getCartFromLocalStorage(),
  "Eliminar",
  deleteProductFromCart
);
