import classes from './CartItemsWrapper.module.css';

const CartItemsWrapper = (props) => {
    return (
        <div className={classes['cart-items-container']}>{props.children}</div>
    )
};

export default CartItemsWrapper