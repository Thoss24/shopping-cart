import classes from './ProductItemWrapper.module.css';

const ProductItemWrapper = (props) => {
    return (
        <div className={classes['product-items-container']}>{props.children}</div>
    )
};

export default ProductItemWrapper