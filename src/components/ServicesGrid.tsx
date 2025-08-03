import React from 'react';
import { ServiceCard } from '../types';

interface ServicesGridProps {
  title: string;
  services: ServiceCard[];
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ title, services }) => {
  return (
    <section className="bg-gradient-to-b from-white to-primary-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-montserrat font-bold text-center text-primary-700 mb-16 animate-fade-in">
          {title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-accent-orange group animate-on-scroll ${
                index % 2 === 0 ? 'hover:bg-gradient-to-br hover:from-primary-50 hover:to-white' : 'hover:bg-gradient-to-br hover:from-accent-pink/10 hover:to-white'
              }`}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-accent-orange to-accent-pink rounded-full mx-auto mb-6 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              
              <h3 className="text-xl font-montserrat font-bold text-primary-700 mb-4 group-hover:text-accent-orange transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-primary-600 text-base leading-relaxed mb-6 font-montserrat">
                {service.description}
              </p>
              
              <button className="bg-gradient-to-r from-accent-orange to-accent-pink text-white px-6 py-2 rounded-lg font-montserrat font-semibold text-sm hover:from-accent-pink hover:to-accent-orange transition-all duration-300 transform hover:scale-105 opacity-0 group-hover:opacity-100">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};