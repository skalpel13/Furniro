import React from "react";
import "../style/Order.css";

export default function Order(props) {
  const product = props.product;
  return (
    <div className="cart-item">
      <img className="item-img" alt="" src={"./images/" + product.img} />
      <div className="item-info">
        <h2>{product.title}</h2>
        <div>
          <span className="item-count">{props.countItems(product.id)}</span>
          <span className="item-times">x</span>
          <span className="item-price">
            Rs. {Number.parseFloat(product.price).toLocaleString("id-ID")}
          </span>
        </div>
      </div>
      <img
        className="item-cancel"
        alt=""
        src="./images/cancel.svg"
        onClick={() => props.onRemove(product.id)}
      />
    </div>
  );
}
