"use client";

import { useState } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Vector from "../../../public/Vector.png";
import VolunteerForm from "../(pages)/form/page";
import Link from "next/link";

export default function VolunteerSection() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-[87%]  mx-auto my-40 ">
      <div className="md:w-1/2 w-full h-[300px] md:h-auto relative">
        <Image
          src="/why-choose-us.svg"
          alt="Team"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="relative md:ml-[-12px] md:w-1/2 w-full text-white flex items-center justify-center p-6 sm:p-10 overflow-hidden">
        <Image
          src="/voluntryBg.png"
          alt="Background"
          fill
          className="absolute object-cover"
        />

        <div className="absolute inset-0 z-10" />

        {/* Foreground Content */}
        <div className="max-w-md space-y-6 relative z-20 text-center gap-[48px] md:text-left">
          <h2 className="text-2xl sm:text-2xl font-bold leading-[100%] text-[#F9F9F9] mb-14 ">
            Why Volunteer With Us?
          </h2>

          <ul className="space-y-4 text-base gap-[54px] text-[#F9F9F9] sm:text-[20px] leading-[100%] font-semibold ">
            {[
              "Make a difference in people’s lives",
              "Gain valuable experience and skills",
              "Be part of a passionate community",
            ].map((text, i) => (
              <li key={i} className="flex items-center gap-3">
                <Image
                  src={Vector}
                  alt="icon"
                  width={20}
                  height={20}
                  className="min-w-[20px] h-auto"
                />
                <span>{text}</span>
              </li>
            ))}
          </ul>

          <button className="mt-4 inline-flex items-center cursor-pointer bg-[#019B83] text-[#F9F9F9] p-[16px] rounded-[8px] transition border-[3px] border-[#F9F9F9] text-[20px] leading-[100%] font-semibold ">
            <Link href="/form">Get Started</Link>
            <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
      {openModal && <VolunteerForm setOpenModal={setOpenModal} />}
    </div>
  );
}
