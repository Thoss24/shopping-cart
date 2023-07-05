import React from "react";

const CartContext = React.createContext({
    cartItems: [],
    cartTotalAmount: 0,
    addItem: (item) => {},
    removeItem: (item) => {}
});

export default CartContext;