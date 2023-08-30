import React from "react";
import { Link } from "react-router-dom";
import "../style/ShowCart.css";
import Order from "./Order";

const showNothing = () => {
  return (
    <div className="empty">
      <h2>Nothing yet!</h2>
    </div>
  );
};

export default function ShowCart(props) {
  let summa = 0;
  props.cartItems.forEach((el) => (summa += Number.parseFloat(el.price)));

  return (
    <div className="cart-list">
      <div className="cart-title">
        <h2>Shopping Cart</h2>
        <img alt="" src="./images/close-cart.svg" onClick={props.onCart} />
      </div>
      <span className="cart-line-1"></span>
      <div>
        {props.cartItems.length === 0 ? (
          showNothing()
        ) : (
          <>
            {props.uniqueCartItems.map((itemId) => {
              const item = props.cartItems.find((el) => el.id === itemId);
              return (
                <Order
                  key={itemId}
                  product={item}
                  onRemove={props.onRemove}
                  cartItems={props.cartItems}
                  countItems={props.countItems}
                />
              );
            })}
            <div className="cart-result">
              <span>Subtotal</span>
              <span className="cart-sum">
                {new Intl.NumberFormat().format(summa)}
              </span>
            </div>
            <span className="cart-line-2"></span>
            <div className="cart-btns">
              <button>
                <Link to="/cart">Cart</Link>
              </button>
              <button>
                <Link to="/checkout">Checkout</Link>
              </button>
              <button>
                <Link to="/productcomparison">Comparison</Link>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
