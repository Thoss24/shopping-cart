import classes from './PageWrapper.module.css';

const ProductsWrapper = (props) => {
    return (
        <div className={classes.container}>{props.children}</div>
    )
};

export default ProductsWrapper;