import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryProps {
  title?: string;
  images: string[];
}

export const Gallery: React.FC<GalleryProps> = ({
  title = "Gallery",
  images
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-gradient-to-b from-white to-primary-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center text-primary-700 mb-12">
          {title}
        </h2>
        
        {/* Scrollable gallery container with navigation */}
        <div className="relative">
          {/* Left Arrow Button */}
          <button
            onClick={scrollLeft}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-primary-700 text-white shadow-lg rounded-full p-3 hover:bg-primary-600 transition-all duration-200 hover:scale-110"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={scrollRight}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-primary-700 text-white shadow-lg rounded-full p-3 hover:bg-primary-600 transition-all duration-200 hover:scale-110"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scrollable container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide space-x-6 pb-4 px-16 cursor-grab active:cursor-grabbing snap-x snap-mandatory"
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-72 h-96 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 snap-start"
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};