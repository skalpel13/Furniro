import React from "react";
import TitlePage from "../components/TitlePage";
import ComparisonMain from "../components/ComparisonMain";
import Advantages from "../components/Advantages";

const titlePage = "Product Comparison"; //give a name of page for component TitlePage

export default function ProductComparison(props) {
  return (
    <div className="wrapper">
      <main>
        <TitlePage titlePage={titlePage} />
        <ComparisonMain addToCart={props.addToCart} />
        <Advantages />
      </main>
    </div>
  );
}
