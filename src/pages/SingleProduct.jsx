import React from "react";
import AddressProduct from "../components/AddressProduct";
import ProductMain from "../components/ProductMain";
import ProductDescr from "../components/ProductDescr";
import RelatedProducts from "../components/RelatedProducts";

export default function SingleProduct(props) {
  return (
    <div className="wrapper">
      <main>
        <AddressProduct chooseItem={props.chooseItem} />
        <ProductMain chooseItem={props.chooseItem} />
        <ProductDescr />
        <RelatedProducts items={props.items} addToCart={props.addToCart} />
      </main>
    </div>
  );
}
