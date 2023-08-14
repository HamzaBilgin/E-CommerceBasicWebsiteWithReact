import "./HeaderCartButton.css";
import CartIcon from "../Cart/CartIcon";
const HeaderCartButton = ({ onShowCart, cartIsShow }) => {
  return (
    <button className="button" onClick={onShowCart}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Speetim</span>
      <span className="badge">0</span>
    </button>
  );
};

export default HeaderCartButton;
