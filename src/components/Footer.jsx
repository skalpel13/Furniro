import React from "react";
import "../style/Footer.css";

export default function Footer() {
  return (
    <footer className="container">
      <div className="footer">
        <div className="footer-text">
          <div className="footer-address">
            <a href="#">Furniro.</a>
            <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
          </div>
          <ul className="footer-links">
            <li>Links</li>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <ul className="footer-help">
            <li>Help</li>
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
          </ul>
          <div className="footer-subscribe">
            <p>Newsletter</p>
            <div className="footer-subscribe-items">
              <input placeholder="Enter Your Email Address" />
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <span></span>
        <p className="footer-rule">2023 furino. All rights reverved</p>
      </div>
    </footer>
  );
}
