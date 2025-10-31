"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useAdmin } from "@/context/AdminContextNew";

export default function PosterSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { carouselImages } = useAdmin();

  // ✅ Map carousel data from Firestore
  interface CarouselImage {
    id?: string;
    imageUrl?: string;
    // add other properties if needed
  }

  interface Poster {
    src: string;
    alt: string;
  }

  const posters: Poster[] = (carouselImages || []).map(
    (img: CarouselImage) => ({
      src: img.imageUrl || "/placeholder.png", // fallback image
      alt: `Slide ${img.id || "no-id"}`,
    })
  );

  // ✅ Auto slide every few seconds (optional)
  useEffect(() => {
    if (posters.length === 0) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % posters.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [posters]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % posters.length);
  };

  const getSlides = () => {
    if (posters.length === 0) return [];
    return [
      posters[activeIndex % posters.length],
      posters[(activeIndex + 1) % posters.length],
      posters[(activeIndex + 2) % posters.length],
    ];
  };

  const visibleSlides = getSlides();

  // ✅ Handle empty state
  if (posters.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <p className="text-gray-500 text-center">
          Our latest adverts and promotions will show up here soon. <br /> Stay
          tuned!
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center -ml-8 text-center gap-5 md:gap-[40px] py-8 relative mt-20 md:w-[77%] w-full">
      <div className="flex items-center justify-center gap-5 md:gap-[40px]">
        {visibleSlides.map((poster, i) => (
          <div
            key={i}
            className={`transition-all duration-500 ease-in-out ${
              i === 0
                ? "scale-145 md:scale-115 z-10 md:w-[270px] md:ml-24 ml-10 md:h-[350px]"
                : i === 1
                ? "scale-123 md:scale-119 z-10 md:w-[150px] md:ml-8 ml-5 "
                : "md:w-[140px] w-[90px] z-0"
            } h-[120px] md:h-[190px] overflow-hidden`}
          >
            <Image
              src={poster.src}
              alt={poster.alt}
              width={100}
              height={100}
              className="w-full h-full object-fill shadow-xl"
              priority={i === 0}
            />
          </div>
        ))}

        {/* ✅ Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-black px-2 py-2 md:px-4 md:py-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <Image src="/arrow.png" alt="arrow" width={20} height={20} />
        </button>
      </div>

      {/* ✅ Pagination Dots */}
      <div className="flex justify-center items-center mt-4 md:-mr-40 space-x-2">
        {posters.map((_: Poster, index: number) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeIndex ? "bg-[#DEEFEC] scale-150" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
