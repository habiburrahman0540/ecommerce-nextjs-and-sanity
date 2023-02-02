import React from 'react'
import {Product,HeroBanner,FooterBanner} from '../components'
import {client} from "../lib/Client"
const Home = ({products,bannerData}) => {
  
  return (
    <div>
     <HeroBanner bannerData={bannerData.length && bannerData[0]}/>
     <div className='products-heading'>
        <h2>Best seller product</h2>
        <p>Speakers there are many variations passages</p>
     </div>
     <div className='products-container'>
        {products?.map((product)=><Product key={product._id} product={product}/>)}
       
     </div>
     <FooterBanner bannerData={bannerData.length && bannerData[0]}/>
    </div>
  )
}
export const getServerSideProps=async()=>{
  const query = '*[_type=="product"]';
  const products = await client.fetch(query);
  const bannerQuery = '*[_type=="banner"]';
  const bannerData = await client.fetch(bannerQuery);
  return {
    props:{products,bannerData}
  }
}
export default Home
