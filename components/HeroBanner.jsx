import React from 'react'
import Link from "next/Link"
import {urlFor} from "../lib/Client"
const HeroBanner = ({bannerData}) => {
  const {buttonText,smallText,saleTime,product,midText,largeText2,largeText1,discount,desc,image} = bannerData;
  return (
    <div className='hero-banner-container'>
        <div className="">
          <p className='beats-solo'> {smallText}</p>
          <h3>{midText}</h3>
          <h1>{largeText1}</h1>
          <img src={urlFor(image)} alt="headphone" className='hero-banner-image' />
          <div>
            <Link href={`/product/${product}`}>
              <button type='button'>{buttonText}</button>
            </Link>
            <div className="desc">
              <h5>Description</h5>
              <p>{desc}</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HeroBanner
