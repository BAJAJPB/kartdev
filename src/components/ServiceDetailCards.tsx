import React from 'react';
import { ServiceDetailCard } from '../types';

interface ServiceDetailCardsProps {
  title: string;
  cards: ServiceDetailCard[];
}

export const ServiceDetailCards: React.FC<ServiceDetailCardsProps> = ({ title, cards }) => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="bg-[#4857A8] rounded-2xl text-center py-12 mb-16">
          <h2 className="text-4xl font-montserrat font-bold text-white">
            {title}
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {cards.map((card) => (
            <div key={card.id} className="flex flex-col">
              {/* Image */}
              <div className="relative mb-6">
                <img 
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Content */}
              <div className={`${card.bgColor} rounded-2xl p-8 flex-1 flex flex-col`}>
                <h3 className="text-2xl font-montserrat font-bold text-black mb-4">
                  {card.title}
                </h3>
                
                <p className="text-black text-base leading-relaxed mb-6 flex-1">
                  {card.description}
                </p>

                {/* Features List */}
                <div className="mb-6">
                  {card.features.map((feature, index) => (
                    <div key={index} className="flex items-start mb-3">
                      <span className="text-black text-sm leading-relaxed">
                        {index + 1}. {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => window.open(card.buttonLink, '_blank')}
                  className="bg-[#231B3B] hover:bg-gray-600 text-white px-6 py-3 rounded font-montserrat font-normal transition-colors duration-200"
                >
                  {card.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};