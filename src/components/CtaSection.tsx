import React from 'react';
import { ContactForm } from './ContactForm';

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
    <section className="bg-gradient-to-r from-primary-500 to-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - CTA Content */}
          <div className="text-white space-y-8">
            <h2 className="text-4xl lg:text-5xl font-montserrat font-black leading-tight animate-fade-in">
              {title}
            </h2>
            
            <p className="text-white/90 text-xl font-montserrat leading-relaxed animate-slide-up">
              {subtitle}
            </p>
            
            <button
              onClick={() => window.open(buttonLink, '_self')}
              className="bg-gradient-to-r from-accent-orange to-accent-pink hover:from-accent-pink hover:to-accent-orange text-white px-12 py-5 rounded-xl font-montserrat font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl animate-scale-in"
            >
              {buttonText}
            </button>
          </div>

          {/* Right Column - Contact Form */}
          <div className="animate-fade-in">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};