'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { useIsMobile } from '@/lib/use-is-mobile';
import type { AboutContent } from '@/content/home/types';

const BRAND_LOGOS: Record<string, React.ReactNode> = {
  klarna: (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: '22px', color: '#FFFEEB', letterSpacing: '-0.5px' }}>Klarna</span>
      <div style={{ width: '4px', height: '4px', backgroundColor: '#FFFEEB', borderRadius: '50%', marginLeft: '2px', alignSelf: 'flex-end', marginBottom: '6px' }}></div>
    </div>
  ),
  amazon: (
    <div style={{ display: 'flex', flexDirection: 'column', position: 'relative', marginTop: '-4px' }}>
      <span style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: '24px', color: '#FFFEEB', letterSpacing: '-1px', lineHeight: '22px' }}>amazon</span>
      <svg viewBox="0 0 100 30" width="60" height="18" style={{ position: 'absolute', bottom: '-12px', left: '2px' }}>
        <path d="M 0 15 Q 30 30 70 10 Q 55 25 80 15 Q 85 5 95 0 Q 95 15 80 20 Q 55 35 0 15 Z" fill="#FFFEEB" />
      </svg>
    </div>
  ),
  notion: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
      <div style={{ width: '22px', height: '22px', border: '2px solid #FFFEEB', borderRadius: '4px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
        <span style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: '14px', color: '#FFFEEB', marginTop: '1px' }}>N</span>
      </div>
      <span style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500, fontSize: '20px', color: '#FFFEEB', letterSpacing: '-0.5px' }}>Notion</span>
    </div>
  ),
  microsoft: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', width: '20px', height: '20px' }}>
        <div style={{ backgroundColor: '#FFFEEB' }}></div>
        <div style={{ backgroundColor: '#FFFEEB' }}></div>
        <div style={{ backgroundColor: '#FFFEEB' }}></div>
        <div style={{ backgroundColor: '#FFFEEB' }}></div>
      </div>
      <span style={{ fontFamily: '"Segoe UI", Arial, sans-serif', fontWeight: 600, fontSize: '20px', color: '#FFFEEB', letterSpacing: '-0.5px' }}>Microsoft</span>
    </div>
  ),
  mercury: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFEEB" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
      <span style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500, fontSize: '15px', color: '#FFFEEB', letterSpacing: '2.5px' }}>MERCURY</span>
    </div>
  ),
  vercel: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFFEEB">
        <path d="M12 2L24 22H0L12 2Z" />
      </svg>
      <span style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 700, fontSize: '20px', color: '#FFFEEB', letterSpacing: '-0.5px' }}>Vercel</span>
    </div>
  ),
  groupon: (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span style={{ fontFamily: 'Arial, sans-serif', fontWeight: 800, fontSize: '20px', color: '#FFFEEB', letterSpacing: '0px' }}>GROUPON</span>
    </div>
  ),
};

