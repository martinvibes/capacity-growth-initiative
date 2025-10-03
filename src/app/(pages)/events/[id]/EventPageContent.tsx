'use client';

import { notFound } from "next/navigation";
import { FaFacebook } from "react-icons/fa";
import Image from "next/image";
import { FiMapPin } from "react-icons/fi";
import { getEventById } from '../event-utils';

export default function EventDetailsPage({ params }: { params: { id: string } }) {
  const eventId = Number(params.id);
  if (isNaN(eventId)) {
    notFound();
  }

  const event = getEventById(eventId);
  if (!event) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section with Image */}
      <div className="relative w-full h-64 md:h-96 mb-12">
        <Image
          src={event.image}
          alt="event image"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Event Content */}
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl md:text-3xl font-bold text-[#019B83] text-center px-4 mb-2">
          {event.title}
        </h1>

        {/* Event Header */}
        <div className="text-center mb-12">
          {/* Event Details Row */}
          <div className="flex flex-wrap justify-center gap-6 text-[#05160933] mb-8">
            <div className="flex items-center">
              <span className="mr-2">
                <FiMapPin />
              </span>
              <span> {event.location}</span>
            </div>
            <div className="hidden md:block">•</div>
            <div>{event.date}</div>
            <div className="hidden md:block">•</div>
            <div>{event.time}</div>
          </div>
        </div>

        <div className="">
          {/* Left Column - Keynotes */}
          <div className="flex space-x-10 md:space-x-52">
            <h2 className="text-2xl font-semibold mb-4">Keynote :</h2>
            <ul className="space-y-4 pl-6 list-disc">
              {event.keynotes.map((keynote: string, index: number) => (
                <li key={index} className="text-[#051609]">
                  <span className="font-medium">{keynote}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Host & Link */}
          <div className="space-y-8 mt-22">
            <div className="flex justify-between">
              <div className="flex items-center gap-2 text-center">
                <h3 className="text-lg font-medium">Host :</h3>
                <p className="text-[#051609]">{event.host}</p>
              </div>
              <div className="flex items-center gap-2 text-center">
                <h3 className="text-lg font-bold ">Link :</h3>
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#051609] font-bold text-[15px]  underline flex items-center"
                >
                  <FaFacebook className="mr-2" />
                  https://www.CGI.Com/Webinar/facebook.com
                </a>
              </div>
            </div>

            {/* Speakers Section */}
            <div className="flex gap-5">
              <h3 className="text-lg font-medium mb-2">Speakers :</h3>
              <ul className="space-y-2 text-[#051609]">
                {event.speakers.map((speaker: string, index: number) => (
                  <li key={index} className="text-[#051609] font-bold">
                    {speaker}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
