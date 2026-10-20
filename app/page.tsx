import AboutUs from '@/components/templates/smm-agency-landing-page-growlio/About Us Growlio';
import CaseStudies from '@/components/templates/smm-agency-landing-page-growlio/Case Studies Growlio';
import FAQ from '@/components/templates/smm-agency-landing-page-growlio/FAQ Growlio';
import Process from '@/components/templates/smm-agency-landing-page-growlio/Our Process Growlio';
import Services from '@/components/templates/smm-agency-landing-page-growlio/Our Services Growlio';
import Pricing from '@/components/templates/smm-agency-landing-page-growlio/Pricing Growlio';
import WhyChooseUs from '@/components/templates/smm-agency-landing-page-growlio/Why Choose Us Growlio';
import type {
  AboutContent,
  CaseStudiesContent,
  FaqContent,
  PricingContent,
  ProcessContent,
  ServicesContent,
  WhyChooseUsContent,
} from '@/content/home/types';

const CDN = 'https://cdn.jiro.build/SMM';

const ABOUT_CONTENT: AboutContent = {
  brandLogoKeys: ['klarna', 'amazon', 'notion', 'microsoft', 'mercury', 'vercel', 'groupon'],
  infoLeft:
    'We Help Growing Brands Earn A Bolder Presence Across Social Media With Sharp Strategy, Original Content, And Campaigns That Speak To The Right Audience.',
  heading: 'About us',
  infoRight:
    'From Weekly Content To Paid Campaigns, We Pair Craft With Data To Turn Scrolling Attention Into Real Business Opportunities. One Useful Connection At A Time.',
  statement:
    'We’re a results driven social media agency helping brands build connections worth keeping.',
  cta: { label: 'Work With Verdo', href: '#footer' },
  teamImages: [
    { src: `${CDN}/images/a1.png`, alt: 'Team 1' },
    { src: `${CDN}/images/a2.png`, alt: 'Team 2' },
  ],
};

const SERVICES_CONTENT: ServicesContent = {
  tag: 'Our Services',
  heading: 'Every Tool Your Brand Needs to Win on Social',
  subtitle:
    'From strategy to content and campaigns, we craft social media solutions that put your brand in front of more people, build deeper connections, and deliver measurable results.',
  cards: [
    {
      id: 'strategy',
      title: 'Social Media Strategy',
      desc: 'Shape a clear social strategy that puts your brand in front of the people most likely to care. We blend audience insight with category research.',
      badges: ['Audit', 'Positioning', 'Contents Pillar', 'Campaign Roadmap'],
      theme: { bg: '#F680A3', badge: '#F796B3' },
      iconKey: 'strategy',
      designKey: 'card1',
    },
    {
      id: 'ads',
      title: 'Paid Social Ads',
      desc: 'Put your budget in front of the right people with targeted social campaigns built to lift visibility, engagement, leads, and sales.',
      badges: ['Meta Ads', 'Campaign Strategy', 'Performance Tracking'],
      theme: { bg: '#9F82FF', badge: '#BCA9FF' },
      iconKey: 'ads',
      designKey: 'card2',
    },
    {
      id: 'content',
      title: 'Content Creation',
      desc: 'Produce scroll-stopping content that grabs attention, tells your brand story, and keeps your audience coming back for more.',
      badges: ['Creative Design', 'Social Posts', 'Brand Content'],
      theme: { bg: '#FD7AEC', badge: '#FD97EE' },
      iconKey: 'content',
      designKey: 'card3',
    },
    {
      id: 'ugc',
      title: 'UGC & Video Content',
      desc: 'Turn real moments and sharp video into authentic content that earns trust and makes your brand feel human.',
      badges: ['Audit', 'UGC Videos', 'Reels', 'Short-Form Video'],
      theme: { bg: '#034F46', badge: '#006558' },
      iconKey: 'ugc',
      designKey: 'card4',
    },
  ],
};

