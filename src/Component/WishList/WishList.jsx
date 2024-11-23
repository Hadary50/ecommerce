import React from 'react'
import WishListImg from '../../assets/Cart-Transparent-PNG.png'
import { Link } from 'react-router-dom'
export default function WishList() {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
    <img src={WishListImg} alt="" />
    <h2 className='text-danger'>Nothing to show .... !</h2>
    <Link to={'/'} className='fw-bold btn btn-danger text-white'>Let's fill it </Link>
    </div>
  )
}
