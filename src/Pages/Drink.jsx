import { Button } from '@heroui/react'
import React, { useState } from 'react'
import  Cards from '../Component/Cards'
import Occasion from "../Component/Occasion";
import SeeMoreCard from "../Layout/SeeMoreCard";
import DrinkEvent from "../Component/DrinkEvent";

function Drink() {


   const [show, setShow] = useState(4)
  
    const cartdata = [
      {
        id: 1,
        image: '/public/Rectangle 686.png',
        tittle: "Slow Lagos",
        pera: "2 Musa Yar’Adua, Lagos Nigeria "
      },
      {
        id: 2,
        image: '/public/Rectangle 687.png',
        tittle: "Nok by Alara",
        pera: "2 Musa Yar’Adua, Lagos Nigeria "
      },
      {
        id: 3,
        image: '/public/Rectangle 688.png',
        tittle: "Noirs",
        pera: "2 Musa Yar’Adua, Lagos Nigeria "
      },
      {
        id: 4,
        image: '/public/Rectangle 689.png',
        tittle: "Soho",
        pera: "2 Musa Yar’Adua, Lagos Nigeria "
      },
     
      {
        id: 5,
        image: '/public/Rectangle 686.png',
        tittle: "Slow Lagos",
        pera: "2 Musa Yar’Adua, Lagos Nigeria "
      },
      {
        id: 6,
        image: '/public/Rectangle 687.png',
        tittle: "Nok by Alara",
        pera: "2 Musa Yar’Adua, Lagos Nigeria "
      },
      {
        id: 7,
        image: '/public/Rectangle 688.png',
        tittle: "Noirs",
        pera: "2 Musa Yar’Adua, Lagos Nigeria "
      },
      {
        id: 8,
        image: '/public/Rectangle 689.png',
        tittle: "Soho",
        pera: "2 Musa Yar’Adua, Lagos Nigeria "
      }
     
    ]



  return (

    <>
    
    <section className='bg-[url("/drink.png")] w-full left-0 right-0 bg-center  bg-cover bg-no-repeat'>
      <div className="pt-16 lg:pt-25 pb-16 lg:pb-40 max-w-7xl mx-auto w-full px-4 md:px-0 flex flex-col ">
        <div className="w-full lg:w-137.5 px-8 py-8 bg-subbg/85 rounded-xl">
          <h1 className="text-[24px] lg:text-[42px] font-bold text-primary tracking-[-2%] leading-9.5 ">
            Our top pick for the week!
          </h1>
          <h3 className="text-[18px] lg:text-[32px] mt-6 font-bold text-primary">
            Nok by Alara
          </h3>
          <p className="font-normal text-[16px] lg:text-xl text-primary leading-8 w-full max-w-90">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor .
          </p>

          <div className="text-end">
            <Button className="bg-success font-bold text-[15px] px-7 py-3 rounded-md text-white mt-5">Reserve Now</Button>
          </div>
        </div>
      </div>


    </section>



       <Occasion/>
       <SeeMoreCard/>
       <DrinkEvent/>


<div className='max-w-7xl mx-auto px-4 md:px-0 pt-10 lg:pt-30 pb-20'>
            <div className="flex items-center justify-between">
              <h3 className='text-2xl lg:text-[32px] font-bold text-primary'>Resturants nearby</h3>
              <div className="">
                 {
                show < cartdata.length && (
                   <Button onClick={()=>setShow(show+4)} className='bg-transparent text-success font-semibold text-[24px]'>See More</Button>
                )
               }
              </div>
            </div>
      <div className="flex items-center flex-wrap gap-8 mt-5 justify-center">
        {
          cartdata.slice(0,show).map(item =>(
            <Cards
            key={item.id}
            image={item.image}
            tittle={item.tittle}
            pera={item.pera}
            
            
            />
          ))
        }
      </div>


            

        </div>

        <div className='max-w-7xl mx-auto px-4 md:px-0 mt-10'>

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29203.77768686869!2d90.35131949999999!3d23.8018018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0dbef6e3337%3A0x857c331f4fff96c4!2sMirpur%20College!5e0!3m2!1sen!2sbd!4v1785021501834!5m2!1sen!2sbd" className='w-full h-50 lg:h-120'   allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
        </div>

    </>
  );
}

export default Drink;
