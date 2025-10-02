import React, { useState } from "react";
import why_choose_us from "../../../public/why-choose-us.svg";
import no_star from "../../../public/star.svg";
import voluntryBg from "../../../public/voluntryBg.png";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import VolunteerForm from "./Form";

const WhyVolunteer = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="flex flex-col md:flex-row items-center mx-5 md:mx-24 my-4  ">
      <div className="w-full md:w-1/2 flex justify-start text-left  ">
        <Image
          src={why_choose_us}
          alt="icon"
          className="w-full md:mx-0 md:max-w-full"
        />
      </div>

      <div className="w-full relative flex md:justify-start md:text-center text-left flex-col  items-center md:w-1/2">
        <Image
          src={voluntryBg}
          alt="voluntryBG"
          className=" w-[100%]  rounded-md  sm:w-[79.5%] sm:ml-[-8rem] shadow-2xl sm:rounded-br-md  sm:rounded-tr-md "
        />

        <div className="absolute inset-0 items-center  ml-5 sm:ml-0 mt-20 sm:mt-0 ">
          <h1 className="text-xl md:text-1xl  lg:text-3xl mt-4 md:mt-14 text-[#F9F9F9] mb-4 md:mb-2 lg:mb-4 font-bold text-center md:text-left  ">
            Why Volunteer With Us?
          </h1>
          <ul>
            {[
              "Make a difference in people’s lives",
              "Gain valuable experience and skills",
              "Be part of a passionate community",
            ].map((item, index) => (
              <li
                key={index}
                className="flex py-2 justify-center md:justify-start text-[#F9F9F9] text-base md:text-lg lg:text-md items-center space-x-3"
              >
                <Image
                  src={no_star}
                  alt="icon"
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                />
                <span>{item}</span>
              </li>
            ))}
            <button
              onClick={handleModal}
              className="flex cursor-pointer ml-16 md:ml-0 mt-4 sm:mt-2 lg:mt-4 text-lg sm:text-xl font-semibold space-x-2 items-center text-[#F9F9F9] border-[3px] border-[#F9F9F9] bg-[#019B83] justify-center md:justify-start rounded-[8px] p-[14px]"
            >
              <span>Get started</span>
              <ArrowRight />
            </button>
          </ul>
        </div>
      </div>

      {openModal && <VolunteerForm setOpenModal={setOpenModal} />}
    </div>
  );
};

export default WhyVolunteer;
