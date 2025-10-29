"use client";

import React from "react";
import EventCard from "../../components/EventCard";
import Line from "../../../../public/Line.png";
import Ellipse3 from "../../../../public/Ellipse3.png";
import Image from "next/image";
import { useAdmin } from "@/context/AdminContextNew";

export default function EventsPage() {
  const { events } = useAdmin();

  // Convert events to display format for EventCard
  const displayEvents = events.map(event => {
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
      isFeatured: false, // Can be set based on some logic if needed
    };
  });

  return (
    <div className="min-h-screen flex flex-col ">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-teal-50 to-white ">
        <div className="text-center mb-12">
          <h3 className="text-[#019B83] z-50 text-[20px] font-bold leading-[100%] mb-2 inline-block text-start  relative">
            Upcoming events
            <span className="block w-40  mx-auto mt-1">
              <Image src={Line} alt="line" />
            </span>
          </h3>
          <h2 className="text-3xl md:text-[30px] font-bold leading-[100%] z-50 relative text-[#000000] mt-2">
            What&#39;s Happening <span className="md:block">Next..</span>
          </h2>
        </div>
        <div className="absolute w-[29rem] sm:right-0 sm:top-0">
          <Image src={Ellipse3} alt="circle1" className="z-0" />
        </div>
      </section>
      {/* Events Section */}
      <section className="py-16  z-50 " id="events" >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto border-x border-[#0516091A] hover:text-white">
            {displayEvents.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
