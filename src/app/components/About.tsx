import Image from "next/image";
import React from "react";
import aboutus1 from "../../../public/aboutus1.png";
import Line from "../../../public/Line.png";

const About = () => {
  return (
    <div className="flex flex-row w-[90%] sm:items-center md:w-[77%] mx-5 md:mx-36 my-20 sm:space-x-4 md:space-x-10 space-x-3  ">
      <div className="w-full  md:w-[45%] flex justify-start text-left">
        <Image
          src={aboutus1}
          alt="about img"
          className="w-full md:mx-0 md:max-w-full shadow-2xl"
        />
      </div>
      <div className=" sm:mt-5 mt-2 w-[20rem]  sm:w-[25rem]">
        <h1
          className="font-bold sm:mb-1 text-[20px] text-[#019B83] leading-[100%] md:text-[25px] text-center
         "
        >
          About
          <span className="block w-20 sm:h-10 mx-auto mt-1">
            <Image src={Line} alt="line" />
          </span>
        </h1>

        <p className="text-[9px] md:text-[17px] leading-[100%] font-medium text-center sm:mt-2 mt-3">
          “Capacity Change Initiative equips people and organisations with the
          tools, skills, and strategies to lead sustainable change and growth”
        </p>
      </div>
    </div>
  );
};

export default About;
