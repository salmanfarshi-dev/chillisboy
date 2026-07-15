import React from 'react'

function Photogallery() {
    const image = [
        {
            img: '/Mask group1.png'
        },
        {
            img: '/Mask group2.png'
        },
        {
            img: '/Mask group3.png'
        },
        {
            img: '/Mask group4.png'
        },
        {
            img: '/Mask group5.png'
        },
        {
            img: '/Mask group6.png'
        },
    ]
  return (
   <section className='border-t  border-b'>
    <div className='max-w-7xl w-full px-4 md:px-0 mt-14 mb-10 mx-auto'>
        <h3 className='text-[24px] font-bold leading-8 tracking-[-2%] '>See How people are chilling on <span className='text-success'>Chillsbay</span></h3>
        <div className="mt-7 grid grid-cols-12 pb-7">
            {
                image.map(item=>(
                    <div className="col-span-6 lg:col-span-2">
                        <img src={item.img} alt="" className='w-full object-cover' />
                    </div>
                ))
            }
        </div>

    </div>


   </section>
  )
}

export default Photogallery