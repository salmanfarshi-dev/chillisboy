import { Button } from '@heroui/react'
import React from 'react'


function Cards({image, tittle,pera}) {
  return (
    <div>
     <img src={image} alt="" />
     <h3 className='text-[24px] font-bold text-primary font-jakarta py-2'>{tittle}</h3>
     <p className='font-medium text-[15px] text-primary max-w-52.5'>{pera}</p>
     <Button  className='bg-success mt-3 text-white px-7 py-3 font-bold text-[15px] tracking-tight'>Reserve Now</Button>
    </div>
  )
}

export default Cards