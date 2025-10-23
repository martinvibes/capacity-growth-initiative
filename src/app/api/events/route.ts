import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Event from '@/models/Event';

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

export async function GET() {
  try {
    await dbConnect();
    const events = await Event.find({}).sort({ createdAt: -1 });

    // If no events in database, return default events
    if (events.length === 0) {
      return NextResponse.json(getDefaultEvents());
    }

    return NextResponse.json(events);
  } catch (_error) {
    console.error('Error fetching events:', _error);
    return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const newEvent = await request.json();

    const event = new Event(newEvent);
    await event.save();

    return NextResponse.json(event, { status: 201 });
  } catch (_error) {
    console.error('Error creating event:', _error);
    return NextResponse.json({ error: 'Failed to create event' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    await dbConnect();
    const { id, ...updatedData } = await request.json();

    const event = await Event.findOneAndUpdate(
      { id },
      updatedData,
      { new: true, runValidators: true }
    );

    if (!event) {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }

    return NextResponse.json(event);
  } catch (_error) {
    console.error('Error updating event:', _error);
    return NextResponse.json({ error: 'Failed to update event' }, { status: 500 });
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

    // Handle default events (not stored in DB)
    if (id.startsWith('default-')) {
      console.log(`Successfully handled deletion of default event with ID: ${id}`);
      return new Response(null, { status: 204 });
    }

    await dbConnect();
    const event = await Event.findOneAndDelete({ id });

    if (!event) {
      console.error(`Event with ID ${id} not found`);
      return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }

    console.log(`Successfully deleted event with ID: ${id}`);
    return new Response(null, { status: 204 });
  } catch (_error) {
    console.error('Error in DELETE handler:', _error);
    return NextResponse.json(
      { error: 'Failed to delete event', details: _error instanceof Error ? _error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
