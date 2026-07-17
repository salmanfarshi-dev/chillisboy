import React from "react";
import { Select, SelectItem, Button } from "@heroui/react";

function Banner() {
  return (
    <section className='bg-[url("/bannerimage.png")] h-[84vh] w-full bg-no-repeat bg-cover bg-center relative'>
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-7xl w-full px-4 mx-auto h-full">
        <h1 className="text-[24px] lg:text-start text-center lg:text-[62px] font-bold leading-[120%] lg:w-[694px] text-white pt-10 lg:pt-20">
          Find amazing things to do anytime, anywhere in Lagos.
        </h1>

        <div className="mt-10 w-full lg:w-[726px] bg-white rounded-2xl p-6">
          <div className="grid lg:grid-cols-12 gap-4">
           
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;