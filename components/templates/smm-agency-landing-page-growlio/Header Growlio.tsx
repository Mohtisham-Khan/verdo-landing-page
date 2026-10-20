'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { useIsMobile } from '@/lib/use-is-mobile';
import type { HeaderContent } from '@/content/home/types';

const SOCIAL_ICON_POSITIONS = [
  { rotate: '12.56deg', left: '-285px', top: '551px' },
  { rotate: '12.56deg', left: '-202px', top: '575px' },
  { rotate: '12.56deg', left: '-119px', top: '599px' },
  { rotate: '12.56deg', left: '-36px', top: '623px' },
  { rotate: '3.6deg', left: '47px', top: '647px' },
  { rotate: '1.56deg', left: '134px', top: '662px' },
  { rotate: '0deg', left: '220px', top: '665px' },
  { rotate: '0.09deg', left: '307px', top: '662px' },
  { rotate: '-9.48deg', left: '387px', top: '644px' },
  { rotate: '-14.55deg', left: '470px', top: '619px' },
  { rotate: '-21.55deg', left: '548px', top: '589px' },
  { rotate: '-26.7deg', left: '626px', top: '548px' },
  { rotate: '-35.98deg', left: '694px', top: '502px' },
  { rotate: '-37.93deg', left: '764px', top: '449px' },
  { rotate: '-37.93deg', left: '832px', top: '397px' },
  { rotate: '-37.93deg', left: '900px', top: '345px' },
  { rotate: '-36.97deg', left: '966px', top: '296px' },
  { rotate: '-36.43deg', left: '1035px', top: '249px' },
  { rotate: '-10.98deg', left: '1125px', top: '220px' },
  { rotate: '2.44deg', left: '1234px', top: '225px' },
  { rotate: '5.94deg', left: '1313px', top: '228px' },
  { rotate: '12deg', left: '1396px', top: '236px' },
  { rotate: '15.54deg', left: '1474px', top: '259px' },
  { rotate: '15.2deg', left: '1550px', top: '284px' },
  { rotate: '15.2deg', left: '1626px', top: '309px' },
  { rotate: '15.2deg', left: '1702px', top: '334px' },
  { rotate: '15.2deg', left: '1778px', top: '359px' }
];

