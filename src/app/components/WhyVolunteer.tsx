"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Vector from "../../../public/Vector.png";
import Link from "next/link";

export default function VolunteerSection() {

  return (
    <div className="flex  flex-row md:h-[400px] md:w-[77%] w-[98%]  mx-auto my-20 ">
      <div className="md:w-1/2 w-full  md:h-auto relative">
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
        <div className="max-w-md  text-left sm:space-y-6 relative z-20 sm:text-center gap-[48px] md:text-left">
          <h2 className="text-[10px] sm:text-2xl font-bold leading-[100%] text-[#F9F9F9] sm:mb-14 mb-3 ">
            Why Volunteer With Us?
          </h2>

          <ul className="sm:space-y-4 space-y-2  text-base text-[7.3px] gap-[54px] text-[#F9F9F9] sm:text-[20px] leading-[100%] font-semibold ">
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

          <button className="mt-4 inline-flex items-center cursor-pointer bg-[#019B83] text-[#F9F9F9] sm:p-[16px] p-[8px] rounded-[8px] transition border-[3px] border-[#F9F9F9] sm:text-[20px] text-[8px] leading-[100%] font-semibold ">
            <Link href="/form">Get Started</Link>
            <FaArrowRight className="ml-3" />
          </button>
        </div>
      </div>

    </div>
  );
}
