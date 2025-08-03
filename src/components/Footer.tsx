import React from 'react';
import { FooterSection } from '../types';

interface FooterProps {
  logo: string;
  description: string;
  sections: FooterSection[];
  copyright: string;
}

export const Footer: React.FC<FooterProps> = ({ logo, description, sections, copyright }) => {
  return (
    <footer className="bg-[#231B3B] text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="text-white font-montserrat font-bold text-3xl mb-6">
              AI with Nivedan
            </div>
            <p className="text-white text-lg leading-relaxed mb-6 font-montserrat">
              {description}
            </p>
          </div>

          {/* Footer Sections */}
          {sections.map((section, index) => (
            <div key={index}>
              <h4 className="text-xl font-montserrat font-bold text-[#EB721A] mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : "_self"}
                      rel={link.external ? "noreferrer noopener" : undefined}
                      className="text-white hover:text-[#FF7FE8] transition-colors duration-200 font-montserrat text-lg underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-[#EB721A] my-12"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-white text-sm font-montserrat tracking-wide">
            {copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};