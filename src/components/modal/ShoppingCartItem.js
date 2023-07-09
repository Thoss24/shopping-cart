import CartContext from "../store/cart-context";
import classes from './ShoppingCartItem.module.css';
import React, { useContext } from "react";

const ShoppingCartItem = (props) => {

    const ctx = useContext(CartContext);

    const addItem = () => {
        ctx.addItem({
            title: props.title,
            price: props.price,
            amount: 1,
            id: props.id
        });
    };

    const removeItem = () => {
        ctx.removeItem({
            title: props.title,
            price: props.price,
            amount: 1,
            id: props.id
        });
    };

    return (
        <div className={classes.shell}>
            <div className={classes.content}>
            <p>{props.title}</p>
            <p>Qty: {props.amount}</p>
            <p>£ {props.price}</p>
            </div>
            <div className={classes['buttons-container']}>
            <button className={classes.buttons} onClick={removeItem}>-</button>
            <button className={classes.buttons} onClick={addItem}>+</button>
            </div>
        </div>
    )
};

export default ShoppingCartItem;