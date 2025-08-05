
import { Header } from './components/Header';
import { HeroSlideshow } from './components/HeroSlideshow';
import { Statistics } from './components/Statistics';
import { AboutSection } from './components/AboutSection';
import { OurClients } from './components/OurClients';
import { Gallery } from './components/Gallery';
import { OfferingsGrid } from './components/OfferingsGrid';
import { 
  navigationItems, 
  statistics, 
  ourOfferings, 
  brandsThatTrustUs, 
  galleryImages
} from './data/siteData';
import NewsletterSubscription from './components/newsletter-subscription';

function App() {
  const logoUrl = "https://static.wixstatic.com/media/c04408_a515c4b0b2a843e78a63a3f1a57a1f41~mv2.png/v1/crop/x_119,y_436,w_811,h_203/fill/w_149,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c04408_a515c4b0b2a843e78a63a3f1a57a1f41~mv2.png";
  // const heroImageUrl = "https://static.wixstatic.com/media/c04408_d62568241f52490ea0c9f1ad5a29d4be~mv2.png/v1/crop/x_463,y_0,w_2074,h_1107/fill/w_1040,h_555,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Niv-website-v2_edited_edited_edited.png";
  const profileImageUrl = "https://static.wixstatic.com/media/c04408_254aa2d6434b421fbc8f24437c5c1d1e~mv2.png/v1/crop/x_76,y_0,w_927,h_1080/fill/w_417,h_486,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/httpsdrive_google_edited.png";

  return (
    <div className="min-h-screen bg-[#231B3B]">
      <Header 
        logo={logoUrl}
        navigation={navigationItems}
        ctaText="Partner With Us"
        ctaLink="https://calendly.com/atray-lla/alignmentcall"
      />
      <div id="home">
        <HeroSlideshow 
          title="Nivedan Rathi"
          subtitle="AI Strategy Architect & Global Tech Innovator"
          ctaText="Contact Now"
          ctaLink="https://wa.me/916377589749" tagline={''}        />
      </div>

      <Statistics statistics={statistics} />
      
      <OurClients 
        title="Brands that trust us"
        brands={brandsThatTrustUs} 
      />
      
      <div id="offerings">
        <OfferingsGrid 
          title="Our Offerings"
          offerings={ourOfferings}
        />
      </div>
      
      <div id="newsletter"></div>  
      <div id="community"></div>
      <div id="workshops"></div>
      <div id="consulting"></div>
      

      
      <div id="about">
        <AboutSection
          title="About"
          name="Nivedan Rathi"
          role="AI Strategy Architect & Global Tech Innovator"
          description="I'm Nivedan Rathi, an IIT Bombay alumnus, an ex-founding member of several tech startups, and a responsible AI adoption evangelist. In the last 10 years, I almost feel like I've had a front-seat ride on the Great Indian Startups Wave. I'm now all in on the most exciting human innovation to ever exist - The Great AI Evolution - that's what I call it now. I now lead Future & AI (500k followers) where we create content to demystify Generative AI and share ways for leaders & entrepreneurs to leverage it to automate their workflows & multiply their business impact."
          profileImage={profileImageUrl}
        />
      </div>
      
      <div id="gallery">
        <Gallery 
          title="Gallery"
          images={galleryImages}
        />
      </div>
      <NewsletterSubscription />
    </div>
  );
}

export default App;