const Header = ({ content }: { content: HeaderContent }) => {
  const [scale, setScale] = useState(1);
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const socialIcons = SOCIAL_ICON_POSITIONS.map((icon, idx) => ({
    ...icon,
    url: content.socialIconUrls[idx % content.socialIconUrls.length],
  }));

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;

      if (mobile) {
        setScale(1); // Do not scale down on mobile, use responsive flex layout
      } else {
        const availableWidth = window.innerWidth - 160;
        let newScale = availableWidth / 1440;
        const availableHeight = window.innerHeight;
        const heightScale = availableHeight / 805;
        newScale = Math.min(newScale, heightScale);
        setScale(newScale);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={isMobile ? { ...styles.fullWidthWrapper, height: 'auto', minHeight: '100vh', padding: '20px', boxSizing: 'border-box', position: 'relative' } : styles.fullWidthWrapper}>
      <style>{`
        .cta-btn:hover {
          opacity: 0.9;
        }

        @keyframes textSlideUp {
          0% { transform: translateY(0); opacity: 1; }
          40% { transform: translateY(-10px); opacity: 0; }
          50% { transform: translateY(10px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }

        .nav-item {
          cursor: pointer;
        }

        .nav-item span {
          display: inline-block;
        }

        .nav-item:hover span {
          animation: textSlideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>

      <div style={isMobile ? {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      } : { ...styles.container, transform: `scale(${scale})` }}>

        {/* Navigation Bar */}
        <div style={isMobile ? {
          display: 'flex',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          padding: '20px',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxSizing: 'border-box',
          zIndex: 50,
          backgroundColor: isMenuOpen ? '#FBFADD' : 'transparent'
        } : styles.navBar}>
          <div style={styles.logoGroup}>
            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 0L21.3923 10L11 20L0.607696 10L11 0Z" fill="#034F46"/>
              <path d="M11 4.5L16.5 10L11 15.5L5.5 10L11 4.5Z" fill="#FBFADD"/>
            </svg>
            <span style={styles.logoText}>{content.brand}</span>
          </div>

          {!isMobile && (
            <nav aria-label="Main" style={styles.menuGroup}>
              {content.nav.map((item) => (
                <a key={item.label} href={item.href} style={{ ...styles.menuItem, textDecoration: 'none' }} className="nav-item">
                  <div style={styles.menuDot}></div>
                  <span style={styles.menuText}>{item.label}</span>
                </a>
              ))}
            </nav>
          )}

          {isMobile ? (
            <button
              type="button"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{ cursor: 'pointer', padding: '8px', background: 'none', border: 'none', display: 'flex' }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#034F46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="6" x2="20" y2="6"></line>
                <line x1="4" y1="18" x2="20" y2="18"></line>
              </svg>
            </button>
          ) : (
            <a href={content.navCta.href} style={{ ...styles.startProject, textDecoration: 'none' }} className="nav-item">
              <div style={{ ...styles.menuDot, backgroundColor: '#034F46' }}></div>
                <span style={styles.startProjectText}>{content.navCta.label}</span>
              <div style={{ ...styles.menuDot, backgroundColor: '#034F46' }}></div>
            </a>
          )}

          {/* Mobile Dropdown Menu */}
          {isMobile && isMenuOpen && (
            <div id="mobile-menu" style={{
              position: 'absolute',
              top: '72px',
              left: 0,
              width: '100%',
              backgroundColor: '#FBFADD',
              display: 'flex',
              flexDirection: 'column',
              padding: '20px',
              gap: '24px',
              boxSizing: 'border-box',
              borderBottom: '1px solid rgba(3, 79, 70, 0.1)',
              boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)'
            }}>
              {content.nav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}
                >
                  <div style={{ width: '6px', height: '6px', backgroundColor: '#034F46', borderRadius: '50%' }}></div>
                  <span style={{ fontFamily: 'Inter Tight', fontSize: '18px', fontWeight: 500, color: '#034F46' }}>{item.label}</span>
                </a>
              ))}
              <a href={content.navCta.href} onClick={() => setIsMenuOpen(false)} style={{ ...styles.startProject, alignSelf: 'flex-start', marginTop: '10px', textDecoration: 'none' }}>
              <span style={styles.startProjectText}>{content.navCta.label}</span>
              </a>
            </div>
          )}
        </div>

        {/* Hero Content */}
        <div style={isMobile ? {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '20px',
          width: '100%',
          paddingTop: '112px', // 72px nav + 40px gap
          zIndex: 20
        } : styles.heroContent}>
          <motion.h1
            style={isMobile ? {
              fontFamily: "'Goudy Bookletter 1911', serif",
              fontWeight: 400,
              fontSize: '44px',
              lineHeight: '1.1',
              color: '#034F46'
            } : styles.heroTitle}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={{
              visible: { transition: { staggerChildren: 0.08 } },
              hidden: {}
            }}
          >
            {content.heading.split(" ").map((word, i, arr) => (
              <React.Fragment key={i}>
                <span style={{ overflow: 'hidden', display: 'inline-flex', verticalAlign: 'top' }}>
                  <motion.span
                    variants={{
                      hidden: { y: '-100%', opacity: 0 },
                      visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
                    }}
                  >
                    {word}
                  </motion.span>
                </span>
                {i < arr.length - 1 && ' '}
              </React.Fragment>
            ))}
          </motion.h1>
          <motion.p
            style={isMobile ? {
              fontFamily: "'Inter Tight', sans-serif",
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '1.5',
              color: '#034F46',
              opacity: 0.8
            } : styles.heroSubtitle}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={{
              visible: { transition: { staggerChildren: 0.02, delayChildren: 0.3 } },
              hidden: {}
            }}
          >
            {content.subtitle.split(" ").map((word, i, arr) => (
              <React.Fragment key={i}>
                <span style={{ overflow: 'hidden', display: 'inline-flex', verticalAlign: 'top' }}>
                  <motion.span
                    variants={{
                      hidden: { y: '-100%', opacity: 0 },
                      visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
                    }}
                  >
                    {word}
                  </motion.span>
                </span>
                {i < arr.length - 1 && ' '}
              </React.Fragment>
            ))}
          </motion.p>
          <a href={content.heroCta.href} className="animated-btn" style={{ ...(isMobile ? { ...styles.ctaWrapper, marginTop: 0 } : styles.ctaWrapper), textDecoration: 'none', color: 'inherit' }}>
            <div style={styles.ctaIconCircle}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 5L13 12L6 19" stroke="white" strokeWidth="2.5" strokeLinecap="square" strokeDasharray="4 5" />
                <path d="M13 5L20 12L13 19" stroke="white" strokeWidth="2.5" strokeLinecap="square" strokeDasharray="4 5" />
              </svg>
            </div>
            <div style={styles.ctaTextPill}>
              <span style={styles.ctaText}>{content.heroCta.label}</span>
            </div>
          </a>
        </div>

        {/* Social Media Curved Icons - Hidden on Mobile */}
        {!isMobile && (
          <motion.div style={styles.iconsContainer}
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {socialIcons.map((icon, idx) => {
              const N = socialIcons.length;
              const startIdx = idx + 1;

              const getSequence = (arr: (string | number)[], sIdx: number): (string | number)[] => {
                const seq: (string | number)[] = [];
                for (let i = 0; i <= arr.length; i++) {
                  seq.push(arr[(sIdx + i) % arr.length]);
                }
                return seq;
              };

              const xSeq = getSequence(socialIcons.map(s => parseInt(s.left)), startIdx);
              const ySeq = getSequence(socialIcons.map(s => parseInt(s.top)), startIdx);
              const rotateSeq = getSequence(socialIcons.map(s => s.rotate), startIdx);

              const segments = socialIcons.map((p1, i) => {
                if (i === N - 1) return 0.0001;
                const p2 = socialIcons[i + 1];
                const dx = parseInt(p2.left) - parseInt(p1.left);
                const dy = parseInt(p2.top) - parseInt(p1.top);
                return Math.sqrt(dx * dx + dy * dy);
              });

              const totalDistance = segments.reduce((sum, val) => sum + val, 0);
              const segmentTimes = segments.map(d => d / totalDistance);

              const times = [0];
              let currentTime = 0;
              for (let i = 0; i < N; i++) {
                const currentSegmentIdx = (startIdx + i) % N;
                currentTime += segmentTimes[currentSegmentIdx];
                if (currentTime > 1) currentTime = 1;
                times.push(currentTime);
              }
              times[times.length - 1] = 1;

              return (
                <motion.div key={idx} style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  width: '70.44px',
                  height: '70.44px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 10,
                  opacity: 1
                }}
                animate={{ x: xSeq, y: ySeq, rotate: rotateSeq, opacity: 1 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear", times: times }}
                >
                  <Image
                    src={icon.url}
                    alt={`Social Icon ${idx}`}
                    width={71}
                    height={71}
                    unoptimized
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {/* Hero Image Container */}
        <motion.div style={isMobile ? {
          width: '100%',
          height: '400px',
          backgroundColor: '#034F46',
          borderRadius: '24px',
          overflow: 'hidden',
          position: 'relative'
        } : styles.heroImageContainer}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
        >
          <div style={isMobile ? {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '6px 12px',
            position: 'absolute',
            right: '12px',
            top: '12px',
            backgroundColor: '#FEFFFF',
            borderRadius: '999px',
            zIndex: 20,
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
          } : styles.viewsBadge}>
            <span style={styles.viewsText}>{content.badge}</span>
          </div>
          <video
            src={content.videoSrc}
            autoPlay
            loop
            muted
            playsInline
            style={isMobile ? { ...styles.heroImage, borderRadius: 'inherit' } : styles.heroImage}
          />
        </motion.div>

      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  fullWidthWrapper: {
    width: '100%',
    height: '100vh',
    backgroundColor: '#FBFADD',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', // This guarantees vertical centering
    overflow: 'hidden',
  },
  container: {
    width: '1440px',
    height: '805px',
    position: 'relative',
    transformOrigin: 'center center',
    flexShrink: 0,
  },
  navBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    width: '100%', // Fully stretches within the 1440px
    height: '24px',
    top: '30px',
    left: '0px',
    zIndex: 20,
  },
  logoGroup: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer'
  },
  logoText: {
    fontFamily: "'Inter Tight', sans-serif",
    fontWeight: 600,
    fontSize: '22px',
    textTransform: 'capitalize',
    color: '#000101',
  },
  menuGroup: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '32px',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)'
  },
  menuItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer',
    transition: 'opacity 0.2s'
  },
  menuDot: {
    width: '6px',
    height: '6px',
    backgroundColor: '#000101',
    borderRadius: '1px',
  },
  menuText: {
    fontFamily: "'Inter Tight', sans-serif",
    fontWeight: 500,
    fontSize: '16px',
    color: '#000101',
  },
  startProject: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer',
    transition: 'opacity 0.2s'
  },
  startProjectText: {
    fontFamily: "'Inter Tight', sans-serif",
    fontWeight: 500,
    fontSize: '16px',
    color: '#000101',
  },
  heroContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '32px',
    position: 'absolute',
    width: '640px',
    left: '0px', // Adjusted from 80px since container is now 1440px
    top: '160px',
    zIndex: 20
  },
  heroTitle: {
    width: '642.76px',
    height: '240px',
    fontFamily: "'Goudy Old Style', 'Goudy Bookletter 1911', serif",
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '94px',
    lineHeight: '80px',
    letterSpacing: '-0.02em',
    color: '#034F46',
    flex: 'none',
    order: 0,
    alignSelf: 'stretch',
    flexGrow: 0,
    margin: 0,
  },
  heroSubtitle: {
    fontFamily: "'Inter Tight', sans-serif",
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#034F46',
    margin: 0,
    maxWidth: '560px'
  },
  ctaWrapper: {
    boxSizing: 'border-box',
    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '6px',
    gap: '8px',
    border: '1.5px solid #034F46',
    borderRadius: '100px',
    marginTop: '10px',
    cursor: 'pointer'
  },
  ctaIconCircle: {
    width: '54px',
    height: '54px',
    backgroundColor: '#034F46',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  ctaTextPill: {
    height: '54px',
    padding: '0 32px',
    backgroundColor: '#034F46',
    borderRadius: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  ctaText: {
    fontFamily: "'Goudy Bookletter 1911', 'Goudy Old Style', serif",
    fontWeight: 700,
    fontSize: '22px',
    color: '#FEFFFF',
    letterSpacing: '0.01em',
    whiteSpace: 'nowrap'
  },
  iconsContainer: {
    position: 'absolute',
    width: '1600px', // Original width
    height: '805px',
    left: '-80px', // Shifts all absolute icon coordinates correctly onto the 1440px canvas
    top: '0px',
    pointerEvents: 'none'
  },
  heroImageContainer: {
    position: 'absolute',
    width: '480px',
    height: '680px',
    right: '0px', // Adjusted from 80px to align to right edge of 1440px container
    bottom: '0px',
    backgroundColor: '#034F46',
    borderRadius: '40px 40px 0px 0px',
    zIndex: 15,
  },
  heroImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '40px 40px 0px 0px',
  },
  viewsBadge: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '8px 20px',
    position: 'absolute',
    right: '24px',
    top: '24px',
    backgroundColor: '#FEFFFF',
    borderRadius: '999px',
    zIndex: 20,
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
  },
  viewsText: {
    fontFamily: "'Inter Tight', sans-serif",
    fontWeight: 600,
    fontSize: '14px',
    color: '#034F46',
  }
};

export default Header;
