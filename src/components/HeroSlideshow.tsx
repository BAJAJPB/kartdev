import React from "react";

interface HeroSlideshowProps {
  title: string;
  tagline: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export const HeroSlideshow: React.FC<HeroSlideshowProps> = ({
  title,
  subtitle,
  ctaText,
}) => {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-black">
      <div className="pl-16 pr-4 py-20 w-full md:w-2/5 z-10">
        <div className="space-y-8 text-left">
          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl lg:text-5xl font-montserrat font-black leading-tight animate-fade-in">
            <span className="text-white text-shadow-lg">{title}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-white text-lg md:text-xl lg:text-2xl font-montserrat font-medium max-w-4xl leading-relaxed text-shadow animate-slide-up">
            {subtitle}
          </p>

          {/* CTA Button */}
          <a
            href="mailto:nivedan@futureandai.com?cc=team@futureandai.com"
            className="bg-gradient-to-r from-accent-orange to-accent-pink hover:from-accent-pink hover:to-accent-orange text-white px-5 py-2 rounded-xl font-montserrat font-bold text-lg transition-all duration-300 transform hover:scale-110 shadow-2xl backdrop-blur-sm inline-block"
          >
            {ctaText}
          </a>
        </div>
      </div>

      {/* Image */}
      <div className="hidden md:block absolute top-0 right-0 w-3/5 h-full">
        <img
          src="/hero-image.jpg"
          alt="Nivedan Rathi"
          className="w-full h-full object-cover brightness-110 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/10 to-transparent"></div>
      </div>
    </section>
  );
};