const CASE_STUDIES_CONTENT: CaseStudiesContent = {
  tag: 'Case studies',
  heading: 'Real Brands. Real Numbers.',
  subtitle:
    'See How We Help Brands Turn Bold Ideas And Smarter Social Strategies Into Results You Can Measure.',
  mediaImage: { src: `${CDN}/images/c1.png`, alt: 'Case study' },
  videoSrc: `${CDN}/video/demo-.mp4`,
  studies: [
    {
      id: 'velora',
      name: 'Velora - Fashion',
      logo: 'Velora',
      description:
        'We Helped Velora Build A Steady Social Presence With Scroll-Stopping Content And Focused Ad Campaigns, Lifting Engagement, Widening Reach, And Adding Real Sales.',
      metrics: ['+185% - Engagement', '+320% - Reach', '+240% - Sales'],
    },
    {
      id: 'nourishco',
      name: 'NourishCo - Food',
      logo: 'NourishCo',
      description:
        'NourishCo partnered with us to sharpen their brand messaging and launch a multi-platform social campaign, driving steady organic growth and stronger loyalty.',
      metrics: ['+150% - Engagement', '+210% - Reach', '+190% - Sales'],
    },
    {
      id: 'lumaskin',
      name: 'LumaSkin - Beauty',
      logo: 'LumaSkin',
      description:
        'With influencer partnerships and a sharp content strategy, LumaSkin posted record conversions during their summer product launch.',
      metrics: ['+200% - Engagement', '+400% - Reach', '+310% - Sales'],
    },
    {
      id: 'techora',
      name: 'Techora - Technology',
      logo: 'Techora',
      description:
        'We positioned Techora as a go-to voice in B2B SaaS through educational video content and tightly targeted LinkedIn campaigns.',
      metrics: ['+120% - Leads', '+180% - Reach', '+145% - Signups'],
    },
    {
      id: 'rideon',
      name: 'Rideon - Automotive',
      logo: 'Rideon',
      description:
        'Rideon saw a sharp rise in dealership visits after our localized social ad campaigns spotlighted their new electric vehicle lineup.',
      metrics: ['+220% - Engagement', '+280% - Reach', '+170% - Visits'],
    },
  ],
};

const WHY_CHOOSE_US_CONTENT: WhyChooseUsContent = {
  tag: 'Why Choose Us',
  approachTag: 'Our Approach',
  heading: 'A Social Strategy Built Around Your Next Move',
  subtitle:
    'We pair creative thinking, sharp strategy, and hard data to help your brand stand out, reach the right people, and keep growing month after month.',
  approachItems: [
    { text: 'Strategy-First Marketing', iconKey: 'strategy-first' },
    { text: 'Creative Content & Design', iconKey: 'creative' },
    { text: 'UGC & Video Content', iconKey: 'ugc' },
    { text: 'Data-Driven Campaigns', iconKey: 'data' },
    { text: 'Performance-Focused Growth', iconKey: 'performance' },
  ],
  bottomText:
    'We mix smart social strategy, sharp creative, and performance campaigns to help brands stand out online. Every call is shaped by your audience, your goals, and growth you can measure.',
  cta: { label: 'Start Growing Today', href: '#footer' },
  image: { src: `${CDN}/images/w1.png`, alt: 'Why Choose Us' },
};

const PROCESS_CONTENT: ProcessContent = {
  tag: 'Our Process',
  heading: 'Our Path to Your Growth',
  subtitle:
    'See how we help brands turn bold ideas and smarter social strategies into results you can measure.',
  steps: [
    {
      id: 'discover',
      name: 'Discover',
      title: 'Discover',
      desc: 'We start by getting to know your brand from the inside out. We study your goals, target audience, competitors, current social presence, and what sets you apart.',
      designKey: 'discover',
    },
    {
      id: 'strategize',
      name: 'Strategize',
      title: 'Strategize',
      desc: 'We build a tailored roadmap designed to maximize your online impact, so every post and campaign lines up with your wider business objectives.',
      designKey: 'strategize',
    },
    {
      id: 'create-launch',
      name: 'Create & Launch',
      title: 'Create & Launch',
      desc: 'Our team crafts scroll-stopping content and launches targeted campaigns, bringing the strategy to life across every chosen social platform.',
      designKey: 'create-launch',
    },
    {
      id: 'analyze-grow',
      name: 'Analyze & Grow',
      title: 'Analyze & Grow',
      desc: 'We track performance continuously, read the key metrics closely, and optimize campaigns in real time to keep growth steady and measurable.',
      designKey: 'analyze-grow',
    },
  ],
  metrics: [
    { value: '+185%', label: 'Engagement Growth' },
    { value: '+320%', label: 'Social Reach' },
    { value: '240%', label: 'Sales Growth' },
    { value: '500K+', label: 'Content Views' },
    { value: '4.9/5', label: 'Client Satisfaction' },
    { value: '95%', label: 'Client Retention' },
  ],
};

