import { Button } from '@heroui/react';
import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import FQA from '../Component/FQA';

function Contact() {
  return (
   <section className='max-w-7xl w-full mx-auto px-4 md:px-0 pt-8 md:pt-25'>
   <div className="flex flex-col md:flex-row justify-between items-center gap-y-10 md:gap-0">
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
                <input type="text" name="" id="" placeholder='First Name' className='py-3 px-4 md:w-68 w-100 rounded-lg bg-[#F5FAFF] placeholder:text-border'/>
            </div>
            <div className="flex flex-col gap-y-1">
                <label >Last Name</label>
                <input type="text" name="" id="" placeholder='Last Name' className='py-3 px-4 md:w-68 w-100 rounded-lg bg-[#F5FAFF] placeholder:text-border'/>
            </div>
            <div className="flex flex-col gap-y-1">
                <label >Email Address</label>
                <input type="text" name="" id="" placeholder='e.g. johndoe@email.com' className='py-3 px-4 md:w-68 w-100 rounded-lg bg-[#F5FAFF] placeholder:text-border'/>
            </div>
            <div className="flex flex-col gap-y-1">
                <label >Phone number</label>
                <input type="text" name="" id="" placeholder='Phone number' className='py-3 px-4 md:w-68 w-100 rounded-lg bg-[#F5FAFF] placeholder:text-border'/>
            </div>
            <div className="flex flex-col gap-y-1">
                <label >Subject</label>
                <input type="text" name="" id="" placeholder='Text you subject' className='py-3 px-4 lg:w-143.5 w-100 rounded-lg bg-[#F5FAFF] placeholder:text-border'/>
            </div>
            <div className="flex flex-col gap-y-1">
                <label >Message</label>
               <textarea name="" id="" className='py-3 px-4 lg:w-143.5 w-100 rounded-lg bg-[#F5FAFF] placeholder:text-border h-30'></textarea>
            </div>
            <Button className='bg-success text-white font-semibold w-full py-7'>SEND MESSAGE</Button>

        </div>
        </form>
    </div>
   </div>

   <div className="mt-10 md:mt-16 lg:mt-25 flex flex-col md:flex-row justify-center items-center gap-8 lg:gap-20">
    <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center w-32.5 h-32.5 bg-[#F5FAFF] rounded-full">
            <img src="/public/infulancer.png" alt="" />
            
        </div>
        <h5 className='text-[22px] tracking-tight text-primary font-bold pt-5 pb-3'>Become an Influencer</h5>
            <p className='text-border font-normal leading-6.75 tracking-[1%] md:w-69.25 mx-auto text-center '>Join a company that’s passionate about design and technology</p>
            <a href="" className='text-success mt-6'>chills@chillsbay.com</a>
    </div>
    <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center w-32.5 h-32.5 bg-[#F5FAFF] rounded-full">
            <img src="/public/help.png" alt="" />
            
        </div>
        <h5 className='text-[22px] tracking-tight text-primary font-bold pt-5 pb-3'>Need Help?</h5>
            <p className='text-border font-normal leading-6.75 tracking-[1%] md:w-69.25 mx-auto text-center '>Questions about using  Market? Our support team is here to help.</p>
            <a href="" className='text-success mt-6'>chills@chillsbay.com</a>
    </div>
    <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center w-32.5 h-32.5 bg-[#F5FAFF] rounded-full">
            <img src="/public/refunds.png" alt="" />
            
        </div>
        <h5 className='text-[22px] tracking-tight text-primary font-bold pt-5 pb-3'>Refunds & Others</h5>
            <p className='text-border font-normal leading-6.75 tracking-[1%] md:w-69.25 mx-auto text-center '>Questions about using  Market? Our support team is here to help.</p>
            <a href="" className='text-success mt-6'>chills@chillsbay.com</a>
    </div>
   </div>






   <div className="mt-30">
    <FQA/>
   </div>

   </section>
  )
}

export default Contact