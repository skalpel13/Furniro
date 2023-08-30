import { useState, useEffect } from "react";
import React from "react";
import "../style/Checkout.css";
import Select from "react-select";

export default function Checkout(props) {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const countriesArray = data.map((country) => ({
          value: country.cca2,
          label: country.name.common,
        }));
        setCountries(countriesArray);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);
  let summa = 0;
  props.cartItems.forEach((el) => (summa += Number.parseFloat(el.price)));
  return (
    <main className="container">
      <div className="checkout">
        <div className="checkout-input">
          <h2>Billing details</h2>
          <div className="names">
            <div>
              <p>First Name</p>
              <input />
            </div>
            <div>
              <p>Second Name</p>
              <input />
            </div>
          </div>
          <p>Company Name (Optional)</p>
          <input />
          <p>Country / Region</p>
          <Select
            className="selector"
            options={countries}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                borderColor: state.isFocused ? "#B88E2F" : "#9f9f9f",
                borderColor: state.isSelected ? "#B88E2F" : "#9f9f9f",
                marginBottom: "36px",
              }),
            }}
          />
          <p>Street address</p>
          <input />
          <p>Town / City</p>
          <input />
          <p>Province</p>
          <input />
          <p>ZIP code</p>
          <input />
          <p>Phone</p>
          <input />
          <p>Email address</p>
          <input />
          <input placeholder="Additional information" />
        </div>
        <div className="checkout-sum">
          <div className="checkout-product-sum">
            <div className="checkout-product">
              <h6>Product</h6>
              {props.cartItems.map((el) => (
                <p key={el.id} className="checkout-product-name">
                  {el.title}
                </p>
              ))}

              {/* <p className="checkout-product-name">Asgarda sofa</p> */}
              <p>Subtotal</p>
              <p>Total</p>
            </div>
            <div className="subtotal">
              <h6>Subtotal</h6>
              {props.cartItems.map((el) => (
                <p key={el.id} className="subtotal-price">
                  {"Rs. "}
                  {Number.parseFloat(el.price).toLocaleString("id-ID")}
                </p>
              ))}

              <p className="subtotal-price">
                {"Rs. "} {Number.parseFloat(summa).toLocaleString("id-ID")}
              </p>
              <p className="subtotal-sum">
                {"Rs. "} {Number.parseFloat(summa).toLocaleString("id-ID")}
              </p>
            </div>
          </div>
          <span className="sum-line"></span>
          <div className="checkout-check-item">
            <input type="radio" id="Choice1" name="option1" value="option" />
            <label for="Choice1">Direct Bank Transfer</label>
          </div>
          <p className="transfer-rule">
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </p>
          <div className="checkout-check-item">
            <input type="radio" id="Choice2" name="option2" value="option" />
            <label for="Choice1">Direct Bank Transfer</label>
          </div>
          <div className="checkout-check-item">
            <input type="radio" id="Choice3" name="option3" value="option" />
            <label for="Choice1">Cash On Delivery</label>
          </div>
          <p className="privacy-rule">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our <a>privacy policy.</a>
          </p>
          <button>Place order</button>
        </div>
      </div>
    </main>
  );
}
