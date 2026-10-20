'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { SiKlarna, SiNotion, SiVercel, SiGroupon } from 'react-icons/si';
import { FaAmazon, FaMicrosoft } from 'react-icons/fa';
import Image from 'next/image';

import { useIsMobile } from '@/lib/use-is-mobile';
import type { CaseStudiesContent } from '@/content/home/types';

const AnimatedMetric = ({ metric, index, studyIndex }: { metric: string, index: number, studyIndex: number }) => {
  const match = metric.match(/^([^\d]*)(\d+)(.*)$/);
  const prefix = match ? match[1] : '';
  const value = match ? parseInt(match[2], 10) : 0;
  const suffix = match ? match[3] : '';

  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (!match) return;
    count.set(0);
    const timeout = setTimeout(() => {
      animate(count, value, { duration: 1.2, ease: 'easeOut' });
    }, 100 + index * 100);
    return () => {
      clearTimeout(timeout);
      count.stop();
    };
  }, [value, index, studyIndex, count, match]);

  if (match) {
    return (
      <span style={{ display: 'inline-flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
        {prefix}<motion.span>{rounded}</motion.span>{suffix}
      </span>
    );
  }

  return <span>{metric}</span>;
};

const CaseStudy = ({ content }: { content: CaseStudiesContent }) => {
  const [scale, setScale] = useState(1);
  const [activeStudyIndex, setActiveStudyIndex] = useState(0);

  const navRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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

  const caseStudiesData = content.studies;

  const activeData = caseStudiesData[activeStudyIndex];

  const renderLogos = () => (
    <>
      <SiKlarna size={24} color="#034E47" />

      <div style={{ display: 'flex', flexDirection: 'column', position: 'relative', marginTop: '-4px' }}>
        <span style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: '24px', color: '#034E47', letterSpacing: '-1px', lineHeight: '22px' }}>amazon</span>
        <FaAmazon size={12} color="#034E47" style={{ position: 'absolute', bottom: '-8px', left: '2px', width: '64px' }} />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <SiNotion size={20} color="#034E47" />
        <span style={{ fontFamily: 'Arial, sans-serif', fontWeight: 600, fontSize: '20px', color: '#034E47', letterSpacing: '-0.5px' }}>Notion</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <FaMicrosoft size={20} color="#034E47" />
        <span style={{ fontFamily: '"Segoe UI", Arial, sans-serif', fontWeight: 600, fontSize: '20px', color: '#034E47', letterSpacing: '-0.5px' }}>Microsoft</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#034E47" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
        <span style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500, fontSize: '15px', color: '#034E47', letterSpacing: '2.5px' }}>MERCURY</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <SiVercel size={20} color="#034E47" />
        <span style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 700, fontSize: '20px', color: '#034E47', letterSpacing: '-0.5px' }}>Vercel</span>
      </div>

      <SiGroupon size={28} color="#034E47" />
    </>
  );

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!navRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - navRef.current.offsetLeft);
    setScrollLeft(navRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !navRef.current) return;
    e.preventDefault();
    const x = e.pageX - navRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    navRef.current.scrollLeft = scrollLeft - walk;
  };

  if (isMobile) {
    return (
      <div style={{ width: '100%', backgroundColor: '#FBFBDC', padding: '60px 20px', boxSizing: 'border-box' }}>
        <style>
          {`
            @keyframes scrollMarquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .hide-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}
        </style>
        {/* Header Section */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', marginBottom: '40px' }}>
          <div style={styles.pillRow}>
            <div style={styles.pillSquare}></div>
            <span style={styles.pillText}>{content.tag}</span>
          </div>
          <motion.h2
            style={{ ...styles.mainTitle, width: '100%', fontSize: '36px', lineHeight: '42px' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={{
              visible: { transition: { staggerChildren: 0.05 } },
              hidden: {}
            }}
          >
            {content.heading.split(" ").map((word, i, arr) => (
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
          <motion.p style={{ ...styles.subTitle, width: '100%', textAlign: 'center' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {content.subtitle}
          </motion.p>
        </div>

        {/* Content Wrapper */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

          {/* Top Nav Bar */}
          <div
            ref={navRef}
            style={{
              ...styles.navBar,
              width: '100%',
              padding: '12px 16px',
              height: 'auto',
              cursor: isDragging ? 'grabbing' : 'grab'
            }}
            className="hide-scrollbar"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {caseStudiesData.map((pill, index) => {
              const isActive = index === activeStudyIndex;
              return (
                <div
                  key={index}
                  onClick={() => setActiveStudyIndex(index)}
                  style={{
                    ...styles.navPill,
                    backgroundColor: isActive ? '#034E47' : '#F6F7F7',
                    color: isActive ? '#FEFFFF' : '#034E47',
                    fontSize: '16px',
                    padding: '8px 16px'
                  }}
                >
                  {pill.name}
                </div>
              );
            })}
          </div>

          {/* Top Card Stacked */}
          <motion.div
            style={{ width: '100%', backgroundColor: '#FEFFFF', borderRadius: '24px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px', boxSizing: 'border-box' }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ width: '100%', aspectRatio: '16/9', borderRadius: '16px', overflow: 'hidden' }}>
              <Image src={content.mediaImage.src} alt={activeData.name} width={1600} height={900} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <div>
              <h3 style={{ ...styles.cardLogoText, fontSize: '28px', marginBottom: '16px' }}>{activeData.logo}</h3>
              <motion.div
                key={`desc-mobile-${activeStudyIndex}`}
                style={{ ...styles.cardDescription, fontSize: '16px', lineHeight: '24px', marginBottom: '20px' }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={{
                  visible: { transition: { staggerChildren: 0.02 } },
                  hidden: {}
                }}
              >
                {activeData.description.split(" ").map((word, i, arr) => (
                  <React.Fragment key={i}>
                    <span style={{ overflow: 'hidden', display: 'inline-flex', verticalAlign: 'bottom' }}>
                      <motion.span
                        variants={{
                          hidden: { y: '100%', opacity: 0 },
                          visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }
                        }}
                      >
                        {word}
                      </motion.span>
                    </span>
                    {i < arr.length - 1 && ' '}
                  </React.Fragment>
                ))}
              </motion.div>
              <motion.div
                key={`metrics-mobile-${activeStudyIndex}`}
                style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                {activeData.metrics.map((metric, idx) => (
                  <div key={idx} style={{ ...styles.metricPill, fontSize: '14px', padding: '6px 12px' }}>
                    <AnimatedMetric metric={metric} index={idx} studyIndex={activeStudyIndex} />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Logo Marquee Bar */}
          <div style={{ ...styles.logoBarWrapper, width: '100%' }}>
            <div style={styles.logoBarScroller}>
              <div style={styles.marqueeTrack}>
                {renderLogos()}
              </div>
              <div style={styles.marqueeTrack}>
                {renderLogos()}
              </div>
            </div>
          </div>

          {/* Bottom Card Stacked */}
          <motion.div
            style={{ width: '100%', aspectRatio: '16/9', borderRadius: '24px', overflow: 'hidden', marginTop: '10px' }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
             <video
               src={content.videoSrc}
               autoPlay
               loop
               muted
               playsInline
               style={{ width: '100%', height: '100%', objectFit: 'cover' }}
             />
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.fullWidthWrapper}>
      <style>
        {`
          @keyframes scrollMarquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
      <div style={{
        ...styles.container,
        transform: `scale(${scale})`,
        marginBottom: `${-1593 * (1 - scale)}px`
      }}>

        {/* Header Section */}
        <div style={styles.headerFrame}>
          <div style={styles.pillRow}>
            <div style={styles.pillSquare}></div>
            <span style={styles.pillText}>{content.tag}</span>
          </div>

          <div style={styles.titleGroup}>
            <motion.h2
              style={styles.mainTitle}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={{
                visible: { transition: { staggerChildren: 0.05 } },
                hidden: {}
              }}
            >
              {content.heading.split(" ").map((word, i, arr) => (
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
            <motion.p style={styles.subTitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {content.subtitle}
            </motion.p>
          </div>
        </div>

        {/* Content Wrapper */}
        <div style={styles.contentWrapper}>

          {/* Top Nav Bar */}
          <div
            ref={navRef}
            style={{
              ...styles.navBar,
              cursor: isDragging ? 'grabbing' : 'grab'
            }}
            className="hide-scrollbar"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {caseStudiesData.map((pill, index) => {
              const isActive = index === activeStudyIndex;
              return (
                <div
                  key={index}
                  onClick={() => setActiveStudyIndex(index)}
                  style={{
                    ...styles.navPill,
                    backgroundColor: isActive ? '#034E47' : '#F6F7F7',
                    color: isActive ? '#FEFFFF' : '#034E47'
                  }}
                >
                  {pill.name}
                </div>
              );
            })}
          </div>

          {/* Top Card */}
          <motion.div
            style={styles.topCard}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >

            <div style={styles.cardMainImageWrapper}>
              <Image src={content.mediaImage.src} alt={activeData.name} width={1600} height={900} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }} />
            </div>

            <div style={styles.cardLogoWrapper}>
              <h3 style={styles.cardLogoText}>{activeData.logo}</h3>
            </div>

            <div style={styles.cardTextGroup}>
              <motion.div
                key={`desc-desktop-${activeStudyIndex}`}
                style={styles.cardDescription}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={{
                  visible: { transition: { staggerChildren: 0.02 } },
                  hidden: {}
                }}
              >
                {activeData.description.split(" ").map((word, i, arr) => (
                  <React.Fragment key={i}>
                    <span style={{ overflow: 'hidden', display: 'inline-flex', verticalAlign: 'bottom' }}>
                      <motion.span
                        variants={{
                          hidden: { y: '100%', opacity: 0 },
                          visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }
                        }}
                      >
                        {word}
                      </motion.span>
                    </span>
                    {i < arr.length - 1 && ' '}
                  </React.Fragment>
                ))}
              </motion.div>

              <motion.div
                key={`metrics-desktop-${activeStudyIndex}`}
                style={styles.metricsRow}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                {activeData.metrics.map((metric, idx) => (
                  <div key={idx} style={styles.metricPill}>
                    <AnimatedMetric metric={metric} index={idx} studyIndex={activeStudyIndex} />
                  </div>
                ))}
              </motion.div>
            </div>

          </motion.div>

          {/* Logo Marquee Bar */}
          <div style={styles.logoBarWrapper}>
            <div style={styles.logoBarScroller}>
              <div style={styles.marqueeTrack}>
                {renderLogos()}
              </div>
              <div style={styles.marqueeTrack}>
                {renderLogos()}
              </div>
            </div>
          </div>

          {/* Bottom Card */}
          <motion.div
            style={styles.bottomCard}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
             <video
               src={content.videoSrc}
               autoPlay
               loop
               muted
               playsInline
               style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '24px' }}
             />
          </motion.div>

        </div>

      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  fullWidthWrapper: {
    width: '100%',
    minHeight: '100vh',
    backgroundColor: '#FBFBDC',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    overflow: 'hidden',
  },
  container: {
    width: '1600px',
    height: '1593px',
    position: 'relative',
    transformOrigin: 'top center',
    flexShrink: 0,
  },
  headerFrame: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    position: 'absolute',
    width: '844px',
    height: '182px',
    left: '50%',
    transform: 'translateX(-50%)',
    top: '80px',
  },
  pillRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '5px',
    width: '115px',
    height: '24px',
  },
  pillSquare: {
    width: '8px',
    height: '8px',
    backgroundColor: '#034E47',
    borderRadius: '2px',
  },
  pillText: {
    fontFamily: "'Inter Tight', sans-serif",
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '24px',
    textAlign: 'center',
    textTransform: 'capitalize',
    color: '#000001',
  },
  titleGroup: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '16px',
    width: '844px',
    height: '138px',
  },
  mainTitle: {
    fontFamily: "'Goudy Old Style', 'Goudy Bookletter 1911', serif",
    fontWeight: 700,
    fontSize: '70px',
    lineHeight: '70px',
    textAlign: 'center',
    letterSpacing: '-0.02em',
    color: '#034E47',
    margin: 0,
    width: '695px',
  },
  subTitle: {
    fontFamily: "'Inter Tight', sans-serif",
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '26px',
    textAlign: 'center',
    textTransform: 'capitalize',
    color: '#034E47',
    margin: 0,
    width: '516px',
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '9px',
    position: 'absolute',
    width: '945px',
    height: '1191px',
    left: '50%',
    transform: 'translateX(-50%)',
    top: '322px',
  },
  navBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', // allow it to scroll from left
    gap: '10px',
    width: '945px',
    height: '72px',
    backgroundColor: '#FEFFFF',
    borderRadius: '999px',
    flexShrink: 0,
    padding: '0 20px',
    overflowX: 'auto',
    boxSizing: 'border-box',
    userSelect: 'none',
  },
  navPill: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '6px 16px',
    borderRadius: '999px',
    fontFamily: "'Inter Tight', sans-serif",
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '28px',
    textTransform: 'capitalize',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
  },
  topCard: {
    width: '945px',
    height: '510px',
    backgroundColor: '#FEFFFF',
    borderRadius: '24px',
    position: 'relative',
    flexShrink: 0,
  },
  cardMainImageWrapper: {
    position: 'absolute',
    width: '640px',
    height: '261px',
    left: '30px',
    top: '30px',
  },
  cardLogoWrapper: {
    position: 'absolute',
    width: '164px',
    height: '62px',
    left: '751px',
    top: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardLogoText: {
    fontFamily: "'Goudy Old Style', 'Goudy Bookletter 1911', serif",
    fontWeight: 700,
    fontSize: '32px', // slightly smaller to accommodate longer names safely
    color: '#034E47',
    margin: 0,
  },
  cardTextGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '14px',
    position: 'absolute',
    width: '683px',
    height: '138px',
    left: '30px',
    top: '342px',
  },
  cardDescription: {
    fontFamily: "'Inter Tight', sans-serif",
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '28px',
    textTransform: 'capitalize',
    color: '#034E47',
    margin: 0,
    width: '100%',
  },
  metricsRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '10px',
    width: '100%',
  },
  metricPill: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '6px 16px',
    backgroundColor: '#F6F7F7',
    borderRadius: '999px',
    fontFamily: "'Inter Tight', sans-serif",
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '28px',
    textTransform: 'capitalize',
    color: '#034E47',
    whiteSpace: 'nowrap',
  },
  logoBarWrapper: {
    width: '945px',
    height: '72px',
    backgroundColor: '#FEFFFF',
    borderRadius: '999px',
    flexShrink: 0,
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
  },
  logoBarScroller: {
    display: 'flex',
    width: 'max-content',
    animation: 'scrollMarquee 20s linear infinite',
  },
  marqueeTrack: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '60px',
    paddingRight: '60px',
    width: 'max-content',
    flexShrink: 0,
  },
  bottomCard: {
    width: '945px',
    height: '510px',
    backgroundColor: '#FEFFFF',
    borderRadius: '24px',
    position: 'relative',
    flexShrink: 0,
  }
};

export default CaseStudy;
