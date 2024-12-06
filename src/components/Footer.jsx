import React from 'react'
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
   
<div className="py-10 md:px-20 px-10 bg-purple-600 text-white md:grid grid-cols-[repeat(1,2fr)_repeat(2,1fr)_repeat(1,2fr)]">
      
 
      <div >
      <h4 className='text-3xl'>    <FontAwesomeIcon className='me-3' icon={faCartShopping} />E-cart</h4>
      <p style={{textAlign:'justify'}} className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat similique culpa nobis totam perspiciatis in quidem impedit delectus nemo. Delectus neque doloremque beatae laudantium. Eum praesentium minus officia consequatur debitis!</p>

      </div>

      <div className="md:flex justify-center mt-10 md:mt-0 ">
        <div>
          <h4 className='text-3xl' >LINKS</h4>
        <Link to={"/"}><p className='mt-3'>Home</p></Link>  
       <Link to={"/wishlist"}> <p>Wishlist</p></Link>
         <Link to={"/cart"}><p>cart</p></Link> 
        </div>

      </div>
      <div className=" md:flex justify-center mt-10 md:mt-0">
        <div>
          <h4 className='text-3xl'>GUIDES</h4>
          <p className='mt-3'>React</p>
          <p>React Bootstrap</p>
          <p>Bootswatch</p>
        </div>

      
      </div>
      <div className=" px-md-5 mt-10 md:mt-0">
        <h4 className='text-3xl'>CONTACT US</h4>
        <div className='flex mt-3'>
          <input type="text" placeholder='Email Id' className='form-control'/>
          <button className='rounded p-2 bg-orange-600 ms-3'>Subscribe</button>
        </div>
        <div className='flex justify-between mt-3'>
        <FontAwesomeIcon icon={faInstagram} className='fa-2x'/>
        <FontAwesomeIcon icon={faXTwitter} className='fa-2x' />
        <FontAwesomeIcon icon={faFacebook} className='fa-2x'/>
   
        <FontAwesomeIcon icon={faLinkedin} className='fa-2x'/>

        </div>

      </div>
    </div>
   

      
   
  )
}

export default Footer
