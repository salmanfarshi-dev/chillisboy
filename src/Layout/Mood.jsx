import React from 'react'
import Heading from '../Component/Heading'
import Eat from '../assets/eat.png'
import Event from '../assets/event.png'
import Club from '../assets/club.png'
import Things from '../assets/things.png'

function Mood() {

  return (
    <section className='max-w-7xl mx-auto w-full px-4 md:px-0 mt-10 lg:mt-12'>
        <Heading tittle="What are you in the mood for?"/>


      <div className="mt-2 lg:mt-8 grid grid-cols-12 gap-y-4 lg:gap-y-0">
        <div className="col-span-6 lg:col-span-3 w-full">
            <img src={Eat} alt="image" className='h-50 lg:h-120 w-full object-cover'/>
            <h3  className='text-[21px] lg:text-[32px] text-primary font-bold text-center mt-2 lg:mt-3'>Eat & Drink</h3>
        </div>
        <div className="col-span-6 lg:col-span-3 w-full">
            <img src={Event} alt="image" className='h-50 lg:h-120 w-full object-cover'/>
            <h3  className='text-[21px] lg:text-[32px] text-primary font-bold text-center mt-2 lg:mt-3'>Events</h3>
        </div>
        <div className="col-span-6 lg:col-span-3 w-full">
            <img src={Club} alt="image" className='h-50 lg:h-120  w-full object-cover'/>
            <h3  className='text-[21px] lg:text-[32px] text-primary font-bold text-center mt-2 lg:mt-3'>Club</h3>
        </div>
        <div className="col-span-6 lg:col-span-3 w-full">
            <img src={Things} alt="image" className='h-50 lg:h-120 w-full object-cover'/>
            <h3  className='text-[21px] lg:text-[32px] text-primary font-bold text-center mt-2 lg:mt-3'>Things to do</h3>
        </div>


      </div>
    </section>
  )
}

export default Mood