import React, { useState } from 'react';
import { BrandInfo } from '../types';

interface OurClientsProps {
  title?: string;
  brands: BrandInfo[];
}

export const OurClients: React.FC<OurClientsProps> = ({
  title = "Our Clients",
  brands
}) => {
  const [hoveredBrand, setHoveredBrand] = useState<BrandInfo | null>(null);

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center text-primary-700 mb-12">
          {title}
        </h2>

        {/* 3x3 Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="group relative flex items-center justify-center w-full h-20 bg-white rounded-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
              onMouseEnter={() => setHoveredBrand(brand)}
              onMouseLeave={() => setHoveredBrand(null)}
            >
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                draggable={false}
              />
              <div className={`absolute bottom-full mb-2 w-auto max-w-xs bg-white p-4 rounded-lg shadow-lg z-10 transition-all duration-300 transform-gpu ${hoveredBrand?.name === brand.name ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
                <div className="flex items-center gap-4 mb-2">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="w-12 h-12 object-contain"
                  />
                  <h3 className="text-lg font-montserrat font-bold text-primary-700">
                    {brand.name}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {brand.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};