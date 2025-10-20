import { Event, CarouselImage } from '@/types';

const EVENTS_KEY = 'admin_events';
const CAROUSEL_KEY = 'admin_carousel_images';

// Default static data that ships with the app
const DEFAULT_EVENTS: Event[] = [
  {
    id: 'default-1',
    title: 'Community Empowerment Workshop',
    date: '2024-12-15',
    time: '10:00 AM - 12:00 PM',
    location: 'New City Hall',
    locationType: 'venue',
    description: 'Join us for an interactive workshop focused on community empowerment and skill development.',
    image: '/upcome1.png',
  },
  {
    id: 'default-2',
    title: 'Youth Leadership Summit',
    date: '2024-12-20',
    time: '2:00 PM - 5:00 PM',
    location: 'Virtual Event',
    locationType: 'zoom',
    description: 'A summit bringing together young leaders to discuss innovation and entrepreneurship.',
    image: '/upcome2.png',
  },
  {
    id: 'default-3',
    title: 'Technology for Development',
    date: '2024-12-25',
    time: '9:00 AM - 4:00 PM',
    location: 'Innovation Hub',
    locationType: 'venue',
    description: 'Exploring how technology can drive sustainable development in our communities.',
    image: '/upcome3.png',
  },
];

const DEFAULT_CAROUSEL: CarouselImage[] = [
  {
    id: 'default-carousel-1',
    imageUrl: '/slide1.png',
  },
  {
    id: 'default-carousel-2',
    imageUrl: '/slide2.png',
  },
  {
    id: 'default-carousel-3',
    imageUrl: '/slide3.png',
  },
];

// Events storage functions
export const getEvents = (): Event[] => {
  if (typeof window === 'undefined') return DEFAULT_EVENTS;
  const stored = localStorage.getItem(EVENTS_KEY);
  const adminEvents = stored ? JSON.parse(stored) : [];

  // Return admin events if they exist, otherwise return defaults
  return adminEvents.length > 0 ? adminEvents : DEFAULT_EVENTS;
};

export const setEvents = (events: Event[]): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(EVENTS_KEY, JSON.stringify(events));
};

export const addEvent = (event: Event): void => {
  const events = getEvents();
  // Filter out default events when adding admin events
  const adminEvents = events.filter(e => !e.id.startsWith('default-'));
  adminEvents.push(event);
  setEvents(adminEvents);
};

export const updateEvent = (id: string, updatedEvent: Partial<Event>): void => {
  const events = getEvents();
  const index = events.findIndex(e => e.id === id);
  if (index !== -1) {
    events[index] = { ...events[index], ...updatedEvent };
    setEvents(events);
  }
};

export const deleteEvent = (id: string): void => {
  const events = getEvents();
  const filtered = events.filter(e => e.id !== id);
  setEvents(filtered);
};

// Carousel images storage functions
export const getCarouselImages = (): CarouselImage[] => {
  if (typeof window === 'undefined') return DEFAULT_CAROUSEL;
  const stored = localStorage.getItem(CAROUSEL_KEY);
  const adminImages = stored ? JSON.parse(stored) : [];

  // Return admin images if they exist, otherwise return defaults
  return adminImages.length > 0 ? adminImages : DEFAULT_CAROUSEL;
};

export const setCarouselImages = (images: CarouselImage[]): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(CAROUSEL_KEY, JSON.stringify(images));
};

export const addCarouselImage = (image: CarouselImage): void => {
  const images = getCarouselImages();
  // Filter out default images when adding admin images
  const adminImages = images.filter(img => !img.id.startsWith('default-carousel-'));
  adminImages.push(image);
  setCarouselImages(adminImages);
};

export const deleteCarouselImage = (id: string): void => {
  const images = getCarouselImages();
  const filtered = images.filter(img => img.id !== id);
  setCarouselImages(filtered);
};
