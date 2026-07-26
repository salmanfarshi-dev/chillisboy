import { Button } from '@heroui/react';
import React from 'react'
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";

import { FaCheckCircle } from "react-icons/fa";




function Reservations() {
  return (
    <section className='max-w-7xl w-full mx-auto px-4 md:px-0 mt-10 mb-5 lg:mb-12 lg:mt-27'>
        <div className="border border-border rounded-md grid grid-cols-12 items-center px-2 md:px-7 py-5 lg:py-13">
            <div className="col-span-12 lg:col-span-7 ">
                <span className='text-[15px] font-bold tracking-tight text-border '>Your Cart</span>

                <div className="mt-6 border-b border-border pb-7">
                    <div className="flex gap-x-4">
                        <img src="/public/neptune.png" alt="" className='w-11 h-11 lg:h-auto lg:w-32 object-cover rounded-2xl'/>
                        <div className="flex gap-x-4 lg:gap-x-16">
                            <div className="flex flex-col gap-y-2">
                                <h4 className='font-bold text-[12px] lg:text-[22px] text-primary tracking-tight'>The 90s with Dj Neptune</h4>
                                <div className="flex gap-2 ">
                                    <div className="flex  gap-x-1 items-center">
                                        <BsFillCalendarDateFill   className='text-success'/>
                                        <p className='text-[6px] md:text-[15px] font-bold tracking-[5%] text-primary'>Dec 12 2024</p>
                                    </div>
                                    <div className="flex gap-x-1 items-center">
                                        <IoLocationSharp   className='text-success'/>

                                        <p className='text-[6px] md:text-[15px] font-bold tracking-[5%] text-primary'>Quilox Club</p>
                                    </div>
                                </div>
                                <div className="flex gap-x-1 items-center">
                                    <MdOutlineAccessTimeFilled   className='text-success'/>
                                    <p className='text-[6px] md:text-[15px] font-bold tracking-[5%] text-primary'>Qui9:00 PM</p>
                                </div>
                            </div>

                            <div className="bg-border/50 px-2 py-1 flex rounded w-fit h-fit">
                               <button className='px-3 text-[10px] md:text-[16px] font-bold'>-</button>
                               <p className='font-bold text-primary text-[10px] md:text-[16px] '>1</p>
                               <button className='px-3 text-[10px] md:text-[16px] font-bold'>+</button>
      
  
                            </div>

                            <p className='font-bold text-primary text-[10px] md:text-[16px] '> $ 34000</p>
                        </div>

                    </div>
                </div>
                <div className="mt-6 border-b border-border pb-7">
                    <div className="flex gap-x-4">
                        <img src="/public/neptune.png" alt="" className='w-11 h-11 lg:h-auto lg:w-32 object-cover rounded-2xl'/>
                        <div className="flex gap-x-4 lg:gap-x-16">
                            <div className="flex flex-col gap-y-2">
                                <h4 className='font-bold text-[12px] lg:text-[22px] text-primary tracking-tight'>The 90s with Dj Neptune</h4>
                                <div className="flex gap-2 ">
                                    <div className="flex  gap-x-1 items-center">
                                        <BsFillCalendarDateFill   className='text-success'/>
                                        <p className='text-[6px] md:text-[15px] font-bold tracking-[5%] text-primary'>Dec 12 2024</p>
                                    </div>
                                    <div className="flex gap-x-1 items-center">
                                        <IoLocationSharp   className='text-success'/>

                                        <p className='text-[6px] md:text-[15px] font-bold tracking-[5%] text-primary'>Quilox Club</p>
                                    </div>
                                </div>
                                <div className="flex gap-x-1 items-center">
                                    <MdOutlineAccessTimeFilled   className='text-success'/>
                                    <p className='text-[6px] md:text-[15px] font-bold tracking-[5%] text-primary'>Qui9:00 PM</p>
                                </div>
                            </div>

                            <div className="bg-border/50 px-2 py-1 flex rounded w-fit h-fit">
                               <button className='px-3 text-[10px] md:text-[16px] font-bold'>-</button>
                               <p className='font-bold text-primary text-[10px] md:text-[16px] '>1</p>
                               <button className='px-3 text-[10px] md:text-[16px] font-bold'>+</button>
      
  
                            </div>

                            <p className='font-bold text-primary text-[10px] md:text-[16px] '> $ 34000</p>
                        </div>

                    </div>
                </div>
                
               

                
            </div>







            <div className="col-span-12 lg:col-span-5 md:border-l border-border md:ml-6 md:pl-5 h-full mt-10 mg:mt-0">
               <div className="flex flex-col gap-y-3 ">
                 <div className="flex flex-col gap-x-2 border-b border-border pb-4">
                    <div className="flex gap-x-2 items-center">
                    <FaCheckCircle className='text-success text-xl'/>
                        <p className='text-xl font-bold text-primary'>Account information</p>

                    </div>
                    <div className="flex flex-col mt-2 pl-7">
                        <p className='text[15px] font-normal text-primary'>Tunde Chukwu</p>
                        <p className='text[15px] font-normal text-primary'>tundechukwu12@gmail.com

                        </p>
                    </div>
                    

                </div>
                 <div className="flex flex-col gap-x-2 border-b border-border pb-4">
                    <div className="flex gap-x-2 items-center">
                    <FaCheckCircle className='text-success text-xl'/>
                        <p className='text-xl font-bold text-primary'>Phone number</p>

                    </div>
                    <div className="flex flex-col mt-2 pl-7">
                        <p className='text[15px] font-normal text-primary'>+2341123465799</p>
                       
                    </div>
                    

                </div>
                 <div className="flex flex-col gap-x-2 border-b border-border pb-4">
                    <div className="flex gap-x-2 items-center">
                    <FaCheckCircle className='text-success text-xl'/>
                        <p className='text-xl font-bold text-primary'>Payment</p>

                    </div>
                    <div className="flex flex-col mt-2 pl-7">
                        <div className="flex gap-x-1">
                            <img src="/public/mastercard.png" alt="" />
                            <img src="/public/bkash.png" alt="" />
                            <img src="/public/nogat.png" alt="" />
                        </div>
                       
                    </div>
                    

                </div>

                <div className="mt-4">
                    <div className="flex flex-col gap-y-3">
                        <div className="flex justify-between items-center">
                            <p className='text-primary font-normal text-[15px]'>Subtotal</p>
                            <span className='text-primary font-bold text-[15px]'>$3099</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className='text-primary font-normal text-[15px]'>Tax</p>
                            <span className='text-primary font-bold text-[15px]'>$30</span>
                        </div>
                        <Button className='bg-success text-white font-bold mt-8'>Book Tickets</Button>
                    </div>
                </div>
               </div>



            </div>
        </div>

    </section>
  )
}

export default Reservations