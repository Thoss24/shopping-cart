import { useState, useEffect } from "react";
import ProductItems from "./components/products/product_items/ProductItems";
import ProductsWrapper from './components/ui/PageWrapper.js'
import MainContentWrapper from "./components/ui/MainContentWrapper";
import Header from "./components/ui/Header";
import Footer from './components/ui/Footer.js'
import ShoppingCartModal from './components/products/modal/ShoppingCartModal.js';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [shoppingCartVisible, setShoppingCartVisible] = useState(false);

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
      <Header title={'Products'} tabOne={'Home'} tabTwo={'Contacts'} showShoppingCart={handleShoppingCartVisible}/>
      <MainContentWrapper>
      {products.length === 0 ? 'Loading...' : products.map((item) => (
        <ProductItems
          title={item.title}
          price={item.price}
          image={item.image}
          id={item.id}
          key={item.id}
        />
      ))}
      {shoppingCartDisplay}
      </MainContentWrapper>
      <Footer />
    </ProductsWrapper>
  );
};

export default Products;
