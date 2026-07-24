import React from "react";
import {
  Autocomplete,
  AutocompleteSection,
  AutocompleteItem,
} from "@heroui/autocomplete";
import {DatePicker} from "@heroui/react";
import { Button } from "@heroui/react";
import {TimeInput} from "@heroui/date-input";
import {Time} from "@internationalized/date";


function Occasion() {
  const animals = [
    {
      label: "Dhaka",
      key: "cat",
      
    },
    {
      label: "Dinajput",
      key: "dog",
     
    },
    {
      label: "Moimansing",
      key: "elephant",
     
    },
    
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto w-full px-4 md:px-0 pt-12">
        <h3 className="text-[28px] font-bold tracking-[-2%] leading-12 text-primary ">
          Find the best places to eat and drink for any occasion
        </h3>

        <div className="mt-3 w-full lg:w-240 grid grid-cols-12 gap-3 items-end bg-subbg px-7 py-5 rounded-md shadow-2xl md:shadow-none">
          <div className="col-span-12 lg:col-span-2">
            <Autocomplete
              className="max-w-xs"
              defaultItems={animals}
              label="Location"
              placeholder="Chottogram"
              labelPlacement="outside-top"
            >
              {(item) => (
                <AutocompleteItem key={item.key}>{item.label}</AutocompleteItem>
              )}
            </Autocomplete>
          </div>
          <div className="col-span-12 lg:col-span-2">
           <DatePicker className="" 
           labelPlacement="outside" label="Birth date" />
          </div>
          <div className="col-span-12 lg:col-span-2">
             <TimeInput placeholder="-------" label="Time" labelPlacement="outside"/>
          </div>
          <div className="col-span-12 lg:col-span-2">
            <Autocomplete
              className="max-w-xs"
              defaultItems={animals}
              label="Cuisine"
              placeholder="Cuisine"
              labelPlacement="outside-top"
            >
              {(item) => (
                <AutocompleteItem key={item.key}>{item.label}</AutocompleteItem>
              )}
            </Autocomplete>
          </div>
          <div className="col-span-12 lg:col-span-2">
            <Autocomplete
              className="max-w-xs"
              defaultItems={animals}
              label="People"
              placeholder="2"
              labelPlacement="outside-top"
            >
              {(item) => (
                <AutocompleteItem key={item.key}>{item.label}</AutocompleteItem>
              )}
            </Autocomplete>
          </div>
          <div className="col-span-12 lg:col-span-2">
            <Button className="w-full bg-success text-white px-14 py-8 font-bold">Search</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Occasion;
