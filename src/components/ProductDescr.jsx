import React from "react";
import "../style/ProductDescr.css";

export default function ProductDescr() {
  return (
    <div className="container">
      <div className="full-product-description">
        <div className="description-items">
          <h2 className=" decr-title descr-items-active">Description</h2>
          <h2 className=" decr-title">Additional Information</h2>
          <h2 className=" decr-title">Reviews [5]</h2>
        </div>
        <div className="description-item">
          <p>
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p>
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
        </div>
        <div className="descr-imgs">
          <img
            alt=""
            src="./images/Cloud sofa three seater + ottoman_2 1.png"
          />
          <img
            alt=""
            src="./images/Cloud sofa three seater + ottoman_1 1.png"
          />
        </div>
      </div>
    </div>
  );
}
