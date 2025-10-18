import { Event, CarouselImage } from '@/types';

const EVENTS_KEY = 'admin_events';
const CAROUSEL_KEY = 'admin_carousel_images';

// Events storage functions
export const getEvents = (): Event[] => {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(EVENTS_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const setEvents = (events: Event[]): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(EVENTS_KEY, JSON.stringify(events));
};

export const addEvent = (event: Event): void => {
  const events = getEvents();
  events.push(event);
  setEvents(events);
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
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(CAROUSEL_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const setCarouselImages = (images: CarouselImage[]): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(CAROUSEL_KEY, JSON.stringify(images));
};

export const addCarouselImage = (image: CarouselImage): void => {
  const images = getCarouselImages();
  images.push(image);
  setCarouselImages(images);
};

export const deleteCarouselImage = (id: string): void => {
  const images = getCarouselImages();
  const filtered = images.filter(img => img.id !== id);
  setCarouselImages(filtered);
};
