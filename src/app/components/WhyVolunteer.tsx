import React, { useState } from "react";
import why_choose_us from "../../../public/why-choose-us.svg";
import no_star from "../../../public/star.svg";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import VolunteerForm from "./Form";

const WhyVolunteer = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="flex flex-col md:flex-row items-center mx-5 md:mx-24 my-4 sm:space-x-4 md:space-x-8">
      <div className="w-full md:w-1/2 flex justify-start text-left">
        <Image
          src={why_choose_us}
          alt="icon"
          className="w-full md:mx-0 md:max-w-full"
        />
      </div>

      <div className="w-full text-center md:w-1/2">
        <h1 className="text-[#051609] text-xl md:text-2xl lg:text-3xl mt-4 md:mt-0 mb-4 md:mb-2 lg:mb-4 font-bold text-center md:text-left">
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
              className="flex py-2 justify-center md:justify-start text-base md:text-lg lg:text-xl text-[#051609] items-center space-x-3"
            >
              <Image
                src={no_star}
                alt="icon"
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
              />
              <span>{item}</span>
            </li>
          ))}
          <li
            onClick={handleModal}
            className="flex cursor-pointer mt-4 md:mt-2 lg:mt-4 text-lg sm:text-xl font-semibold space-x-2 items-center text-[#019B83] justify-center md:justify-start"
          >
            <span>Get started</span>
            <ArrowRight />
          </li>
        </ul>
      </div>

      {openModal && <VolunteerForm setOpenModal={setOpenModal} />}
    </div>
  );
};

export default WhyVolunteer;
