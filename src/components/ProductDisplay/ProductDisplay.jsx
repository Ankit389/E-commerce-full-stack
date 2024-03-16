// import React from 'react'
// import './ProductDisplay.css'
// import  star_icon from "../Assets/star_icon.png";
// import star_dull_icon from "../Assets/star_dull_icon.png";


// const ProductDisplay = (props) => {
//     const {product} = props;
//   return (
//     // <div className='productdispaly'>
//     //   <div className="productdisplay-left">
//     //     <div className="productdisplay-img-list">
//     //         <img src={product.image} alt="" />
//     //         <img src={product.image} alt="" />
//     //         <img src={product.image} alt="" />
//     //         <img src={product.image} alt="" />
//     //     </div>
        
//     //     </div>
//     //     <div className="productdisplay-img">
//     //         <img  className='productdisplay-main-img' src={product.image} alt=""/>
//     //            <h1>{product.name}</h1>
//     //            <div className="productdisplay-right-star">
//     //          <img src={star_icon} alt="" />
//     //          <img src={star_icon} alt="" />
//     //          <img src={star_icon} alt="" />
//     //          <img src={star_icon} alt="" />
//     //          <img src= {star_dull_icon}alt="" />
//     //          <p>{123}</p>
//     //            </div>

//     //   </div>
//     //   <div className="productdisplay-right">
             

//     //   </div>
//     </div>
//   )
// }

// export default ProductDisplay

import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../contexs/ShopContexs';

const ProductDisplay = (props) => {
    const {product} =props;

    const {addToCart} = useContext(ShopContext);

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
         <div className="productdisplay-img-list">
             <img src={product.image}alt=""/>
             <img src={product.image}alt=""/>
             <img src={product.image}alt=""/>
             <img src={product.image}alt=""/>
         </div>
         <div className="productdisplay-img">
             <img className='productdisplay-main-img' src={product.image}alt=""/>

         </div>
      </div>
      <div  className="productdisplay-right">
               <h1>{product.name}</h1>
     <div className="productdisplay-right-stars">
       <img src={star_icon}alt=""/>
      <img src={star_icon}alt=""/>
       <img src={star_icon}alt=""/>
     <img src={star_icon}alt=""/>
     <img src={star_dull_icon}alt=""/>
     <p>(122)</p>
  </div>
    <div className="productdusplay-right-prices">
        <div className="productdisplay-right-price-old">${product.old_price}</div>
      <div className="productdisplay-right-price-new">${product.new_price}</div>
    </div>
    <div className="productdisplay-right-description">
   <p> A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.</p>
    </div>
         <div className="productdisplay-right-size">
            <h1>Select size</h1>
   <div className=" productdisplay-right-sizes">
       <div>S</div>
       <div>M</div>
       <div>L</div>
       <div>XL</div>
       <div>XXL</div>
   </div>
</div>
   <button onClick={()=>{addToCart(product.id)}} >ADD TO CART</button>
   <p className='productdisplay-right-category'><span>Category : </span>Women, T-Shirt , crop Top</p>
   <p className='productdisplay-right-category'><span>Tags : </span>Modern , Latest</p>
     </div>
    </div>
  )
}

export default ProductDisplay
