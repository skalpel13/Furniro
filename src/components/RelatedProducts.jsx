import React, { useState } from "react";
import "../style/RelatedProducts.css";
import Product from "./Product";

export default function RelatedProducts(props) {
  const items = props.items;
  const [visibleItems, setVisibleItems] = useState(4);

  const handleShowMore = () => setVisibleItems(visibleItems + 4);
  return (
    <div className="container">
      <div className="related-products">
        <h1>Related Products</h1>
        <div className="items">
          {items.slice(0, visibleItems).map((item) => (
            <Product key={item.id} item={item} addToCart={props.addToCart} />
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
