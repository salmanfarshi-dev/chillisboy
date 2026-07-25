import { Button } from '@heroui/react'
import React, { useState } from 'react'
import  Cards from '../Component/Cards'

function SeeMoreCard() {

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
    <section className=' w-full px-4 md:px-0 mt-5 bg-subbg'>
        <div className='max-w-7xl mx-auto pt-10 lg:pt-30 pb-20'>
            <div className=" md:text-end">
               {
                show < cartdata.length && (
                   <Button onClick={()=>setShow(show+4)} className='bg-transparent text-success font-semibold text-[24px]'>See More</Button>
                )
               }
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

    </section>
  )
}

export default SeeMoreCard