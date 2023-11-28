import React from 'react'

function CartList({cart,setCart}){


  const handleQuantityChange = (index, change) => {
    setCart(prevCart => {
    const updatedCart = prevCart.map((item, cartIndex) => {
    if (cartIndex === index) {
    const newQuantity = Math.max(item.quantity + change, 0);
    return { ...item, quantity: newQuantity };
    } else {
    return item;
    }
    });
    return updatedCart.filter(item => item.quantity > 0);
    });
  }    

  return(
    <div>
    {
      cart.map((cartItem,index)=>(
        <div key={index}>
          <img src={cartItem.url} width='10%' alt={cartItem.name}/>
          <p>{cartItem.name}
          <button onClick={()=>handleQuantityChange(index,-1)}>-</button><span>{cartItem.quantity}</span>
          <button onClick={()=>handleQuantityChange(index,1)}>+</button>
          <span>Rs.{cartItem.price*cartItem.quantity}</span>
          </p>
        </div>
      ))
      }
      <div>
        <span>Total : </span><span>{cart.reduce((total,item)=>total+item.price*item.quantity,0)}
        </span> 
      </div>
    


    </div>
  )
  



}
export default CartList;