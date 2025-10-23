import { NextRequest, NextResponse } from "next/server";
import dbConnect from '@/lib/db';
import CarouselImage from '@/models/CarouselImage';

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

export async function GET() {
  try {
    await dbConnect();
    const images = await CarouselImage.find({}).sort({ createdAt: -1 });

    // If no images in database, return default images
    if (images.length === 0) {
      return NextResponse.json(getDefaultCarouselImages());
    }

    return NextResponse.json(images);
  } catch (_error) {
    console.error("Error fetching carousel images:", _error);
    return NextResponse.json(
      { error: "Failed to fetch carousel images" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const newImage = await request.json();

    const image = new CarouselImage(newImage);
    await image.save();

    return NextResponse.json(image, { status: 201 });
  } catch (_error) {
    console.error("Error creating carousel image:", _error);
    return NextResponse.json(
      { error: "Failed to create carousel image" },
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

    // Handle default carousel images (not stored in DB)
    if (id.startsWith('default-')) {
      console.log(`Successfully handled deletion of default carousel image with ID: ${id}`);
      return new Response(null, { status: 204 });
    }

    await dbConnect();
    const image = await CarouselImage.findOneAndDelete({ id });

    if (!image) {
      return NextResponse.json({ error: "Image not found" }, { status: 404 });
    }

    return new Response(null, { status: 204 });
  } catch (_error) {
    console.error("Error deleting image:", _error);
    return NextResponse.json(
      { error: "Failed to delete image" },
      { status: 500 }
    );
  }
}
