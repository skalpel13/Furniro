import React from "react";
import "../style/Rooms.css";
import Swipper from "./Swipper.js";

export default function Rooms() {
  return (
    <div className="container">
      <div className="rooms">
        <div className="rooms-about">
          <h2>50+ Beautiful rooms inspiration</h2>
          <p>
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire yo
          </p>
          <button className="btn-all">Explore More</button>
        </div>
        <div className="rooms-slider">
          <Swipper />
        </div>
      </div>
    </div>
  );
}
