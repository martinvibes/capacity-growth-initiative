'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useAdmin } from '@/context/AdminContext';

export default function PosterSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { carouselImages } = useAdmin();

  const posters = carouselImages.map(img => ({
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
    <div className="flex items-center justify-center gap-5 md:gap-[62px] py-8 relative mt-20 md:w-[87%] w-full ">
      {visibleSlides.map((poster, i) => (
        <div
          key={i}
          className={`transition-all duration-500 ease-in-out ${
            i === 0 ? 'md:w-[300px] W-[300PX] scale-125 md:scale-110 z-10' : 'md:w-[200px] W-[5PX] opacity-70'
          }`}
        >
          <Image
            src={poster.src}
            alt={poster.alt}
            width={300}
            height={450}
            className="rounded-lg shadow-xl md:w-[300px]  w-[100px] "
          />
        </div>
      ))}

      <button
        onClick={handleNext}
        className="absolute right-2 md:right-15 top-1/2 transform -translate-y-1/2 b text-black px-4 py-2 rounded-full w-["
      >
        <Image 
          src="/arrow.png"
          alt='arrow'
          width={20}
          height={20}
         
        />
      </button>
    </div>
  );
}
