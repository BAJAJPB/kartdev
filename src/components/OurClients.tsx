import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { BrandInfo } from '../types';

interface OurClientsProps {
  title?: string;
  brands: BrandInfo[];
}

export const OurClients: React.FC<OurClientsProps> = ({
  title = "Our Clients",
  brands
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedBrand, setSelectedBrand] = useState<BrandInfo | null>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center text-primary-700 mb-12">
          {title}
        </h2>
        
        {/* Scrollable logos container with navigation */}
        <div className="relative">
          {/* Left Arrow Button */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-all duration-200 hover:scale-110"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-primary-700" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-all duration-200 hover:scale-110"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-primary-700" />
          </button>

          {/* Scrollable container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide space-x-8 pb-4 mx-12 cursor-grab active:cursor-grabbing"
            style={{ 
              scrollSnapType: 'x mandatory',
            }}
          >
            {brands.map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 h-20 flex items-center justify-center bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
                style={{ scrollSnapAlign: 'start' }}
                onClick={() => setSelectedBrand(brand)}
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Brand Details Modal */}
        {selectedBrand && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-md w-full p-6 relative animate-scale-in">
              <button
                onClick={() => setSelectedBrand(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={selectedBrand.logo}
                  alt={`${selectedBrand.name} logo`}
                  className="w-16 h-16 object-contain"
                />
                <h3 className="text-xl font-montserrat font-bold text-primary-700">
                  {selectedBrand.name}
                </h3>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                {selectedBrand.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};