import React, { useState } from 'react'
import { faBars, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
faBars
function Header() {

  const wishlistArray=useSelector((state)=>state.wishlist)

  const cartArray=useSelector((state)=>state.cartlist)

  const [show,setShow]=useState(false)

  return (
    <nav className='container-fluid bg-purple-600 p-4 justify-between  w-full md:flex fixed '>
      <div className='flex w-full'>
        <Link to={'./'}><h1 className='text-3xl text-white'><FontAwesomeIcon icon={faCartShopping} className='me-3' />E-cart</h1> </Link> 

        <button onClick={()=>setShow(!show)} className='border border-white p-3 text-white ms-auto rounded md:hidden' ><FontAwesomeIcon icon={faBars} /></button>
        </div>
     
         {show && <div className='text-white  md:hidden '>
          <Link to={'./wishlist'}><button className=' border md:p-3 p-2 mr-5 hover:bg-white hover:text-purple-600'><FontAwesomeIcon icon={faHeart} style={{color: "#e74040",}} className='me-2 '/>Wishlist<span className='border bg-white px-1 rounded text-black ms-2'>0</span></button></Link>
        
        <Link to={'./cart'}><button className=' border md:p-3 p-2 md:mr-4 hover:bg-white hover:text-purple-600' ><FontAwesomeIcon icon={faCartShopping} style={{color: "black",}} className='me-2' />Cart<span className='border bg-white px-1 rounded text-black ms-2'>0</span></button></Link>
        </div> }

        <div className='text-white md:flex hidden'>
          <Link to={'./wishlist'}><button className=' border md:p-3 p-2 mr-5 hover:bg-white hover:text-purple-600 flex'><FontAwesomeIcon icon={faHeart} style={{color: "#e74040",}} className='me-2'/>Wishlist<span className='border bg-white px-1 rounded text-black ms-2'>{wishlistArray.length}</span></button></Link>
        
        <Link to={'./cart'}><button className=' border md:p-3 p-2 md:mr-4 hover:bg-white hover:text-purple-600 flex' ><FontAwesomeIcon icon={faCartShopping} style={{color: "black",}} className='me-2' />Cart<span className='border bg-white px-1 rounded text-black ms-2'>{cartArray.length}</span></button></Link>
        </div>

        


      </nav>
    
  )
}

export default Header
