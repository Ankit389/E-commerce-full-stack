import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../contexs/ShopContexs';
import { useParams } from 'react-router-dom';
import Breadcruml from '../components/Breadcruml/Breadcruml';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';
const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const Product = all_product.find((e)=> e.id === Number(productId));
  return (
    <div>

       <Breadcruml product={Product}/>
       <ProductDisplay product={Product}/>
       <DescriptionBox/>
       <RelatedProducts/>

    </div>

  )
}

export default Product
