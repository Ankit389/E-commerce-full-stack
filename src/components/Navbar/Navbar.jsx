
import React, { useState } from 'react'
import './Navbar.css'
import  logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
const Navbar = () => {

const [menu,setMenu] =useState("shop");

  return (
    <div className='navbar'>
      <div className="nav-logo">
         <img src={logo} alt=""></img>
         <p>SHOPEASEL</p>
      </div>
      <ul className="nav-menu">
           <li onClick={()=>{setMenu("Shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==="Shop"?<hr/>:<></>}</li>
           <li onClick={()=>{setMenu("Mens")}}><Link  style={{textDecoration: 'none'}} to='/mens'>Men</Link>{menu==="Mens"?<hr/>:<></>}</li>
           <li onClick={()=>{setMenu("Womens")}}><Link style={{textDecoration: 'none'}} to='/womens'>Woman</Link> {menu==="Womens"?<hr/>:<></>}</li>
           <li onClick={()=>{setMenu("Kids")}}><Link style={{textDecoration: 'none'}} to='/kids'>Kids</Link>{menu==="Kids"?<hr/>:<></>}</li>
      </ul>

      
      <div className="nav-login-cart">
       <Link to='/login'> <button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt=""/></Link>
        <div className="nav-cart-count">0</div>

      </div>
    </div>
  )
}

export default Navbar

