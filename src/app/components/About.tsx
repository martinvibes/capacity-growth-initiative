import Image from "next/image";
import React from "react";
import aboutus1 from "../../../public/about.svg";
import Line from "../../../public/Line.png";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row  mx-5 md:mx-24 my-4 sm:space-x-4 md:space-x-8">
      <div className="w-full md:w-1/2 flex justify-start text-left">
        <Image
          src={aboutus1}
          alt="about img"
          className="w-full md:mx-0 md:max-w-full shadow-2xl rounded-md"
        />
      </div>
      <div className="text-[24px] font-normal mt-5  sm:w-[25rem]">
        <h1
          className="font-bold mb-2 text-[24px] md:text-[40px] text-center
         "
        >
          About
          <span className="block w-90  mx-auto mt-3">
            <Image src={Line} alt="line" />
          </span>
        </h1>

        <p className="text-[16px] md:text-[24px] mt-2">
          “Capacity Change Initiative equips people and organisations with the
          tools, skills, and strategies to lead sustainable change and growth”
        </p>
      </div>
    </div>
  );
};

export default About;
