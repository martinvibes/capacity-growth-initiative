export interface Event {
  id: string;
  title: string;
  date: string; // ISO date string
  time?: string; // Optional time field
  location?: string; // Optional location field
  locationType?: "zoom" | "facebook" | "venue"; // Optional location type
  description: string;
  image: string; // URL or path
  category?: string; // Optional category field
}

export interface CarouselImage {
  id: string;
  imageUrl: string;
}
