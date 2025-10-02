import { Metadata } from 'next';
import EventDetailsPage from './EventPageContent';
import { getEventById } from './EventPageContent';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const eventId = Number(params.id);
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

  return {
    title: event.title,
    description: `Join us for ${event.title} on ${event.date} at ${event.time}. ${event.keynotes.join(' ').substring(0, 150)}...`,
    openGraph: {
      title: event.title,
      description: `Join us for ${event.title} on ${event.date} at ${event.time}`,
      images: [event.image],
      type: 'website',
    },
  };
}

export default async function Page({
  params,
}: {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  // Ensure params is a plain object before passing it down
  const safeParams = { ...params };
  return <EventDetailsPage params={safeParams} />;
}
