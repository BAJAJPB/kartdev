import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  heroImage: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  subtitle, 
  ctaText, 
  ctaLink, 
  heroImage 
}) => {
  return (
    <section className="bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 relative min-h-screen flex items-center overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-600/5 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Content */}
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-4xl lg:text-6xl font-montserrat font-black leading-tight">
            <span className="text-white">Master The</span>
            <br />
            <span className="bg-gradient-to-r from-accent-orange to-accent-pink bg-clip-text text-transparent">AI </span>
            <span className="text-white">Revolution</span>
          </h1>
          
          <p className="text-white/90 text-lg font-montserrat max-w-2xl leading-relaxed">
            {subtitle}
          </p>
          
          <button 
            onClick={() => window.open(ctaLink, '_self')}
            className="group bg-gradient-to-r from-accent-orange to-accent-orange hover:from-accent-orange hover:to-accent-pink text-primary-900 px-10 py-4 rounded-xl font-montserrat font-bold text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-accent-orange/25 relative overflow-hidden"
          >
            <span className="relative z-10">{ctaText}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-pink to-accent-orange opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        </div>

        {/* Hero Image */}
        <div className="relative animate-scale-in">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-orange/20 to-accent-pink/20 rounded-2xl blur-xl transform rotate-3"></div>
          <img 
            src={heroImage}
            alt="AI Revolution Illustration"
            className="relative w-full h-auto object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>
    </section>
  );
};