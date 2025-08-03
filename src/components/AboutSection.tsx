import React from 'react';
import { SocialLink } from '../types';

interface AboutSectionProps {
  title: string;
  name: string;
  role: string;
  socialLinks: SocialLink[];
  description: string;
  profileImage: string;
  companyLogos: string[];
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  title,
  name,
  role,
  socialLinks,
  description,
  profileImage,
  companyLogos
}) => {
  return (
    <section className="bg-gradient-to-b from-primary-50 to-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-4xl font-montserrat font-bold text-primary-500 animate-slide-up">
              {title}
            </h2>
            
            <h3 className="text-5xl font-montserrat font-black text-primary-700 leading-tight">
              {name}
            </h3>
            
            <div className="inline-block bg-gradient-to-r from-accent-orange to-accent-pink text-white px-6 py-3 rounded-xl shadow-lg">
              <span className="font-montserrat font-semibold text-lg">{role}</span>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-125 transition-all duration-300 flex items-center justify-center group"
                >
                  <img 
                    src={social.iconUrl}
                    alt={social.platform}
                    className="w-6 h-6 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </a>
              ))}
            </div>

            <div className="prose prose-gray max-w-none">
              <p className="text-primary-700 text-lg leading-relaxed font-montserrat">
                {description}
              </p>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative animate-scale-in">
            <div className="bg-gradient-to-br from-accent-orange/20 to-accent-pink/20 rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
              <img 
                src={profileImage}
                alt={name}
                className="w-full h-auto object-cover rounded-2xl"
              />
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-accent-orange to-accent-pink rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-accent-pink to-primary-500 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Company Logos */}
        {companyLogos.length > 0 && (
          <div className="mt-20 animate-fade-in">
            <h4 className="text-2xl font-montserrat font-bold text-primary-700 text-center mb-8">
              Trusted by Leading Organizations
            </h4>
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex justify-center items-center space-x-12 flex-wrap gap-8">
                {companyLogos.map((logo, index) => (
                  <div
                    key={index}
                    className="group cursor-pointer"
                  >
                    <img
                      src={logo}
                      alt={`Company logo ${index + 1}`}
                      className="h-20 w-20 object-contain opacity-60 hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 filter grayscale hover:grayscale-0"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};