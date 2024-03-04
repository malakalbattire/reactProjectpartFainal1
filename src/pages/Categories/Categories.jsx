import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

export default function Categories() {
  const [categories,setCategories]=useState([]);
  const getCategories=async()=>{
    const {data} =await axios.get(`https://ecommerce-node4.vercel.app/categories/active?page=1&limit=20`);
    setCategories(data.categories);
    }
    useEffect(()=>{
      getCategories();  
  },[])
  
  return (
    <>
     <section  className="Category mt-5">
    <div className="container mt-5">
      
    <Swiper  
      spaceBetween={35}
      slidesPerView={4}
      onSwiper={ setCategories}
      onSlideChange={() => 
        console.log("Slide change")
      }
      navigation={true}
      scrollbar={{ draggable: true }}
    >
    {
      (categories.length>0)? categories.map(catagory => 
          <div className="col-lg-6 col-md-4 col-sm-6"  key={catagory.id}>
             <SwiperSlide className="swiperSlide" key={catagory._id}>
             <div  className="swiperSlide  d-flex flex-wrap flex-wrap align-items-center flex-sm-column gap-2 justify-content-center ">
             <img className="circular-image" src={catagory.image.secure_url}alt="slide image" />
             </div>
             </SwiperSlide>
              </div>
        ):<h2>empty data</h2>}

    </Swiper>
     </div>
    </section>
    </>
  )
}
