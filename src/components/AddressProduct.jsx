import React from "react";
import "../style/AddressProduct.css";

export default function AddressProduct(props) {
  const product = props.chooseItem.title;
  return (
    <div className="container">
      <div className="address-product">
        <a href="#">Home</a>
        <img id="img-1" alt="" src="./images/dashicons_arrow-down-alt2.svg" />
        <a href="#">Shop</a>
        <img id="img-2" alt="" src="./images/dashicons_arrow-down-alt2.svg" />
        <img id="img-3" alt="" src="./images/line.svg" />
        <p>{product}</p>
      </div>
    </div>
  );
}
