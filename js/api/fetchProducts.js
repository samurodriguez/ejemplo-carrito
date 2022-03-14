export const fetchProducts = async () => {
  try {
    const response = await fetch(
      "https://api.jsonbin.io/b/622f64ef0618276743768584"
    );

    if (response.ok) {
      const products = await response.json();

      return products;
    } else {
      console.error("Hubo algún error en el servidor");
    }
  } catch (error) {
    console.error(error.message);
  }
};
