import React from "react";
import "../style/FilterShop.css";

export default function FilterShop() {
  return (
    <div className="container">
      <div className="filter-nav">
        <div className="filter-function">
          <img
            id="filter-img-1"
            alt=""
            src="../images/system-uicons_filtering.svg"
          />
          <p id="filter-p-1"> Filter</p>
          <img id="filter-img-2" alt="" src="../images/ci_grid-big-round.svg" />
          <img id="filter-img-3" alt="" src="../images/bi_view-list.svg" />
          <img id="filter-img-4" alt="" src="../images/Line.svg" />
          <p id="filter-p-2">
            Showing <span>1</span>-<span>16</span> of <span>32</span> results
          </p>
        </div>
        <div className="filter-count">
          <p id="filter-p-3">Show</p>
          <p id="filter-p-4">16</p>
          <p id="filter-p-5">Short by</p>
          <p id="filter-p-6">Default</p>
        </div>
      </div>
    </div>
  );
}
