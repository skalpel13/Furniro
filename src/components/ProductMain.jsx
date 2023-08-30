import React from "react";
import "../style/ProductMain.css";

export default function ProductMail(props) {
  const item = props.chooseItem;
  console.log(item);
  return (
    <div className="container">
      <div className="product-main">
        <div className="product-images">
          <div className="product-images-group">
            <img alt="" src="./images/sofa2.jpg" />
            <img alt="" src="./images/sofa3.jpg" />
            <img alt="" src="./images/sofa4.jpg" />
            <img alt="" src="./images/sofa5.jpg" />
          </div>
          <img
            alt=""
            src={"./images/" + item.img}
            className="product-image-active"
          />
        </div>
        <div className="product-item-function">
          <h1>{item.title}</h1>
          <p className="product-item-price">Rs. {item.price}</p>
          <div className="product-item-rating">
            <img id="star" alt="" src="./images/dashicons_star-filled.svg" />
            <img id="star" alt="" src="./images/dashicons_star-filled.svg" />
            <img id="star" alt="" src="./images/dashicons_star-filled.svg" />
            <img id="star" alt="" src="./images/dashicons_star-filled.svg" />
            <img id="half-star" alt="" src="./images/carbon_star-half.svg" />
            <img id="line" alt="" src="./images/line.svg" />
            <span>5 Customer Review</span>
          </div>
          <p className="product-item-info">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>
          <h6>Size</h6>
          <div className="product-item-size-btns">
            <button className="product-item-size-btn">XS</button>
            <button className="product-item-size-btn product-item-size-btn-active">
              L
            </button>
            <button className="product-item-size-btn">XL</button>
          </div>
          <h6>Color</h6>
          <div className="product-item-color-btns">
            <button id="color-1"></button>
            <button id="color-2"></button>
            <button id="color-3"></button>
          </div>
          <div className="product-item-buy-btns">
            <div className="product-item-count-btn">
              <span>-</span>
              <span>1</span>
              <span>+</span>
            </div>
            <button
              className="product-item-buy-btn"
              onClick={() => props.addToCart(item)}
            >
              Add To Cart
            </button>
            <button className="product-item-buy-btn">+Compare</button>
          </div>
          <span className="product-item-line"></span>
          <div className="product-item-id">
            <div className="product-item-id-item">
              <p>SKU</p>
              <p>Category</p>
              <p>Tags</p>
              <p>Share</p>
            </div>
            <div className="product-item-id-item">
              <p>:</p>
              <p>:</p>
              <p>:</p>
              <p>:</p>
            </div>
            <div className="product-item-id-item">
              <p>SS001</p>
              <p>Sofas</p>
              <p>Sofa, Chair, Home, Shop</p>
              <div className="product-item-id-key-links-icon">
                <img alt="" src="./images/akar-icons_facebook-fill.svg" />
                <img alt="" src="./images/akar-icons_linkedin-box-fill.svg" />
                <img
                  alt=""
                  src="./images/ant-design_twitter-circle-filled.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
