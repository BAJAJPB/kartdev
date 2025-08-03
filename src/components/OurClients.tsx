import React from 'react';

interface OurClientsProps {
  title?: string;
  logos: string[];
}

export const OurClients: React.FC<OurClientsProps> = ({
  title = "Our Clients",
  logos
}) => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center text-primary-700 mb-12">
          {title}
        </h2>
        
        {/* Scrollable logos container */}
        <div className="relative">
          <div className="flex overflow-x-auto scrollbar-hide space-x-8 pb-4">
            <div className="flex space-x-8 animate-scroll">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-32 h-20 flex items-center justify-center bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <img
                    src={logo}
                    alt={`Client logo ${index + 1}`}
                    className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
              {/* Duplicate logos for infinite scroll effect */}
              {logos.map((logo, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="flex-shrink-0 w-32 h-20 flex items-center justify-center bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <img
                    src={logo}
                    alt={`Client logo ${index + 1}`}
                    className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Gradient overlays for fade effect */}
          <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};