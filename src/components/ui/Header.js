import classes from "./Header.module.css";
import CartContext from "../store/cart-context";
import { FaShoppingCart} from "react-icons/fa";
import React, { useContext } from "react";

const ProductsHeader = (props) => {
  const ctx = useContext(CartContext);

  return (
    <div className={classes.header}>
      <h1 className={classes.title}>{props.title}</h1>
      <button className={classes.amount} onClick={props.showShoppingCart}>
        <FaShoppingCart />
        <div>{ctx.cartItems.length}</div>
      </button>
    </div>
  );
};

export default ProductsHeader;
