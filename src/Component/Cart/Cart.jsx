import React, { useContext, useState } from 'react'
import { CartContext } from '../../Context/CartContext/CartContext'
import { useQuery } from 'react-query'

export default function Cart() {
  let [cartDetails,setCartDetails]=useState(null)
  let {getLoggedCart}=useContext(CartContext)
 async function displayCart(){
    let response= await getLoggedCart()
    setCartDetails(response)
      }
      let {data}=useQuery('displayData',displayCart)
      console.log(cartDetails?.data.carts[0])
  return<>
  {cartDetails?<div>
 <div className="container mt-4">
{cartDetails?.data.carts[0].products.map((prod)=><div className='row align-items-center'>
  <div className="col-md-3 ">
 <div className="d-flex align-items-center  ">
 <img src={prod.thumbnail} className='w-25 ' alt="" />
 <h6 className='ms-2'>{prod.title}</h6>
 </div>

  </div>
  
  <div className="col-md-3 ">
 <h6>$ {prod.price}</h6>  
  </div>
  <div className="col-md-3 ">
    
  <div className="col-md-2 mt-4 me-0">
      <span className='counts' >+</span>
      <span>{prod.quantity}</span>
      <span className='counts'  >-</span>
    
      
    </div>  
  </div>
  <div className="col-md-3 ">
 <h6>{prod.total}</h6>  
  </div>
</div>)}

 </div>
  </div>:<h2>Loading</h2>}
  </>
}

