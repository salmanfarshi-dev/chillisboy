import React from 'react'

function Lagos() {

        const logos = [
        {
            image: '/public/sight-seeing.png',
            tittle: "Sight Seeing"
        },
        {
            image: '/public/volley-ball-game.png',
            tittle: "Volley Ball Game"
        },
        {
            image: '/public/wizkid-show.png',
            tittle: "Wizkid Show"
        },
        {
            image: '/public/wizkid-show.png',
            tittle: "Wizkid Show"
        },
        {
            image: '/public/sight-seeing.png',
            tittle: "Sight Seeing"
        },
        {
            image: '/public/volley-ball-game.png',
            tittle: "Volley Ball Game"
        },
        {
            image: '/public/wizkid-show.png',
            tittle: "Wizkid Show"
        },
        {
            image: '/public/wizkid-show.png',
            tittle: "Wizkid Show"
        },
        
       
    ]





  return (
    <section className='bg-[#F5FAFF] py-9 md:py-12 mt-9 lg:mt-12'>
        <div className="max-w-7xl w-full mx-auto px-4 md:px-0">
            <h2 className='text-[24px] text-center md:text-start lg:text-[32px] font-bold tracking-[-2%] text-primary lg:mb-10 mb-6'>Top things to do in Lagos</h2>

           <div className="grid grid-cols-12 gap-x-5 gap-y-5 lg:gap-y-10">
  {logos.map((item, index) => (
    <div key={index} className='col-span-6 lg:col-span-3'>
      <img
        src={item.image}
        alt={item.tittle}
        className="h-35 lg:h-67.5 rounded-2xl object-cover mx-auto"
      />
      <h3 className="text-sm lg:text-[22px] font-bold text-primary tracking-[-1%] text-center mt-3">
        {item.tittle}
      </h3>
    </div>
  ))}
</div>
        </div>

    </section>
  )
}

export default Lagos