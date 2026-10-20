export interface NavItem {
  label: string;
  href: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface HeaderContent {
  brand: string;
  nav: NavItem[];
  heading: string;
  subtitle: string;
  navCta: CtaLink;
  heroCta: CtaLink;
  badge: string;
  socialIconUrls: string[];
  videoSrc: string;
}

export interface AboutContent {
  brandLogoKeys: string[];
  infoLeft: string;
  heading: string;
  infoRight: string;
  statement: string;
  cta: CtaLink;
  teamImages: ImageAsset[];
}

export interface ServiceCard {
  id: string;
  title: string;
  desc: string;
  badges: string[];
  theme: { bg: string; badge: string };
  iconKey: string;
  designKey: string;
}

export interface ServicesContent {
  tag: string;
  heading: string;
  subtitle: string;
  cards: ServiceCard[];
}

export interface CaseStudyItem {
  id: string;
  name: string;
  logo: string;
  description: string;
  metrics: string[];
}

export interface CaseStudiesContent {
  tag: string;
  heading: string;
  subtitle: string;
  mediaImage: ImageAsset;
  videoSrc: string;
  studies: CaseStudyItem[];
}

export interface ApproachItem {
  text: string;
  iconKey: string;
}

export interface WhyChooseUsContent {
  tag: string;
  approachTag: string;
  heading: string;
  subtitle: string;
  approachItems: ApproachItem[];
  bottomText: string;
  cta: CtaLink;
  image: ImageAsset;
}

export interface ProcessStep {
  id: string;
  name: string;
  title: string;
  desc: string;
  designKey: string;
}

export interface ProcessMetric {
  value: string;
  label: string;
}

export interface ProcessContent {
  tag: string;
  heading: string;
  subtitle: string;
  steps: ProcessStep[];
  metrics: ProcessMetric[];
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  featured?: boolean;
}

export interface PricingContent {
  tag: string;
  heading: string;
  subtitle: string;
  includedLabel: string;
  cta: CtaLink;
  plans: PricingPlan[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqContent {
  tag: string;
  heading: string;
  subtitle: string;
  questionsLabel: string;
  answerLabel: string;
  faqs: FaqItem[];
  contactText: string;
  contactCta: CtaLink;
}

export interface FooterLink {
  label: string;
  href?: string;
}

export interface FooterContent {
  heading: string;
  ctaLabel: string;
  brand: string;
  copyright: string;
  navigation: FooterLink[];
  services: string[];
  connect: string[];
  company: {
    title: string;
    description: string;
    address: string;
  };
  socialIconUrls: string[];
}

export interface HomeContent {
  header: HeaderContent;
  about: AboutContent;
  services: ServicesContent;
  caseStudies: CaseStudiesContent;
  whyChooseUs: WhyChooseUsContent;
  process: ProcessContent;
  pricing: PricingContent;
  faq: FaqContent;
  footer: FooterContent;
}
