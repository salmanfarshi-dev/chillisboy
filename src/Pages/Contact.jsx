import { Button } from '@heroui/react';
import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
   <section className='max-w-7xl w-full mx-auto px-4 md:px-0 pt-8 md:pt-25'>
   <div className="flex justify-between items-center">
     <div className="">
        <h1 className='md:text-[42px] font-bold tracking-[-2%] text-primary'>Contact Us</h1>
        <p className='text-[#656B89] leading-6.75 tracking-tight pt-2 pb-5 md:w-104'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo nunc, quisque ultricies netus elit massa aliquam quis cras. Enim leo, in massa sapien facilisi netu.</p>

        <div className="flex flex-col">
            <div className="flex items-center gap-x-5">
               <FaPhone className='text-success size-5'/>
                <p className='text-primary tracking-[-2%]'>(840) 371 - 2514</p>
            </div>
            <div className="flex items-center gap-x-5">
               <MdEmail  className='text-success size-5'/>
                <p className='text-primary tracking-[-2%]'>sfarshi22@gmail.com</p>
            </div>
        </div>
    </div>

    <div className="bg-white shadow-lg rounded-lg md:w-160.5 py-12 px-8">
        <form action="">
            <div className="flex flex-wrap gap-8">
            <div className="flex flex-col gap-y-1">
                <label >First Name</label>
                <input type="text" name="" id="" placeholder='First Name' className='py-3 px-4 md:w-68 rounded-lg bg-[#F5FAFF] placeholder:text-border'/>
            </div>
            <div className="flex flex-col gap-y-1">
                <label >Last Name</label>
                <input type="text" name="" id="" placeholder='Last Name' className='py-3 px-4 md:w-68 rounded-lg bg-[#F5FAFF] placeholder:text-border'/>
            </div>
            <div className="flex flex-col gap-y-1">
                <label >Email Address</label>
                <input type="text" name="" id="" placeholder='e.g. johndoe@email.com' className='py-3 px-4 md:w-68 rounded-lg bg-[#F5FAFF] placeholder:text-border'/>
            </div>
            <div className="flex flex-col gap-y-1">
                <label >Phone number</label>
                <input type="text" name="" id="" placeholder='Phone number' className='py-3 px-4 md:w-68 rounded-lg bg-[#F5FAFF] placeholder:text-border'/>
            </div>
            <div className="flex flex-col gap-y-1">
                <label >Subject</label>
                <input type="text" name="" id="" placeholder='Text you subject' className='py-3 px-4 lg:w-143.5 rounded-lg bg-[#F5FAFF] placeholder:text-border'/>
            </div>
            <div className="flex flex-col gap-y-1">
                <label >Message</label>
               <textarea name="" id="" className='py-3 px-4 lg:w-143.5 rounded-lg bg-[#F5FAFF] placeholder:text-border h-30'></textarea>
            </div>
            <Button className='bg-success text-white font-semibold w-full py-7'>SEND MESSAGE</Button>

        </div>
        </form>
    </div>
   </div>

   

   </section>
  )
}

export default Contact