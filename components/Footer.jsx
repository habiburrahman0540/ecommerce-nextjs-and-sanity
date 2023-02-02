import React from 'react'
import { AiFillInstagram, AiOutlineFacebook, AiOutlineLinkedin, AiOutlineTwitter,  } from 'react-icons/ai'
import Link from "next/link"
const Footer = () => {
  return (
    <div className='footer-container'>
        <p>&copy;2023 ,All right Reserved, Developed by Habib</p>
        <p className='icons'>
            <Link href="">
              <AiFillInstagram/>
            </Link>
            <Link href="">
              <AiOutlineTwitter/>
            </Link>
            <Link href="">
              <AiOutlineFacebook/>
            </Link>
            <Link href="">
              <AiOutlineLinkedin/>
            </Link>
        </p>
    </div>
  )
}

export default Footer
