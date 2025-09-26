'use client';

import { useState } from 'react';
import PageTemplate from '../../_components/PageTemplate';

type Event = {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  category: 'upcoming' | 'past';
  registrationLink?: string;
};

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  // Sample event data - in a real app, this would come from an API
  const events: Event[] = [
    {
      id: 1,
      title: 'Community Empowerment Workshop',
      date: '2023-11-15',
      time: '10:00 AM - 2:00 PM',
      location: 'Community Center, 123 Main St',
      description: 'Join us for a day of learning and empowerment. This workshop will cover essential skills for community leadership and development.',
      image: '/images/events/workshop.jpg',
      category: 'upcoming',
      registrationLink: '#'
    },
    {
      id: 2,
      title: 'Annual Fundraising Gala',
      date: '2023-12-05',
      time: '7:00 PM - 11:00 PM',
      location: 'Grand Ballroom, 456 Park Ave',
      description: 'An evening of celebration and philanthropy. Help us raise funds for our community programs while enjoying fine dining and entertainment.',
      image: '/images/events/gala.jpg',
      category: 'upcoming',
      registrationLink: '#'
    },
    {
      id: 3,
      title: 'Youth Leadership Summit',
      date: '2023-10-20',
      time: '9:00 AM - 4:00 PM',
      location: 'Convention Center, 789 Oak St',
      description: 'A day-long summit for young leaders to develop skills, network, and create positive change in their communities.',
      image: '/images/events/summit.jpg',
      category: 'past'
    },
    {
      id: 4,
      title: 'Community Cleanup Day',
      date: '2023-09-30',
      time: '8:00 AM - 12:00 PM',
      location: 'Riverside Park, 101 River Rd',
      description: 'Join your neighbors in making our community cleaner and greener. All supplies will be provided.',
      image: '/images/events/cleanup.jpg',
      category: 'past'
    }
  ];

  const filteredEvents = events.filter(event => event.category === activeTab);
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <PageTemplate title="Events">
      <div className="space-y-8">
        {/* Event Tabs */}
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`${activeTab === 'upcoming' ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`${activeTab === 'past' ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Past Events
            </button>
          </nav>
        </div>

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event) => (
              <div 
                key={event.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedEvent(event)}
              >
                <div className="h-48 bg-gray-200 relative">
                  <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-500">Event Image</span>
                  </div>
                  {event.category === 'past' && (
                    <div className="absolute top-4 right-4 bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      Past Event
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">{event.title}</h3>
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {formatDate(event.date)}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.location}
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">{event.description}</p>
                  {event.registrationLink && (
                    <a
                      href={event.registrationLink}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-block px-4 py-2 bg-green-600 text-white rounded-md text-sm font-medium hover:bg-green-700 transition-colors"
                    >
                      Register Now
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No {activeTab} events</h3>
            <p className="mt-1 text-sm text-gray-500">
              {activeTab === 'upcoming' 
                ? 'Check back soon for upcoming events.'
                : 'No past events to display.'}
            </p>
          </div>
        )}

        {/* Event Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <div className="h-64 bg-gray-200">
                  <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-500">Event Image</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 text-gray-500 hover:text-gray-700"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedEvent.title}</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="h-5 w-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Date & Time</p>
                      <p className="text-gray-900">
                        {formatDate(selectedEvent.date)} • {selectedEvent.time}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="h-5 w-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Location</p>
                      <p className="text-gray-900">{selectedEvent.location}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">About This Event</h3>
                  <p className="text-gray-600">{selectedEvent.description}</p>
                </div>
                
                <div className="mt-8">
                  {selectedEvent.registrationLink ? (
                    <a
                      href={selectedEvent.registrationLink}
                      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                      Register Now
                    </a>
                  ) : (
                    <button
                      type="button"
                      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-400 cursor-not-allowed"
                      disabled
                    >
                      Registration Closed
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </PageTemplate>
  );
}
