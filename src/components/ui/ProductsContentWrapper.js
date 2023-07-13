import classes from './ProductsContentWrapper.module.css';

const ProductsContentWrapper = (props) => {
    return (
        <div className={classes['products-content-wrapper']}>{props.children}</div>
    )
};

export default ProductsContentWrapper;