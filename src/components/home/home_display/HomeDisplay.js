import classes from './HomeDisplay.module.css';

const HomeDisplay = () => {
    return (
        <div className={classes['home-display-container']}>
            <div className={classes['title-background']}>
            <h1 className={classes.title}>FakeStore</h1>
            <ul className={classes.list}>
                <li>Jewelry |</li>
                <li>Clothing |</li>
                <li>Electronic Goods</li>
            </ul>
            </div>
        </div>
    )
};

export default HomeDisplay;