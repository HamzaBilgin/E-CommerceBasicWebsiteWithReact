import Header from "./components/Layout/Header"
import { useState } from "react";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import CartProvider from "./context/CartProvider";
function App() {
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () => {
    setCartIsShow(true);
  };

  const hideCartHandler = (e) => {
    e.preventDefault();
    setCartIsShow(false);
  };
  return (
   <CartProvider>
    {cartIsShow && <Cart onClose={hideCartHandler} />}
    <Header onShowCart={showCartHandler} cartIsShow={cartIsShow}/>
    <Hero />
    <Products/>
   </CartProvider>
  )
}

export default App
