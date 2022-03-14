"use strict";

import { fetchProducts } from "./api/fetchProducts.js";
import { notify } from "./helpers/notify.js";

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const fetchedProducts = await fetchProducts();

  const nameInput = form.elements.product_name;
  const priceInput = form.elements.product_price;
  const imgInput = form.elements.product_image;

  const newProduct = {
    name: nameInput.value,
    price: priceInput.value,
    img: imgInput.value,
  };

  const response = await fetch(
    "https://api.jsonbin.io/v3/b/622f64ef0618276743768584",
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key":
          "$2b$10$Po45K10LAKn3n2aFFMuxLuuXT.56hYReGvawvy5bBn4M8yGly/Vki",
      },
      body: JSON.stringify([...fetchedProducts, newProduct]),
    }
  );

  if (response.ok) {
    nameInput.value = "";
    priceInput.value = "";
    imgInput.value = "";

    notify("Se ha creado el producto correctamente");
  } else {
    notify("❌", "Se produjo un error inesperado");
    console.error("Se produjo un error inesperado");
  }
});
