import React, { createContext, useState } from "react";
 import  all_product from '../components/Assets/all_product'
export const ShopContext = createContext(null);


const getDefaultCart = ()=>{
    let cart = {};
    for (let index =0; index < all_product.length+1; index++) {
        cart [index] =0;

    }
    return cart;
} 

const ShopContextProvider = (props) =>{
    const [cartItem,setCartItem] = useState(getDefaultCart ());

    
  
    const addToCart = (itemid) =>{
        setCartItem((prev)=>({...prev,[itemid]:prev[itemid]+1}))
        console.log(cartItem);
    }
    const removeFromCart = (itemid) =>{
        setCartItem((prev)=>({...prev,[itemid]:prev[itemid]-1}))   
    }

const getTotalCartAmount = ()=>{
    let totalAmount =0;
    for(const item in  addToCart)
    {
        if(addToCart[item]>0)
        {
            let iteminfo =all_product.find((product)=>product.id===Number(item))
            totalAmount += iteminfo.new_price [item];
        }
        return totalAmount;

    }
    
}



    const contextvalue ={getTotalCartAmount,all_product,cartItem,addToCart,removeFromCart};
    
    return(
        <ShopContext.Provider value={contextvalue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;