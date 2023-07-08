import CartContext from "../store/cart-context";
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
        <div>
            <p>{props.title}</p>
            <p>{props.amount}</p>
            <p>{props.price}</p>
            <button onClick={removeItem}>-</button>
            <button onClick={addItem}>+</button>
        </div>
    )
};

export default ShoppingCartItem;