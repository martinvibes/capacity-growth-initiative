'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Event, CarouselImage } from '@/types';
import {
  getEvents,
  addEvent as storageAddEvent,
  updateEvent as storageUpdateEvent,
  deleteEvent as storageDeleteEvent,
  getCarouselImages,
  addCarouselImage as storageAddCarouselImage,
  deleteCarouselImage as storageDeleteCarouselImage,
} from '@/utils/storage';

interface AdminContextType {
  events: Event[];
  carouselImages: CarouselImage[];
  addEvent: (event: Omit<Event, 'id'>) => void;
  updateEvent: (id: string, event: Partial<Event>) => void;
  deleteEvent: (id: string) => void;
  addCarouselImage: (image: Omit<CarouselImage, 'id'>) => void;
  deleteCarouselImage: (id: string) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

interface AdminProviderProps {
  children: ReactNode;
}

export const AdminProvider: React.FC<AdminProviderProps> = ({ children }) => {
  const [events, setEventsState] = useState<Event[]>([]);
  const [carouselImages, setCarouselImagesState] = useState<CarouselImage[]>([]);

  useEffect(() => {
    // Load initial data from localStorage
    setEventsState(getEvents());
    setCarouselImagesState(getCarouselImages());
  }, []);

  const addEvent = (eventData: Omit<Event, 'id'>) => {
    const newEvent: Event = {
      ...eventData,
      id: crypto.randomUUID(),
    };
    storageAddEvent(newEvent);
    setEventsState(prev => [...prev, newEvent]);
  };

  const updateEvent = (id: string, updatedData: Partial<Event>) => {
    storageUpdateEvent(id, updatedData);
    setEventsState(prev =>
      prev.map(event =>
        event.id === id ? { ...event, ...updatedData } : event
      )
    );
  };

  const deleteEvent = (id: string) => {
    storageDeleteEvent(id);
    setEventsState(prev => prev.filter(event => event.id !== id));
  };

  const addCarouselImage = (imageData: Omit<CarouselImage, 'id'>) => {
    const newImage: CarouselImage = {
      ...imageData,
      id: crypto.randomUUID(),
    };
    storageAddCarouselImage(newImage);
    setCarouselImagesState(prev => [...prev, newImage]);
  };

  const deleteCarouselImage = (id: string) => {
    storageDeleteCarouselImage(id);
    setCarouselImagesState(prev => prev.filter(img => img.id !== id));
  };

  const value: AdminContextType = {
    events,
    carouselImages,
    addEvent,
    updateEvent,
    deleteEvent,
    addCarouselImage,
    deleteCarouselImage,
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
};
