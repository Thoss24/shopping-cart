import classes from "./Header.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import CheckoutIcon from "./CheckoutIcon";

const Header = (props) => {
  const navigate = useNavigate();
  const location = useLocation()

  let checkoutIcon;

  if (location.pathname === '/products') {
    checkoutIcon = (
      <CheckoutIcon showShoppingCart={props.showShoppingCart} /> )
  }; 

  return (
    <div className={classes.header}>
      <h1 className={classes.title}>{props.title}</h1>
      <ul className={classes.tabs}>
        <li onClick={() => location.pathname === '/products' ? navigate("/") : navigate("/products")}>{props.tabOne}</li>
        <li onClick={() => location.pathname === '/contacts' ? navigate("/") : navigate("/contacts")}>{props.tabTwo}</li>
      </ul>
      {checkoutIcon}
    </div>
  );
};

export default Header;
