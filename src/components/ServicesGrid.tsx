import React from 'react';
import { ServiceCard } from '../types';

interface ServicesGridProps {
  title: string;
  services: ServiceCard[];
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ title, services }) => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-montserrat font-bold text-center text-gray-700 mb-16">
          {title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-[#F4ECFF] rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <h3 className="text-lg font-montserrat font-bold text-black mb-4">
                {service.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-6 font-montserrat">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};