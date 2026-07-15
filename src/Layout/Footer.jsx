import React from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import Logo from "../assets/logo.png";
import { RiPencilRuler2Line } from "react-icons/ri";
import { Button } from "@heroui/react";

function Footer() {
  const icons = [
    {
      id: 1,
      icon: FaFacebookF,
    },
    {
      id: 2,
      icon: FaInstagram,
    },
    {
      id: 3,
      icon: FaTwitter,
    },
    {
      id: 4,
      icon: FaLinkedinIn,
    },
    {
      id: 5,
      icon: FaYoutube,
    },
    {
      id: 6,
      icon: FaTiktok,
    },
  ];

  const menuFirst = [
    { id: 1, name: "Home" },
    { id: 2, name: "Eat" },
    { id: 3, name: "Drink" },
    { id: 4, name: "Events" },
    { id: 5, name: "Club" },
    { id: 6, name: "Recreation" },
  ];
  const menuSecond = [
    { id: 1, name: "Blog" },
    { id: 2, name: "Careers" },
    { id: 3, name: "Contact" },
    { id: 4, name: "FAQs" },
  ];

  const utilitypage = [
    { id: 1, name: "Start Here" },
    { id: 2, name: "Pay with Crypto" },
    { id: 3, name: "Style Guide" },
    { id: 4, name: "Password Protected" },
    { id: 5, name: "404 Not Found" },
    { id: 6, name: "Licenses" },
    { id: 7, name: "Changelog" },
  ];

  return (
    <section className="mt-20 mb-23 max-w-7xl mx-auto px-4 md:px-0">
      <div className="flex justify-between gap-14 flex-col lg:flex-row">
        <div className="flex flex-col order-1">
          <img src={Logo} alt="" />
          <p className="text-[15px] text-primary font-normal py-6">
            Copyright 2022 ©{" "}
          </p>
          <div className="flex gap-x-5 items-center">
            {icons.map((item) => (
              <a className="text-success text-xl" href="" key={item.id}>
                <item.icon />
              </a>
            ))}
          </div>
        </div>

        <div className="order-3 lg:order-2 flex justify-between gap-10 lg:gap-30">
          <div>
            <h3 className="text-[16px] font-bold text-primary tracing-[8%] pb-7 border-b">
              Menu
            </h3>

            <div className="flex mt-7 gap-x-10">
              <div className="flex flex-col gap-y-3">
                {menuFirst.map((item) => (
                  <li
                    key={item.id}
                    className="text-[16px] font-normal text-[#656B89] tracking-tight"
                  >
                    {item.name}
                  </li>
                ))}
              </div>

              <div className="flex flex-col gap-y-3">
                {menuSecond.map((item) => (
                  <li
                    key={item.id}
                    className="text-[16px] font-normal text-[#656B89] tracking-tight"
                  >
                    {item.name}
                  </li>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-[16px] font-bold text-primary tracing-[8%] pb-7 border-b">
              Utility
            </h3>

            <div className="flex flex-col gap-y-3 mt-7">
              {utilitypage.map((item) => (
                <li
                  key={item.id}
                  className="text-[16px] font-normal text-[#656B89] tracking-tight"
                >
                  {item.name}
                </li>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:w-[288px] rounded-[20px] bg-[#F5FAFF] py-7 px-6 order-2 lg:order-4">
          <div className="flex flex-col">
            <div className="h-13.5 w-13.5 rounded-[16px] bg-success flex justify-center items-center">
              <RiPencilRuler2Line className="text-3xl text-white" />
            </div>
            <h3 className="text-primary font-bold text-[22px] tracking-[-1%] mt-4">
              Become a Partner
            </h3>
            <p className="text-[16px] text-[#656B89] tracking-[1%] leading-[27px] mt-3 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod
              pellentesque posuere.
            </p>
            <Button className="w-full text-[15px] tracking-[-1%] text-white bg-success rounded-[6px]">
              Join Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
