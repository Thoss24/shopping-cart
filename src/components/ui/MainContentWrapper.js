import classes from './MainContentWrapper.module.css';

const MainContentWrapper = (props) => {
    return (
        <div className={classes['products-content-wrapper']}>{props.children}</div>
    )
};

export default MainContentWrapper;