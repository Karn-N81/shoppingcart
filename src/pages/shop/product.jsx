import React, {useContext } from 'react'
import "./shop.css";
import { ShopContext } from '../../context/shop-contex';


const Product = (props) => {
  
    const {id, productName, price, productImage} = props.data;
    const {addToCart} = useContext(ShopContext);
 
    return (
      <div className='product'>
        <img src={productImage} alt=""/>
          <div className='description'>  {/* This div loads description of products */}
              <p><b>{productName}</b></p>
              <p>${price}</p>
          </div>

          <button className='addToCartBttn' onClick={() => addToCart(id)}> Add to Cart </button>
          
      </div>  

    ) 
  
}

export default Product 