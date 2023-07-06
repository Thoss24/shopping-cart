import { useContext, useState } from "react";
import CartContext from "./components/store/cart-context";

const Products = () => {
  const [products, setProducts] = useState([]);
  const ctx = useContext(CartContext);

  const fetchItemsRequest = async () => {
    // https://fakestoreapi.com/products

    try {
      const response = await fetch("https://fakestoreapi.com/products");

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();

      const loadedData = [];

      for (const key in data) {
        loadedData.push({
          title: data[key].title,
          description: data[key].description,
          price: data[key].price,
          id: data[key].id,
        });
      }

      setProducts(loadedData);
    } catch (err) {
      console.log(err.message);
    }
  };

  const buttonTest = () => {
    console.log(products);
  };

  return (
    <div>
      <h1>Hello from Products</h1>
      <button onClick={fetchItemsRequest}>FETCH</button>
      <button onClick={buttonTest}>TEST ARR</button>
    </div>
  );
};

export default Products;
