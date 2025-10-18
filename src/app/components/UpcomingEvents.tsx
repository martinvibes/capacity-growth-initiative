"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { FiClock, FiMapPin, FiArrowRight } from "react-icons/fi";
import Line from "../../../public/Line.png";
import Line2 from "../../../public/Line2.png";
import mail from "../../../public/mail.png";
import circle2hf from "../../../public/circle2hf.png";
import circle1 from "../../../public/circle1.png";
import { useAdmin } from "@/context/AdminContext";

const UpcomingEvents = () => {
  const [email, setEmail] = useState("");
  const { events } = useAdmin();

  // Convert events to display format
  const displayEvents = events.slice(0, 3).map(event => {
    const date = new Date(event.date);
    return {
      id: event.id,
      image: event.image,
      day: date.getDate().toString(),
      month: date.toLocaleString('default', { month: 'short' }),
      title: event.title,
      time: event.time || "TBD",
      location: event.location || "TBD",
      locationType: event.locationType || "venue",
    };
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed with:", email);
    setEmail("");
  };

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl z-50  mx-auto">
      <div className="absolute w-[15rem] right-[-2rem] top-0">
        <Image src={circle1} alt="circle1" className="z-0" />
      </div>
      <div className="text-center mb-12 z-50 relative">
        <h3 className="text-[#019B83] text-[30px] font-bold leading-[100%] mb-2 inline-block text-start  relative">
          Upcoming events
          <span className="block w-90  mx-auto mt-3">
            <Image src={Line} alt="line" />
          </span>
        </h3>
        <h2 className="text-3xl md:text-[55px] font-bold leading-[100%] text-[#000000] mt-2">
          What&#39;s Happening <span className="md:block">Next..</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[5rem] relative z-40 ">
        <div className="absolute w-[23rem] right-[27rem] top-[-1rem]">
          <Image src={circle1} alt="circle1" className="z-0" />
        </div>
        {/* Events List */}
        <div className="lg:col-span-2 w-full text-end items-end z-50 relative space-y-[55px]">
          {displayEvents.map((event) => (
            <div
              key={event.id}
              className=" hover:shadow-md transition-all z-40   duration-300 lg:flex lg:flex-row flex-col overflow-hidden border border-[#0516091A] "
            >
              <Image
                src={event.image}
                alt={event.title}
                width={108}
                height={108}
                className="lg:w-[40%] lg:h-[20%] relative z-50 w-full h-full object-cover"
              />
              <div className="flex-1 p-6 flex flex-col z-40 relative ">
                <div className="flex">
                  <div className=" text-gray-800 rounded-lg w-16 space-y-2 h-20 flex flex-col items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-[30px] font-bold leading-[100%] text-[#019B83]">
                      {event.day}
                    </span>
                    <span className="text-[15px] leading-[100%] text-[#051609] font-bold">
                      {event.month}
                    </span>
                    <span className="block w-[30px] mx-auto z-40 relative">
                      <Image src={Line2} alt="line" />
                    </span>
                  </div>
                  <div className="  flex flex-col items-end w-full gap-[25px]">
                    <h3 className="text-[12px] text-end font-bold text-[#051609] mb-2">
                      {event.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center text-[10px] text-gray-600 font-bold leading-[100%] space-y-1 sm:space-y-0 sm:space-x-[5px] ">
                      <div className="flex items-center justify-end text-end">
                        <FiClock className="mr-1.5 text-[#019B83]" />
                        <span className="text-[#019B83]">{event.time}</span>
                      </div>
                      <div className="flex items-center text-end">
                        <FiMapPin className="mr-1.5 text-[#019B83]" />
                        <span className="text-[#019B83]">{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="absolute z-0 bottom-0 left-0 w-[20rem] ">
            <Image src={circle2hf} alt="haftcircle" />
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-[#051609] text-white p-4 z-40 h-fit shadow-lg">
          <div className="text-center space-y-[50px]">
            <div className="w-24 h-24  flex items-center justify-center mx-auto ">
              <Image src={mail} alt="mail" />
            </div>
            <h3 className="text-[20px] leading-[100%] font-bold text-[#F9F9F9] text-start ">
              Subscribe to our Newsletter
              <p className="text-[#F9F9F970] leading-[100%] text-[12px] mt-[7px] ">
                Get the latest on news and events
              </p>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-[50px]">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-5 py-[20px] bg-[#F9F9F9] border-[3px] border-[#F9F9F9] rounded-[2px] focus:border-transparent leading-[100%] text-[12px] font-semibold outline-none text-black placeholder-[#0516094A] transition"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#019B83] text-[#F9F9F9] py-[20px] px-6 rounded-[2px] font-semibold hover:bg-[#017a69] transition-all duration-300 transform hover:scale-[1.02] border-[#F9F9F9] border-[3px] flex items-center justify-center leading-[100%] text-[12px] mb-6 "
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* View All Events Button */}
      <div className="text-center mt-12">
        <Link
          href="/events"
          className="mt-6 w-fit bg-[#019B83] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#018b76] transition-colors flex items-center justify-center mx-auto"
        >
          View all Events
          <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
};

export default UpcomingEvents;