const About = ({ content }: { content: AboutContent }) => {
  const [scale, setScale] = useState(1);

  const isMobile = useIsMobile();

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      if (mobile) {
        setScale(1);
      } else {
        const screenWidth = window.innerWidth;
        const baseWidth = 1600;
        let newScale = screenWidth / baseWidth;
        if (newScale > 1.2) newScale = 1.2;
        setScale(newScale);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={isMobile ? { ...styles.fullWidthWrapper, height: 'auto', minHeight: '100vh', paddingBottom: '0' } : { ...styles.fullWidthWrapper, height: `${889 * scale}px`, minHeight: '100vh' }}>
      <div style={isMobile ? {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      } : { ...styles.container, transform: `scale(${scale})` }}>

        {/* Top Logos Row */}
        <div style={isMobile ? {
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '24px',
          width: '100%',
          padding: '20px',
          boxSizing: 'border-box',
          marginTop: '20px'
        } : styles.logosRow}>

          {content.brandLogoKeys.map((key) => (
            <React.Fragment key={key}>{BRAND_LOGOS[key]}</React.Fragment>
          ))}
        </div>

        {/* Dark Section */}
        <div style={isMobile ? {
          width: '100%',
          backgroundColor: '#1B1B1A',
          borderRadius: '40px 40px 0px 0px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '40px 20px',
          boxSizing: 'border-box',
          marginTop: '20px'
        } : styles.darkSection}>

          {/* Top Info Row */}
          <div style={isMobile ? {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '40px',
            width: '100%'
          } : styles.infoRow}>

            <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', gap: '30px', width: '100%' }}>
              <motion.p style={isMobile ? { ...styles.infoTextLeft, width: '100%', textAlign: 'center' } : styles.infoTextLeft}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.6 }}
              >
                {content.infoLeft}
              </motion.p>
              <Image src={content.teamImages[0].src} alt={content.teamImages[0].alt} width={600} height={600} style={isMobile ? { ...styles.teamImage, width: '100%', height: 'auto', aspectRatio: '1/1' } : styles.teamImage} />
            </div>

            <h2 style={isMobile ? { ...styles.aboutUsHeading, width: 'auto' } : styles.aboutUsHeading}>{content.heading}</h2>

            <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', gap: '30px', width: '100%' }}>
              <Image src={content.teamImages[1].src} alt={content.teamImages[1].alt} width={600} height={600} style={isMobile ? { ...styles.teamImage, width: '100%', height: 'auto', aspectRatio: '1/1' } : styles.teamImage} />
              <motion.p style={isMobile ? { ...styles.infoTextRight, width: '100%', textAlign: 'center' } : styles.infoTextRight}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.6 }}
              >
                {content.infoRight}
              </motion.p>
            </div>

          </div>

          {/* Main Statement */}
          <div style={isMobile ? {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '30px',
            width: '100%',
            marginTop: '40px'
          } : styles.statementWrapper}>
            <motion.h2
              style={isMobile ? {
                ...styles.mainStatement,
                width: '100%',
                fontSize: '36px',
                lineHeight: '40px'
              } : styles.mainStatement}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={{
                visible: { transition: { staggerChildren: 0.05 } },
                hidden: {}
              }}
            >
              {content.statement.split(" ").map((word, i, arr) => (
                <React.Fragment key={i}>
                  <span style={{ overflow: 'hidden', display: 'inline-flex', verticalAlign: 'bottom' }}>
                    <motion.span
                      variants={{
                        hidden: { y: '100%', opacity: 0 },
                        visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
                      }}
                    >
                      {word}
                    </motion.span>
                  </span>
                  {i < arr.length - 1 && ' '}
                </React.Fragment>
              ))}
            </motion.h2>

            {/* Let's Work Together Button */}
            <a href={content.cta.href} className="animated-btn" style={{ ...styles.ctaButtonWrapper, textDecoration: 'none', color: 'inherit' }}>
              <div style={styles.ctaIconCircle}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 5L13 12L6 19" stroke="#024F47" strokeWidth="2.5" strokeLinecap="square" strokeDasharray="4 5" />
                  <path d="M13 5L20 12L13 19" stroke="#024F47" strokeWidth="2.5" strokeLinecap="square" strokeDasharray="4 5" />
                </svg>
              </div>
              <div style={styles.ctaTextPill}>
                <span style={styles.ctaText}>{content.cta.label}</span>
              </div>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  fullWidthWrapper: {
    width: '100%',
    backgroundColor: '#024F47',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '1600px',
    height: '889px',
    position: 'relative',
    transformOrigin: 'center center',
    flexShrink: 0,
  },
  logosRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '46px',
    position: 'absolute',
    width: '1056px',
    height: '33px',
    left: '50%',
    transform: 'translateX(-50%)',
    top: '50px',
  },
  logoImage: {
    height: '30px',
    objectFit: 'contain',
    opacity: 0.9,
  },
  darkSection: {
    position: 'absolute',
    width: '1600px',
    height: '756px',
    left: '0px',
    top: '133px',
    backgroundColor: '#1B1B1A',
    borderRadius: '60px 60px 0px 0px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  infoRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0px',
    gap: '76px',
    width: '1405px',
    height: '162px',
    marginTop: '80px',
  },
  infoTextLeft: {
    width: '360px',
    fontFamily: '"Inter", sans-serif',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '140%',
    color: '#E0E1E1',
    margin: 0,
    textAlign: 'left',
    marginTop: '-4px'
  },
  infoTextRight: {
    width: '360px',
    fontFamily: '"Inter", sans-serif',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '140%',
    color: '#E0E1E1',
    margin: 0,
    textAlign: 'right',
    marginTop: '-4px'
  },
  teamImage: {
    width: '162px',
    height: '162px',
    borderRadius: '8px',
    objectFit: 'cover'
  },
  aboutUsHeading: {
    fontFamily: "'Goudy Old Style', 'Goudy Bookletter 1911', serif",
    fontWeight: 400,
    fontSize: '40px',
    color: '#FEFEFF',
    textAlign: 'center',
    margin: 0,
    width: '146px'
  },
  statementWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '50px',
    width: '1405px',
    marginTop: '60px',
  },
  mainStatement: {
    fontFamily: "'Goudy Old Style', 'Goudy Bookletter 1911', serif",
    fontWeight: 400,
    fontSize: '90px',
    lineHeight: '90px',
    textAlign: 'center',
    letterSpacing: '-0.02em',
    color: '#FEFEFF',
    margin: 0,
    width: '1405px'
  },
  ctaButtonWrapper: {
    boxSizing: 'border-box',
    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '4px',
    gap: '2px',
    border: '1.5px solid #FEFEFF',
    borderRadius: '999px',
    cursor: 'pointer',
    backgroundColor: 'transparent',
  },
  ctaIconCircle: {
    width: '46px',
    height: '46px',
    backgroundColor: '#FEFEFF',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  ctaTextPill: {
    height: '46px',
    padding: '0 20px',
    backgroundColor: '#FEFEFF',
    borderRadius: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  ctaText: {
    fontFamily: "'Goudy Old Style', 'Goudy Bookletter 1911', serif",
    fontWeight: 700,
    fontSize: '16px',
    color: '#024F47',
  },
};

export default About;
