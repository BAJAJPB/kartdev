import React from 'react';
import { ServiceDetailCard } from '../types';

interface OfferingsGridProps {
  title: string;
  offerings: ServiceDetailCard[];
}

export const OfferingsGrid: React.FC<OfferingsGridProps> = ({ title, offerings }) => {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Offerings Grid - 3x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <div
              key={offering.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={offering.imageUrl}
                  alt={offering.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content Container */}
              <div className={`${offering.bgColor} p-4 relative min-h-80 rounded-2xl`}>
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-200">
                  {offering.title}
                </h3>

                {/* Features */}
                <div className="space-y-2">
                  {offering.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="text-gray-600 text-lg leading-relaxed">
                      {feature.startsWith('Featured Clients:') ? (
                        <div className="font-semibold text-blue-700 mb-2">
                          {feature}
                        </div>
                      ) : feature.includes('growth.') && offering.id === 'community' ? (
                        <p>
                          {feature.replace('growth.', 'growth.')}
                          <a
                            href="https://apes.lla.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center ml-2 text-blue-600 hover:text-blue-800 transition-colors"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                            </svg>
                          </a>
                        </p>
                      ) : (
                        <p>{feature}</p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"></div>
              </div>

              {/* Border Glow Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};