"use client";

import { FiClock, FiMapPin } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import Line2 from "../../../public/Line2.png";

interface Event {
  id: number;
  image: string;
  day: string;
  month: string;
  title: string;
  time: string;
  location: string;
  locationType: "zoom" | "facebook" | "venue";
}

const EventCard = ({ event, index }: { event: Event; index: number }) => {
  const isTealBg = index === 0;

  return (
    <div className="mb-8 border border-[#0516091A] ">
      <Link
        href={`/events/${event.id}`}
        className="block hover:no-underline focus:no-underline"
        aria-label={`View details for ${event.title}`}
      >
        <div
          className={`flex flex-col md:flex-row  overflow-hidden  transition-colors duration-300 ${
            isTealBg
              ? "bg-teal-600 text-white hover:bg-[#019B83] focus:bg-[#019B83] hover:text-white focus:text-white"
              : "bg-white hover:bg-teal-300 hover:text-white focus:bg-[#019B83] focus:text-white"
          }`}
        >
          <div className="md:w-1/3">
            <Image
              src={event.image}
              alt={event.title}
              height={250}
              width={250}
              className="w-full h-48 md:h-full object-cover"
            />
          </div>
          <div className="p-6 md:w-2/3 flex flex-col md:flex-row">
            <div className=" p-4 text-gray-800  w-16 space-y-2 h-20 flex flex-col items-center justify-center mr-4 flex-shrink-0">
              <span
                className={`text-[30px] font-bold leading-[100%] text-[#019B83] ${
                  isTealBg ? "text-white" : "text-[#019B83]"
                }`}
              >
                {event.day}
              </span>
              <span
                className={`text-[15px] leading-[100%] text-[#051609] font-bold ${
                  isTealBg ? "text-white" : "text-[#019B83]"
                }`}
              >
                {event.month}
              </span>
              <span className="block w-[30px] mx-auto z-40 relative">
                <Image src={Line2} alt="line" />
              </span>
            </div>
            <div className=" md:ml-6 flex flex-col items-end w-full gap-[25px] my-5">
              <h3
                className={`text-xl font-bold mb-2 text-[12px] text-end ${
                  isTealBg ? "text-white" : "text-[#051609]"
                }`}
              >
                {event.title}
              </h3>
              <div className="flex flex-row gap-4 mt-4">
                <div className="flex items-center  text-[10px]  font-bold leading-[100%]">
                  <FiClock
                    className={`mr-2 ${
                      isTealBg ? "text-teal-200" : "text-[#019B83]"
                    }`}
                  />
                  <span
                    className={isTealBg ? "text-teal-100" : "text-[#019B83]"}
                  >
                    {event.time}
                  </span>
                </div>
                <div className="flex items-center text-[10px]  font-bold leading-[100%]">
                  <FiMapPin
                    className={`mr-2 ${
                      isTealBg ? "text-teal-200" : "text-[#019B83]"
                    }`}
                  />
                  <span
                    className={isTealBg ? "text-teal-100" : "text-[#019B83]"}
                  >
                    {event.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default EventCard;
