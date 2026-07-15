import React from "react";
import Heading from "../Component/Heading";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { RiPencilFill } from "react-icons/ri";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Button } from "@heroui/react";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";



function Tour() {
  const slider = [
    {
      image: "/wizkid-show.png",
      tittle: "Wizkid made in lagos tour",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      date: "Dec 12 2022",
      tbs: "TBS Lagos",
      time: "9:00 PM",
      Number: "N20,00",
    },
    {
      image: "/volley-ball-game.png",
      tittle: "Playing game in around field",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      date: "Jun 15 2023",
      tbs: "TBS Lagos",
      time: "5:00 PM",
      Number: "N50,20",
    },
    {
      image: "/sight-seeing.png",
      tittle: "Find the place where is Train",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      date: "Feb 17 2028",
      tbs: "TBS Lagos",
      time: "11:00 PM",
      Number: "S20,00",
    },
  ];


  return (
    <section className="mt-5 lg:mt-12 border-t mb-10 lg:mb-40 overflow-x-hidden">
      <div className="max-w-7xl mx-auto md:px-0">
        <Heading
          tittle="See How People are Chilling On Chillsbay"
          className="mt-10"
        />

        <Swiper
        className="tourSwiper"
    slidesPerView={1}
    spaceBetween={20}
    pagination={{ clickable: true }}
      navigation={true}

    modules={[Pagination, Navigation]}
  >
     {slider.map((item, index) => (
         
        <SwiperSlide key={index}>

             <div className="mt-29.25 flex flex-col md:flex-row gap-7 items-center justify-center ">
            <div className="">
              <img
                src={item.image}
                alt=""
                className="lg:w-153 lg:h-163.25 object-cover rounded-xl"
              />
            </div>
            <div className="">
              <h2 className="text-[24px] w-81.75 lg:text-[42px] text-primary font-bold tracking-[-2%] leading-8 lg:leading-13.5 lg:w-95 px-4 md:px-0">
                {item.tittle}
              </h2>
              <p className="text-[16px] lg:text-[20px] font-normal text-primary leading-6.5 lg:leading-7.5 w-95 mt-3 lg:mt-5 mb-4 lg:mb-8 px-4 md:px-0">
                {item.description}
              </p>
              <div className="mt-4 lg:mt-8 px-4 md:px-0">
                <div className="flex gap-x-10 gap-5 items-center">
                  <div className="flex items-center gap-x-2">
                    <BsFillCalendarDateFill className="text-success size-4 lg:size-6" />
                    <p className="text-primary text-sm  lg:text-[20px] font-bold tracking-[5%]">
                      {item.date}
                    </p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <FaLocationDot className="text-success size-4 lg:size-6" />

                    <p className="text-primary text-sm  lg:text-[20px] font-bold tracking-[5%]">
                      {item.tbs}
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-10 mt-5 items-center ">
                  <div className="flex items-center gap-x-2">
                    <MdOutlineAccessTimeFilled className="text-success size-4 lg:size-6" />

                    <p className="text-primary text-sm  lg:text-[20px] font-bold tracking-[5%]">
                      {item.time}
                    </p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <RiPencilFill className="text-success size-4 lg:size-6" />

                    <p className="text-primary text-sm  lg:text-[20px] font-bold tracking-[5%]">
                      {item.Number}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-x-4 mt-6 mb-4 lg:mb-8 px-4 md:px-0">
                <Button
                  className=" py-3 px-8 lg:py-4 lg:px-13 rounded-xl font-bold text-[16px] tracking-tight text-success border-success"
                  variant="outline"
                >
                  Add to cart
                </Button>
                <Button className="py-3 px-8 lg:py-4 lg:px-13 rounded-xl font-bold text-[16px] tracking-tight">
                  Book Now
                </Button>
              </div>

              <p className="flex items-center gap-x-3 text-[16px] lg:text-[20px] px-4 md:px-0">
                Connect with us on:{" "}
                <FaTwitter className="text-success size-4 lg:size-6" />
                <RiInstagramFill className="text-success size-4 lg:size-6" />
              </p>
            </div>
          </div>
        </SwiperSlide>
         
        ))}
  </Swiper>
      </div>
    </section>
  );
}

export default Tour;
