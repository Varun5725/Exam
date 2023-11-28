import React from 'react'

function ProductList({product,addToCart}){
return(
  <div>
  {
    product.map((productItem,index)=>
    <div key={index}>
    <img src={productItem.url} width='50%' alt={productItem.name}/>
    <p>
      {productItem.name} | {productItem.category}
    </p>
<p>
  {productItem.seller}
</p>
<p>Rs .{productItem.price}/-</p>
<button onClick={()=>addToCart(productItem)}>addToCart</button>

    </div>
    
    )
  }

  </div>
)
}
export default ProductList;