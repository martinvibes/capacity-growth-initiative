import Image from "next/image";
import React from "react";
import aboutus1 from "../../../public/aboutus1.png";
import Line from "../../../public/Line.png";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row  items-center md:w-[77%] mx-5 md:mx-36 my-20 sm:space-x-4 md:space-x-10">
      <div className="w-full md:w-[45%] flex justify-start text-left">
        <Image
          src={aboutus1}
          alt="about img"
          className="w-full md:mx-0 md:max-w-full shadow-2xl rounded-md"
        />
      </div>
      <div className="mt-5  sm:w-[25rem]">
        <h1
          className="font-bold mb-1 text-[20px] text-[#019B83] leading-[100%] md:text-[25px] text-center
         "
        >
          About
          <span className="block w-20 h-10 mx-auto mt-1">
            <Image src={Line} alt="line" />
          </span>
        </h1>

        <p className="text-[22px] md:text-[17px] leading-[100%] font-medium text-center mt-2">
          “Capacity Change Initiative equips people and organisations with the
          tools, skills, and strategies to lead sustainable change and growth”
        </p>
      </div>
    </div>
  );
};

export default About;
