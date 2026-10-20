'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { useIsMobile } from '@/lib/use-is-mobile';
import type { FooterContent } from '@/content/home/types';

const FOOTER_SOCIAL_ICON_POSITIONS = [
  { left: '87px', top: '197px' },
  { left: '369px', top: '104px' },
  { left: '219px', top: '456px' },
  { left: '14px', top: '614px' },
  { left: '1056px', top: '259px' },
  { left: '1325px', top: '129px' }
];

const Footer = ({ content }: { content: FooterContent }) => {
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const [pupilOffsets, setPupilOffsets] = useState({ left: { x: 0, y: 0 }, right: { x: 0, y: 0 } });

  const isMobile = useIsMobile();

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;

      if (!mobile) {
        const availableWidth = window.innerWidth - 160;
        const newScale = availableWidth / 1440;
        setScale(newScale);
      } else {
        setScale(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Eye centers relative to the 1440 container
    // Eyes are in Frame 460 (left: 425, top: 801, width: 590, height: 438)
    // Left eye center: 425 + 132 = 557, Y = 801 + 219 = 1020
    // Right eye center: 425 + 326 + 132 = 883, Y = 801 + 219 = 1020
    const calculatePupilOffset = (eyeCenterX: number, eyeCenterY: number, mouseX: number, mouseY: number) => {
      if (!containerRef.current) return { x: 0, y: 0 };

      // Absolute position of the eye on the screen
      const rect = containerRef.current.getBoundingClientRect();
      const absEyeX = rect.left + (eyeCenterX * scale);
      const absEyeY = rect.top + (eyeCenterY * scale);

      // dx and dy are relative to the scaled screen, so we must unscale them to apply to the unscaled pupil transform
      const dx = (mouseX - absEyeX) / scale;
      const dy = (mouseY - absEyeY) / scale;

      const angle = Math.atan2(dy, dx);

      // Maximum allowed travel for the pupil center so it perfectly touches the edge
      const Rx = (263.87 - 98.62) / 2;
      const Ry = (438 - 98.62) / 2;

      const maxDist = (Rx * Ry) / Math.sqrt(Math.pow(Ry * Math.cos(angle), 2) + Math.pow(Rx * Math.sin(angle), 2));

      const distToMouse = Math.sqrt(dx * dx + dy * dy);

      // Limit distance to maxDist
      const dist = Math.min(distToMouse * 0.3, maxDist);

      return {
        x: Math.cos(angle) * dist,
        y: Math.sin(angle) * dist
      };
    };

    const handleMouseMove = (e: MouseEvent) => {
      setPupilOffsets({
        left: calculatePupilOffset(557, 1020, e.clientX, e.clientY),
        right: calculatePupilOffset(883, 1020, e.clientX, e.clientY),
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [scale]);

  const leftPupilOffset = pupilOffsets.left;
  const rightPupilOffset = pupilOffsets.right;

  const socialIcons = FOOTER_SOCIAL_ICON_POSITIONS.map((icon, idx) => ({
    ...icon,
    url: content.socialIconUrls[idx % content.socialIconUrls.length]
  }));

  return (
    <>
      <style>{`
        .footer-section-wrapper {
          width: 100%;
          background: #1B1A1B;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          overflow: hidden;
          font-family: 'Inter Tight', sans-serif;
          position: relative;
        }

        .footer-container {
          width: 1440px;
          height: 1793px;
          position: absolute;
          top: 0;
          transform-origin: top center;
          flex-shrink: 0;
        }

        .footer-ellipse {
          position: absolute;
          width: 1989px;
          height: 1989px;
          left: calc(50% - 1989px/2);
          top: 601px;
          background: #034F46;
          border-radius: 50%;
        }

        .footer-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0px;
          gap: 40px;
          position: absolute;
          width: 702px;
          left: 369px; /* 449 - 80 */
          top: 130px;
        }

        .footer-title {
          font-family: 'Goudy Old Style', 'Goudy Bookletter 1911', serif;
          font-weight: 400;
          font-size: 163px;
          line-height: 140px;
          text-align: center;
          letter-spacing: -0.02em;
          color: #FAFBDD;
          margin: 0;
        }

        .get-started-btn {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 6px;
          gap: 3px;
          border: 1.5px solid #FAFBDD;
          border-radius: 999px;
          cursor: pointer;
          transition: opacity 0.2s;
        }

        .get-started-btn:hover {
          opacity: 0.9;
        }

        .btn-text-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 9px 24px;
          background: #FAFBDD;
          border-radius: 999px;
        }

        .btn-text {
          font-family: 'Goudy Old Style', 'Goudy Bookletter 1911', serif;
          font-weight: 700;
          font-size: 24px;
          color: #034F46;
          margin: 0;
        }

        .btn-arrow-container {
          width: 58px;
          height: 58px;
          background: #FAFBDD;
          border-radius: 999px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .eyes-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 62px;
          position: absolute;
          width: 590px;
          height: 438px;
          left: calc(50% - 590px/2);
          top: 801px;
        }

        .eye {
          width: 263.87px;
          height: 438px;
          background: #FEFFFF;
          border-radius: 50%;
          position: relative;
          overflow: hidden;
        }

        .pupil {
          position: absolute;
          width: 98.62px;
          height: 98.62px;
          background: #1B1A1B;
          border-radius: 50%;
          left: calc(50% - 98.62px/2);
          top: calc(50% - 98.62px/2);
          transition: transform 0.1s ease-out;
        }

        .floating-icon {
          position: absolute;
          width: 70px;
          height: 70px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .floating-icon img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .footer-links-row {
          position: absolute;
          width: 100%;
          height: 200px;
          left: 0;
          top: 1487px;
        }

        .footer-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 13px;
          position: absolute;
        }

        .col-title {
          font-weight: 500;
          font-size: 20px;
          line-height: 28px;
          text-transform: uppercase;
          color: #FEFFFF;
          margin: 0;
        }

        .col-links {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .link-item {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 5px;
          cursor: pointer;
          transition: opacity 0.2s;
        }

        .link-item:hover {
          opacity: 0.7;
        }

        .link-dot {
          width: 8px;
          height: 8px;
          background: #FEFFFF;
          border-radius: 2px;
        }

        .link-text {
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          text-transform: capitalize;
          color: #FEFFFF;
          margin: 0;
        }

        .company-info {
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: 208px;
        }

        .company-text {
          font-weight: 400;
          font-size: 18px;
          line-height: 26px;
          color: #FEFFFF;
          margin: 0;
        }

        .copyright {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 1746px;
          font-weight: 300;
          font-size: 16px;
          color: #FEFFFF;
          margin: 0;
        }

        .logo-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 15px;
          position: absolute;
          left: 579px; /* 659 - 80 */
          top: 1510px;
        }

        .logo-text {
          font-weight: 500;
          font-size: 60px;
          color: #FEFFFF;
          margin: 0;
        }
      `}</style>

      {isMobile ? (
        <div style={{ width: '100%', backgroundColor: '#1B1A1B', display: 'flex', flexDirection: 'column', alignItems: 'center', overflow: 'hidden', position: 'relative', paddingTop: '60px' }}>

          <motion.h2
            style={{ fontSize: '60px', lineHeight: '64px', textAlign: 'center', color: '#FAFBDD', margin: '0 20px 40px', fontFamily: '"Goudy Old Style", serif' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            {content.heading}
          </motion.h2>

          <motion.div
            className="get-started-btn animated-btn"
            style={{ marginBottom: '60px', zIndex: 2 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="btn-text-container">
              <p className="btn-text">{content.ctaLabel}</p>
            </div>
            <div className="btn-arrow-container">
              <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5415 1.54199L11.8123 9.76074L1.5415 17.9795" stroke="#034F46" strokeWidth="3.08333" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3.08 3.08"/>
              </svg>
            </div>
          </motion.div>

          <div style={{ width: '100%', backgroundColor: '#034F46', padding: '60px 20px', display: 'flex', flexDirection: 'column', gap: '40px', alignItems: 'center', borderRadius: '40px 40px 0 0', boxSizing: 'border-box' }}>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', width: '100%', maxWidth: '400px' }}>
              <div className="footer-col" style={{ position: 'relative' }}>
                <h4 className="col-title" style={{ fontSize: '16px' }}>Navigation</h4>
                <div className="col-links">
                  {content.navigation.map((item) => (
                    <a key={item.label} href={item.href} className="link-item" style={{ textDecoration: 'none' }}>
                      <div className="link-dot"></div><p className="link-text" style={{ fontSize: '14px' }}>{item.label}</p>
                    </a>
                  ))}
                </div>
              </div>

              <div className="footer-col" style={{ position: 'relative' }}>
                <h4 className="col-title" style={{ fontSize: '16px' }}>Services</h4>
                <div className="col-links">
                  {content.services.map((item, idx) => (
                    <div key={idx} className="link-item">
                      <div className="link-dot"></div><p className="link-text" style={{ fontSize: '14px' }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="footer-col" style={{ position: 'relative' }}>
                <h4 className="col-title" style={{ fontSize: '16px' }}>Connect</h4>
                <div className="col-links">
                  {content.connect.map((item, idx) => (
                    <div key={idx} className="link-item">
                      <div className="link-dot"></div><p className="link-text" style={{ fontSize: '14px' }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="footer-col" style={{ position: 'relative' }}>
                <h4 className="col-title" style={{ fontSize: '16px' }}>{content.company.title}</h4>
                <div className="company-info" style={{ width: '100%' }}>
                  <p className="company-text" style={{ fontSize: '14px', lineHeight: '20px' }}>{content.company.description}</p>
                  <p className="company-text" style={{ fontSize: '14px', marginTop: '10px' }}>{content.company.address}</p>
                </div>
              </div>
            </div>

            <div className="logo-container" style={{ position: 'relative', left: 'auto', top: 'auto', marginTop: '20px' }}>
              <svg width="40" height="37" viewBox="0 0 66 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33 0L64.1769 30.5L33 61L1.82309 30.5L33 0Z" fill="#FEFFFF"/>
                <path d="M33 13.725L49.5 30.5L33 47.275L16.5 30.5L33 13.725Z" fill="#034F46"/>
              </svg>
              <h2 className="logo-text" style={{ fontSize: '36px' }}>{content.brand}</h2>
            </div>

            <p className="copyright" style={{ position: 'relative', left: 'auto', top: 'auto', transform: 'none', textAlign: 'center', marginTop: '20px', fontSize: '14px' }}>{content.copyright}</p>
          </div>
        </div>
      ) : (
        <div className="footer-section-wrapper" style={{ height: 1793 * scale }}>
          <div className="footer-container" ref={containerRef} style={{ transform: `scale(${scale})` }}>
        <motion.div
          className="footer-ellipse"
          initial={{ y: 800, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>

        {socialIcons.map((icon, idx) => (
          <div
            key={idx}
            className="floating-icon"
            style={{
              left: icon.left,
              top: icon.top
            }}
          >
            <Image
              src={icon.url}
              alt={`Social icon ${idx + 1}`}
              width={70}
              height={70}
              unoptimized
            />
          </div>
        ))}

        <div className="footer-header">
          <motion.h2
            className="footer-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={{
              visible: { transition: { staggerChildren: 0.05, delayChildren: 0.6 } },
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

          <motion.div
            className="get-started-btn animated-btn"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <div className="btn-text-container">
              <p className="btn-text">{content.ctaLabel}</p>
            </div>
            <div className="btn-arrow-container">
              <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5415 1.54199L11.8123 9.76074L1.5415 17.9795" stroke="#034F46" strokeWidth="3.08333" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3.08 3.08"/>
              </svg>
            </div>
          </motion.div>
        </div>

        <div className="eyes-container">
          <div className="eye">
            <div
              className="pupil"
              style={{ transform: `translate(${leftPupilOffset.x}px, ${leftPupilOffset.y}px)` }}
            ></div>
          </div>
          <div className="eye">
            <div
              className="pupil"
              style={{ transform: `translate(${rightPupilOffset.x}px, ${rightPupilOffset.y}px)` }}
            ></div>
          </div>
        </div>

        <motion.div
          className="footer-links-row"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={{
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } },
            hidden: {}
          }}
        >
          {/* Navigation Column */}
          <motion.div
            className="footer-col"
            style={{ left: '0px' }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            <h4 className="col-title">Navigation</h4>
            <div className="col-links">
              {content.navigation.map((item) => (
                <a key={item.label} href={item.href} className="link-item" style={{ textDecoration: 'none' }}>
                  <div className="link-dot"></div>
                  <p className="link-text">{item.label}</p>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Company Info Column */}
          <motion.div
            className="footer-col"
            style={{ left: '160px' }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            <h4 className="col-title">{content.company.title}</h4>
            <div className="company-info">
              <p className="company-text">{content.company.description}</p>
              <p className="company-text" style={{ marginTop: '10px' }}>{content.company.address}</p>
            </div>
          </motion.div>

          {/* Connect Column */}
          <motion.div
            className="footer-col"
            style={{ left: '1040px' }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            <h4 className="col-title">Connect</h4>
            <div className="col-links">
              {content.connect.map((item, idx) => (
                <div key={idx} className="link-item">
                  <div className="link-dot"></div>
                  <p className="link-text">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Services Column */}
          <motion.div
            className="footer-col"
            style={{ left: '1240px' }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            <h4 className="col-title">Services</h4>
            <div className="col-links">
              {content.services.map((item, idx) => (
                <div key={idx} className="link-item">
                  <div className="link-dot"></div>
                  <p className="link-text">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="logo-container"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <svg width="66" height="61" viewBox="0 0 66 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M33 0L64.1769 30.5L33 61L1.82309 30.5L33 0Z" fill="#FEFFFF"/>
            <path d="M33 13.725L49.5 30.5L33 47.275L16.5 30.5L33 13.725Z" fill="#034F46"/>
          </svg>
          <h2 className="logo-text">{content.brand}</h2>
        </motion.div>

        <motion.p
          className="copyright"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          {content.copyright}
        </motion.p>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
