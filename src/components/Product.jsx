import React from 'react'
import './Product.css'
const Product = () => {
  return (
    <div>
      <div className='product'>
        <h1>Product</h1>
        <hr></hr>
        <img src='hai.webp' alt="" className="image" />
        <hr></hr>
        <p1 className="desc">This is an image of a product called chair which is good at quality</p1>
        <button className='button'>Buy</button>
      </div>
    </div>
  )
}

export default Product
