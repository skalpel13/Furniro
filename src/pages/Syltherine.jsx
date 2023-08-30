import React from "react";
import AddressProduct from "../components/AddressProduct";
import ProductMain from "../components/ProductMain";
import ProductDescr from "../components/ProductDescr";
import RelatedProducts from "../components/RelatedProducts";

export default function Syltherine(props) {
  const product = props.items.find((item) => item.id === 1);
  return (
    <div className="wrapper">
      <main>
        <AddressProduct chooseItem={product} />
        <ProductMain chooseItem={product} addToCart={props.addToCart} />
        <ProductDescr />
        <RelatedProducts items={props.items} addToCart={props.addToCart} />
      </main>
    </div>
  );
}
