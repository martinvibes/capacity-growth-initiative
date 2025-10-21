import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'carousel.json');

// Ensure data directory exists
const ensureDataDir = () => {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
};

// Read carousel images from file
const readCarouselImages = () => {
  try {
    ensureDataDir();
    if (!fs.existsSync(DATA_FILE)) {
      // Create default carousel images file if it doesn't exist
      const defaultImages = [
        {
          id: 'default-carousel-1',
          imageUrl: '/slide1.png',
        },
        {
          id: 'default-carousel-2',
          imageUrl: '/slide2.png',
        },
        {
          id: 'default-carousel-3',
          imageUrl: '/slide3.png',
        },
      ];
      fs.writeFileSync(DATA_FILE, JSON.stringify(defaultImages, null, 2));
      return defaultImages;
    }
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading carousel images:', error);
    return [];
  }
};

// Write carousel images to file
const writeCarouselImages = (images: any[]) => {
  try {
    ensureDataDir();
    fs.writeFileSync(DATA_FILE, JSON.stringify(images, null, 2));
  } catch (error) {
    console.error('Error writing carousel images:', error);
    throw error;
  }
};

export async function GET() {
  try {
    const images = readCarouselImages();
    return NextResponse.json(images);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch carousel images' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const newImage = await request.json();
    const images = readCarouselImages();

    // Add the new image
    images.push(newImage);
    writeCarouselImages(images);

    return NextResponse.json(newImage, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create carousel image' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Image ID required' }, { status: 400 });
    }

    const images = readCarouselImages();
    const filteredImages = images.filter((image: any) => image.id !== id);

    if (filteredImages.length === images.length) {
      return NextResponse.json({ error: 'Image not found' }, { status: 404 });
    }

    writeCarouselImages(filteredImages);
    return NextResponse.json({ message: 'Image deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete image' }, { status: 500 });
  }
}
