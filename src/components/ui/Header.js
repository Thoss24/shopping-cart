import classes from './Header.module.css';
import CartContext from '../store/cart-context';
import React, { useContext } from 'react';

const ProductsHeader = (props) => {

    const ctx = useContext(CartContext)

    return (
        <div className={classes.header}>
            <h1 className={classes.title}>{props.title}</h1>
            <h3 className={classes.amount}>{ctx.cartTotalAmount}</h3>
        </div>
    )
};

export default ProductsHeader;