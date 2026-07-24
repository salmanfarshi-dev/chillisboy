import React from "react";
import {Button} from "@heroui/react";

function Drink() {
  return (
    <section className='bg-[url("/drink.png")] w-full left-0 right-0 bg-center  bg-cover bg-no-repeat'>
      <div className="pt-16 lg:pt-25 pb-16 lg:pb-40 max-w-7xl mx-auto w-full px-4 md:px-0 flex flex-col ">
        <div className="w-full lg:w-137.5 px-8 py-8 bg-subbg rounded-xl">
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
  );
}

export default Drink;
