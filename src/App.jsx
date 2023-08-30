import "./style/App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProductComparison from "./pages/ProductComparison";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Layout from "./components/Layout";
import Syltherine from "./pages/Syltherine";

const initItems = [
  {
    id: 1,
    title: "Syltherine",
    img: "image 1.jpg",
    desc: "Stylish cafe chair",
    category: "chairs",
    price: "3500000",
    discount: "30",
    newCollection: false,
  },
  {
    id: 2,
    title: "Leviosa",
    img: "image 2.jpg",
    desc: "Stylish cafe chair",
    category: "chairs",
    price: "2500000",
    discount: "0",
    newCollection: false,
  },
  {
    id: 3,
    title: "Lolito",
    img: "image 3.jpg",
    desc: "Luxury big sofa",
    category: "sofas",
    price: "14000000",
    discount: "50",
    newCollection: false,
  },
  {
    id: 4,
    title: "Respira",
    img: "image 4.jpg",
    desc: "Outdoor bar table and stool",
    category: "tables",
    price: "500000",
    discount: "0",
    newCollection: true,
  },
  {
    id: 5,
    title: "Grifo",
    img: "image 5.jpg",
    desc: "Night lamp",
    category: "lamps",
    price: "1500000",
    discount: "0",
    newCollection: false,
  },
  {
    id: 6,
    title: "Muggo",
    img: "image 6.jpg",
    desc: "Small mug",
    category: "dishes",
    price: "150000",
    discount: "0",
    newCollection: true,
  },
  {
    id: 7,
    title: "Pingky",
    img: "image 7.jpg",
    desc: "Cute bed set",
    category: "bed sets",
    price: "7000000",
    discount: "50",
    newCollection: false,
  },
  {
    id: 8,
    title: "Potty",
    img: "image 8.jpg",
    desc: "Minimalist flower pot",
    category: "dishes",
    price: "500000",
    discount: "0",
    newCollection: true,
  },
  {
    id: 9,
    title: "Brogi",
    img: "image 9.jpg",
    desc: "Leather retro sofa",
    category: "sofas",
    price: "500000",
    discount: "10",
    newCollection: false,
  },
  {
    id: 10,
    title: "Grayen",
    img: "image 10.jpg",
    desc: "Comfort family place",
    category: "sofas",
    price: "3000000",
    discount: "0",
    newCollection: false,
  },
  {
    id: 11,
    title: "Scandy",
    img: "image 11.jpg",
    desc: "L-shaped sofa",
    category: "sofas",
    price: "2500000",
    discount: "0",
    newCollection: false,
  },
  {
    id: 12,
    title: "Wind",
    img: "image 12.jpg",
    desc: "Cooling ceiling fan",
    category: "sofas",
    price: "3000000",
    discount: "20",
    newCollection: false,
  },
  {
    id: 13,
    title: "Syltherine",
    img: "image 1.jpg",
    desc: "Stylish cafe chair",
    category: "chairs",
    price: "3500000",
    discount: "30",
    newCollection: false,
  },
  {
    id: 14,
    title: "Leviosa",
    img: "image 2.jpg",
    desc: "Stylish cafe chair",
    category: "chairs",
    price: "2500000",
    discount: "0",
    newCollection: false,
  },
  {
    id: 15,
    title: "Lolito",
    img: "image 3.jpg",
    desc: "Luxury big sofa",
    category: "sofas",
    price: "14000000",
    discount: "50",
    newCollection: false,
  },
  {
    id: 16,
    title: "Respira",
    img: "image 4.jpg",
    desc: "Outdoor bar table and stool",
    category: "tables",
    price: "500000",
    discount: "0",
    newCollection: true,
  },
  {
    id: 17,
    title: "Grifo",
    img: "image 5.jpg",
    desc: "Night lamp",
    category: "lamps",
    price: "1500000",
    discount: "0",
    newCollection: false,
  },
  {
    id: 18,
    title: "Muggo",
    img: "image 6.jpg",
    desc: "Small mug",
    category: "dishes",
    price: "150000",
    discount: "0",
    newCollection: true,
  },
  {
    id: 19,
    title: "Pingky",
    img: "image 7.jpg",
    desc: "Cute bed set",
    category: "bed sets",
    price: "7000000",
    discount: "50",
    newCollection: false,
  },
  {
    id: 20,
    title: "Potty",
    img: "image 8.jpg",
    desc: "Minimalist flower pot",
    category: "dishes",
    price: "500000",
    discount: "0",
    newCollection: true,
  },
  {
    id: 21,
    title: "Brogi",
    img: "image 9.jpg",
    desc: "Leather retro sofa",
    category: "sofas",
    price: "500000",
    discount: "10",
    newCollection: false,
  },
  {
    id: 22,
    title: "Grayen",
    img: "image 10.jpg",
    desc: "Comfort family place",
    category: "sofas",
    price: "3000000",
    discount: "0",
    newCollection: false,
  },
  {
    id: 23,
    title: "Scandy",
    img: "image 11.jpg",
    desc: "L-shaped sofa",
    category: "sofas",
    price: "2500000",
    discount: "0",
    newCollection: false,
  },
  {
    id: 24,
    title: "Wind",
    img: "image 12.jpg",
    desc: "Cooling ceiling fan",
    category: "sofas",
    price: "3000000",
    discount: "20",
    newCollection: false,
  },
];

function App() {
  const [items, setItems] = useState(initItems);

  const [cartItems, setCartItems] = useState([]);

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product], console.log(cartItems));
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout cartItems={cartItems} removeFromCart={removeFromCart} />
        }
      >
        <Route
          path="home"
          element={
            <Home cartItems={cartItems} items={items} addToCart={addToCart} />
          }
        />
        <Route
          path="shop"
          element={
            <Shop cartItems={cartItems} items={items} addToCart={addToCart} />
          }
        />
        <Route
          path="singleproduct"
          element={<SingleProduct items={items} addToCart={addToCart} />}
        />
        <Route
          path="1"
          element={<Syltherine items={items} addToCart={addToCart} />}
        />
        <Route
          path="cart"
          element={
            <Cart
              cartItems={cartItems}
              items={items}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route
          path="checkout"
          element={<Checkout cartItems={cartItems} items={items} />}
        />
        <Route
          path="productcomparison"
          element={<ProductComparison />}
          items={items}
          addToCart={addToCart}
        />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
      </Route>
    </Routes>
  );
}

export default App;
