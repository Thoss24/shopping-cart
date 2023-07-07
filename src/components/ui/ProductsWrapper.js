import classes from './ProductsWrapper.module.css';

const ProductsWrapper = (props) => {
    return (
        <div className={classes.container}>{props.children}</div>
    )
};

export default ProductsWrapper;