import React from 'react';
import { NavigationItem } from '../types';

interface HeaderProps {
  logo: string;
  navigation: NavigationItem[];
  ctaText: string;
  ctaLink: string;
}

export const Header: React.FC<HeaderProps> = ({ logo, navigation, ctaText, ctaLink }) => {
  return (
    <header className="bg-transparent sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-white font-montserrat font-bold text-2xl">
              AI with Nivedan
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.external ? "_blank" : "_self"}
                rel={item.external ? "noreferrer noopener" : undefined}
                className="text-white text-base font-montserrat font-normal hover:text-[#FF7FE8] transition-colors duration-200 tracking-wider"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href={ctaLink}
            target="_blank"
            rel="noreferrer noopener"
            className="bg-[#EB721A] hover:bg-[#231B3B] text-white px-6 py-2.5 rounded-lg font-montserrat font-bold text-base transition-all duration-200 transform hover:scale-105"
          >
            {ctaText}
          </a>
        </div>
      </div>
    </header>
  );
};