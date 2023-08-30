import React from "react";
import TitlePage from "../components/TitlePage";
import Advantages from "../components/Advantages";
import CartMain from "../components/CartMain";

const titlePage = "Cart";

export default function Cart(props) {
  return (
    <div className="wrapper">
      <main>
        <TitlePage titlePage={titlePage} />
        <CartMain cartItems={props.cartItems} onRemove={props.removeFromCart} />
        <Advantages />
      </main>
    </div>
  );
}
