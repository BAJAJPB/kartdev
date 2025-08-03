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
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-montserrat font-bold text-[#8051FF]">
              {title}
            </h2>
            
            <h3 className="text-4xl font-montserrat font-bold text-[#231B3B]">
              {name}
            </h3>
            
            <div className="inline-block bg-[#8051FF] text-white px-4 py-2 rounded-lg">
              <span className="font-montserrat font-normal">{role}</span>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="w-10 h-10 hover:scale-110 transition-transform duration-200"
                >
                  <img 
                    src={social.iconUrl}
                    alt={social.platform}
                    className="w-full h-full object-cover rounded"
                  />
                </a>
              ))}
            </div>

            <div className="prose prose-gray max-w-none">
              <p className="text-[#231B3B] text-base leading-relaxed font-montserrat">
                {description}
              </p>
            </div>
          </div>

          {/* Profile Image */}
          <div className="bg-[#E6DECA] rounded-[40px_20px_40px_20px] p-4">
            <img 
              src={profileImage}
              alt={name}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Company Logos */}
        {companyLogos.length > 0 && (
          <div className="mt-16 bg-[#F4ECFF] rounded-2xl p-8">
            <div className="flex justify-center items-center space-x-8 flex-wrap gap-4">
              {companyLogos.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`Company logo ${index + 1}`}
                  className="h-16 w-16 object-contain opacity-70 hover:opacity-100 transition-opacity duration-200"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};