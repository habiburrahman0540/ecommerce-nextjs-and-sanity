import React from 'react'
import Link from "next/Link"
import {urlFor} from "../lib/Client"
const FooterBanner = ({bannerData}) => {
  const {buttonText,smallText,saleTime,product,midText,largeText2,largeText1,discount,desc,image} = bannerData;
  return (
    <div className='footer-banner-container'>
        <div className='banner-desc'>
          <div className='left'>
            <p>{discount}</p>
            <h3>{largeText1}</h3>
            <h3>{largeText2}</h3>
            <p>{saleTime}</p>
          </div>
          <div className='right' style={{marginLeft:"30px"}}>
            <p>{smallText}</p>
            <h3>{midText}</h3>
            <p>{desc}</p>
            <Link href={`/product/${product}`}>
            <button type='button'>{buttonText}</button>
            </Link>
          </div>
          <img src={urlFor(image)} alt="" className='footer-banner-image'/>
        </div>
    </div>
  )
}

export default FooterBanner