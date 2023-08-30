import React from "react";
import FilterShop from "../components/FilterShop";
import ShopProducts from "../components/ShopProducts";
import TitlePage from "../components/TitlePage";
import Advantages from "../components/Advantages";

const titlePage = "Shop"; //give a name of page for component TitlePage

export default function Shop(props) {
  return (
    <div className="wrapper">
      <main>
        <TitlePage titlePage={titlePage} />
        <FilterShop />
        <ShopProducts items={props.items} addToCart={props.addToCart} />
        <Advantages />
      </main>
    </div>
  );
}
