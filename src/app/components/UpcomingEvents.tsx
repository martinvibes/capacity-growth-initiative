// src/app/components/UpcomingEvents.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { FiClock, FiMapPin, FiArrowRight, FiMail } from "react-icons/fi";
import Line from "../../../public/Line.png";

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
      image: "/images/events/event1.jpg",
      day: "17",
      month: "Sept",
      title: "International Conference 2023",
      time: "11:00 PM - 11:45 PM",
      location: "New Choice Hall",
      locationType: "venue",
    },
    {
      id: 2,
      image: "/images/events/event2.jpg",
      day: "21",
      month: "Sept",
      title: "Tech Workshop Series",
      time: "02:00 PM - 04:00 PM",
      location: "Zoom Meeting",
      locationType: "zoom",
    },
    {
      id: 3,
      image: "/images/events/event3.jpg",
      day: "28",
      month: "Sept",
      title: "Community Meetup",
      time: "10:00 AM - 12:00 PM",
      location: "Facebook Live",
      locationType: "facebook",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed with:", email);
    setEmail("");
  };

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 -z-10">
        <div className="w-64 h-64 rounded-full bg-green-50 opacity-70 blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 left-0 -z-10">
        <div className="w-96 h-96 rounded-full bg-green-50 opacity-50 blur-3xl"></div>
      </div>

      {/* Section Header */}
      <div className="text-center mb-12">
        <h3 className="text-[#019B83] text-lg mb-2 inline-block relative">
          Upcoming events
          <span className="block w-90  mx-auto mt-3">
            <Image src={Line} alt="line" />
          </span>
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          What's Happening Next..
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Events List */}
        <div className="lg:col-span-2 space-y-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex overflow-hidden border border-gray-100"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-32 h-32 object-cover"
              />
              <div className="flex-1 p-6 flex flex-col justify-center">
                <div className="flex items-start">
                  <div className="bg-gray-100 text-gray-800 rounded-lg w-16 h-20 flex flex-col items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-2xl font-bold text-[#019B83]">
                      {event.day}
                    </span>
                    <span className="text-xs text-gray-500">{event.month}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {event.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-600 space-y-1 sm:space-y-0 sm:space-x-4">
                      <div className="flex items-center">
                        <FiClock className="mr-1.5 text-[#019B83]" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <FiMapPin className="mr-1.5 text-[#019B83]" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <button className="mt-6 w-full md:w-auto bg-[#019B83] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#018b76] transition-colors flex items-center justify-center mx-auto">
            View all Events
            <FiArrowRight className="ml-2" />
          </button>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gray-900 text-white rounded-2xl p-8 h-fit shadow-lg">
          <div className="text-center">
            <div className="w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
              <FiMail className="text-white text-xl" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Subscribe to our Newsletter
            </h3>
            <p className="text-gray-300 mb-6">
              Get the latest on news and events
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-5 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:ring-2 focus:ring-[#019B83] focus:border-transparent outline-none text-white placeholder-gray-400 transition"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#019B83] text-white py-3 px-6 rounded-xl font-medium hover:bg-[#017a69] transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* View All Events Button */}
      <div className="text-center mt-12">
        <button className="group inline-flex items-center text-[#019B83] font-medium hover:text-[#017a69] transition-all">
          View all Events
          <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
};

export default UpcomingEvents;
