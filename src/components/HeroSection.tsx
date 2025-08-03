import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  heroImage: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  title, 
  subtitle, 
  ctaText, 
  ctaLink, 
  heroImage 
}) => {
  return (
    <section className="bg-[#231B3B] relative min-h-screen flex items-center overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-8">
          <h1 className="text-5xl lg:text-7xl font-montserrat font-black leading-tight">
            <span className="text-white">Master The</span>
            <br />
            <span className="text-[#EB721A]">AI </span>
            <span className="text-white">Revolution</span>
          </h1>
          
          <p className="text-white text-xl font-montserrat max-w-2xl leading-relaxed">
            {subtitle}
          </p>
          
          <button 
            onClick={() => window.open(ctaLink, '_self')}
            className="bg-gradient-to-r from-[#EB721A] to-[#EB721A] hover:bg-[#231B3B] hover:border-[#FF7FE8] border border-transparent text-white px-8 py-4 rounded-lg font-montserrat font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            {ctaText}
          </button>
        </div>

        {/* Hero Image */}
        <div className="relative">
          <img 
            src={heroImage}
            alt="AI Revolution Illustration"
            className="w-full h-auto object-cover rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};