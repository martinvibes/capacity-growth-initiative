"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { FiClock, FiMapPin, FiArrowRight } from "react-icons/fi";
import Line from "../../../public/Line.png";
import Line2 from "../../../public/Line2.png";
import mail from "../../../public/mail.png";

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

const UpcomingEvents = () => {
  const [email, setEmail] = useState("");

  const events: Event[] = [
    {
      id: 1,
      image: "/upcome1.png",
      day: "17",
      month: "Sept",
      title: "webinar on the importance of teaming collaborations",
      time: "11:00 PM - 11:45 PM",
      location: "Facebook Live",
      locationType: "facebook",
    },
    {
      id: 2,
      image: "/upcome2.png",
      day: "21",
      month: "Sept",
      title: "workshop for prospective volunteers",
      time: "02:00 PM - 04:00 PM",
      location: "New City Hall",
      locationType: "venue",
    },
    {
      id: 3,
      image: "/upcome3.png",
      day: "28",
      month: "Sept",
      title: "Virtual career day : connect with top employers",
      time: "10:00 AM - 12:00 PM",
      location: "Zoom",
      locationType: "zoom",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed with:", email);
    setEmail("");
  };

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h3 className="text-[#019B83] text-[25px] font-bold leading-[100%] mb-2 inline-block text-start  relative">
          Upcoming events
          <span className="block w-90  mx-auto mt-3">
            <Image src={Line} alt="line" />
          </span>
        </h3>
        <h2 className="text-3xl md:text-[55px] font-bold leading-[100%] text-[#000000] mt-2">
          What&#39;s Happening <span className="md:block">Next..</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-[90%]">
        {/* Events List */}
        <div className="lg:col-span-2  space-y-6 border border-[#0516091A]">
          {events.map((event) => (
            <div
              key={event.id}
              className=" hover:shadow-md transition-all  duration-300 lg:flex lg:flex-row flex-col overflow-hidden border border-[#0516091A] "
            >
              <Image
                src={event.image}
                alt={event.title}
                width={128}
                height={128}
                className="lg:w-[30%] lg:h-[30%] w-full h-full object-cover"
              />
              <div className="flex-1 p-6 flex flex-col justify-center">
                <div className="flex items-start">
                  <div className="bg-gray-100 text-gray-800 rounded-lg w-16 h-20 flex flex-col items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-[40px] font-bold text-[#019B83]">
                      {event.day}
                    </span>
                    <span className="text-sm text-[#051609] font-bold">
                      {event.month}
                    </span>
                    <span className="block w-10   mx-auto mt-3 z-40 relative">
                      <Image src={Line2} alt="line" />
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#051609] mb-2">
                      {event.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-600 space-y-1 sm:space-y-0 sm:space-x-4">
                      <div className="flex items-center">
                        <FiClock className="mr-1.5 text-[#019B83]" />
                        <span className="text-[#019B83]">{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <FiMapPin className="mr-1.5 text-[#019B83]" />
                        <span className="text-[#019B83]">{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-[#051609] text-white  p-4  h-fit shadow-lg">
          <div className="text-center space-y-[80px]">
            <div className="w-24 h-24  flex items-center justify-center mx-auto mb-6">
              <Image src={mail} alt="mail" />
            </div>
            <h3 className="text-[20px] font-bold text-[#F9F9F9] mb-3">
              Subscribe to our Newsletter
              <p className="text-[#F9F9F970] text-[12px] mb-6">
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
                  className="w-full px-5 py-[20px] bg-[#F9F9F9] border-[3px] border-[#F9F9F9] rounded-[10px] focus:border-transparent leading-[100%] text-[12px] font-semibold outline-none text-black placeholder-[#0516094A] transition"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#019B83] text-[#F9F9F9] py-[20px] px-6 rounded-[10px] font-semibold hover:bg-[#017a69] transition-all duration-300 transform hover:scale-[1.02] border-[#F9F9F9] border-[3px] flex items-center justify-center leading-[100%] text-[12px] mb-6 "
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
