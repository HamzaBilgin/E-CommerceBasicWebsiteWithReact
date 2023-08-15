import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartProvider";
import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.css";
const HeaderCartButton = ({ onShowCart, cartIsShow }) => {
  const cartCtx = useContext(CartContext);

  const totalItemsInCart = cartCtx.items.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.amount;
  }, 0);


  return (
    <button className="button" onClick={onShowCart}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Speetim</span>
      <span className="badge">{totalItemsInCart}</span>
    </button>
  );
};

export default HeaderCartButton;
