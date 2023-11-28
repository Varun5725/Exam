// Appp.js
import React, { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';

function App() {

  const [product, setProduct] = useState([

    {
      url: "https://th.bing.com/th/id/OIP.tqR7GXnTrABvILUwwufQjQHaFf?w=265&h=196&c=7&r=0&o=5&pid=1.7",
      name: "mac book",
      seller: "Apple",
      category: "tablet",
      price: 99000
    }
    ,
    {
      url: "https://th.bing.com/th/id/OIP.xblGv6SOOip2Nh4x-WDFwgHaGs?w=203&h=184&c=7&r=0&o=5&pid=1.7",
      name: "ipad",
      seller: "Apple",
      category: "tablet",
      price: 40000
    },
    {
      url: "https://th.bing.com/th/id/OIP.YZB6DhOuZm1mwIc4RchChwHaE8?w=134&h=196&c=7&r=0&o=5&pid=1.7",
      name: "imac",
      seller: "Apple",
      category: "PC",
      price: 200000
    },
    {
      url: "https://th.bing.com/th/id/OIP.71Q5tMlNNXoDQ54Oz_R3gAHaEL?w=332&h=187&c=7&r=0&o=5&pid=1.7",
      name: "mac mini",
      seller: "Apple",
      category: "mini pc",
      price: 69999
    },
    {
      url: "https://th.bing.com/th/id/OIP.2D4b8JEB_jLfWiAMEdYo4gHaEK?w=313&h=180&c=7&r=0&o=5&pid=1.7",
      name: "iphonne 15 ",
      seller: "Apple",
      category: "Smart phone",
      price: 120000
    }
  ]);
  // State for cart data
  const [cart, setCart] = useState([]);

  // State for showing cart or product list
  const [showCart, setShowCart] = useState(false);

  // Function to add a product to the cart
  const addToCart = (data) => setCart([...cart, { ...data, quantity: 1 }]);

  // Function to handle showing cart or product list
  const handleShow = (value) => setShowCart(value);

  return (
    <div>
      {/* Header component with count of items in the cart */}
      <Header handleShow={handleShow} count={cart.length} />

      {/* Conditional rendering based on showCart state */}
      {showCart ?
        // If showCart is true, render CartList component
        (<CartList cart={cart} setCart={setCart} />)
        :
        // If showCart is false, render ProductList component
        (<ProductList product={product} addToCart={addToCart} />)
      }
    </div>
  );
}

export default App;