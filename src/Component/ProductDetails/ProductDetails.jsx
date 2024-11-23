import axios from 'axios'
import React, { useContext } from 'react'
import { useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Footer from '../Footer/Footer'
import RelatedSlider from '../RelatedSlider/RelatedSlider';
import { CartContext } from '../../Context/CartContext/CartContext';
import { UserContext } from '../../Context/CartContext/UserContext/UserContext';
import { toast } from 'react-toastify';

export default function ProductDetails() {
  let params=useParams()
  let {AddCart}=useContext(CartContext)
  let {userToken,setUserToken}=useContext(UserContext)  
  let Navigate=useNavigate()
  async function addToCart(productId){
    if (userToken==null){
      toast.error('Somesing Wrong ')
      Navigate('/login')
      }else{
       let response=await AddCart(productId) 
       console.log(response);
      if(response.statusText=='Created'){
        toast.success('product Added Successfully')
      }else{
        toast.error('Somesing went Wrong')
      }
   
      }
  }
  function getProductDetails(id){
    return axios.get(`https://dummyjson.com/products/${id}`)
  }
  let {data}=useQuery('prodDetails',()=>getProductDetails(params.id))
  console.log(data);
  var settings = {
    dots: true,
    infinite: true,
    arrows:true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }
  var settingss = {
    // dots: true,
    infinite: true,
    arrows:true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 6,
    autoplay: true,
  }
  return<>
  <div className="container mt-3">
    <div className="row align-items-center">
  <div className="col-md-2 smallImgs ">
  {data?.data.images.map((img)=><div className='shadow-sm p-0 cursor-pointer' >
      <img src={img} alt="" className='w-100' />
    </div>)}
  </div>
  <div  className="col-md-4">
  <Slider {...settings}>
  {data?.data.images.map((img)=><div key={img[0]} className='position-relative '>
      <img  className='w-100 'src={img} alt="slid image" />
  </div>)}
  </Slider>
  </div>
  <div className="col-md-5">
     <h3 className='mt-4'>{data?.data.title}</h3>
     <div className='rat d-flex align-items-center justify-content-between'>
<div>
<i className="fa-solid fa-star rating-color"></i>
<i className="fa-solid fa-star rating-color"></i>
<i className="fa-solid fa-star rating-color"></i>
<i className="fa-solid fa-star-half-stroke rating-color me-2"></i>
</div>
<span >({data?.data.reviews.length} Reviews)    </span>
<span className='text-success'>  {data?.data.availabilityStatus}</span> 
</div>
<h3> ${data?.data.price}</h3>
<p>{data?.data.description}</p>
<hr />
<h4>Brand : {data?.data.brand }</h4>
<div className='buyDiv d-flex justify-content-between'>
  <div className='countDetails fs-4 px-2 cursor-pointer'>
    <span className='spanM fs-5 '>—</span>
    <span className='spanC mx-5 '>2</span>
    <span className='spanP' >+</span>
  </div>
  <button className='btn btn-danger ' onClick={()=>addToCart(params.id)}>Buy Now </button>
  <button className='heartIconDetails fs-4'>
  <i className="  fa-regular fa-heart"></i> 
  </button>
</div>
<div className='mt-5 d-flex align-items-center'>
<i className="fs-1 fa-solid fa-truck-fast" ></i>
<div className='ms-3'>
<h3>Free Delevery</h3>
<p> Enter your Postal Code ..</p>
</div>
</div>
  </div>  
    </div>
  </div>
  <hr />
<div className="container">
  <div className="row">
      <h2 className='Related  text-danger position-relative'>Related Item</h2>
    <Slider {...settingss}>

  </Slider>
  </div>
</div>
<RelatedSlider></RelatedSlider>
  </>
}
