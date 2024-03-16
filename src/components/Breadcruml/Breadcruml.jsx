import React from 'react'
import './Breadcruml.css'
import arrow_icon from '../Assets/breadcruml_arrow.png'

const Breadcruml = (props) => {
    const {product} = props;
  return (
    <div className='breadcruml'>
     {/* HOME <img src={arrow_icon} alt=""/> SHOP <img src={arrow_icon} alt=""/>
{product.category} <img src={arrow_icon} alt=""/>{product.name} */}
HOME <img src={arrow_icon}alt=""/> SHOP < img src={arrow_icon}alt=""/>
 {product.category}<img src={arrow_icon}alt=""/>{product.name}


    </div>
 )
}

export default Breadcruml




