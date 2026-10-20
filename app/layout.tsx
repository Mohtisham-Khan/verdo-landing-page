import type { Metadata } from "next";
import "./globals.css";

import MotionProvider from '@/components/ui/MotionProvider';
import Header from '@/components/templates/smm-agency-landing-page-growlio/Header Growlio';
import Footer from '@/components/templates/smm-agency-landing-page-growlio/Footer Growlio';
import type { FooterContent, HeaderContent } from '@/content/home/types';

const CDN = 'https://cdn.jiro.build/SMM';

const HEADER_CONTENT: HeaderContent = {
  brand: 'Verdo',
  nav: [
    { label: 'Home', href: '#top' },
    { label: 'Services', href: '#services' },
    { label: 'About Us', href: '#about' },
    { label: 'Case Studies', href: '#case-studies' },
  ],
  heading: 'Turn social reach into real business growth',
  subtitle:
    'We help brands grow on social media with sharp strategy, original content, and performance campaigns that turn quiet followers into paying customers.',
  navCta: { label: 'Book a Call', href: '#footer' },
  heroCta: { label: 'Get a Free Audit', href: '#footer' },
  badge: '48M Views',
  socialIconUrls: [
    `${CDN}/images/1.svg`,
    `${CDN}/images/2.svg`,
    `${CDN}/images/3.svg`,
    `${CDN}/images/4.svg`,
    `${CDN}/images/5.svg`,
    `${CDN}/images/6.svg`,
    `${CDN}/images/7.svg`,
    `${CDN}/images/8.svg`,
    `${CDN}/images/9.svg`,
  ],
  videoSrc: `${CDN}/video/smm.mp4`,
};

const FOOTER_CONTENT: FooterContent = {
  heading: 'Let’s Make Something Happen',
  ctaLabel: 'Let’s Talk',
  brand: 'Verdo',
  copyright: '© 2026 Verdo. All Rights Reserved.',
  navigation: [
    { label: 'Work', href: '#case-studies' },
    { label: 'Services', href: '#services' },
    { label: 'About Us', href: '#about' },
    { label: 'Process', href: '#process' },
  ],
  services: ['Social Strategy', 'Content Creation', 'Paid Advertising', 'Community Management'],
  connect: ['Instagram', 'LinkedIn', 'YouTube', 'TikTok'],
  company: {
    title: '@ VERDO 2026',
    description: 'Social strategy, creative content, and paid campaigns built for ambitious brands.',
    address: '124 9th St, Brooklyn, NY',
  },
  socialIconUrls: [
    `${CDN}/images/1.svg`,
    `${CDN}/images/2.svg`,
    `${CDN}/images/3.svg`,
    `${CDN}/images/4.svg`,
    `${CDN}/images/5.svg`,
    `${CDN}/images/6.svg`,
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Verdo — Social Media Marketing Agency",
    template: "%s | Verdo",
  },
  description:
    "Verdo helps growing brands build a stronger presence across social media with sharp strategy, original content, and campaigns that reach the right audience.",
  openGraph: {
    title: "Verdo — Social Media Marketing Agency",
    description:
      "We help growing brands build a stronger presence across social media with sharp strategy, original content, and campaigns that reach the right audience.",
    siteName: "Verdo",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {/* No-JS fallback: framer-motion writes its `initial="hidden"` variants
            into the HTML as inline styles (opacity:0 / translateY(...)), so
            without JS the content stays invisible. This block only applies when
            scripting is disabled, revealing all animated content. Selectors are
            scoped so design translucency (opacity:0.x) and centering transforms
            (translate/translateX(-50%)) are never touched. */}
        <noscript>
          <style>{`
            [style*="opacity:0;"], [style$="opacity:0"], [style*="opacity: 0;"] { opacity: 1 !important; }
            [style*="translateY("] { transform: none !important; }
          `}</style>
        </noscript>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Fonts loaded via <link> because the template hardcodes exact family
            names ('Inter Tight', 'Goudy Bookletter 1911'); next/font would hash
            the family names and break 100+ references in the section components.
            This site is a single page, so page-scoped loading is a non-issue. */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300;400;500;600;700&family=Goudy+Bookletter+1911&display=swap"
        />
        <MotionProvider>
          <div id="top">
            <Header content={HEADER_CONTENT} />
          </div>
          {children}
          <div id="footer">
            <Footer content={FOOTER_CONTENT} />
          </div>
        </MotionProvider>
      </body>
    </html>
  );
}
