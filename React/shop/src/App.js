import React, { useState } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import CartList from './CartList';



function App(){

  const [product,setProduct]=useState([

    {
      url:"",
      name:"ipad",
      seller:"Apple",
      category:"tablet",
      price:40000
    }
    ,
    {
      url:"",
      name:"ipad",
      seller:"Apple",
      category:"tablet",
      price:40000
    }
  ]);

  const[cart,setCart]=useState([]);
  const[showCart,setShowCart]=useState(false);

  const addToCart=(data)=>setCart([...cart,{...data,quantity:1}]);
  const handleShow=(value)=>setShowCart(value);


  return(
    <div>

      <Header handleShow={handleShow} count={cart.length}/>
      {
        showCart?
        (<CartList cart={cart} setCart={setCart}/>)
        :
        (<ProductList product={product} addToCart={addToCart}/>)
      }
    </div>
  )



}

export default App;