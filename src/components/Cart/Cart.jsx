import "./Cart.css";
import products from "../../productData";
import CartItem from "./CartItem";
import Offcanvas from "../UI/Offcanvar";
const Cart = (props) => {
  const cartItems = (
    <ul className="cart-items">
      {products.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </ul>
  );
  return (
    <Offcanvas>
      <div className="cart-head">
        <h2>Sepetim</h2>
        <a href="/" className="cart-close" onClick={props.onClose}>
          X
        </a>
      </div>
      {cartItems}
      <div className="total">
        <span>Toplam Tutar</span>
        <span>10t</span>
      </div>
      <div className="actions">
        <button className="cart-order">Sipariş Ver</button>
        <button className="cart-clear"></button>
      </div>
    </Offcanvas>
  );
};

export default Cart;
