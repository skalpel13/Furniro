import React from "react";
import "../style/TitlePage.css";

export default function TitlePage(props) {
  return (
    <div className="container">
      <div className="nav-title">
        <img alt="" src="../images/Meubel House_Logos-05.png" />
        <h1>{props.titlePage}</h1>
        <div className="way-page">
          <p className="nav-1">Home</p>
          <img alt="" src="./images/dashicons_arrow-down-alt2.svg" />
          <p className="nav-2">{props.titlePage}</p>
        </div>
      </div>
    </div>
  );
}
