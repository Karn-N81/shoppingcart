import React, { Component } from 'react'
import {Link} from "react-router-dom";
import {ShoppingCart} from "phosphor-react";
import './navbar.css';
export class Navbar extends Component {
  render() {

        return (
          
          <div className='navbar'>

            <div className='links'>
            <Link to="/">Shop</Link>  {/* link goes to route shop */}
            <Link to="/cart"><ShoppingCart size={32} /></Link>   {/* link goes to route "/cart" */}
            </div>

            </div> 
          )
  }
}

export default Navbar