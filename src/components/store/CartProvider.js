import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
    cartItems: [],
    cartTotalAmount: 0,
};

const cartReducer = (state, action) => {

};

const CartProvider = (props) => {
    const [cart, setCartAction] = useReducer(cartReducer, defaultCartState);

    const addCartItem = (item) => {
        setCartAction({
            type: 'ADD',
            item: item
        });
    };

    const removeCartItem = (id) => {
        setCartAction({
            type: 'REMOVE',
            id: id
        });
    };

    const cartContext = {
        cartItems: cart.cartItems,
        cartTotalAmount: cart.cartTotalAmount,
        addItem: addCartItem,
        removeItem: removeCartItem
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
};

export default CartProvider;