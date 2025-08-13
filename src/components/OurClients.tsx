import React, { useState } from 'react';
import { X } from 'lucide-react';
import { BrandInfo } from '../types';

interface OurClientsProps {
  title?: string;
  brands: BrandInfo[];
}

export const OurClients: React.FC<OurClientsProps> = ({
  title = "Our Clients",
  brands
}) => {
  const [selectedBrand, setSelectedBrand] = useState<BrandInfo | null>(null);

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center text-primary-700 mb-12">
          {title}
        </h2>

        {/* 3x3 Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-full h-20 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
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