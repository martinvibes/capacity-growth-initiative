import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'events.json');

// Ensure data directory exists
const ensureDataDir = () => {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
};

// Read events from file
const readEvents = () => {
  try {
    ensureDataDir();
    if (!fs.existsSync(DATA_FILE)) {
      // Create default events file if it doesn't exist
      const defaultEvents = [
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
      fs.writeFileSync(DATA_FILE, JSON.stringify(defaultEvents, null, 2));
      return defaultEvents;
    }
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading events:', error);
    return [];
  }
};

// Write events to file
const writeEvents = (events: any[]) => {
  try {
    ensureDataDir();
    fs.writeFileSync(DATA_FILE, JSON.stringify(events, null, 2));
  } catch (error) {
    console.error('Error writing events:', error);
    throw error;
  }
};

export async function GET() {
  try {
    const events = readEvents();
    return NextResponse.json(events);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 });
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
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create event' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { id, ...updatedData } = await request.json();
    const events = readEvents();

    const index = events.findIndex((event: any) => event.id === id);
    if (index === -1) {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }

    events[index] = { ...events[index], ...updatedData };
    writeEvents(events);

    return NextResponse.json(events[index]);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update event' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Event ID required' }, { status: 400 });
    }

    const events = readEvents();
    const filteredEvents = events.filter((event: any) => event.id !== id);

    if (filteredEvents.length === events.length) {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }

    writeEvents(filteredEvents);
    return NextResponse.json({ message: 'Event deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete event' }, { status: 500 });
  }
}
