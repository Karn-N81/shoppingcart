import React from 'react'
import { PRODUCTS } from "../../products"; // array of products
import Product  from "./product"; // Component
import "./shop.css";

const Shop = () => {
    return (
      <div className='shop'>

          <div className="shopTitle">
            <h1>RetroTech Shop</h1> 
          
          </div>

          {/* Product is subcomponent in Shop component */}
          <div className='products'>

              {/* Here we've called Product component for every single product object from PRODUCTS array */}
              {/* passed data as props object to Product component */}
              { PRODUCTS.map( (product) => (<Product data={product} />) ) } 
              
          </div> 

          
      
      </div>

    )
  
}

export default Shop