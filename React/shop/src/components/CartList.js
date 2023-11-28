// CartList.jsx
import React from 'react';

function CartList({ cart, setCart }) {
  // Function to handle quantity change in the cart
  const handleQuantityChange = (index, change) => {
    // Updating the cart using the setCart function and the previous cart state
    setCart(prevCart => {
      // Mapping through each item in the previous cart
      const updatedCart = prevCart.map((item, cartIndex) => {
        // Checking if the current item index matches the provided index
        if (cartIndex === index) {
          // Calculating the new quantity, ensuring it's at least 0
          const newQuantity = Math.max(item.quantity + change, 0);
          // Returning a new item object with the updated quantity
          return { ...item, quantity: newQuantity };
        } else {
          // Returning the unchanged item for other indices
          return item;
        }
      });
      // Filtering out items with quantity less than or equal to 0
      return updatedCart.filter(item => item.quantity > 0);
    });
  }

  return (
    <div>
      {/* Mapping through items in the cart */}
      {cart.map((cartItem, index) => (
        <div key={index} className='cart-item'>
          {/* Displaying item details and quantity controls */}
          <img src={cartItem.url} width='10%' alt={cartItem.name} />
          <p>
            {cartItem.name}
            <button onClick={() => handleQuantityChange(index, -1)}>-</button>
            <span>{cartItem.quantity}</span>
            <button onClick={() => handleQuantityChange(index, 1)}>+</button>
            <span>Rs.{cartItem.price * cartItem.quantity}</span>
          </p>
        </div>
      ))}
      {/* Displaying total price of items in the cart */}
      <div>
        <span>Total : </span><span>{cart.reduce((total, item) => total + item.price * item.quantity, 0)}
        </span>
      </div>
    </div>
  )
}

export default CartList;