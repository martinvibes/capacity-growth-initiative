// API utility functions for events and carousel management

const API_BASE = '/api';

export interface Event {
  id: string;
  title: string;
  date: string;
  time?: string;
  location?: string;
  locationType?: "zoom" | "facebook" | "venue";
  description: string;
  image: string;
}

export interface CarouselImage {
  id: string;
  imageUrl: string;
  caption?: string;
  alt?: string;
}

// Events API functions
export const fetchEvents = async (): Promise<Event[]> => {
  try {
    const response = await fetch(`${API_BASE}/events`);
    if (!response.ok) {
      throw new Error('Failed to fetch events');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
};

export const createEvent = async (event: Event): Promise<Event | null> => {
  try {
    const response = await fetch(`${API_BASE}/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event),
    });
    if (!response.ok) {
      throw new Error('Failed to create event');
    }
    return await response.json();
  } catch (error) {
    console.error('Error creating event:', error);
    return null;
  }
};

export const updateEvent = async (id: string, event: Partial<Event>): Promise<Event | null> => {
  try {
    const response = await fetch(`${API_BASE}/events`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, ...event }),
    });
    if (!response.ok) {
      throw new Error('Failed to update event');
    }
    return await response.json();
  } catch (error) {
    console.error('Error updating event:', error);
    return null;
  }
};

export const deleteEvent = async (id: string): Promise<boolean> => {
  try {
    console.log('Deleting event with ID:', id);
    const response = await fetch(`${API_BASE}/events?id=${encodeURIComponent(id)}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      let errorData: any = {};
      try {
        errorData = await response.json();
      } catch (jsonError) {
        // If response is not JSON, log the text instead
        const text = await response.text();
        console.error('Failed to delete event - non-JSON response:', {
          status: response.status,
          statusText: response.statusText,
          body: text,
        });
        return false;
      }
      console.error('Failed to delete event:', errorData);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error deleting event:', error);
    return false;
  }
};

// Carousel API functions
export const fetchCarouselImages = async (): Promise<CarouselImage[]> => {
  try {
    const response = await fetch(`${API_BASE}/carousel`);
    if (!response.ok) {
      throw new Error('Failed to fetch carousel images');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching carousel images:', error);
    return [];
  }
};

export const createCarouselImage = async (image: Omit<CarouselImage, 'id'>): Promise<CarouselImage | null> => {
  try {
    const response = await fetch(`${API_BASE}/carousel`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(image),
    });
    if (!response.ok) {
      throw new Error('Failed to create carousel image');
    }
    return await response.json();
  } catch (error) {
    console.error('Error creating carousel image:', error);
    return null;
  }
};

export const deleteCarouselImage = async (id: string): Promise<boolean> => {
  try {
    const response = await fetch(`${API_BASE}/carousel?id=${id}`, {
      method: 'DELETE',
    });
    return response.ok;
  } catch (error) {
    console.error('Error deleting carousel image:', error);
    return false;
  }
};
