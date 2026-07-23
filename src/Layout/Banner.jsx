import React from "react";
import { Select, SelectItem, Button } from "@heroui/react";
import {
  Autocomplete,
  AutocompleteSection,
  AutocompleteItem,
} from "@heroui/autocomplete";

function Banner() {
  const animals = [
    {
      label: "Cat",
      key: "cat",
      description: "The second most popular pet in the world",
    },
    {
      label: "Dog",
      key: "dog",
      description: "The most popular pet in the world",
    },
    {
      label: "Elephant",
      key: "elephant",
      description: "The largest land animal",
    },
    { label: "Lion", key: "lion", description: "The king of the jungle" },
    { label: "Tiger", key: "tiger", description: "The largest cat species" },
    {
      label: "Giraffe",
      key: "giraffe",
      description: "The tallest land animal",
    },
  ];

  return (
    <section className='bg-[url("/bannerimage.png")] h-[84vh] w-full bg-no-repeat bg-cover bg-center relative'>
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-7xl w-full px-4 mx-auto h-full">
        <h1 className="text-[24px] lg:text-start text-center lg:text-[62px] font-bold leading-[120%] lg:w-[694px] text-white pt-10 lg:pt-20">
          Find amazing things to do anytime, anywhere in Lagos.
        </h1>

        {/* <div className="mt-10 w-full lg:w-[726px] bg-white rounded-2xl p-6">
          <div className="grid lg:grid-cols-12 gap-4">
            <div className="col-span-3 w-full">
             
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Banner;
