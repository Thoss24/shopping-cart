import { useState, useEffect } from "react";
import ProductItems from "./components/products/ProductItems";
import ProductsWrapper from "./components/ui/ProductsWrapper";
import ProductsContentWrapper from "./components/ui/ProductsContentWrapper";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import ShoppingCartModal from "./components/modal/ShoppingCartModal";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [shoppingCartVisible, setShoppingCartVisible] = useState(false)

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

      console.log(data)

      const loadedData = [];

      for (const key in data) {
        loadedData.push({
          title: data[key].title,
          description: data[key].description,
          price: data[key].price,
          image: data[key].image,
          id: data[key].id,
        });
      }

      setProducts(loadedData);
    } catch (err) {
      console.log(err.message);
    }
  };

  let shoppingCartDisplay;

  const handleShoppingCartVisible = () => {
    setShoppingCartVisible(true)
  };

  const handleShoppingCartInvisible = () => {
    setShoppingCartVisible(false)
  };

  if (shoppingCartVisible) {
    shoppingCartDisplay = (
      <ShoppingCartModal
      hideShoppingCart={handleShoppingCartInvisible}
      />
    )
  }

  return (
    <ProductsWrapper>
      <Header title={'Products'} showShoppingCart={handleShoppingCartVisible}/>
      <ProductsContentWrapper>
      {products.map((item) => (
        <ProductItems
          title={item.title}
          price={item.price}
          image={item.image}
          id={item.id}
          key={item.id}
        />
      ))}
      {shoppingCartDisplay}
      </ProductsContentWrapper>
      <Footer />
    </ProductsWrapper>
  );
};

export default Products;
