import React from "react";

import NewCollection from "../components/NewCollection";
import Range from "../components/Range";
import Products from "../components/Products";
import Share from "../components/Share";
import Rooms from "../components/Rooms";

export default function Home(props) {
  return (
    <div className="wrapper">
      <main>
        <NewCollection />
        <Range />
        <Products
          items={props.items}
          addToCart={props.addToCart}
          chooseItem={props.chooseItem}
        />
        <Rooms />
        <Share />
      </main>
    </div>
  );
}
