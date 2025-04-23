import Image from "next/image";
import React from "react";
import hero_img1 from "../../../public/hero-img1.svg";
import hero_img2 from "../../../public/hero-img2.svg";

const Hero = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="flex justify-between items-center md:items-start mx-5 md:mx-24">
        <div>
          <div className="mt-10">
            <h1 className="font-extrabold text-xl md:text-[35px] lg:text-[56px] text-[#051609] md:leading-13">
              Empowering Growth,
            </h1>
            <h2 className="font-extrabold text-xl md:text-[35px] lg:text-[56px] text-[#051609]">
              Expanding Possibilities:{" "}
            </h2>
          </div>

          <p className="lg:w-[590px] my-4 md:my-10 text-[12px] sm:text-[18px] md:text-[20px] lg::text-[24px] text-[#3A3A3A]">
            We drive sustainable growth for businesses and communities through
            innovative tools, strategic planning, and partnerships, unlocking
            future potential.
          </p>

          <div className="hidden md:flex items-center space-x-2 md:space-x-8">
            <button className="md:px-10 px-5 rounded-lg cursor-pointer md:py-3.5 py-2 transition-colors border text-[#019B83] border-[#019B83] hover:bg-[#019B83] hover:text-[#EDEDED]">
              Donate
            </button>
            <button className="md:px-10 px-5 rounded-lg cursor-pointer md:py-3.5 py-2 bg-[#019B83] transition-colors hover:border-[#019B83] hover:bg-[#EDEDED] border text-[#EDEDED] hover:text-[#019B83]">
              Join Us
            </button>
          </div>
        </div>

        <div>
          <Image src={hero_img1} alt="hero img" className="max-w-full h-auto" />
        </div>
      </div>

      <div className="flex px-5 mt-2 w-full items-center md:hidden space-x-2 md:space-x-8">
        <button className="md:px-10 w-full px-5 rounded-lg cursor-pointer py-3.5 border border-[#019B83]">
          Donate
        </button>
        <button className="md:px-10 w-full px-5 rounded-lg cursor-pointer py-3.5 bg-[#019B83] text-[#EDEDED]">
          Join Us
        </button>
      </div>

      <div className="flex px-5 items-center w-full xl:-mt-48">
        <Image
          className="mx-auto max-w-full h-auto"
          src={hero_img2}
          alt="hero img"
        />
      </div>
    </div>
  );
};

export default Hero;
