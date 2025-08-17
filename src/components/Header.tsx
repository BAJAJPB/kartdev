import React from 'react';
import { NavigationItem } from '../types';
import { FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

interface HeaderProps {
  logo: string;
  navigation: NavigationItem[];
  ctaText: string;
  ctaLink: string;
}

export const Header: React.FC<HeaderProps> = ({ navigation }) => {
  return (
    <header className="bg-black bg-gradient-to-r backdrop-blur-md sticky top-0 z-50 transition-all duration-300 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6">
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

          {/* Logo - Centered */}
          <div className="flex-shrink-0 absolute left-1/2 transform -translate-x-1/2">
            <div className="text-white font-montserrat font-bold text-2xl hover:text-accent-orange transition-colors duration-200">
              AI with Nivedan
            </div>
          </div>

          {/* Social Media Icons and Contact Button */}
          <div className="flex items-center space-x-10">
            <div className="flex items-center space-x-6 text-white text-lg">
              <a
                href="https://www.linkedin.com/in/nivedanrathi/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-orange transition-colors duration-200"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://x.com/nivedan_ai"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-orange transition-colors duration-200"
              >
                <FaTwitter />
              </a>

              <a
                href="https://www.instagram.com/nivedan.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-orange transition-colors duration-200"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.youtube.com/@nivedan.ai25"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-orange transition-colors duration-200"
              >
                <FaYoutube />
              </a>
            </div>

            <a
              href="mailto:nivedan@futureandai.com?cc=team@futureandai.com"
              className="px-6 py-2 bg-accent-orange text-white font-montserrat font-medium rounded-full hover:bg-accent-orange/90 transition-all duration-200"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
