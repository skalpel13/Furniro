import React, { useState } from "react";
import "../style/Products.css";
import Product from "./Product";

export default function Products(props) {
  const items = props.items;
  const [visibleItems, setVisibleItems] = useState(8);

  const handleShowMore = () => setVisibleItems(visibleItems + 4);
  return (
    <div className="container">
      <div className="our-products">
        <h2 className="our-products--title">Our Products</h2>
        <div className="items">
          {items.slice(0, visibleItems).map((item) => (
            <Product
              key={item.id}
              item={item}
              addToCart={props.addToCart}
              chooseItem={props.chooseItem}
            />
          ))}
        </div>
        {visibleItems < items.length && (
          <button className="our-products-btn" onClick={handleShowMore}>
            Show More
          </button>
        )}
      </div>
    </div>
  );
}
