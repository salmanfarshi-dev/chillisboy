import { useState } from "react";
import { ChevronDown, ShoppingCart, User, Menu, X } from "lucide-react";

import Logo from "../assets/logo.png";
import AccountModal from "../Component/AccountModal";

const thingsToDoItems = ["Water Sports", "Day Parties", "Outdoors", "Rentals"];

const accountItems = ["My Profile", "My History", "Sign Out"];

const mobileLinks = ["Eat & Drink", "Events", "Club"];

const mobileBottomLinks = ["My Profile", "Cart", "Contact Us", "Log Out"];

function Navbar() {
  const [thingsOpen, setThingsOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [isLoggedIn] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileThingsOpen, setMobileThingsOpen] = useState(false);
  return (
    <nav className="relative w-full bg-white ">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <li className="list-none cursor-pointer flex items-center gap-1 text-2xl font-bold text-blue-600">
          <img src={Logo} alt="" className="w-40 h-auto" />
        </li>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          <li className="text-[18px] font-medium list-none cursor-pointer text-primary hover:text-blue-600 transition">
            Eat & Drink
          </li>
 <button>
  <AccountModal/>
 </button>
          <li className="list-none cursor-pointer flex items-center gap-1.5 text-sm font-medium text-primary hover:text-blue-600 text-[18px] transition">
            Club
            <span className="rounded-full bg-blue-600 px-2 py-0.5 text-[10px] font-semibold text-white ">
              HOT
            </span>
          </li>

          {/* Things to do dropdown */}
          <div
            className="relative z-40"
            onMouseEnter={() => setThingsOpen(true)}
            onMouseLeave={() => setThingsOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-primary text-[18px]  transition hover:text-blue-600 cursor-pointer">
              Things to do
              <ChevronDown
                className={`h-4 w-4 transition-transform ${thingsOpen ? "rotate-180" : ""}`}
              />
            </button>

            {thingsOpen && (
              <div className="absolute left-0 top-full w-48 rounded-lg border border-gray-100 bg-white py-2 shadow-lg">
                {thingsToDoItems.map((item) => (
                  <li
                    key={item}
                    className="block cursor-pointer px-4 py-2 text-sm text-primary hover:bg-blue-50 hover:text-blue-600"
                  >
                    {item}
                  </li>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right side icons */}
        <div className="hidden items-center gap-5 lg:flex">
          <button
            aria-label="Cart"
            className="text-primary cursor-pointer hover:text-blue-600"
          >
            <ShoppingCart className="h-7 w-7 text-primary" />
          </button>

          {/* Account dropdown */}
          <div className="relative z-40">
            <button
              onClick={() => setAccountOpen((prev) => !prev)}
              className="flex items-center gap-1 text-sm lg:text-[18px] cursor-pointer transition-all font-medium text-primary hover:text-blue-600"
            >
              <User className="h-5 w-5" />
              Account
            </button>

            {accountOpen &&
              (isLoggedIn ? (
                <div className="absolute right-0 top-full w-[200px] rounded-lg border border-gray-100 bg-white py-2 shadow-lg">
                  {accountItems.map((item) => (
                    <li key={item} className="block px-4 py-2 hover:bg-blue-50">
                      {item}
                    </li>
                  ))}
                </div>
              ) : (
                <div className="absolute right-0 top-10 w-[500px] bg-red-400 py-6 px-3">
                 
                </div>
              ))}
          </div>

          <button className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm lg:text-[18px] font-semibold text-white hover:bg-blue-700 duration-300 cursor-pointer">
            Contact Now
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label="Open menu"
          className="text-gray-700 lg:hidden"
          onClick={() => setMobileOpen(true)}
        >
          <Menu className="h-7 w-7" />
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 flex h-full w-72 flex-col bg-white px-6 py-5 shadow-xl">
            <div className="mb-6 flex items-center justify-between">
              <li className="flex items-center gap-1 text-xl font-bold text-blue-600">
                <img src={Logo} alt="" className="w-40 h-auto" />
              </li>
              <button
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
              >
                <X className="h-6 w-6 text-gray-700" />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              {mobileLinks.map((item) => (
                <li key={item} className="text-base font-medium text-gray-700">
                  {item}
                </li>
              ))}

              <button
                className="flex items-center justify-between text-base font-medium text-gray-700"
                onClick={() => setMobileThingsOpen((v) => !v)}
              >
                Things to do
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${mobileThingsOpen ? "rotate-180" : ""}`}
                />
              </button>

              {mobileThingsOpen && (
                <div className="ml-3 flex flex-col gap-3 border-l border-gray-200 pl-3">
                  {thingsToDoItems.map((item) => (
                    <li key={item} className="text-sm text-gray-600">
                      {item}
                    </li>
                  ))}
                </div>
              )}
            </div>

            <hr className="my-5 border-gray-200" />

            <div className="flex flex-col gap-4">
              {mobileBottomLinks.map((item) => (
                <li key={item} className="text-base font-medium text-gray-700">
                  {item}
                </li>
              ))}
            </div>

            <button className="mt-6 w-full rounded-lg bg-blue-600 py-3 text-sm font-semibold text-white hover:bg-blue-700">
              Contact Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
