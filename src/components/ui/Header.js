import classes from "./Header.module.css";
import CartContext from "../store/cart-context";
import { FaShoppingCart } from "react-icons/fa";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

const ProductsHeader = (props) => {
  const ctx = useContext(CartContext);

  const navigate = useNavigate();

  return (
    <div className={classes.header}>
      <h1 className={classes.title}>{props.title}</h1>
      <div className={classes.tabs}>
        <h2 onClick={()=>navigate('/')}>Home</h2>
        <h2 onClick={()=>navigate('/contacts')}>Contacts</h2>
      </div>
      <div className={classes.cart}>
        <button className={classes.amount} onClick={props.showShoppingCart}>
          <FaShoppingCart />
          <div>{ctx.cartItems.length}</div>
        </button>
      </div>
    </div>
  );
};

export default ProductsHeader;
