import React from "react";
import "../style/Advantages.css";

export default function Advantages(props) {
  return (
    <div className="container">
      <div className="advantages">
        <div className="advantages-items">
          <img alt="" src="./images/trophy 1.png" />
          <div className="advantages-text">
            <h6>High Quality</h6>
            <p>crafted from top materials</p>
          </div>
        </div>
        <div className="advantages-items">
          <img alt="" src="./images/guarantee.png" />
          <div className="advantages-text">
            <h6>Warranty Protection</h6>
            <p>Over 2 years</p>
          </div>
        </div>
        <div className="advantages-items">
          <img alt="" src="./images/shipping.png" />
          <div className="advantages-text">
            <h6>Free Shipping</h6>
            <p>Order over 150 $</p>
          </div>
        </div>
        <div className="advantages-items">
          <img alt="" src="./images/customer-support.png" />
          <div className="advantages-text">
            <h6>24 / 7 Support</h6>
            <p>Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
