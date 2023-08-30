import React, { useState } from "react";
import ShowCart from "./ShowCart";

import "../style/Header.css";
import { Link } from "react-router-dom";

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);

  const onCart = () => setCartOpen((cartOpen = !cartOpen));

  const uniqueCartItems = Array.from(
    new Set(props.cartItems.map((item) => item.id))
  );

  return (
    <header className="container">
      <div className="header">
        <div className="header-name">
          <img
            alt="logo"
            src="./images/Meubel House_Logos-05.png"
            className="header-logo"
          />
          <a href="#">Furniro</a>
        </div>
        <ul className="header-list">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="header-btns">
          <img
            alt=""
            src="./images/mdi_account-alert-outline.svg"
            className="header-btns"
          />
          <img
            alt=""
            src="./images/akar-icons-search.svg"
            className="header-search"
          />
          <img
            alt=""
            src="./images/akar-icons_heart.svg"
            className="header-like"
          />
          <img
            alt=""
            src="./images/ant-design-shopping-cart-outlined.svg"
            className="header-cart"
            onClick={onCart}
          />
        </div>
        {cartOpen && (
          <ShowCart
            cartItems={props.cartItems}
            onCart={onCart}
            onRemove={props.onRemove}
            countItems={props.countItems}
            uniqueCartItems={uniqueCartItems}
          />
        )}
      </div>
    </header>
  );
}
