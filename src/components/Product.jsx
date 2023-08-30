import React, { useState } from "react";
import "../style/Product.css";
import { Link } from "react-router-dom";

export default function Product(props) {
  const item = props.item;

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleButtonClick = (event) => {
    event.preventDefault(); // Предотвращаем всплытие события к родительским элементам
    props.addToCart(item);
  };

  return (
    <div
      className="item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered && (
        <Link to={`/${item.id}`}>
          <div className="item-to-cart">
            <button className="btn-to-cart" onClick={handleButtonClick}>
              Add to Cart
            </button>
            <div className="item-functions">
              <div className="item-function">
                <img alt="" src="./images/gridicons_share.svg" />
                <span>Share</span>
              </div>
              <div className="item-function">
                <img alt="" src="./images/compare-svgrepo-com 1.svg" />
                <span>Compare</span>
              </div>
              <div className="item-function">
                <img alt="" src="./images/Heart.svg" />
                <span>Like</span>
              </div>
            </div>
          </div>
        </Link>
      )}
      {Number.parseFloat(item.discount) > 0 && (
        <span className="item-promo item-disc">-{item.discount}%</span>
      )}
      {item.newCollection && <span className="item-promo item-new">New</span>}
      <img alt="" src={"./images/" + item.img} />
      <div className="item-text">
        <h2>{item.title}</h2>
        <p className="item-description">{item.desc}</p>
        <div className="item-prices">
          {Number.parseFloat(item.discount) > 0 ? (
            <>
              <span className="item-price--now">
                Rp{" "}
                {(
                  Number.parseFloat(item.price) *
                  (1 - Number.parseFloat(item.discount) / 100)
                ).toLocaleString("id-ID")}
              </span>
              <span className="item-price--old">
                Rp {Number.parseFloat(item.price).toLocaleString("id-ID")}
              </span>
            </>
          ) : (
            <span className="item-price--now">
              Rp {Number.parseFloat(item.price).toLocaleString("id-ID")}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
