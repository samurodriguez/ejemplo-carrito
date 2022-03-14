export const generateProductsList = (products, buttonText, buttonAction) => {
  const productsUl = document.querySelector(".products_list");

  productsUl.innerHTML = "";

  for (const product of products) {
    const li = document.createElement("li");
    const article = document.createElement("article");

    const name = document.createElement("h2");
    const image = document.createElement("img");
    const price = document.createElement("p");
    const button = document.createElement("button");

    name.textContent = product.name;
    image.src = product.img;
    image.alt = product.name;
    price.textContent = product.price + " €";
    button.textContent = buttonText;

    button.addEventListener("click", (e) => {
      buttonAction(product);
    });

    article.append(name, image, price, button);
    li.appendChild(article);
    productsUl.appendChild(li);
  }
};
