import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { Event } from '@/types';

const DATA_FILE = path.join(process.cwd(), 'data', 'events.json');

// Ensure data directory exists
const ensureDataDir = () => {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
};

// Default events that will be shown when no custom events exist
const getDefaultEvents = () => [
  {
    id: 'default-1',
    title: 'Community Empowerment Workshop',
    date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 3 days from now
    time: '10:00 AM - 12:00 PM',
    location: 'New City Hall',
    locationType: 'venue',
    description: 'Join us for an interactive workshop focused on community empowerment and skill development.',
    image: '/upcome1.png',
  },
  {
    id: 'default-2',
    title: 'Youth Leadership Summit',
    date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 7 days from now
    time: '2:00 PM - 5:00 PM',
    location: 'Virtual Event',
    locationType: 'zoom',
    description: 'A summit bringing together young leaders to discuss innovation and entrepreneurship.',
    image: '/upcome2.png',
  },
  {
    id: 'default-3',
    title: 'Technology for Development',
    date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 14 days from now
    time: '9:00 AM - 4:00 PM',
    location: 'Innovation Hub',
    locationType: 'venue',
    description: 'Exploring how technology can drive sustainable development in our communities.',
    image: '/upcome3.png',
  },
];

// Read events from file
const readEvents = () => {
  try {
    ensureDataDir();
    if (!fs.existsSync(DATA_FILE)) {
      const defaultEvents = getDefaultEvents();
      return defaultEvents; // Don't save to file, just return defaults
    }
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    const events = JSON.parse(data);
    
    // If no events in file, return default events
    if (!events || events.length === 0) {
      return getDefaultEvents();
    }
    
    // Filter out duplicates based on id to ensure unique keys
    const uniqueEvents = events.filter((event: { id: string }, index: number, arr: { id: string }[]) =>
      arr.findIndex((e) => e.id === event.id) === index
    );
    
    // Return custom events if they exist, otherwise return default events
    return uniqueEvents.length > 0 ? uniqueEvents : getDefaultEvents();
  } catch (_error) {
    console.error('Error reading events', _error);
    return [];
  }
};

// Write events to file
const writeEvents = (events: { id: string; title: string; date: string; time?: string; location?: string; locationType: "zoom" | "facebook" | "venue"; description?: string; image: string }[]) => {
  try {
    ensureDataDir();
    fs.writeFileSync(DATA_FILE, JSON.stringify(events, null, 2));
  } catch (_error) {
    console.error('Error writing events',   _error);
    throw _error;
  }
};

export async function GET() {
  try {
    const events = readEvents();
    return NextResponse.json(events);
  } catch (_error) {
    return NextResponse.json({ error: 'Failed to fetch events', _error }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const newEvent = await request.json();
    const events = readEvents();

    // Add the new event
    events.push(newEvent);
    writeEvents(events);

    return NextResponse.json(newEvent, { status: 201 });
  } catch (_error) {
    return NextResponse.json({ error: 'Failed to create event', _error }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { id, ...updatedData } = await request.json();
    const events = readEvents();

    const index = events.findIndex((event: Event) => event.id === id);
    if (index === -1) {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }

    events[index] = { ...events[index], ...updatedData };
    writeEvents(events);

    return NextResponse.json(events[index]);
  } catch (_error) {
    return NextResponse.json({ error: 'Failed to update event', _error }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    console.log('Received DELETE request for event ID:', id);

    if (!id) {
      console.error('No ID provided in DELETE request');
      return NextResponse.json({ error: 'Event ID is required' }, { status: 400 });
    }

    const events = readEvents();
    console.log('Current events before deletion:', events.map((e: Event) => e.id));

    const initialLength = events.length;
    const filteredEvents = events.filter((event: Event) => event.id !== id);
    
    if (filteredEvents.length === initialLength) {
      console.error(`Event with ID ${id} not found`);
      return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }

    console.log('Events after filtering:', filteredEvents.map((e: Event) => e.id));
    writeEvents(filteredEvents);
    
    return new Response(null, { status: 204 });
  } catch (_error) {
    console.error('Error in DELETE handler', _error);
    return NextResponse.json(
      { error: 'Failed to delete event', details: _error instanceof Error ? _error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
