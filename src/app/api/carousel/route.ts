import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "carousel.json");

// Ensure data directory exists
const ensureDataDir = () => {
  const dataDir = path.join(process.cwd(), "data");
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
};

// Default carousel images that will be shown when no custom images exist
const getDefaultCarouselImages = () => [
  {
    id: "default-1",
    imageUrl: "/slide1.png",
    caption: "Empowering Communities",
    alt: "Community empowerment",
  },
  {
    id: "default-2",
    imageUrl: "/slide2.png",
    caption: "Youth Development",
    alt: "Youth development",
  },
  {
    id: "default-3",
    imageUrl: "/slide3.png",
    caption: "Sustainable Growth",
    alt: "Sustainable growth",
  },
];

// Read carousel images from file
const readCarouselImages = () => {
  try {
    ensureDataDir();

    // If no data file exists, return default images without creating the file
    if (!fs.existsSync(DATA_FILE)) {
      return getDefaultCarouselImages();
    }

    // Read existing images
    const data = fs.readFileSync(DATA_FILE, "utf8");
    const images = JSON.parse(data);

    // If no images in file, return default images
    if (!images || !Array.isArray(images) || images.length === 0) {
      return getDefaultCarouselImages();
    }

    return images;
  } catch (_error) {
    console.error("Error reading carousel images", _error);
    return [];
  }
};

// Write carousel images to file
const writeCarouselImages = (
  images: { id: string; imageUrl: string; caption?: string; alt?: string }[]
) => {
  try {
    ensureDataDir();
    fs.writeFileSync(DATA_FILE, JSON.stringify(images, null, 2));
  } catch (_error) {
    console.error("Error writing carousel images", _error);
    throw _error;
  }
};

export async function GET() {
  try {
    const images = readCarouselImages();
    return NextResponse.json(images);
  } catch (_error) {
    return NextResponse.json(
      { error: "Failed to fetch carousel images", _error },
      { status: 500 }
    );
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
  } catch (_error) {
    return NextResponse.json(
      { error: "Failed to create carousel image", _error },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Image ID required" }, { status: 400 });
    }

    const images = readCarouselImages();
    const filteredImages = images.filter((image) => image.id !== id);

    if (filteredImages.length === images.length) {
      return NextResponse.json({ error: "Image not found" }, { status: 404 });
    }

    writeCarouselImages(filteredImages);
    return NextResponse.json({ message: "Image deleted successfully" });
  } catch (_error) {
    console.error("Error deleting image", _error);
    return NextResponse.json(
      { error: "Failed to delete image" },
      { status: 500 }
    );
  }
}
