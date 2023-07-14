import React, { useContext, Fragment } from "react";
import { FaShoppingCart } from "react-icons/fa";
import CartContext from "../store/cart-context";
import classes from './CheckoutIcon.module.css';

const CheckoutIcon = (props) => {

    const ctx = useContext(CartContext);

    return (
        <Fragment>
        <button className={classes.amount} onClick={props.showShoppingCart}>
          <FaShoppingCart />
          <div>{ctx.cartItems.length}</div>
        </button>
      </Fragment>
    )
};

export default CheckoutIcon;