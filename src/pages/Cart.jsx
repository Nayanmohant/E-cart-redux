import { faBackward, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { emptycart, removecarItems } from '../redux/slices/cartSlice'

function Cart() {

  const [total,setTotal]=useState()

  const cartArray=useSelector((state)=>state.cartlist)
  console.log(cartArray);

  const dispatch=useDispatch()

 const navigate=useNavigate()


  const getTotal=()=>{
    if(cartArray.length>0){
      setTotal(cartArray.map((item)=>item.price)?.reduce((n1,n2)=>n1+n2))
    }
  }

  const handlecheckout=()=>{
    alert('order placed successfully')
    dispatch(emptycart())
    navigate('/')

  }

  useEffect(()=>{
    getTotal()
  },[cartArray])
  
  return (
    <>
      <div className='pt-32'>
      <h1 className='text-violet-600 text-center text-4xl mb-5'>Cart</h1>
      {cartArray?.length>0 ?
      <div className="md:grid grid-cols-[2fr_1fr] m-10">
        <div>
          <table className='w-full border border-gray-700 shadow'>
            <thead>
              <tr>
                <th className='border border-gray-100 p-3 bg-violet-700 text-white text-center'>#</th>
                <th className='border border-gray-100 p-3 bg-violet-700 text-white text-center'>Title</th>
                <th className='border border-gray-100 p-3 bg-violet-700 text-white text-center'>Image</th>
                <th className='border border-gray-100 p-3 bg-violet-700 text-white text-center'>Price</th>
                <th className='border border-gray-100 p-3 bg-violet-700 text-white text-center'>Action</th>
              </tr>
            </thead>
           
            <tbody>
              
             {cartArray?.map((item,index)=>(
               <tr>
                <td className='p-3 border border-gray-200 text-center'>{index+1}</td>
                <td className='p-3 border border-gray-200 text-center'>{item.title}</td>
                <td className='p-3 border border-gray-200 d-flex justify-center'><img src={item.image} alt='' style={{height:100,width:100}}/></td>
                <td className='p-3 border border-gray-200 text-center'>$ {item.price}</td>
                <td className='p-3 border border-gray-200 text-red-700  text-center text-4xl'><button onClick={()=>dispatch(removecarItems(item?.id))}><FontAwesomeIcon icon={faTrash }/></button></td>
              
              </tr>
              ))
            }
            </tbody>
          
          </table>
        </div>

          <div className=' px-10 '>
            <div className='shadow-lg p-4'>
              <h1 className='text-3xl text-center'>Cart Summary</h1>
              <p className='text-xl mt-4'>Total number of products : {cartArray.length}</p>
              <p className='text-xl mt-4'>Grand Total : $ {total}</p>
              <button onClick={handlecheckout} className='w-full bg-green-600  p-3 mt-5 hover:border hover:bg-white hover:border-green-600 hover:text-green-600'>Check out</button>
            </div>

          </div>
          
          
      </div>
      :
      <div className='w-full pt-10 md:grid grid-cols-3 mb-10 mt-5'>
            <div></div>
            <div className='text-center'>
            <img src="https://mangobooks.net/frontend/images/emptyshopping.jpg" alt="" className='w-full h-auto'/>
            <Link to="/"><button  className='w-50 bg-green-600  p-3 mt-5 hover:border hover:bg-white hover:border-green-600 hover:text-green-800'><FontAwesomeIcon icon={faBackward}/> Back home</button></Link>

            </div>
            <div></div>
          </div>
      }
      </div>
    </>
  )
}

export default Cart
