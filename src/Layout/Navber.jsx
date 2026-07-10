import { useState } from "react";
import {
  ChevronDown,
  ShoppingCart,
  User,
  Menu,
  X,
  Palmtree,
} from "lucide-react";
 
const thingsToDoItems = ["Water Sports", "Day Parties", "Outdoors", "Rentals"];
 
const accountItems = ["My Profile", "My History", "Sign Out"];
 
const mobileLinks = ["Eat & Drink", "Events", "Club"];
 
const mobileBottomLinks = [
  "My Profile",
  "Pay With Crypto",
  "Cart",
  "Contact Us",
  "Log Out",
];
 
 function Navbar() {
  const [thingsOpen, setThingsOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileThingsOpen, setMobileThingsOpen] = useState(false);
 
  return (
    <nav className="relative w-full bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1 text-2xl font-bold text-blue-600">
          <Palmtree className="h-7 w-7 -rotate-6 text-blue-500" strokeWidth={2.5} />
          ChillsBay
        </a>
 
        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600">
            Eat &amp; Drink
          </a>
 
          <a href="#" className="flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-blue-600">
            Club
            <span className="rounded-full bg-blue-600 px-2 py-0.5 text-[10px] font-semibold text-white">
              HOT
            </span>
          </a>
 
          {/* Things to do dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setThingsOpen(true)}
            onMouseLeave={() => setThingsOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-600">
              Things to do
              <ChevronDown
                className={`h-4 w-4 transition-transform ${thingsOpen ? "rotate-180" : ""}`}
              />
            </button>
 
            {thingsOpen && (
              <div className="absolute left-0 top-full w-48 rounded-lg border border-gray-100 bg-white py-2 shadow-lg">
                {thingsToDoItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
 
        {/* Right side icons */}
        <div className="hidden items-center gap-5 lg:flex">
          <button aria-label="Cart" className="text-gray-700 hover:text-blue-600">
            <ShoppingCart className="h-5 w-5" />
          </button>
 
          {/* Account dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAccountOpen(true)}
            onMouseLeave={() => setAccountOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-600">
              <User className="h-5 w-5" />
              Account
            </button>
 
            {accountOpen && (
              <div className="absolute right-0 top-full w-44 rounded-lg border border-gray-100 bg-white py-2 shadow-lg">
                {accountItems.map((item, i) => (
                  <a
                    key={item}
                    href="#"
                    className={`block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 ${
                      i === 0 ? "bg-blue-50 text-blue-600" : ""
                    }`}
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
 
          <button className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">
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
              <a href="#" className="flex items-center gap-1 text-xl font-bold text-blue-600">
                <Palmtree className="h-6 w-6 -rotate-6 text-blue-500" strokeWidth={2.5} />
                ChillsBay
              </a>
              <button aria-label="Close menu" onClick={() => setMobileOpen(false)}>
                <X className="h-6 w-6 text-gray-700" />
              </button>
            </div>
 
            <div className="flex flex-col gap-4">
              {mobileLinks.map((item) => (
                <a key={item} href="#" className="text-base font-medium text-gray-700">
                  {item}
                </a>
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
                    <a key={item} href="#" className="text-sm text-gray-600">
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
 
            <hr className="my-5 border-gray-200" />
 
            <div className="flex flex-col gap-4">
              {mobileBottomLinks.map((item) => (
                <a key={item} href="#" className="text-base font-medium text-gray-700">
                  {item}
                </a>
              ))}
            </div>
 
            <button className="mt-6 w-full rounded-lg bg-blue-600 py-3 text-sm font-semibold text-white hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}


export default Navbar