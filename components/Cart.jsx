import React,{useRef} from 'react'
import {AiOutlineMinus,AiOutlinePlus,AiOutlineLeft,AiOutlineShopping} from "react-icons/ai";
import {TiDeleteOutline} from "react-icons/ti"
import {useStateContext} from "../context/stateContext"
import {toast} from "react-hot-toast"
import {urlFor} from "../lib/Client"
import Link from 'next/link';
const Cart = () => {
  const cartRef =useRef();
  const {totalPrice,totalQuantities,cartItems,setShowCart,removeCardItem} = useStateContext();
  return (
    <div className='cart-wrapper' ref={cartRef}>
      <div className='cart-container'>
        <button type='button' className='cart-heading' onClick={()=>setShowCart(false)}>
            <AiOutlineLeft/>
            <span className='heading'>Your Cart Items</span>
            <span className='cart-num-items'>({totalQuantities} items):</span>
        </button>
        {cartItems.length < 1 && (
          <div className='empty-cart'>
              <AiOutlineShopping size={150}/>
              <h3>Your cart is empty !</h3>
              <Link href="/">
                <button className='btn' type='button' onClick={()=>setShowCart(false)}>
                    continue shopping
                </button>
              </Link>
          </div>
        )}
        <div className='product-container'>
            {cartItems.length >= 1 && cartItems.map((item,index)=>(
              <div className='product' key={item._id}>
                  <img src={urlFor(item?.image[0])} className="cart-product-image"/>
                  <div className='item-desc'>
                    <div className='flex top'>
                      <h5>{item.product_title}</h5>
                      <h4>${item.price}</h4>
                    </div>
                    <div className='flex bottom'>
                      <div>
                    <p className='quantity-desc'>
                    <span className='minus'><AiOutlineMinus/></span>
                    <span className='num'>0</span>
                    <span className='plus'><AiOutlinePlus/></span>
                  </p>
                    </div>
                      <button className='remove-item' type='button' onClick={()=>removeCardItem(item)}>
                          <TiDeleteOutline/>
                      </button>
                    </div>
                  </div>
              </div>
            ))}
        </div>
        {cartItems.length >= 1 && (
          <div className='cart-bottom'>
            <div className='total'>
                <h3>Subtotal: </h3>
                <h3>${totalPrice}</h3>
            </div>
            <div className='btn-container'>
                <button className='btn' type='button' onClick="">Pay with Stripe</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
