import React from 'react'
import Heading from '../Component/Heading'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";


function UseChillsbay() {

    const use = [

  {
    image: "/checkout.png",
    tittle: "Your entire trip in one checkout",
    description: "Add multiple experiences to your cart and checkout on one click.",
  },
  {
    image: "/pay.png",
    tittle: "Pay with Crypto on the go",
    description: "Enjoy the freedom of universal payments for a seamless marketplace experience.",
  },
  {
    image: "/ticket.png",
    tittle: "Free Cancellation and ticket transfer",
    description: "Resell your tickets or cancel your reservations at zero cost 24 hours before.",
  },
]


  return (
   <section className="mt-10 lg:mt-16">
    <Heading tittle="Why Use Chillsbay?"/>
    <div className="max-w-7xl mx-auto mt-6 lg:mt-10 bg-[#F5FAFF] py-8 lg:py-16 px-4 lg:px-10 shadow-2xl">

        <div className="hidden lg:grid grid-cols-12 gap-x-20">
           {
            use.map(item=>(
                 <div className="col-span-4 text-center">
                    <img src={item.image} alt="" className='mx-auto'/>
                    <h4 className='text-[24px] lg:text-[32px] text-black font-bold w-71.25 leading-9.5 mx-auto mt-4 mb-3'>{item.tittle}</h4>
                    <p className='text-[24px] font-normal text-black w-80 mx-auto'>{item.description}</p>
                
            </div>
            ))
           }
        </div>
        <div className="lg:hidden">
  <Swiper
    slidesPerView={1}
    spaceBetween={20}
    pagination={{ clickable: true }}
    modules={[Pagination]}
  >
    {use.map((item, index) => (
      <SwiperSlide key={index}>
        <div className="text-center px-4 pb-10">
          <img src={item.image} alt={item.tittle} className="mx-auto" />

          <h4 className="text-2xl w-60 mx-auto font-bold mt-4 mb-3">
            {item.tittle}
          </h4>

          <p className='w-60 mx-auto'>{item.description}</p>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

    </div>

   </section>
  )
}

export default UseChillsbay