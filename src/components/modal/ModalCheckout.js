import CartContext from "../store/cart-context";
import classes from './ModalCheckout.module.css';
import React, { useContext } from "react";

const ModalCheckout = () => {

    let ctx = useContext(CartContext)

    return (
        <div className={classes.checkout}>
            <span><strong>{ctx.cartTotalAmount}</strong></span>
            <button>Checkout</button>
        </div>
    )
};

export default ModalCheckout;