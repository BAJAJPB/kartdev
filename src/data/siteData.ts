import { 
  NavigationItem, 
  ServiceCard, 
  StatisticItem, 
  SocialLink, 
  ServiceDetailCard, 
  FooterSection 
} from '../types';

export const navigationItems: NavigationItem[] = [
  { label: "Community", href: "https://chat.whatsapp.com/FIfmHT7Pc1NH1HIca2sAb8", external: true },
  { label: "Newsletter", href: "#newsletter" },
  { label: "Tools", href: "https://futureandai.com/tools/", external: true }
];

export const statistics: StatisticItem[] = [
  { value: "500K+", label: "Subscribers" },
  { value: "100M+", label: "Impressions" },
  { value: "10K+", label: "Members" }
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

export const companyLogos: string[] = [
  "https://static.wixstatic.com/media/c04408_c17f6af314bc4a87bb50354e6e1c5e94~mv2.png/v1/fill/w_131,h_131,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/httpsdrive_google_comopenid%3D1eOviNSuAwrpmdqxK9LiC8uoxaGYhRC_v%26usp%3Ddrive_copy.png",
  "https://static.wixstatic.com/media/c04408_68f5899bdeec424793b50f69a42b40c7~mv2.png/v1/fill/w_131,h_131,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2.png",
  "https://static.wixstatic.com/media/c04408_be332f1ad215438883bd308964f4a45b~mv2.png/v1/fill/w_131,h_131,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/3.png",
  "https://static.wixstatic.com/media/c04408_7e3da061c4a645c98288564abdc93fb4~mv2.png/v1/fill/w_131,h_131,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c04408_7e3da061c4a645c98288564abdc93fb4~mv2.png",
  "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1614680376573-df3480f33139?w=200&h=200&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1592179900008-8d906ff40e04?w=200&h=200&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=200&h=200&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=200&h=200&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=200&h=200&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=200&h=200&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=200&h=200&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1567360425618-1594206637d2?w=200&h=200&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=200&h=200&fit=crop&crop=center"
];