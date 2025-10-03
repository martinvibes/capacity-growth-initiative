
import { notFound } from 'next/navigation';
import EventDetailsPage from './EventPageContent';
import { getEventById } from '../event-utils';
import type { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  try {
    const resolvedParams = await params;
    const eventId = Number(resolvedParams.id);
    if (isNaN(eventId)) {
      return {
        title: 'Event Not Found',
        description: 'The requested event could not be found.',
      };
    }

    const event = getEventById(eventId);
    if (!event) {
      return {
        title: 'Event Not Found',
        description: 'The requested event could not be found.',
      };
    }

    const description = event.keynotes[0] || `Join us for ${event.title} on ${event.date} at ${event.time}`;
    const previousImages = (await parent).openGraph?.images || [];

    return {
      title: event.title,
      description,
      openGraph: {
        title: event.title,
        description,
        images: [...(Array.isArray(previousImages) ? previousImages : [previousImages]), event.image],
        type: 'website',
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Error',
      description: 'An error occurred while loading the event.',
    };
  }
}

type PageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function EventPage({ params, searchParams }: PageProps) {
  try {
    const resolvedParams = await params;
    // Await searchParams for type compatibility, though not used
    await searchParams;
    const eventId = Number(resolvedParams.id);
    if (isNaN(eventId)) {
      return notFound();
    }

    const event = getEventById(eventId);
    if (!event) {
      return notFound();
    }

    return <EventDetailsPage params={{ id: resolvedParams.id }} />;
  } catch (error) {
    console.error('Error in EventPage:', error);
    return notFound();
  }
}
