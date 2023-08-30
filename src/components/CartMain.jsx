import React from "react";
import "../style/CartMain.css";
import { Link } from "react-router-dom";
import CartTotalOrder from "./CartTotalOrder";

const uniqueItemsCart = (array) => {
  return [...new Set(array)];
};

export default function CartMain(props) {
  let summa = 0;
  props.cartItems.forEach((el) => (summa += Number.parseFloat(el.price)));
  return (
    <div className="container">
      <div className="cart-main">
        <div className="cart-table">
          <div className="cart-table-header">
            <p></p>
            <p id="header-1">Product</p>

            <p id="header-2">Price</p>

            <p id="header-3">Quantity</p>

            <p id="header-4">Subtotal</p>
            <p></p>
          </div>
          {uniqueItemsCart(props.cartItems)
            .map((item) => item.id)
            .map((uniqueItemId) => {
              const uniqueProduct = props.cartItems.find(
                (item) => item.id === uniqueItemId
              );
              return (
                <CartTotalOrder
                  cartItems={props.cartItems}
                  product={uniqueProduct}
                  onRemove={props.onRemove}
                />
              );
            })}
        </div>

        <div className="cart-totals">
          <h2>Cart Totals</h2>
          <div className="cart-totals-full">
            <div className="cart-totals-info">
              <div>
                <p>Subtotal</p>
                <p>Total</p>
              </div>
            </div>
            <div className="cart-totals-price">
              <div>
                <p className="cart-totals-price-subtotal">
                  {"Rs. "} {new Intl.NumberFormat().format(summa)}
                </p>
                <p className="cart-totals-price-total">
                  {"Rs. "} {new Intl.NumberFormat().format(summa)}
                </p>
              </div>
            </div>
          </div>
          <button className="cart-total-btn">
            <Link to="/checkout">Checkout</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
