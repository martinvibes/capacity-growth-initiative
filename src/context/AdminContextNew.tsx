
'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import {
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc
} from 'firebase/firestore';
import { Event, CarouselImage } from '@/types';

interface AdminContextType {
  events: Event[];
  carouselImages: CarouselImage[];
  addEvent: (eventData: Omit<Event, 'id'>) => Promise<void>;
  deleteEvent: (id: string) => Promise<void>;
  addCarouselImage: (data: Omit<CarouselImage, 'id'>) => Promise<void>;
  deleteCarouselImage: (id: string) => Promise<void>;
}

const AdminContext = createContext<AdminContextType | null>(null);

export const AdminProvider = ({ children }: { children: React.ReactNode }) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [carouselImages, setCarouselImages] = useState<CarouselImage[]>([]);

  // --- Listen to Firestore in real time ---
  useEffect(() => {
    const unsubEvents = onSnapshot(collection(db, 'events'), (snapshot) => {
      setEvents(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Event)));
    });

    const unsubCarousel = onSnapshot(collection(db, 'carousel'), (snapshot) => {
      setCarouselImages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as CarouselImage)));
    });

    return () => {
      unsubEvents();
      unsubCarousel();
    };
  }, []);

  // --- Add new event ---
  const addEvent = async (eventData: Omit<Event, 'id'>) => {
    await addDoc(collection(db, 'events'), eventData);
  };

  // --- Delete event ---
  const deleteEvent = async (id: string) => {
    await deleteDoc(doc(db, 'events', id));
  };

  // --- Add carousel image ---
  const addCarouselImage = async (data: Omit<CarouselImage, 'id'>) => {
    await addDoc(collection(db, 'carousel'), data);
  };

  // --- Delete carousel image ---
  const deleteCarouselImage = async (id: string) => {
    await deleteDoc(doc(db, 'carousel', id));
  };

  return (
    <AdminContext.Provider value={{ events, carouselImages, addEvent, deleteEvent, addCarouselImage, deleteCarouselImage }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};


// import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
// import { Event, CarouselImage } from '@/types';
// import {
//   fetchEvents,
//   fetchCarouselImages,
//   createEvent as apiCreateEvent,
//   updateEvent as apiUpdateEvent,
//   deleteEvent as apiDeleteEvent,
//   createCarouselImage as apiCreateCarouselImage,
//   deleteCarouselImage as apiDeleteCarouselImage,
// } from '@/utils/api-fixed';

// interface AdminContextType {
//   events: Event[];
//   carouselImages: CarouselImage[];
//   loading: boolean;
//   addEvent: (event: Omit<Event, 'id'>) => Promise<void>;
//   updateEvent: (id: string, event: Partial<Event>) => Promise<void>;
//   deleteEvent: (id: string) => Promise<void>;
//   addCarouselImage: (image: Omit<CarouselImage, 'id'>) => Promise<void>;
//   deleteCarouselImage: (id: string) => Promise<void>;
//   refreshData: () => Promise<void>;
// }

// const AdminContext = createContext<AdminContextType | undefined>(undefined);

// export const useAdmin = () => {
//   const context = useContext(AdminContext);
//   if (!context) {
//     throw new Error('useAdmin must be used within an AdminProvider');
//   }
//   return context;
// };

// interface AdminProviderProps {
//   children: ReactNode;
// }

// export const AdminProvider: React.FC<AdminProviderProps> = ({ children }) => {
//   const [events, setEventsState] = useState<Event[]>([]);
//   const [carouselImages, setCarouselImagesState] = useState<CarouselImage[]>([]);
//   const [loading, setLoading] = useState(true);

//   const refreshData = async () => {
//     try {
//       setLoading(true);
//       const [eventsData, carouselData] = await Promise.all([
//         fetchEvents(),
//         fetchCarouselImages(),
//       ]);

//       // Normalize incoming events so they match the local Event type
//       const normalizedEvents = (eventsData || []).map(evt => ({
//         ...evt,
//         locationType:
//           evt.locationType === 'venue' ||
//           evt.locationType === 'zoom' ||
//           evt.locationType === 'facebook'
//             ? (evt.locationType as 'venue' | 'zoom' | 'facebook')
//             : undefined,
//       })) as Event[];

//       setEventsState(normalizedEvents);
//       setCarouselImagesState(carouselData);
//     } catch (error) {
//       console.error('Error refreshing data:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     refreshData();
//   }, []);

//   const addEvent = async (eventData: Omit<Event, 'id'>) => {
//     const newEvent: Event = {
//       ...eventData,
//       id: crypto.randomUUID(),
//     };

//     // Optimistically update UI
//     setEventsState(prev => [...prev, newEvent]);

//     try {
//       const eventPayload: Event = {
//         ...newEvent,
//         location: newEvent.location ?? '',
//       };
//       const result = await apiCreateEvent(eventPayload);
//       if (!result) {
//         // Revert on failure
//         setEventsState(prev => prev.filter(e => e.id !== newEvent.id));
//         throw new Error('Failed to create event');
//       }
//     } catch (error) {
//       // Revert on failure
//       setEventsState(prev => prev.filter(e => e.id !== newEvent.id));
//       throw error;
//     }
//   };

//   const updateEvent = async (id: string, updatedData: Partial<Event>) => {
//     // Store original event for potential revert
//     const originalEvent = events.find(e => e.id === id);
//     if (!originalEvent) return;

//     // Optimistically update UI
//     setEventsState(prev =>
//       prev.map(event =>
//         event.id === id ? { ...event, ...updatedData } : event
//       )
//     );

//     try {
//       const result = await apiUpdateEvent(id, updatedData);
//       if (!result) {
//         // Revert on failure
//         setEventsState(prev =>
//           prev.map(event =>
//             event.id === id ? originalEvent : event
//           )
//         );
//         throw new Error('Failed to update event');
//       }
//     } catch (error) {
//       // Revert on failure
//       setEventsState(prev =>
//         prev.map(event =>
//           event.id === id ? originalEvent : event
//         )
//       );
//       throw error;
//     }
//   };

//   const deleteEvent = async (id: string) => {
//     if (!id) {
//       console.error('Attempted to delete event with no ID');
//       throw new Error('Cannot delete event: No ID provided');
//     }

//     // Store original events for potential revert
//     const originalEvents = [...events];
    
//     // Find the event being deleted for better error reporting
//     const eventToDelete = originalEvents.find(e => e.id === id);
//     if (!eventToDelete) {
//       console.error(`Event with ID ${id} not found in local state`);
//       throw new Error('Event not found');
//     }

//     console.log(`Deleting event:`, eventToDelete);

//     // Optimistically update UI
//     setEventsState(prev => {
//       const updated = prev.filter(event => event.id !== id);
//       console.log(`Updated events after deletion:`, updated);
//       return updated;
//     });

//     try {
//       const success = await apiDeleteEvent(id);
//       if (!success) {
//         console.warn('API call to delete event failed, but localStorage fallback should have worked');
//       } else {
//         console.log(`Successfully deleted event with ID: ${id}`);
//       }
//     } catch (error) {
//       console.error('Error deleting event, reverting UI:', error);
//       // Revert on failure
//       setEventsState(originalEvents);
//       // Don't throw error since we have fallbacks
//     }
//   };

//   const addCarouselImage = async (imageData: Omit<CarouselImage, 'id'>) => {
//     const newImage: CarouselImage = {
//       ...imageData,
//       id: crypto.randomUUID(),
//     };

//     // Optimistically update UI
//     setCarouselImagesState(prev => [...prev, newImage]);

//     try {
//       const result = await apiCreateCarouselImage(newImage);
//       if (!result) {
//         // Revert on failure
//         setCarouselImagesState(prev => prev.filter(img => img.id !== newImage.id));
//         throw new Error('Failed to create carousel image');
//       }
//     } catch (error) {
//       // Revert on failure
//       setCarouselImagesState(prev => prev.filter(img => img.id !== newImage.id));
//       throw error;
//     }
//   };

//   const deleteCarouselImage = async (id: string) => {
//     // Store original images for potential revert
//     const originalImages = [...carouselImages];

//     // Optimistically update UI
//     setCarouselImagesState(prev => prev.filter(img => img.id !== id));

//     try {
//       const success = await apiDeleteCarouselImage(id);
//       if (!success) {
//         console.warn('API call to delete carousel image failed, but localStorage fallback should have worked');
//       }
//     } catch (error) {
//       console.error('Error deleting carousel image, reverting UI:', error);
//       // Revert on failure
//       setCarouselImagesState(originalImages);
//       // Don't throw error since we have fallbacks
//     }
//   };

//   const value: AdminContextType = {
//     events,
//     carouselImages,
//     loading,
//     addEvent,
//     updateEvent,
//     deleteEvent,
//     addCarouselImage,
//     deleteCarouselImage,
//     refreshData,
//   };

//   return (
//     <AdminContext.Provider value={value}>
//       {children}
//     </AdminContext.Provider>
//   );
// };
