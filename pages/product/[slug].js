import { Product } from '../../components';
import React, { useState } from 'react'
import { AiFillStar, AiOutlineMinus, AiOutlinePlus, AiOutlineStar } from 'react-icons/ai';
import {client, urlFor} from "../../lib/Client"
import {useStateContext} from "../../context/stateContext"
const ProductDetails = ({product,products}) => {
    const {product_title,price,image,details} = product;
const [index,setIndex]=useState(0)
const {qty,incQty,decQty,onAdd}=useStateContext();
  return (
    <div>
      <div className='product-detail-container'>
        <div>
            <div className='image-container'>
                <img src={urlFor(image && image[index])} alt='' className='product-detail-image'/> 
            </div>
            <div className='small-images-container'>
              {image?.map((item,i)=>(
                <img src={urlFor(item)} className={i===index?"small-image selected-image":"small-image"} onMouseEnter={()=>setIndex(i)}/>
              ))}
            </div>
        </div>
        <div className='product-detail-desc'>
              <h1>{product_title}</h1>
              <div className='reviews'>
                <div>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiOutlineStar/>
                </div>
                <p>(20)</p>
              </div>
              <h4>Details:</h4>
              <p>{details}</p>
              <p className='price'>${price}</p>
              <div className='quantity'>
                  <h3>Quantity:</h3>
                  <p className='quantity-desc'>
                    <span className='minus' onClick={decQty}><AiOutlineMinus/></span>
                    <span className='num'>{qty}</span>
                    <span className='plus' onClick={incQty}><AiOutlinePlus/></span>
                  </p>
              </div>
              <div className='buttons'>
                <button type='button' className='add-to-cart' onClick={()=>onAdd(product,qty)}>Add to cart</button>
                <button type='button' className='buy-now' onClick="">Buy Now</button>
              </div>
        </div>
      </div>
      <div className='maylike-products-wrapper'>
        <h3>You may also like</h3>
            <div className='marquee'>
              <div className='maylike-products-container track'>
                  {products?.map((item)=>(
                    <Product key={item._id} product={item}/>
                  ))}
              </div>
            </div>
      </div>
    </div>
  )
}
export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);
  console.log('products',products)

  const paths = products.map((product) => ({
    params: { 
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
} 
export const getStaticProps=async({params:{slug}})=>{
    const query = `*[_type=='product' && slug.current=='${slug}'][0]`;
    const productQuery = `*[_type=="product"]`;
    const product = await client.fetch(query);
    const products= await client.fetch(productQuery);
    return {
      props:{product,products}
    }
}
export default ProductDetails
