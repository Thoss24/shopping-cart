import CartContext from "../store/cart-context";
import classes from './ModalCheckout.module.css';
import React, { useContext } from "react";

const ModalCheckout = (props) => {

    let ctx = useContext(CartContext)

    return (
        <div className={classes.checkout}>
            <span><strong>£ {ctx.cartTotalAmount.toFixed(2)}</strong></span>
            <button className={classes['checkout-button']} onClick={props.hideCart}>Checkout</button>
        </div>
    )
};

export default ModalCheckout;