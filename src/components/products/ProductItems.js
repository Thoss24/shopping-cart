import classes from './ProductItems.module.css';
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
      <div className={classes['content-container']}>
      <img src={props.image} alt="placeholder" />
      <p>{props.title}</p>
      <p>{props.description}</p>
      <p>£ {props.price}</p>
      </div>
      <div className={classes['add-item']}>
      <div className={classes['input-container']}>
      <label htmlFor="quantity">Qty</label>
      <input type="number" ref={itemAmount} id="quantity" defaultValue="1" min="1"/>
      </div>
      <button onClick={addItem} className={classes['add-item-button']}>Add</button>
      </div>
    </ProductItemWrapper>
  );
};

export default ProductItems;
