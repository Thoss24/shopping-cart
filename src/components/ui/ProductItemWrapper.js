import classes from './ProductItemWrapper.module.css';

const ProductItemWrapper = (props) => {
    return (
        <div className={classes.shell}>{props.children}</div>
    )
};

export default ProductItemWrapper