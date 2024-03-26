import React, { useContext } from 'react';
import './AddToCart.css';

import remove_icon from '../Assets/cart_cross_icon.png';
import { ShopContext } from '../../contexs/ShopContexs';


const AddToCart = () => {
    const {getTotalCartAmount, all_product, addToCart, removeFromCart } = useContext(ShopContext);
    return (
        <div className='addtocart'>
            <div className="addtocart-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
                
            </div>
            <hr />

            {all_product.map((e)=>{
                if(addToCart[e.id]>0)
              {
               return <div >
               <div className="cartitems-format">
                   <img src={e.image} alt="" className='carticon-product-icon' />
                   <p>{e.name}</p>
                   <p>${e.new_price}</p>
                   <button className='cartitems-quantity'>{addToCart[e.id]}</button>
                   <p>${e.new_price*addToCart[e.id]}</p>
                   <img src={remove_icon} onClick={() => {removeFromCart(e.id) }} alt="" />
               </div>
               <hr />
           </div>
             }
             return null;
                 
            })}
            <div className="addtocart-down">
                <div className="addtocart-total">
                    <h1>Cart Totals</h1>
                </div>
                <div className="addtocart-total-item">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount}</p>
                </div>
                <hr />
                <div className="addtoitem-total-item">
                    <p>Shipping fee </p>
                    <p>free</p>
                </div>
                <hr />
                <div className="addtocart-total-item">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
    );
};

export default AddToCart;