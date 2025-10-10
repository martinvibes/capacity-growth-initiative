"use client";

import React from "react";
import EventCard from "../../components/EventCard";
import Line from "../../../../public/Line.png";
import Ellipse3 from "../../../../public/Ellipse3.png";
import Image from "next/image";

type Event = {
  id: number;
  image: string;
  day: string;
  month: string;
  title: string;
  time: string;
  location: string;
  locationType: "facebook" | "venue" | "zoom";
  isFeatured?: boolean;
};

export default function EventsPage() {
  const events: Event[] = [
    {
      id: 1,
      image: "/upcome1.png",
      day: "17",
      month: "Sept",
      title: "webinar on the importance of teaming collaborations",
      time: "11:00 PM - 11:45 PM",
      location: "Facebook",
      locationType: "facebook",
      isFeatured: true,
    },
    {
      id: 2,
      image: "/upcome2.png",
      day: "21",
      month: "Sept",
      title: "workshop for prospective volunteers",
      time: "02:00 PM - 04:00 PM",
      location: "New choice hall",
      locationType: "venue",
    },
    {
      id: 3,
      image: "/upcome3.png",
      day: "28",
      month: "Sept",
      title: "Hands-on Youths Skill acquisition training  ",
      time: "10:00 AM - 03:00 PM",
      location: "GGSS Zipak",
      locationType: "zoom",
    },
    {
      id: 4,
      image: "/upcome4.png",
      day: "05",
      month: "Oct",
      title: "Virtual career day : Connect with top employers ",
      time: "09:00 AM - 01:00 PM",
      location: "Facebook",
      locationType: "venue",
    },
    {
      id: 5,
      image: "/upcome5.png",
      day: "12",
      month: "Oct",
      title: "webinar on the importance of team collaborations ",
      time: "12:00 PM - 01:00 PM",
      location: "Facebook",
      locationType: "facebook",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col ">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-teal-50 to-white ">
        <div className="text-center mb-12">
          <h3 className="text-[#019B83] z-50 text-[25px] font-bold leading-[100%] mb-2 inline-block text-start  relative">
            Upcoming events
            <span className="block w-90  mx-auto mt-3">
              <Image src={Line} alt="line" />
            </span>
          </h3>
          <h2 className="text-3xl md:text-[55px] font-bold leading-[100%] z-50 relative text-[#000000] mt-2">
            What&#39;s Happening <span className="md:block">Next..</span>
          </h2>
        </div>
        <div className="absolute w-[29rem] sm:right-0 sm:top-0">
          <Image src={Ellipse3} alt="circle1" className="z-0" />
        </div>
      </section>
      {/* Events Section */}
      <section className="py-16 bg-white z-50 " id="events" >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto border-x border-[#0516091A] hover:text-white">
            {events.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
