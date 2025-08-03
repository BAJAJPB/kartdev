import React from 'react';

interface CtaSectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ 
  title, 
  subtitle, 
  buttonText, 
  buttonLink 
}) => {
  return (
    <section className="bg-gradient-to-r from-[#8051FF] to-[#000000] py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-montserrat font-bold text-white mb-8 leading-tight">
          {title}
        </h2>
        
        <p className="text-xl font-montserrat text-white mb-12 leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
        
        <button
          onClick={() => window.open(buttonLink, '_self')}
          className="bg-[#FF7FE8] hover:bg-[#DEFF00] text-[#231B3B] px-8 py-4 rounded font-montserrat font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
};