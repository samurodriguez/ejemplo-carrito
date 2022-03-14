"use strict";

import { fetchProducts } from "./api/fetchProducts.js";
import { generateProductsList } from "./helpers/generateProductsList.js";
import { getCartFromLocalStorage } from "./helpers/getCartFromLocalStorage.js";
import { notify } from "./helpers/notify.js";

const addProductToCart = (product) => {
  const cart = getCartFromLocalStorage();

  const foundProduct = cart.find((cartProduct) => {
    return cartProduct.name === product.name;
  });

  if (!foundProduct) {
    localStorage.setItem("cart", JSON.stringify([...cart, product]));
    notify("Se añadió el producto correctamente");
  } else {
    notify("Ya tienes este producto en el carrito", "⚠️");
  }
};

fetchProducts().then((fetchedProducts) => {
  generateProductsList(fetchedProducts, "Añadir al carrito", addProductToCart);
});
