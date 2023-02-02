import React from 'react'
import Link from "next/Link"
import {urlFor} from "../lib/Client"
const Product = ({product}) => {
  const {product_title,slug,price,image,details} =product;
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className='product-card'>
             <img className='product-image' src={urlFor(image && image[0])} alt="" width={250} height={250} />
            <p className='product-name'>{product_title}</p>
            <p className='product-price'>${price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product
