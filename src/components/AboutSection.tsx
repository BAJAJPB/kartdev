import React, { useState } from 'react';

interface AboutSectionProps {
  title: string;
  name: string;
  role: string;
  description: string;
  profileImage: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ 
  title, 
  name, 
  role, 
  profileImage
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const newDescription = `A rare blend of technical virtuosity and strategic vision, Nivedan Rathi transforms how enterprises harness AI's potential.  

From IIT Bombay to pioneering AI-driven quality control at Agrix Labs, and scaling Meesho during its hypergrowth phase, his journey reflects breakthrough innovation at every turn.  

Today, he's the strategic counsel behind AI transformation for industry titans like Kishore Biyani, architecting frameworks that integrate AI into organizational DNA.`;

const hiddenContent = `His acclaimed masterclass at NTU Singapore on "The New Value & Skill Stack in the Post-AI World" stands testament to his ability to decode AI's business impact with precision and foresight.  

Beyond his 70+ global keynotes, Nivedan leads the "AI Powered Entrepreneurs" community and designs next-generation AI curriculum, pursuing one mission: unlocking unprecedented value at the intersection of human creativity and artificial intelligence.  

For leaders seeking to transform AI complexity into competitive advantage, Nivedan brings battle-tested expertise in crafting actionable strategies that deliver measurable impact.`;
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

            <div className="prose prose-gray max-w-none">
              <div className="text-primary-700 text-lg leading-relaxed font-montserrat">
                <p className="mb-4 whitespace-pre-line">
                  {newDescription}
                  {!isExpanded && (
                    <button
                      onClick={() => setIsExpanded(true)}
                      className="ml-2 text-accent-orange hover:text-accent-pink transition-colors duration-200 font-semibold underline"
                    >
                      read more...
                    </button>
                  )}
                </p>
                {isExpanded && (
                  <div className="animate-fade-in">
                    <p className="whitespace-pre-line mb-4">
                      {hiddenContent}
                    </p>
                    <button
                      onClick={() => setIsExpanded(false)}
                      className="text-accent-orange hover:text-accent-pink transition-colors duration-200 font-semibold underline"
                    >
                      read less...
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative animate-scale-in max-w-md">
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

        {/* Four Achievement Badges with Images Only */}
        <div className="mt-20 animate-fade-in">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="flex justify-center items-center space-x-20 flex-wrap gap-8">
              {/* Alumnus */}
              <img
                src="/lovable-uploads/alumnus.jpg"
                alt="Alumnus"
                className="w-32 h-32 rounded-full object-cover transform hover:scale-110 transition-all duration-300"
              />
              
              {/* Ex-Meesho */}
              <img
                src="/lovable-uploads/exmeesho.jpg"
                alt="Ex-Meesho"
                className="w-32 h-32 rounded-full object-cover transform hover:scale-110 transition-all duration-300"
              />
              
              {/* Speaker */}
              <img
                src="/lovable-uploads/speaker.jpg"
                alt="Speaker"
                className="w-32 h-32 rounded-full object-cover transform hover:scale-110 transition-all duration-300"
              />
              
              {/* Angel Investor */}
              <img
                src="/lovable-uploads/angel investor.jpg"
                alt="Angel Investor"
                className="w-32 h-32 rounded-full object-cover transform hover:scale-110 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};