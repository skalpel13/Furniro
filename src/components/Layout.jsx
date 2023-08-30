import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout(props) {
  const countItems = (productId) => {
    let count = 0;
    props.cartItems.forEach((el) => el.id === productId && count++);
    return count;
  };

  return (
    <div className="wrapper">
      <Header
        cartItems={props.cartItems}
        onRemove={props.removeFromCart}
        countItems={countItems}
      />

      <Outlet />

      <Footer />
    </div>
  );
}
