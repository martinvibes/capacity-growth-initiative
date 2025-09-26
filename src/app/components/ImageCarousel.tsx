// src/app/components/ImageCarousel.tsx
'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
  ctaText: string;
}

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Sample data - replace with your actual images and content
  const slides: Slide[] = [
    {
      id: 1,
      title: 'Burger Ad',
      description: 'Delicious burgers for everyone!',
      image: '/images/carousel/burger.jpg',
      ctaText: 'Order Now'
    },
    {
      id: 2,
      title: 'Flash Sale',
      description: 'Limited time offers up to 50% off',
      image: '/images/carousel/sale.jpg',
      ctaText: 'Shop Now'
    },
    {
      id: 3,
      title: 'Business Agency',
      description: 'Grow your business with us',
      image: '/images/carousel/business.jpg',
      ctaText: 'Learn More'
    },
    {
      id: 4,
      title: 'Summer Collection',
      description: 'New arrivals for the season',
      image: '/images/carousel/summer.jpg',
      ctaText: 'View Collection'
    }
  ];

  // Handle responsive slides
  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  // Auto-advance slides
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isHovered, slides.length]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Calculate visible slides
  const getVisibleSlides = useCallback(() => {
    const visibleSlides = [];
    const half = Math.floor(slidesToShow / 2);
    let start = currentIndex - half;
    
    if (start < 0) start = slides.length + start;
    if (start > slides.length - 1) start = 0;

    for (let i = 0; i < slidesToShow; i++) {
      const index = (start + i) % slides.length;
      visibleSlides.push({ ...slides[index], actualIndex: index });
    }

    return visibleSlides;
  }, [currentIndex, slides, slidesToShow]);

  const visibleSlides = getVisibleSlides();

  return (
    <div 
      className="relative w-full max-w-7xl mx-auto px-4 py-12"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>

        {/* Slides Container */}
        <div className="relative h-[400px] md:h-[450px] w-full">
          <div className="flex items-center justify-center h-full w-full">
            <AnimatePresence initial={false}>
              {visibleSlides.map((slide, index) => {
                const isActive = slide.actualIndex === currentIndex;
                const distance = Math.abs(slide.actualIndex - currentIndex);
                const scale = 1 - (distance * 0.1);
                const opacity = 1 - (distance * 0.3);
                const zIndex = 10 - distance;

                return (
                  <motion.div
                    key={`${slide.id}-${index}`}
                    className="absolute"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ 
                      opacity,
                      scale,
                      x: `${(index * 100) - (slidesToShow * 50) + 50}%`,
                      zIndex
                    }}
                    transition={{ 
                      duration: 0.5,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                  >
                    <div className={`
                      bg-white rounded-xl overflow-hidden shadow-lg h-[350px] w-[300px]
                      transform transition-all duration-300
                      ${isActive ? 'ring-4 ring-[#019B83] scale-110' : 'ring-1 ring-gray-200 scale-100'}
                    `}>
                      <div className="relative h-2/3 w-full">
                        <Image
                          src={slide.image}
                          alt={slide.title}
                          width={100}
                          height={100}
                          className="w-full h-full object-cover"
                        />
                        {isActive && (
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6">
                            <h3 className="text-2xl font-bold text-white mb-2">{slide.title}</h3>
                            <p className="text-gray-200 text-sm">{slide.description}</p>
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <button
                          className={`
                            w-full py-3 px-6 rounded-md font-medium transition-all duration-300
                            ${isActive 
                              ? 'bg-[#019B83] text-white hover:bg-[#018b76]' 
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }
                          `}
                        >
                          {slide.ctaText}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-12 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`
              h-2 rounded-full transition-all duration-300
              ${index === currentIndex 
                ? 'w-8 bg-[#019B83]' 
                : 'w-3 bg-gray-300 hover:bg-gray-400'
              }
            `}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;