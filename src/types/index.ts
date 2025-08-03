export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export interface StatisticItem {
  value: string;
  label: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  iconUrl: string;
}

export interface ServiceDetailCard {
  id: string;
  title: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
  imageUrl: string;
  bgColor: string;
}

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface BrandInfo {
  name: string;
  logo: string;
  description: string;
}