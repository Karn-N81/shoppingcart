import React,{createContext, useState} from 'react';
import { PRODUCTS } from '../products';

// create Context
export const ShopContext = createContext();

const getDefaultCart = () => {
    let cart = {};
    for(let i=1; i<=PRODUCTS.length; i++){
        cart[i] = 0; //1: 0,2: 0,3: 0....8: 0; setall items to 0
    }
    return cart;
} 

 // This component defines all the states,functions to used by components
  // and just pass these to the context provider

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0)
            {
                let itemInfo = PRODUCTS.find((product)=> product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price
            }
    
        }
        return totalAmount;
    };

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1}));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1}));
    };
    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:newAmount}));
    }

    const contextValue = {cartItems,addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount};

  return (  
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;
