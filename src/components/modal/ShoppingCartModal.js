import ModalWrapper from "../ui/ModalWrapper";
import CartContext from "../store/cart-context";
import classes from './ShoppingCartModal.module.css';
import React, { useContext } from "react";
import ShoppingCartItem from "./ShoppingCartItem";
import CartItemsWrapper from "../ui/CartItemsWrapper";
import ModalCheckout from "./ModalCheckout";

const ShoppingCartModal = (props) => {

    const ctx = useContext(CartContext);

  return (
  <ModalWrapper>
    <div className={classes.backdrop} onClick={props.hideShoppingCart}/>
    <CartItemsWrapper>
        <div className={classes.items}>
    {ctx.cartItems.map((item) => (
        <ShoppingCartItem
        price={item.price}
        amount={item.amount}
        title={item.title}
        key={item.id}
        id={item.id}
        />
    ))}
    </div>
    <ModalCheckout />
    </CartItemsWrapper>
  </ModalWrapper>)
};

export default ShoppingCartModal;
