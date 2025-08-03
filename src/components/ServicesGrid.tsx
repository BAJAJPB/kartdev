import React from 'react';
import { ServiceCard } from '../types';

interface ServicesGridProps {
  title: string;
  services: ServiceCard[];
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ title, services }) => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          {title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-orange-500 group"
              onClick={() => window.open(service.buttonLink, service.buttonLink.startsWith('http') ? '_blank' : '_self')}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-orange-500 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                {service.description}
              </p>
              
              <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-lg font-semibold text-sm hover:from-pink-500 hover:to-orange-500 transition-all duration-300 transform hover:scale-105 opacity-0 group-hover:opacity-100">
                {service.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};