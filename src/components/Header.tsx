import React from 'react';
import { NavigationItem } from '../types';

interface HeaderProps {
  logo: string;
  navigation: NavigationItem[];
  ctaText: string;
  ctaLink: string;
}

export const Header: React.FC<HeaderProps> = ({ navigation, ctaText, ctaLink }) => {
  return (
    <header className="bg-primary-700/95 backdrop-blur-md sticky top-0 z-50 transition-all duration-300 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-white font-montserrat font-bold text-2xl hover:text-accent-orange transition-colors duration-200">
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
                className="text-white text-base font-montserrat font-medium hover:text-accent-pink transition-all duration-200 tracking-wider relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-accent-pink after:transition-all after:duration-300 hover:after:w-full"
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
            className="bg-gradient-to-r from-accent-orange to-accent-pink hover:from-accent-pink hover:to-accent-orange text-white px-8 py-3 rounded-lg font-montserrat font-bold text-base transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            {ctaText}
          </a>
        </div>
      </div>
    </header>
  );
};