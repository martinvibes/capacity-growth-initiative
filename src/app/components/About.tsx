import Image from "next/image";
import React from "react";
import aboutus1 from "../../../public/aboutus1.png";
import Line from "../../../public/Line.png";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row  mx-5 md:mx-24 my-20 sm:space-x-4 md:space-x-20">
      <div className="w-full md:w-1/2 flex justify-start text-left">
        <Image
          src={aboutus1}
          alt="about img"
          className="w-full md:mx-0 md:max-w-full shadow-2xl rounded-md"
        />
      </div>
      <div className="mt-5  sm:w-[25rem]">
        <h1
          className="font-bold mb-2 text-[30px] text-[#019B83] leading-[100%] md:text-[40px] text-center
         "
        >
          About
          <span className="block w-40 h-10 mx-auto mt-3">
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