const PRICING_CONTENT: PricingContent = {
  tag: 'Pricing',
  heading: 'Pricing for Every Stage',
  subtitle:
    'Pick the plan that fits your brand right now and scale your social presence as your business grows.',
  includedLabel: 'What’s included',
  cta: { label: 'Choose Your Plan', href: '#footer' },
  plans: [
    {
      id: 'starter',
      name: 'Starter',
      price: '$499',
      period: '/ month',
      description: 'For brands finding their voice on social.',
      features: [
        '2 Social Platforms',
        '12 Posts / Month',
        '5 Target Audiences',
        '3 Engagement Strategies',
        '1 Content Calendar',
      ],
    },
    {
      id: 'professional',
      name: 'Professional',
      price: '$999',
      period: '/ month',
      description: 'For brands ready to grow every month.',
      features: [
        '4 Social Platforms',
        '25 Posts / Month',
        '10 Target Audiences',
        '6 Engagement Strategies',
        '2 Content Calendars',
      ],
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '$1999',
      period: '/ month',
      description: 'For brands that need a full social team behind them.',
      features: [
        'Unlimited Social Platforms',
        '50 Posts / Month',
        'Unlimited Target Audiences',
        'Advanced Engagement Strategies',
        'Custom Content Calendars',
      ],
      featured: true,
    },
  ],
};

const FAQ_CONTENT: FaqContent = {
  tag: 'FAQ',
  heading: 'Answers Before You Ask',
  subtitle:
    'We partner with ambitious brands to build social strategies that actually move the needle. Here’s what a few of them say about working with us.',
  questionsLabel: 'Questions',
  answerLabel: 'Answer',
  faqs: [
    {
      question: 'What does a social media agency actually do?',
      answer:
        'We plan, publish, and grow your social presence through strategy, content, advertising, community management, and performance tracking.',
    },
    {
      question: 'Which social platforms do you cover?',
      answer:
        'We work across all the major ones — Instagram, TikTok, LinkedIn, Facebook, X (Twitter), and Pinterest — wherever your audience spends time.',
    },
    {
      question: 'Can you make content for our brand?',
      answer:
        'Yes. Our in-house creative team produces photos, short-form video, graphics, and copy, all written to sound like your brand and nobody else.',
    },
    {
      question: 'Do you handle paid advertising too?',
      answer:
        'We do. We plan, launch, and refine paid social campaigns that bring targeted traffic, leads, and conversions at a strong return on spend.',
    },
  
  ],
  contactText: 'Still have a question?',
  contactCta: { label: 'Talk to Us', href: '#footer' },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <div id="about">
        <AboutUs content={ABOUT_CONTENT} />
      </div>
      <div id="services">
        <Services content={SERVICES_CONTENT} />
      </div>
      <div id="case-studies">
        <CaseStudies content={CASE_STUDIES_CONTENT} />
      </div>
      <div id="why-choose-us">
        <WhyChooseUs content={WHY_CHOOSE_US_CONTENT} />
      </div>
      <div id="process">
        <Process content={PROCESS_CONTENT} />
      </div>
      <div id="pricing">
        <Pricing content={PRICING_CONTENT} />
      </div>
      <div id="faq">
        <FAQ content={FAQ_CONTENT} />
      </div>
    </main>
  );
}
