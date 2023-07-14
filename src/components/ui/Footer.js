import classes from './Footer.module.css';

const Footer = () => {
    return(
        <div className={classes.footer}>
            <a href="https://github.com/Thoss24" target="_blank" rel="noreferrer"><img className={classes['github-icon']} src="github-mark-white.png" alt=""/></a>
        </div>
    )
};

export default Footer;