import React from "react";
import Product from "./Product";
import "../style/ShopProducts.css";

export default function ShopProducts(props) {
  const items = props.items;

  return (
    <div className="container">
      <div className="shop-products">
        <div className="shop-items">
          {items.map((item) => (
            <Product key={item.id} item={item} addToCart={props.addToCart} />
          ))}
        </div>
        <div className="shop-products-btn">
          <button className="btn-pagination">1</button>
          <button className="btn-pagination">2</button>
          <button className="btn-pagination">3</button>
          <button className="btn-pagination">Next</button>
        </div>
      </div>
    </div>
  );
}
