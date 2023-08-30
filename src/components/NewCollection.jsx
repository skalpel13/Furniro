import React from "react";
import "../style/NewCollection.css";

export default function NewCollection() {
  return (
    <div className="container">
      <div className="new-collection">
        <div className="new-collection-box">
          <p className="new-collection-pre">New Arrival</p>
          <h2 className="new-collection-title">Discover Our New Collection</h2>
          <p className="new-collection-about">
            Fusion of modern design and comfort, enhancing living spaces with
            style and functionality.
          </p>
          <button className="btn-buy btn-all">BUY NOW</button>
        </div>
      </div>
    </div>
  );
}
