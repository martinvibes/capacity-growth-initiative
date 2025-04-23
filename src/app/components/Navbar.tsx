import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../public/logo.svg";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleActiveItem = (item: string) => {
    setActiveItem(item);

    const sectionId = item.toLowerCase().replace(/\s+/g, "-");
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

    setIsMobileMenuOpen(false);
  };

  return (
    <div className=" flex justify-between items-center mx-5 md:mx-24 my-4">
      <span className="cursor-pointer">
        <Image src={logo} alt="logo" />
      </span>

      <div className="overflow-x-hidden">
        <ul className="flex items-center space-x-5 font-semibold text-[25px]">
          {["Home", "About Us", "What We Do", "Contact Us"].map((item) => (
            <li
              key={item}
              onClick={() => handleActiveItem(item)}
              className={`cursor-pointer hidden md:block duration-300 transition-colors whitespace-nowrap ${
                activeItem == item
                  ? "text-[#019B83] border-b-2 border-[#019B83]"
                  : "text-[#051609]"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <button className="rounded-xl hidden md:block cursor-pointer hover:bg-[#018d83] py-2 text-white font-semibold text-2xl px-4 bg-[#019B83]">
        Donate
      </button>

      <span
        className="block z-50 md:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X /> : <Menu />}
      </span>

      {isMobileMenuOpen && (
        <div className="absolute top-8 right-4 px-10 py-4 w-fit rounded-lg bg-[#D1E2D5] shadow-lg z-40">
          <ul className="flex flex-col items-center space-y-6 py-4 font-bold text-lg">
            {["Home", "About Us", "What We Do", "Contact Us"].map((item) => (
              <li
                key={item}
                onClick={() => handleActiveItem(item)}
                className={`cursor-pointer duration-300 transition-colors ${
                  activeItem === item
                    ? "text-[#019B83] border-b-2 border-[#019B83]"
                    : "text-[#051609]"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
          <button className="rounded-xl block cursor-pointer hover:bg-[#018d83] py-2 text-white font-semibold text-2xl px-5 bg-[#019B83]">
            Donate
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
