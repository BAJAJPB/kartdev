import { 
  NavigationItem, 
  ServiceCard, 
  StatisticItem, 
  SocialLink, 
  ServiceDetailCard, 
  FooterSection 
} from '../types';

export const navigationItems: NavigationItem[] = [
  { label: "Home", href: "#home" },
  { label: "Offerings", href: "#offerings" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];

export const statistics: StatisticItem[] = [
  { value: "500K+", label: "Subscribers" },
  { value: "120M+", label: "Impressions" },
  { value: "70+", label: "Events & Workshops" }
];

export const serviceCards: ServiceCard[] = [
  {
    id: "newsletter",
    title: "Newsletter",
    description: "Find Latest AI Tools & Tutorials Weekly in Your Inbox for FREE",
    buttonText: "Subscribe",
    buttonLink: "#newsletter"
  },
  {
    id: "community", 
    title: "Community",
    description: "Network & Collaborate with the Top 1% AI Leaders & Learners",
    buttonText: "Join Community",
    buttonLink: "https://link.lla.in/Community-2"
  },
  {
    id: "workshops",
    title: "Workshops",
    description: "Learn the Latest AI Tools & Skills from the Best in Industry", 
    buttonText: "View Workshops",
    buttonLink: "https://lu.ma/user/usr-VyEFrpRvQ9pboAz"
  },
  {
    id: "consulting",
    title: "Consulting & Training",
    description: "Empower Your Teams for an AI Augmented Future",
    buttonText: "Contact Us",
    buttonLink: "https://wa.me/916377589749"
  }
];

export const ourOfferings: ServiceDetailCard[] = [
  {
    id: "consultation",
    title: "Strategic Consulting for CEOs",
    description: "Navigate AI transformation with personalized guidance",
    features: [
      "Client Portfolio: Think9, Athena",
      "Exclusive one-on-one consultations helping CEOs transform their AI vision into strategic roadmaps and actionable implementation plans."
    ],
    buttonText: "Book Consultation",
    buttonLink: "https://calendly.com/atray-lla/alignmentcall",
    imageUrl: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=400&h=500&fit=crop&crop=center",
    bgColor: "bg-gradient-to-br from-blue-50 to-indigo-100"
  },
  {
    id: "training",
    title: "Training & Workshops",
    description: "Empower your team with an AI training workshop",
    features: [
      "Client Portfolio: Adani, Microsoft, upGrad, GrowthSchool",
      "Tailored AI workshops that equip teams with practical skills to implement and scale AI solutions across business functions."
    ],
    buttonText: "Book Workshop",
    buttonLink: "https://wa.me/916377589749",
    imageUrl: "Training & Workshops.jpg",
    bgColor: "bg-gradient-to-br from-purple-50 to-pink-100"
  },
  {
    id: "ai-poc",
    title: "AI POC for Enterprises",
    description: "Get Scalable AI Solutions within 2 weeks",
    features: [
      "Client Portfolio: PAR, Aditya Birla, Bajaj Finserv, Polar AI",
      "Fast-track AI implementation with enterprise-grade POCs, delivering validated solutions ready for scaling"
    ],
    buttonText: "Request POC",
    buttonLink: "https://wa.me/916377589749",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=500&fit=crop&crop=center",
    bgColor: "bg-gradient-to-br from-orange-50 to-red-100"
  },
  {
    id: "speaking",
    title: "Speaking Engagements",
    description: "Nivedan has delivered 70+ talks on Global Stages",
    features: [
      "Client Portfolio: TEDx, IITB, IIWC Thailand, NTU Singapore (MBA), Whistling Woods, Formidium, HR Conclave, IIDE, Jagruk Fest",
      "Transforming complex AI concepts into actionable insights - from inspiring teenagers to empowering CEOs"
    ],
    buttonText: "Book Speaking", 
    buttonLink: "https://wa.me/916377589749",
    imageUrl: "Public Speaking.JPG",
    bgColor: "bg-gradient-to-br from-green-50 to-emerald-100"
  },
  {
    id: "newsletter",
    title: "Newsletter",
    description: "Get weekly actionable AI strategies",
    features: [
      "Get weekly actionable AI strategies",
      "Stay ahead with curated AI trends, breakthroughs, and tools delivered straight to your inbox."
    ],
    buttonText: "Subscribe Free",
    buttonLink: "#newsletter",
    imageUrl: "https://static.wixstatic.com/media/c04408_533553efa42f4aebbeab3b674e2b4d52~mv2.jpg/v1/fill/w_400,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c04408_533553efa42f4aebbeab3b674e2b4d52~mv2.jpg",
    bgColor: "bg-gradient-to-br from-yellow-50 to-amber-100"
  },
    {
      id: "community",
      title: "APEs Community",
      description: "Exclusive Network of AI-First Entrepreneurs",
      features: [
        "Exclusive Network of AI-First Entrepreneurs",
        "Scale your entrepreneurial journey with workshops, expert guidance, and a vibrant community committed to innovation and growth."
      ],
      buttonText: "Join Community",
      buttonLink: "https://link.lla.in/Community-2",
      imageUrl: "APE's Community.jpg",
      bgColor: "bg-gradient-to-br from-teal-50 to-cyan-100"
    }
];

export const serviceDetailCards: ServiceDetailCard[] = [
  {
    id: "newsletter-detail",
    title: "Newsletter",
    description: "Keeping up with the latest news, tools & powerful use cases of AI is a huge challenge. Join 125,000+ professionals, innovators and leaders mastering AI with our free weekly email newsletter. Here's why you should join:",
    features: [
      "Get exclusive AI tools, prompts & tutorials right in your inbox",
      "Follow the latest news & announcements in the world of AI", 
      "Stay ahead of everyone else & leverage AI to 10x your impact"
    ],
    buttonText: "Subscribe For Free",
    buttonLink: "#newsletter",
    imageUrl: "https://static.wixstatic.com/media/c04408_533553efa42f4aebbeab3b674e2b4d52~mv2.jpg/v1/fill/w_384,h_464,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c04408_533553efa42f4aebbeab3b674e2b4d52~mv2.jpg",
    bgColor: "bg-[#F2BDDA]"
  },
  {
    id: "community-detail", 
    title: "Community",
    description: "Network & learn with the Top 1% entrepreneurs, investors, corporate leaders & talent who are building, investing or leveraging AI to 10X their impact.",
    features: [
      "Connect with the Top 1% in AI curated basis industry, city, alumni networks & more",
      "Get access to exclusive workshops & resources from the Top AI experts in the world",
      "Strictly no-spam policy. We hate spammy Whatsapp groups just like you. Immediate removal upon breach"
    ],
    buttonText: "Join The AI Community",
    buttonLink: "https://link.lla.in/Community-2", 
    imageUrl: "https://static.wixstatic.com/media/c04408_910540dc3b1247bdbfe9084b58a256b1~mv2.jpg/v1/fill/w_384,h_464,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/1.jpg",
    bgColor: "bg-[#F2CED8]"
  },
  {
    id: "consulting-detail",
    title: "Consulting & Training", 
    description: "Gen AI is unlocking unprecedented opportunities for businesses, but adapting to this technology can be daunting. With our expertise in the latest & most powerful Gen AI use cases, tools, and deployment, we've helped several organizations drive transformation effectively. We can help:",
    features: [
      "Craft a Gen AI transformation vision and strategic roadmap unique to your goals",
      "Recommend the most effective and compliant Gen AI solutions for your needs",
      "Equip your leadership to embrace and implement these advancements across teams"
    ],
    buttonText: "Contact Us",
    buttonLink: "https://wa.me/916377589749",
    imageUrl: "https://static.wixstatic.com/media/c04408_6cbd849e322b4ad98c4362cba83890e5~mv2.jpg/v1/fill/w_384,h_464,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/3.jpg",
    bgColor: "bg-[#A3B0D9]"
  }
];

export const socialLinks: SocialLink[] = [
  {
    platform: "Instagram",
    url: "https://www.instagram.com/nivedan.ai",
    iconUrl: "https://static.wixstatic.com/media/11062b_55e4be1e75564866b6c28290f9a9d271~mv2.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_55e4be1e75564866b6c28290f9a9d271~mv2.png"
  },
  {
    platform: "LinkedIn", 
    url: "https://www.linkedin.com/in/nivedanrathi/",
    iconUrl: "https://static.wixstatic.com/media/11062b_7cf73902d06c4f3685c379a21c6c8285~mv2.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_7cf73902d06c4f3685c379a21c6c8285~mv2.png"
  },
  {
    platform: "Twitter",
    url: "https://x.com/nivedan_ai", 
    iconUrl: "https://static.wixstatic.com/media/11062b_e9b4e9522d3c4de3a8a652c7f13af3ef~mv2.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_e9b4e9522d3c4de3a8a652c7f13af3ef~mv2.png"
  },
  {
    platform: "YouTube",
    url: "https://www.youtube.com/@nivedan.ai25",
    iconUrl: "https://static.wixstatic.com/media/11062b_8dcadfa428954b1d919f8499f75aa27a~mv2.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_8dcadfa428954b1d919f8499f75aa27a~mv2.png"
  }
];

export const footerSections: FooterSection[] = [
  {
    title: "PAGES",
    links: [
      { label: "Newsletter", href: "https://futureandai.com/newsletter", external: true },
      { label: "Community", href: "http://link.futureandai.com/community", external: true },
      { label: "Workshops", href: "https://lu.ma/user/usr-VyEFrpRvQ9pboAz", external: true },
      { label: "Tools", href: "http://toolbox.futureandai.com", external: true }
    ]
  },
  {
    title: "LEGALS", 
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms & Conditions", href: "#" },
      { label: "Contact Us", href: "https://wa.me/916377589749", external: true }
    ]
  }
];

