// ProductList.js
import React from 'react';
import "../App.css"

function ProductList({ product, addToCart }) {
  return (
    <div className='flex'>
      {
        product.map((productItem, index) =>
          <div style={{ width: '33%' }}>
            <div key={index}>
              <img src={productItem.url} width='50%' alt={productItem.name} />
              <p>
                {productItem.name} | {productItem.category}
              </p>
              <p>
                {productItem.seller}
              </p>
              <p>Rs .{productItem.price}/-</p>
              <button onClick={() => addToCart(productItem)}>addToCart</button>

            </div>
          </div>

        )
      }

    </div>
  )
}
export default ProductList;