import React from "react";
import TitlePage from "../components/TitlePage";
import Advantages from "../components/Advantages";
import CheckoutMain from "../components/CheckoutMain";

const titlePage = "Checkout";

export default function Checkout(props) {
  return (
    <div className="wrapper">
      <main>
        <TitlePage titlePage={titlePage} />
        <CheckoutMain cartItems={props.cartItems} />
        <Advantages />
      </main>
    </div>
  );
}