export interface BrandInfo {
  name: string;
  logo: string;
  description: string;
}

export const brandsThatTrustUs: BrandInfo[] = [
  {
    name: "Adani",
    logo: "/adani.jpg",
    description: "Led a 2-day AI transformation workshop for 45 CHROs from Adani Group, architecting next-gen HR frameworks."
  },
  {
    name: "Microsoft",
    logo: "/microsoft.jpg",
    description: "Designed an AI-Assisted Research & Content Creation curriculum for upGrad x Microsoft, empowering learners with practical AI workflows and tools."
  },
  {
    name: "PAR",
    logo: "/par.jpg",
    description: "Developed PAR's comprehensive GenAI transformation roadmap, designing scalable frameworks for innovation acceleration and operational efficiency."
  },
  {
    name: "Think9",
    logo: "/think.jpg",
    description: "Serving as AI Strategy Consultant for Kishore Biyani's Think9 Group, architecting their enterprise-wide AI transformation initiatives."
  },
  {
    name: "Athena",
    logo: "/athena.jpg",
    description: "Led Athena Education's GenAI transformation initiative, architecting custom AI solutions for scholar project ideation and strategic workflows."
  },
  {
    name: "NTU Singapore",
    logo: "/ntu.jpg",
    description: "Delivered a workshop on GenAI Business Transformation at NTU Singapore for MBA cohorts."
  },
  {
    name: "upGrad",
    logo: "/upgrad.jpg",
    description: "Designed an AI-Assisted Research & Content Creation curriculum for upGrad x Microsoft, empowering learners with practical AI workflows and tools."
  },
  {
    name: "TEDx",
    logo: "/tedx.jpg",
    description: "Delivered a TEDx talk on 'The Teenage Founder's Secret Weapon: AI' at Neerja Modi School, inspiring young entrepreneurs to leverage AI for innovation."
  },
  {
    name: "Jagruk Fest",
    logo: "/jagruk.jpg",
    description: "Delivered a comprehensive AI foundations session at Jagruk Fest, empowering teenagers with practical knowledge of artificial intelligence."
  }
];


export const galleryImages: string[] = [
  "/Photo Galary_1.JPG",
  "/Photo Galary_2.JPG",
  "/Photo Galary_3.JPG",
  "/Photo Galary_4.JPG.png",
];