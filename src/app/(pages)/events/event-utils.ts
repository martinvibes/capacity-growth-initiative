import type { Event } from './[id]/types';

// Mock data - in a real app, this would come from an API or database
export const events: Record<number, Event> = {
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
  // Add other events here...
  3: {
    id: 3,
    title: "Virtual Career Day: Connect with Top Employers",
    image: "/upcome3.png",
    date: "September 28, 2025",
    time: "10:00 AM - 03:00 PM",
    location: "Zoom Meeting",
    locationType: "zoom",
    keynotes: [
      "Career Advice from Top Employers",
      "Interview Preparation Tips",
      "Networking Opportunities",
      "Job Search Strategies",
      "Q&A Session",
    ],
 host: "Micheal Samuel",
    link: "https://www.CGI.Com/Webinar/facebook.com",
    speakers: ["James peter", "Benny john", "Emmanuel sani "],
  },
  
  4: {     
      id: 4,
      title: "Community outreach program",
      image: "/upcome4.png",
      date: "october 05,  2025",
      time: "09:00 AM - 01:00 PM",
      location: "Downtown Community Center",
      locationType: "venue",
      keynotes: [
        "Community Engagement Strategies",
        "Volunteer Opportunities",
        "Community Building",
        "Q&A Session",
      ],
      host: "Micheal Samuel",
      link: "https://www.CGI.Com/Webinar/facebook.com",
      speakers: ["James peter", "Benny john", "Emmanuel sani "],
    },
   5: {
     id: 5,
     title: "Online fundraising campaign launch",
      image: "/upcome5.png",
      date: "october 12, 2025",
      time: "12:00 PM - 01:00 PM",
      location: "Facebook Live",
      locationType: "facebook",
      keynotes: [
        "Fundraising Campaign Launch",
        "Donation Opportunities",
        "Community Engagement",
        "Q&A Session",
      ],
      host: "Micheal Samuel",
      link: "https://www.CGI.Com/Webinar/facebook.com",
      speakers: ["James peter", "Benny john", "Emmanuel sani "],
    },
};

// Server-side version of getEventById
export function getEventById(id: number): Event | undefined {
  return events[id];
}
