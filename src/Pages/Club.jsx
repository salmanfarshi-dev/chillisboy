import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Button } from "@heroui/react";
import { MdOutlineAccessTime } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { RiPencilFill } from "react-icons/ri";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
function Club() {
    const [show, setShow] = useState(4)
    const [showone, setShowOne] = useState(4)
    


  const clubdetails = [
    {
      id: 1,
      image: "/public/quilox.png",
      tittle: "Quilox ",
      pera: "2 Musa Yar’Adua, Lagos Nigeria",
      day: "Mondays-Friday",
      time: "8pm-3am",
      date: "JUN 11",
    },
    {
      id: 2,
      image: "/public/silver-fox.png",
      tittle: "Silver fox ",
      pera: "2 Musa Yar’Adua, Lagos Nigeria",
      day: "Mondays-Friday",
      time: "8pm-3am",
      date: "JUN 12",
    },
    {
      id: 3,
      image: "/public/nitro-night-club.png",
      tittle: "Nitro night club ",
      pera: "2 Musa Yar’Adua, Lagos Nigeria",
      day: "Mondays-Friday",
      time: "8pm-3am",
      date: "JUN 14",
    },
    {
      id: 4,
      image: "/public/club-vegas.png",
      tittle: "Club vegas ",
      pera: "2 Musa Yar’Adua, Lagos Nigeria",
      day: "Mondays-Friday",
      time: "8pm-3am",
      date: "JUN 15",
    },
    {
      id: 5,
      image: "/public/quilox.png",
      tittle: "Quilox ",
      pera: "2 Musa Yar’Adua, Lagos Nigeria",
      day: "Mondays-Friday",
      time: "8pm-3am",
      date: "JUN 11",
    },
    {
      id: 6,
      image: "/public/silver-fox.png",
      tittle: "Silver fox ",
      pera: "2 Musa Yar’Adua, Lagos Nigeria",
      day: "Mondays-Friday",
      time: "8pm-3am",
      date: "JUN 12",
    },
    {
      id: 7,
      image: "/public/nitro-night-club.png",
      tittle: "Nitro night club ",
      pera: "2 Musa Yar’Adua, Lagos Nigeria",
      day: "Mondays-Friday",
      time: "8pm-3am",
      date: "JUN 14",
    },
    {
      id: 8,
      image: "/public/club-vegas.png",
      tittle: "Club vegas ",
      pera: "2 Musa Yar’Adua, Lagos Nigeria",
      day: "Mondays-Friday",
      time: "8pm-3am",
      date: "JUN 15",
    },
  ];

   const slider = [
    {
      image: "/public/neptune.png",
      tittle: "The 90s with  Dj Neptune",
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
    <section className="bg-black text-white">
      <div className="">
        {/* banner section  */}
        <div className="flex md:flex-none md:justify-normal justify-center">
          <div className="absolute z-50 mt-10 lg:mt-26 md:ml-40 w-[70%] lg:w-137.5 px-8 py-8 bg-black/60 rounded-xl">
            <h1 className="text-[24px] lg:text-[42px] font-bold text-subbg tracking-[-2%] leading-9.5 ">
              Club Quilox
            </h1>
            <h3 className="text-[18px] lg:text-[32px] mt-3 lg:mt-6 font-bold text-subbg">
              Amaarae & Tems on June 3rd
            </h3>

            <div className="text-end">
              <Button className="bg-success font-bold text-[15px] px-7 py-3 rounded-md text-white mt-5">
                Book A Section Now
              </Button>
            </div>
          </div>
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src="/public/clubbanner.png"
                alt=""
                className="w-full bg-no-repeat bg-cover bg-center h-75 lg:h-150"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/public/drinkevent.png"
                alt=""
                className="w-full bg-no-repeat bg-cover bg-center h-75 lg:h-150"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/public/bannerimage.png"
                alt=""
                className="w-full bg-no-repeat bg-cover bg-center h-75 lg:h-150"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="max-w-7xl w-full px-4 md:px-0 mx-auto">
          {/* Night club  */}
              <div className="flex items-center justify-between mt-16 mb-6">
                <h4 className="text-xl font-bold lg:text-[32px]">Popular Night Clubs</h4>
                 <div>
               {
                show < clubdetails.length && (
                   <Button onClick={()=>setShow(show+4)} className='bg-transparent text-success font-semibold text-[18px] lg:text-[24px]'>See More</Button>
                )
               }
            </div>
              </div>
          <div className=" grid grid-cols-2 lg:grid-cols-4 gap-6">
            {clubdetails.slice(0,show).map((item) => (
              <div key={item.id} className="">
                <img key={item.id} src={item.image} alt="" />
                <h3 className="text-[16px] lg:text-[24px] font-bold font-jakarta py-2">
                  {item.tittle}
                </h3>
                <p className="text-xs md:text-[15px] font-medium text-white">
                  {item.pera}
                </p>
                <div className="flex gap-x-2 items-center pt-2 pb-4">
                    <div className="flex gap-x-1 items-center">
                        <MdOutlineDateRange />
                        <p className="text-[10px] md:text-[15px] font-normal text-white">{item.day}</p>

                        
                    </div>
                    <div className="flex gap-x-1 items-center">
                        <MdOutlineAccessTime />

                        <p className="text-[10px] md:text-[15px] font-normal text-white">{item.time}</p>

                        
                    </div>
                </div>

                <Button className="font-bold text-[15px] bg-success text-white">Book  Now</Button>
              </div>
            ))}
          </div>


 {/* neptune  */}

        <div className="pt-30 overflow-x-hidden">
             <h4 className="mt-10 lg:mt-29.25 mb-10 text-[32px] font-bold text-white lg:ml-60">Tonight In Lagos</h4>
            
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
            
                         <div className=" flex flex-col md:flex-row gap-7 items-center justify-center ">
                        <div className="">
                          <img
                            src={item.image}
                            alt=""
                            className="lg:w-153 lg:h-163.25 object-cover rounded-xl"
                          />
                        </div>
                        <div className="">
                          <h2 className="text-[24px] w-81.75 lg:text-[42px] text-white font-bold tracking-[-2%] leading-8 lg:leading-13.5 lg:w-95 px-4 md:px-0">
                            {item.tittle}
                          </h2>
                          <p className="text-[16px] lg:text-[20px] font-normal text-white leading-6.5 lg:leading-7.5 w-95 mt-3 lg:mt-5 mb-4 lg:mb-8 px-4 md:px-0">
                            {item.description}
                          </p>
                          <div className="mt-4 lg:mt-8 px-4 md:px-0">
                            <div className="flex gap-x-10 gap-5 items-center">
                              <div className="flex items-center gap-x-2">
                                <BsFillCalendarDateFill className="text-success size-4 lg:size-6" />
                                <p className="text-white text-sm  lg:text-[20px] font-bold tracking-[5%]">
                                  {item.date}
                                </p>
                              </div>
                              <div className="flex items-center gap-x-2">
                                <FaLocationDot className="text-success size-4 lg:size-6" />
            
                                <p className="text-white text-sm  lg:text-[20px] font-bold tracking-[5%]">
                                  {item.tbs}
                                </p>
                              </div>
                            </div>
                            <div className="flex gap-x-10 mt-5 items-center ">
                              <div className="flex items-center gap-x-2">
                                <MdOutlineAccessTimeFilled className="text-success size-4 lg:size-6" />
            
                                <p className="text-white text-sm  lg:text-[20px] font-bold tracking-[5%]">
                                  {item.time}
                                </p>
                              </div>
                              <div className="flex items-center gap-x-2">
                                <RiPencilFill className="text-success size-4 lg:size-6" />
            
                                <p className="text-white text-sm  lg:text-[20px] font-bold tracking-[5%]">
                                  {item.Number}
                                </p>
                              </div>
                            </div>
                          </div>
            
                          <div className="flex items-center gap-x-4 mt-6 mb-4 lg:mb-8 px-4 md:px-0">
                            <Button
                              className=" py-3 px-8 lg:py-4 lg:px-13 rounded-xl font-bold text-[16px] tracking-tight text-success border-success bg-white"
                            
                            >
                              Add to cart
                            </Button>
                            <Button className="py-3 px-8 lg:py-4 lg:px-13 rounded-xl font-bold text-[16px] tracking-tight bg-success text-white">
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

        {/* bar  */}

        <div className="">

             <div className="flex items-center justify-between mt-16 mb-6">
                <h4 className="text-xl font-bold lg:text-[32px]">Popular Night Clubs</h4>
                 <div>
               {
                showone < clubdetails.length && (
                   <Button onClick={()=>setShowOne(showone+4)} className='bg-transparent text-success font-semibold text-[18px] lg:text-[24px]'>See More</Button>
                )
               }
            </div>
              </div>
          <div className=" grid grid-cols-2 mg:grid-cols-3 lg:grid-cols-4 gap-6">
            {clubdetails.slice(0,showone).map((item) => (
              <div key={item.id} className="">
                <img key={item.id} src={item.image} alt="" />
                <h3 className="text-[16px] lg:text-[24px] font-bold font-jakarta py-2">
                  {item.tittle}
                </h3>
                <p className="text-xs md:text-[15px] font-medium text-white">
                  {item.pera}
                </p>
                <div className="flex gap-x-2 items-center pt-2 pb-4">
                    <div className="flex gap-x-1 items-center">
                        <MdOutlineDateRange />
                        <p className="text-[10px] md:text-[15px] font-normal text-white">{item.day}</p>

                        
                    </div>
                    <div className="flex gap-x-1 items-center">
                        <MdOutlineAccessTime />

                        <p className="text-[10px] md:text-[15px]font-normal text-white">{item.time}</p>

                        
                    </div>
                </div>

                <Button className="font-bold text-[15px] bg-success text-white">Book  Now</Button>
              </div>
            ))}
          </div>
        </div>


{/* map  */}

 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29203.77768686869!2d90.35131949999999!3d23.8018018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0dbef6e3337%3A0x857c331f4fff96c4!2sMirpur%20College!5e0!3m2!1sen!2sbd!4v1785021501834!5m2!1sen!2sbd" className='w-full h-50 lg:h-120 mt-8 lg:mt-16'   allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
        

        </div>




       



      </div>
    </section>
  );
}

export default Club;
