import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useQuery } from 'react-query';
import axios from 'axios';
export default function RelatedSlider() {
  async  function getRelatedProdycts(){
        return await axios.get(`https://dummyjson.com/products/category/home-decoration`)
        
    }
    let {data}=useQuery('relatedFn',getRelatedProdycts)
    console.log(data?.data.products);
    var settings = {
        
            // dots: true,
            infinite: true,
            autoplay: true,
            speed: 3000,
            autoplaySpeed: 1000,
            cssEase: "linear",
            slidesToShow: 7,
            // rows: 2,
      }
  return<>
   
<div className="container">
<Slider {...settings}>
{data?.data.products.map((prod)=><img src={prod.thumbnail}/>)}
</Slider>
</div>


  </>
}
