import type { Metadata } from 'next';

export interface Event {
  id: number;
  title: string;
  image: string;
  date: string;
  time: string;
  location: string;
  locationType: 'facebook' | 'venue' | 'zoom' | 'online';
  keynotes: string[];
  host: string;
  link: string;
  speakers: string[];
}

export type EventMetadata = Metadata & {
  title: string;
  description: string;
  openGraph?: {
    title: string;
    description: string;
    images: string[];
    type?: string;
  };
};

// Remove the global PageProps declaration as it's causing conflicts
// with Next.js's internal types. We'll use inline types instead.
