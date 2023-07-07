import ProductItemWrapper from "../ui/ProductItemWrapper";
import CartContext from "../store/cart-context";
import React, { useContext, useRef } from "react";

const ProductItems = (props) => {

    const ctx = useContext(CartContext);

    const itemAmount = useRef();

    const addItem = () => {
        ctx.addItem({
            title: props.title,
            price: props.price,
            amount: Number(itemAmount.current.value),
            id: props.id
        });
    }

  return (
    <ProductItemWrapper>
      <p>{props.title}</p>
      <p>{props.description}</p>
      <p>{props.price}</p>
      <input type="number" ref={itemAmount}/>
      <button onClick={addItem}>Add</button>
      <button>Remove</button>
    </ProductItemWrapper>
  );
};

export default ProductItems;
