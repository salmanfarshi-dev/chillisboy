import React from "react";
import {
  Autocomplete,
  EmptyState,
  Header,
  Label,
  ListBox,
  SearchField,
  Separator,
  useFilter,
} from "@heroui/react";
import { Button } from "@heroui/react";
function Banner() {
  return (
    <section className='bg-[url("/bannerimage.png")] h-[84vh] w-full bg-no-repeat bg-cover bg-center relative'>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 max-w-7xl w-full px-4 mx-auto h-full ">
        <h1 className="text-[24px] lg:text-start text-center lg:text-[62px] font-bold leading-[120%] lg:w-173.5 text-white pt-10 lg:pt-20">
          Find amazing things to do anytime, anywhere in Lagos.
        </h1>
        <div className="mt-10 w-full lg:w-181.5 bg-white rounded-2xl p-7.5">
          <div className="grid lg:grid-cols-12 gap-4">
            <div className="col-span-3">
              <Autocomplete
                className="w-full"
                placeholder="Select Location"
                selectionMode="single"
              >
                <Label>Location</Label>
                <Autocomplete.Trigger>
                  <Autocomplete.Value />
                  <Autocomplete.Indicator />
                </Autocomplete.Trigger>

                <Autocomplete.Popover>
                  <ListBox>
                    <ListBox.Item id="oshodi">
                      Oshodi
                      <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item id="canada">
                      Canada
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="bangladesh">
                      Bangladesh
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Autocomplete.Popover>
              </Autocomplete>
            </div>
            <div className="col-span-3">
              <Autocomplete
                className="w-full"
                placeholder="Date"
                selectionMode="single"
              >
                <Label>Date</Label>
                <Autocomplete.Trigger>
                  <Autocomplete.Value />
                  <Autocomplete.Indicator />
                </Autocomplete.Trigger>

                <Autocomplete.Popover>
                  <ListBox>
                    <ListBox.Item id="Date">
                      Date
                      <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item id="canada">
                      Canada
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="bangladesh">
                      Bangladesh
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Autocomplete.Popover>
              </Autocomplete>
            </div>
            <div className="col-span-3">
              <Autocomplete
                className="w-full"
                placeholder="Night clubs"
                selectionMode="single"
              >
                <Label>Activities</Label>
                <Autocomplete.Trigger>
                  <Autocomplete.Value />
                  <Autocomplete.Indicator />
                </Autocomplete.Trigger>

                <Autocomplete.Popover>
                  <ListBox>
                    <ListBox.Item id="clubs">
                      Night Clubs
                      <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item id="canada">
                      Canada
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="bangladesh">
                      Bangladesh
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Autocomplete.Popover>
              </Autocomplete>
            </div>
            <div className="col-span-3 text-center">
              <Button className=" rounded-2xl py-7 px-12 text-[16px] ">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
