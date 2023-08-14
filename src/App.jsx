import Header from "./components/Layout/Header"
import { useState } from "react";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
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
   <div className="App">
    {cartIsShow && <Cart onClose={hideCartHandler} />}
    <Header onShowCart={showCartHandler} cartIsShow={cartIsShow}/>
    <Hero />
    <Products/>
   </div>
  )
}

export default App
