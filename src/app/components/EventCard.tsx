"use client";

import { FiClock, FiMapPin,  } from "react-icons/fi";
import Image from "next/image";
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
    <div
      className={`flex flex-col md:flex-row rounded-lg overflow-hidden shadow-lg mb-8 transition-colors duration-300 ${
        isTealBg 
          ? "bg-teal-600 text-white hover:bg-teal-700 focus:bg-teal-700" 
          : "bg-white hover:bg-teal-600 hover:text-white focus:bg-teal-600 focus:text-white"
      }`}
      tabIndex={0} // Make the div focusable
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
        <div
          className={`flex flex-col items-center justify-center p-4 ${
            isTealBg ? "text-white" : "text-teal-600"
          } font-bold`}
        >
          <span className="text-4xl">{event.day}</span>
          <span className="text-sm uppercase">{event.month}</span>
        </div>
        <div className="flex-1 md:ml-6">
          <h3
            className={`text-xl font-bold mb-2 ${
              isTealBg ? "text-white" : "text-gray-800"
            }`}
          >
            {event.title}
          </h3>
          <div className="flex items-center mb-2">
            <FiClock
              className={`mr-2 ${isTealBg ? "text-teal-200" : "text-gray-500"}`}
            />
            <span className={isTealBg ? "text-teal-100" : "text-gray-600"}>
              {event.time}
            </span>
          </div>
          <div className="flex items-center">
            <FiMapPin
              className={`mr-2 ${isTealBg ? "text-teal-200" : "text-gray-500"}`}
            />
            <span className={isTealBg ? "text-teal-100" : "text-gray-600"}>
              {event.location}
            </span>
          </div>
         
        </div>
      </div>
    </div>
  );
};
export default EventCard;