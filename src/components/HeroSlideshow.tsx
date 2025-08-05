import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroSlideshowProps {
  title: string;
  tagline: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const slideshowImages = [
  {
    url: "/1.png",
    alt: "AI Technology Visualization",
  },
  {
    url: "/2.png",
    alt: "Professional Speaking Environment",
  },
  {
    url: "/3.png",
    alt: "Modern Tech Workspace",
  },
  {
    url: "/4.png",
    alt: "Modern Tech Workspace",
  },
];

export const HeroSlideshow: React.FC<HeroSlideshowProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Slideshow Background */}
      <div className="absolute inset-0">
        {slideshowImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-32 px-4 py-20">
        <div className="space-y-8 max-w-4xl text-left">
          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-black leading-tight animate-fade-in">
            <span className="text-white text-shadow-lg">{title}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-white text-lg md:text-xl lg:text-2xl font-montserrat font-medium max-w-4xl leading-relaxed text-shadow animate-slide-up">
            {subtitle}
          </p>

          {/* CTA Button */}
          <button
            onClick={() => window.open(ctaLink, "_blank")}
            className="bg-gradient-to-r from-accent-orange to-accent-pink hover:from-accent-pink hover:to-accent-orange text-white px-8 py-3 rounded-xl font-montserrat font-bold text-xl transition-all duration-300 transform hover:scale-110 shadow-2xl backdrop-blur-sm"
          >
            {ctaText}
          </button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {slideshowImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide
                  ? "bg-white scale-125"
                  : "bg-white bg-opacity-50 hover:bg-opacity-75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
