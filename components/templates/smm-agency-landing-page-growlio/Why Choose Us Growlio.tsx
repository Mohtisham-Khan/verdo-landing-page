'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { useIsMobile } from '@/lib/use-is-mobile';
import type { WhyChooseUsContent } from '@/content/home/types';

const APPROACH_ICONS: Record<string, React.ReactNode> = {
  'strategy-first': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#034E47" strokeWidth="1.5">
      <path d="M9 18h6M10 21h4M12 2v2M4.22 4.22l1.42 1.42M1 12h2M21 12h2M18.36 5.64l1.42-1.42M12 6a5 5 0 0 0-4.54 7.07A5.4 5.4 0 0 1 9 16h6a5.4 5.4 0 0 1 1.54-2.93A5 5 0 0 0 12 6z" />
    </svg>
  ),
  creative: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#034E47" strokeWidth="1.5">
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  ),
  ugc: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#034E47" strokeWidth="1.5">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  ),
  data: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#034E47" strokeWidth="1.5">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  performance: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#034E47" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
};

const Whychooseus = ({ content }: { content: WhyChooseUsContent }) => {
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

  const approachItems = content.approachItems.map((item) => ({
    ...item,
    icon: APPROACH_ICONS[item.iconKey],
  }));

  if (isMobile) {
    return (
      <div style={{ width: '100%', backgroundColor: '#FBFBDC', padding: '60px 20px', boxSizing: 'border-box' }}>

        {/* Top Image */}
        <motion.div
          style={{ width: '100%', position: 'relative', aspectRatio: '16/9', borderRadius: '16px', overflow: 'hidden', marginBottom: '40px' }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Image src={content.image.src} alt={content.image.alt} fill sizes="100vw" style={{ objectFit: 'cover' }} />
        </motion.div>

        {/* Text Section */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
          <div style={styles.pillRow}>
            <div style={styles.pillSquare}></div>
            <span style={styles.pillText}>{content.tag}</span>
          </div>

          <motion.h2
            style={{ ...styles.mainTitle, width: '100%', fontSize: '40px', lineHeight: '46px' }}
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

          <motion.p style={{ ...styles.subTitle, width: '100%', textAlign: 'left' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {content.subtitle}
          </motion.p>
        </div>

        {/* Approach List Section */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px' }}>
          <div style={styles.pillRow}>
            <div style={styles.pillSquare}></div>
            <span style={styles.pillText}>{content.approachTag}</span>
          </div>

          <motion.div
            style={styles.approachList}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
              hidden: {}
            }}
          >
            {approachItems.map((item, index) => (
              <motion.div
                key={index}
                style={styles.approachItem}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                }}
              >
                <div style={styles.approachIconBox}>
                  {item.icon}
                </div>
                <span style={styles.approachItemText}>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Description */}
        <motion.p
          style={{ ...styles.bottomRightText, position: 'relative', left: 'auto', top: 'auto', width: '100%', height: 'auto', textAlign: 'left' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          {content.bottomText}
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href={content.cta.href}
          className="animated-btn"
          style={{ ...styles.ctaWrapper, position: 'relative', left: 'auto', top: 'auto', marginTop: '40px', textDecoration: 'none', color: 'inherit' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <div style={styles.ctaIconBox}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FEFFFF" strokeWidth="2">
              <path d="M13 17l5-5-5-5M6 17l5-5-5-5" />
            </svg>
          </div>
          <div style={styles.ctaTextBox}>
            <span style={styles.ctaText}>{content.cta.label}</span>
          </div>
        </motion.a>

      </div>
    );
  }

  return (
    <div style={styles.fullWidthWrapper}>
      <div style={{
        ...styles.container,
        transform: `scale(${scale})`,
        marginBottom: `${-1248 * (1 - scale)}px`
      }}>

        {/* Top Image */}
        <motion.div
          style={styles.topImage}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Image src={content.image.src} alt={content.image.alt} fill sizes="1600px" style={{ objectFit: 'cover' }} />
        </motion.div>

        {/* Left Column (Main text) */}
        <div style={styles.leftColumn}>
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

        {/* CTA Button */}
        <a href={content.cta.href} className="animated-btn" style={{ ...styles.ctaWrapper, textDecoration: 'none', color: 'inherit' }}>
          <div style={styles.ctaIconBox}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FEFFFF" strokeWidth="2">
              <path d="M13 17l5-5-5-5M6 17l5-5-5-5" />
            </svg>
          </div>
          <div style={styles.ctaTextBox}>
            <span style={styles.ctaText}>{content.cta.label}</span>
          </div>
        </a>

        {/* Right Column (Approach list) */}
        <div style={styles.rightColumn}>
          <div style={styles.pillRow}>
            <div style={styles.pillSquare}></div>
            <span style={styles.pillText}>{content.approachTag}</span>
          </div>

          <motion.div
            style={styles.approachList}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
              hidden: {}
            }}
          >
            {approachItems.map((item, index) => (
              <motion.div
                key={index}
                style={styles.approachItem}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                }}
              >
                <div style={styles.approachIconBox}>
                  {item.icon}
                </div>
                <span style={styles.approachItemText}>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Right Description */}
        <motion.p
          style={styles.bottomRightText}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          {content.bottomText}
        </motion.p>

      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  fullWidthWrapper: {
    width: '100%',
    backgroundColor: '#FBFBDC',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    overflow: 'hidden',
  },
  container: {
    width: '1600px',
    height: '1248px',
    position: 'relative',
    transformOrigin: 'top center',
    flexShrink: 0,
  },
  topImage: {
    position: 'absolute',
    width: '1600px',
    height: '709px',
    left: '0px',
    top: '0px',
  },
  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '20px',
    position: 'absolute',
    width: '657px',
    height: '252px',
    left: '80px',
    top: '769px',
  },
  pillRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '5px',
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
    textTransform: 'capitalize',
    color: '#000101',
  },
  titleGroup: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '16px',
    width: '657px',
  },
  mainTitle: {
    fontFamily: "'Goudy Old Style', 'Goudy Bookletter 1911', serif",
    fontWeight: 700,
    fontSize: '70px',
    lineHeight: '70px',
    letterSpacing: '-0.02em',
    color: '#034E47',
    margin: 0,
    width: '657px',
  },
  subTitle: {
    fontFamily: "'Inter Tight', sans-serif",
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '26px',
    textTransform: 'capitalize',
    color: '#034E47',
    margin: 0,
    width: '598px',
  },
  ctaWrapper: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '4px',
    gap: '2px',
    position: 'absolute',
    width: '220px',
    height: '56px',
    left: '80px',
    top: '1112px',
    border: '1px solid #034E47',
    borderRadius: '999px',
    cursor: 'pointer',
  },
  ctaIconBox: {
    width: '46px',
    height: '46px',
    backgroundColor: '#034E47',
    borderRadius: '999px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
  },
  ctaTextBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '10px 20px',
    gap: '5px',
    width: '162px',
    height: '46px',
    backgroundColor: '#034E47',
    borderRadius: '999px',
    justifyContent: 'center',
  },
  ctaText: {
    fontFamily: "'Goudy Old Style', 'Goudy Bookletter 1911', serif",
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '26px',
    color: '#FEFFFF',
    margin: 0,
    whiteSpace: 'nowrap',
  },
  rightColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '20px',
    position: 'absolute',
    width: '301px',
    height: '245px',
    left: '1091px',
    top: '769px',
  },
  approachList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '14px',
    width: '301px',
  },
  approachItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '10px',
    width: '301px',
    height: '29px',
  },
  approachIconBox: {
    width: '29px',
    height: '29px',
    backgroundColor: 'rgba(3, 79, 70, 0.04)',
    borderRadius: '6px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
  },
  approachItemText: {
    fontFamily: "'Inter Tight', sans-serif",
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '22px',
    textTransform: 'capitalize',
    color: '#034E47',
  },
  bottomRightText: {
    position: 'absolute',
    width: '429px',
    height: '104px',
    left: '1091px',
    top: '1064px',
    fontFamily: "'Inter Tight', sans-serif",
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '26px',
    textTransform: 'capitalize',
    color: '#034E47',
    margin: 0,
  }
};

export default Whychooseus;
