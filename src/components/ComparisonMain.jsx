import React from "react";
import "../style/ComparisonMain.css";

export default function ComparisonMain(props) {
  return (
    <div className="container">
      <div className="comparison">
        <div className="comparison-show-products">
          <div className="comparison-go-to">
            <p>Go to Product page for more Products</p>
            <a>View More</a>
          </div>
          <div className="comparison-product">
            <img alt="" src="./images/sofa1.jpg" />
            <h3>Asgaard Sofa</h3>
            <p>Rs. 250,000.00</p>
            <div className="comparison-product-rating">
              <p>4.7</p>
              <img id="star" alt="" src="./images/dashicons_star-filled.svg" />
              <img id="star" alt="" src="./images/dashicons_star-filled.svg" />
              <img id="star" alt="" src="./images/dashicons_star-filled.svg" />
              <img id="star" alt="" src="./images/dashicons_star-filled.svg" />
              <img id="half-star" alt="" src="./images/carbon_star-half.svg" />
              <img id="line" alt="" src="./images/line.svg" />
              <span>145 Review</span>
            </div>
          </div>
          <div className="comparison-product">
            <img alt="" src="./images/sofa2.jpg" />
            <h3>Outdoor Sofa Set</h3>
            <p>Rs. 224,000.00</p>
            <div className="comparison-product-rating">
              <p>4.2</p>
              <img id="star" alt="" src="./images/dashicons_star-filled.svg" />
              <img id="star" alt="" src="./images/dashicons_star-filled.svg" />
              <img id="star" alt="" src="./images/dashicons_star-filled.svg" />
              <img id="star" alt="" src="./images/dashicons_star-filled.svg" />
              <img id="half-star" alt="" src="./images/carbon_star-half.svg" />
              <img id="line" alt="" src="./images/line.svg" />
              <span>145 Review</span>
            </div>
          </div>
          <div className="comparison-choose-product">
            <p>Add A Product</p>
          </div>
        </div>
        <div className="comparison-products-table">
          <div className="comparison-products-table-item">
            <h2>General</h2>
            <p>Sales Package</p>
            <p>1 sectional sofa</p>
            <p>1 Three Seater, 2 Single Seater</p>
            <p></p>
            <p>Model Number</p>
            <p>TFCBLIGRBL6SRHS</p>
            <p>DTUBLIGRBL568</p>
            <p></p>
            <p>Secondary Material</p>
            <p>Solid Wood</p>
            <p>Solid Wood</p>
            <p></p>
            <p>Configuration</p>
            <p>L-shaped</p>
            <p>L-shaped</p>
            <p></p>
            <p>Upholstery Material</p>
            <p>Fabric + Cotton</p>
            <p>Fabric + Cotton</p>
            <p></p>
            <p>Upholstery Color</p>
            <p>Bright Grey & Lion</p>
            <p>Bright Grey & Lion</p>
            <p></p>
          </div>
          <div className="comparison-products-table-item">
            <h2>Product</h2>
            <p>Filling Material</p>
            <p>Foam</p>
            <p>Matte</p>
            <p></p>
            <p>Finish Type</p>
            <p>Bright Grey & Lion</p>
            <p>Bright Grey & Lion</p>
            <p></p>
            <p>Adjustable Headrest</p>
            <p>No</p>
            <p>Yes</p>
            <p></p>
            <p>Configuration</p>
            <p>280 KG</p>
            <p>300 KG</p>
            <p></p>
            <p>Origin of Manufacture</p>
            <p>India</p>
            <p>India</p>
            <p></p>
          </div>
          <div className="comparison-products-table-item">
            <h2>Dimensions</h2>
            <p>Width</p>
            <p>265.32 cm</p>
            <p>265.32 cm</p>
            <p></p>
            <p>Height</p>
            <p>76 cm</p>
            <p>76 cm</p>
            <p></p>
            <p>Depth</p>
            <p>167.76 cm</p>
            <p>167.76 cm</p>
            <p></p>
            <p>Configuration</p>
            <p>45 KG</p>
            <p>65 KG</p>
            <p></p>
            <p>Seat Height</p>
            <p>41.52 cm</p>
            <p>41.52 cm</p>
            <p></p>
            <p>Leg Height</p>
            <p>5.46 cm</p>
            <p>5.46 cm</p>
            <p></p>
          </div>
          <div className="comparison-products-table-item">
            <h2>Warranty</h2>
            <p>Warranty Summary</p>
            <p>1 Year Manufacturing Warranty</p>
            <p>1.2 Year Manufacturing Warranty</p>
            <p></p>
            <p>Warranty Service Type</p>
            <p>
              For Warranty Claims or Any Product Related Issues Please Email at
              operations@trevifurniture.com
            </p>
            <p>
              For Warranty Claims or Any Product Related Issues Please Email at
              support@xyz.com
            </p>
            <p></p>
            <p>Covered in Warranty</p>
            <p>Warranty Against Manufacturing Defect</p>
            <p>
              Warranty of the product is limited to manufacturing defects only.
            </p>
            <p></p>
            <p>Not Covered in Warranty</p>
            <p>
              The Warranty Does Not Cover Damages Due To Usage Of The Product
              Beyond Its Intended Use And Wear & Tear In The Natural Course Of
              Product Usage.
            </p>
            <p>
              The Warranty Does Not Cover Damages Due To Usage Of The Product
              Beyond Its Intended Use And Wear & Tear In The Natural Course Of
              Product Usage.
            </p>
            <p></p>
            <p>Domestic Warranty</p>
            <p>1 Year</p>
            <p>3 Months</p>
            <p></p>
            <p></p>
            <button
              className="btn-prod-comparison-buy"
              onClick={props.addToCart}
            >
              Add to Cart
            </button>
            <button
              className="btn-prod-comparison-buy"
              onClick={props.addToCart}
            >
              Add to Cart
            </button>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}
