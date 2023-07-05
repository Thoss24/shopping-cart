import { useContext } from "react";
import CartContext from "./components/store/cart-context";

const Products = () => {
  const ctx = useContext(CartContext);

  const fetchItemsRequest = async () => {
    // https://fakestoreapi.com/products

    try {
        const response = await fetch('https://fakestoreapi.com/products');

        if (!response.ok) {
            throw new Error("Something went wrong");
        }

        const data = response.json()
        console.log(data)

        
    }   catch (err) {
        console.log(err.message)
    }


  };

  return (
    <div>
      <h1>Hello from Products</h1>
    </div>
  );
};

export default Products;
