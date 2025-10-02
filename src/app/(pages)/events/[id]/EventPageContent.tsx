'use client';

import { notFound } from "next/navigation";
import { FaFacebook } from "react-icons/fa";
import Image from "next/image";
import { FiMapPin } from "react-icons/fi";
import type { Event, EventMetadata } from './types';

// Mock data - in a real app, this would come from an API or database
const events: Record<number, Event> = {
  1: {
    id: 1,
    title: "Webinar on the Importance of Team Collaborations",
    image: "/upcome1.png",
    date: "September 17, 2025",
    time: "11:00pm - 11:45pm",
    location: "Facebook",
    locationType: "facebook",
    keynotes: [
      "Why Collaboration Matters",
      "The Cost of Poor Collaboration",
      "The Future of Team Collaboration",
      "Building a Culture of Collaboration",
      "Practical Strategies for Effective Teamwork",
    ],
    host: "Micheal Samuel",
    link: "https://www.CGI.Com/Webinar/facebook.com",
    speakers: ["James peter", "Benny john", "Emmanuel sani "],
  },
  2: {
    id: 2,
    title: "Workshop for Prospective Volunteers",
    image: "/upcome2.png",
    date: "September 21, 2025",
    time: "02:00 PM - 04:00 PM",
    location: "New City Hall",
    locationType: "venue",
    keynotes: [
      "Introduction to Volunteering",
      "Available Volunteer Roles",
      "Success Stories",
      "Getting Started Guide",
      "Q&A Session",
    ],
    host: "Micheal Samuel",
    link: "https://www.CGI.Com/Webinar/facebook.com",
    speakers: ["James peter", "Benny john", "Emmanuel sani "],
  },
  3: {
    id: 3,
    title: "Virtual Career Day: Connect with Top Employers",
    image: "/upcome3.png",
    date: "September 28, 2025",
    time: "10:00 AM - 03:00 PM",
    location: "Zoom",
    locationType: "zoom",
    keynotes: [
      "Industry trends",
      "Resume Building",
      "Interview Preparation",
      "Networking Strategies",
      "Career Growth",
    ],
    host: "Micheal Samuel",
    link: "https://www.CGI.Com/Webinar/facebook.com",
    speakers: ["James peter", "Benny john", "Emmanuel sani "],
  },
  4: {
    id: 4,
    title: "Community outreach program",
    image: "/upcome4.png",
    date: "October 05, 2025",
    time: "09:00 AM - 01:00 PM",
    location: "Downtown Community Center",
    locationType: "venue",
    keynotes: [
      "Engagement",
      "Empowerment",
      "Inclusion",
      "Awareness",
      "Collaboration",
    ],
    host: "Micheal Samuel",
    link: "https://www.CGI.Com/Webinar/facebook.com",
    speakers: ["James peter", "Benny john", "Emmanuel sani "],
  },
  5: {
    id: 5,
    title: "Online fundraising campaign launch",
    image: "/upcome5.png",
    date: "October 12, 2025",
    time: "12:00 PM - 01:00 PM",
    location: "facebook",
    locationType: "online",
    keynotes: [
      "The Power of Digital Giving",
      "Building Donor Trust and Transparency",
      "Leveraging Social Media for Maximum Reach",
      "Storytelling that Inspires Action",
      "Sustainable Online Fundraising Strategies",
    ],
    host: "Micheal Samuel",
    link: "https://www.CGI.Com/Webinar/facebook.com",
    speakers: ["James peter", "Benny john", "Emmanuel sani "],
  },
};

// Helper function to get event by ID
export const getEventById = (id: number): Event | undefined => {
  return events[id];
};

export async function generateMetadata({ params }: { params: { id: string } }): Promise<EventMetadata> {
  const eventId = Number(params.id);
  if (isNaN(eventId)) {
    return {
      title: 'Event Not Found',
      description: 'The requested event could not be found.',
    };
  }

  const event = getEventById(eventId);
  if (!event) {
    return {
      title: 'Event Not Found',
      description: 'The requested event could not be found.',
    };
  }

  return {
    title: event.title,
    description: `Join us for ${event.title} on ${event.date} at ${event.time}. ${event.keynotes.join(' ').substring(0, 150)}...`,
    openGraph: {
      title: event.title,
      description: `Join us for ${event.title} on ${event.date} at ${event.time}`,
      images: [event.image],
      type: 'website',
    },
  };
}

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
