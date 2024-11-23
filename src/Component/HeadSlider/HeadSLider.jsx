import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
export default function HeadSLider() {
    let [prodImg,setProdImg]=useState('')
   async function getProducts(){
        let res=await axios.get(`https://dummyjson.com/products/category/furniture`)        
        setProdImg(res.data.products[3].images)
    }

        var settings = {
          dots: true,
          infinite: true,
          arrows:false,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        }
    useEffect(()=>{
        getProducts()
    },[])
  return<>
  {prodImg?
  <Slider {...settings}>
  {prodImg?.map((img)=><div key={img[0]} className='position-relative ms-5'>
      <img height='400px' className='w-75 ms-5'src={img} alt="slid image" />
  </div>)}
  </Slider>
  :''
}
<Link to={'/ShopNow'}>
  <button className='shopBtn position-absolute'>Shop Now ↦ </button>
      </Link>
  </>
}
