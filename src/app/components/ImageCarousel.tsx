"use client";

import { useState } from "react";
import Image from "next/image";
import { useAdmin } from "@/context/AdminContextNew";

export default function PosterSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { carouselImages } = useAdmin();

  const posters = carouselImages.map((img) => ({
    src: img.imageUrl,
    alt: `Slide ${img.id}`,
  }));

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

  return (
    <div className="flex items-center justify-center text-center gap-5 md:gap-[40px] py-8 relative mt-20 md:w-[87%] w-full ">
      {visibleSlides.map((poster, i) => (
        <div
          key={i}
          className={`transition-all duration-500 ease-in-out ${
            i === 0 ? 'scale-125 md:scale-110 z-10 md:w-[450px] md:ml-24 ml-10 md:h-[450px]' : 'scale-100 md:w-[320px] md:h-[320px] z-0'
          } w-[360px] h-[190px] md:h-[320px] overflow-hidden`}
        >
          <Image
            src={poster.src}
            alt={poster.alt}
            width={100}
            height={100}
            className="w-full h-full object-fit shadow-xl "
            priority={i === 0}
          />

     </div>
      ))}
      <button
        onClick={handleNext}
        className="absolutemd:right-4 right-0 top-1/2 transform -translate-y-1/2 text-black px-2 py-2 md:px-4 md:py-2 rounded-full hover:bg-gray-100 transition-colors"
      >
        <Image src="/arrow.png" alt="arrow" width={20} height={20} />
      </button>
    </div>
  );
}
