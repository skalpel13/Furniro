import React from "react";
import "../style/Range.css";

export default function Range() {
  return (
    <div className="container">
      <div className="range">
        <h2>Browse The Range</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="range-items">
          <div className="range-item">
            <img alt="" src="./images/Dining.jpg" />
            <h6>Dining</h6>
          </div>
          <div className="range-item">
            <img alt="" src="./images/Living.jpg" />
            <h6>Living</h6>
          </div>

          <div className="range-item">
            <img alt="" src="./images/Bedroom.jpg" />
            <h6>Bedroom</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
