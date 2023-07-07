import { useContext, useState, useEffect } from "react";
import CartContext from "./components/store/cart-context";
import ProductItems from "./components/products/ProductItems";
import ProductsWrapper from "./components/ui/ProductsWrapper";
import Header from "./components/ui/Header";

const Products = () => {
  const [products, setProducts] = useState([]);
  const ctx = useContext(CartContext);

  useEffect(() => {
    fetchItemsRequest();
  }, []);

  const fetchItemsRequest = async () => {
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

  return (
    <ProductsWrapper>
      <Header title={'Products'}/>
      {products.map((item) => (
        <ProductItems
          title={item.title}
          price={item.price}
          id={item.id}
          key={item.id}
        />
      ))}
    </ProductsWrapper>
  );
};

export default Products;
