'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Event, CarouselImage } from '@/types';
import {
  fetchEvents,
  createEvent as apiCreateEvent,
  updateEvent as apiUpdateEvent,
  deleteEvent as apiDeleteEvent,
  fetchCarouselImages,
  createCarouselImage as apiCreateCarouselImage,
  deleteCarouselImage as apiDeleteCarouselImage,
} from '@/utils/api-fixed';

interface AdminContextType {
  events: Event[];
  carouselImages: CarouselImage[];
  loading: boolean;
  addEvent: (event: Omit<Event, 'id'>) => Promise<void>;
  updateEvent: (id: string, event: Partial<Event>) => Promise<void>;
  deleteEvent: (id: string) => Promise<void>;
  addCarouselImage: (image: Omit<CarouselImage, 'id'>) => Promise<void>;
  deleteCarouselImage: (id: string) => Promise<void>;
  refreshData: () => Promise<void>;
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
  const [loading, setLoading] = useState(true);

  const refreshData = async () => {
    try {
      setLoading(true);
      const [eventsData, carouselData] = await Promise.all([
        fetchEvents(),
        fetchCarouselImages(),
      ]);

      // Normalize incoming events so they match the local Event type
      const normalizedEvents = (eventsData || []).map(evt => ({
        ...evt,
        locationType:
          evt.locationType === 'venue' ||
          evt.locationType === 'zoom' ||
          evt.locationType === 'facebook'
            ? (evt.locationType as 'venue' | 'zoom' | 'facebook')
            : undefined,
      })) as Event[];

      setEventsState(normalizedEvents);
      setCarouselImagesState(carouselData);
    } catch (error) {
      console.error('Error refreshing data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshData();
  }, []);

  const addEvent = async (eventData: Omit<Event, 'id'>) => {
    const newEvent: Event = {
      ...eventData,
      id: crypto.randomUUID(),
    };

    // Optimistically update UI
    setEventsState(prev => [...prev, newEvent]);

    try {
      const eventPayload: Event = {
        ...newEvent,
        location: newEvent.location ?? '',
      };
      const result = await apiCreateEvent(eventPayload);
      if (!result) {
        // Revert on failure
        setEventsState(prev => prev.filter(e => e.id !== newEvent.id));
        throw new Error('Failed to create event');
      }
    } catch (error) {
      // Revert on failure
      setEventsState(prev => prev.filter(e => e.id !== newEvent.id));
      throw error;
    }
  };

  const updateEvent = async (id: string, updatedData: Partial<Event>) => {
    // Store original event for potential revert
    const originalEvent = events.find(e => e.id === id);
    if (!originalEvent) return;

    // Optimistically update UI
    setEventsState(prev =>
      prev.map(event =>
        event.id === id ? { ...event, ...updatedData } : event
      )
    );

    try {
      const result = await apiUpdateEvent(id, updatedData);
      if (!result) {
        // Revert on failure
        setEventsState(prev =>
          prev.map(event =>
            event.id === id ? originalEvent : event
          )
        );
        throw new Error('Failed to update event');
      }
    } catch (error) {
      // Revert on failure
      setEventsState(prev =>
        prev.map(event =>
          event.id === id ? originalEvent : event
        )
      );
      throw error;
    }
  };

  const deleteEvent = async (id: string) => {
    if (!id) {
      console.error('Attempted to delete event with no ID');
      throw new Error('Cannot delete event: No ID provided');
    }

    // Store original events for potential revert
    const originalEvents = [...events];
    
    // Find the event being deleted for better error reporting
    const eventToDelete = originalEvents.find(e => e.id === id);
    if (!eventToDelete) {
      console.error(`Event with ID ${id} not found in local state`);
      throw new Error('Event not found');
    }

    console.log(`Deleting event:`, eventToDelete);

    // Optimistically update UI
    setEventsState(prev => {
      const updated = prev.filter(event => event.id !== id);
      console.log(`Updated events after deletion:`, updated);
      return updated;
    });

    try {
      const success = await apiDeleteEvent(id);
      if (!success) {
        throw new Error('API call to delete event failed');
      }
      console.log(`Successfully deleted event with ID: ${id}`);
    } catch (error) {
      console.error('Error deleting event, reverting UI:', error);
      // Revert on failure
      setEventsState(originalEvents);
      throw new Error(`Failed to delete event: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  const addCarouselImage = async (imageData: Omit<CarouselImage, 'id'>) => {
    const newImage: CarouselImage = {
      ...imageData,
      id: crypto.randomUUID(),
    };

    // Optimistically update UI
    setCarouselImagesState(prev => [...prev, newImage]);

    try {
      const result = await apiCreateCarouselImage(newImage);
      if (!result) {
        // Revert on failure
        setCarouselImagesState(prev => prev.filter(img => img.id !== newImage.id));
        throw new Error('Failed to create carousel image');
      }
    } catch (error) {
      // Revert on failure
      setCarouselImagesState(prev => prev.filter(img => img.id !== newImage.id));
      throw error;
    }
  };

  const deleteCarouselImage = async (id: string) => {
    // Store original images for potential revert
    const originalImages = [...carouselImages];

    // Optimistically update UI
    setCarouselImagesState(prev => prev.filter(img => img.id !== id));

    try {
      const success = await apiDeleteCarouselImage(id);
      if (!success) {
        // Revert on failure
        setCarouselImagesState(originalImages);
        throw new Error('Failed to delete carousel image');
      }
    } catch (error) {
      // Revert on failure
      setCarouselImagesState(originalImages);
      throw error;
    }
  };

  const value: AdminContextType = {
    events,
    carouselImages,
    loading,
    addEvent,
    updateEvent,
    deleteEvent,
    addCarouselImage,
    deleteCarouselImage,
    refreshData,
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
};
