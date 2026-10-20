'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

import { useIsMobile } from '@/lib/use-is-mobile';
import type { ServicesContent } from '@/content/home/types';

const ArrowUpIcon = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#23C45F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>;
const CheckIcon = () => <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>;

const Card1Design = () => (
  <div style={{ position: 'relative', width: '100%', height: '100%', background: 'linear-gradient(135deg, #FFF1F4 0%, #F2E9FF 50%, #FEE5E1 100%)', overflow: 'hidden' }}>
    {/* Background decorative blobs */}
    <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '60%', height: '60%', background: 'radial-gradient(circle, rgba(255,192,203,0.3) 0%, rgba(255,192,203,0) 70%)', borderRadius: '50%', filter: 'blur(40px)' }} />
    <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '70%', height: '70%', background: 'radial-gradient(circle, rgba(230,230,250,0.6) 0%, rgba(230,230,250,0) 70%)', borderRadius: '50%', filter: 'blur(40px)' }} />

    {/* Content Container */}
    <div style={{ position: 'absolute', inset: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
       {/* Top Row */}
       <div style={{ display: 'flex', gap: '15px', height: '55%' }}>
          {/* Audience Growth */}
          <div style={{ flex: 1.2, backgroundColor: 'white', borderRadius: '16px', padding: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column' }}>
            <p style={{ fontSize: '13px', fontWeight: 600, color: '#1E283B', margin: '0 0 12px 0' }}>Audience Growth</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <h4 style={{ fontSize: '28px', fontWeight: 800, margin: 0, color: '#0E172A' }}>32.5K</h4>
              <div style={{ display: 'flex', alignItems: 'center', color: '#11B981', fontSize: '12px', fontWeight: 700 }}>
                <ArrowUpIcon /> 48%
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px', marginTop: 'auto', alignItems: 'flex-end', height: '60px' }}>
              {[25, 35, 30, 45, 60, 80, 100].map((h, i) => (
                <div key={i} style={{ flex: 1, height: `${h}%`, background: 'linear-gradient(to top, #F472B7, #FB7085)', borderRadius: '4px', opacity: i > 3 ? 1 : 0.6 }} />
              ))}
            </div>
          </div>
          {/* Content Calendar */}
          <div style={{ flex: 1, backgroundColor: 'white', borderRadius: '16px', padding: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
            <p style={{ fontSize: '13px', fontWeight: 600, color: '#1E283B', margin: '0 0 16px 0' }}>Content Calendar</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#65748A', marginBottom: '12px', fontWeight: 600 }}>
              <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span>
            </div>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
              <div style={{ width: '35%', height: '16px', backgroundColor: '#F472B7', borderRadius: '8px' }}></div>
              <div style={{ width: '20%', height: '16px', backgroundColor: '#F1F4F9', borderRadius: '8px' }}></div>
              <div style={{ width: '25%', height: '16px', backgroundColor: '#F1F4F9', borderRadius: '8px', position: 'relative' }}><div style={{ position: 'absolute', bottom: 2, left: 4, width: '60%', height: '4px', backgroundColor: '#F472B7', borderRadius: '2px' }}></div></div>
              <div style={{ width: '20%', height: '16px', backgroundColor: '#F1F4F9', borderRadius: '8px' }}></div>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <div style={{ width: '25%', height: '16px', backgroundColor: '#A68BFB', borderRadius: '8px' }}></div>
              <div style={{ width: '25%', height: '16px', backgroundColor: '#F1F4F9', borderRadius: '8px', position: 'relative' }}><div style={{ position: 'absolute', bottom: 2, right: 4, width: '60%', height: '4px', backgroundColor: '#F472B7', borderRadius: '2px' }}></div></div>
              <div style={{ width: '20%', height: '16px', backgroundColor: '#F1F4F9', borderRadius: '8px' }}></div>
              <div style={{ width: '30%', height: '16px', backgroundColor: '#FBBE24', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <svg width="8" height="8" viewBox="0 0 24 24" fill="white"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
            </div>
          </div>
       </div>
       {/* Bottom Row */}
       <div style={{ display: 'flex', gap: '15px', height: '45%' }}>
          {/* Top Platforms */}
          <div style={{ flex: 1.2, backgroundColor: 'white', borderRadius: '16px', padding: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <p style={{ fontSize: '13px', fontWeight: 600, color: '#1E283B', margin: 0 }}>Top Platforms</p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(45deg, #f19532 0%, #e7693c 25%, #dc2742 50%, #cd2267 75%, #bd1988 100%)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </div>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#1877F3', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </div>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#000101', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M21 8.7a8.5 8.5 0 01-2.4-.7 9.8 9.8 0 01-1.3-1V2h-3v14c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4a4 4 0 011.6.3V8.2a7.3 7.3 0 00-1.6-.2c-3.9 0-7 3.1-7 7s3.1 7 7 7c3.5 0 6.5-2.6 6.9-6v-6.5c1.6 1.4 3.6 2.3 5.8 2.3V8.7z"/></svg>
              </div>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#0A66C3', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </div>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#FE0100', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29.01 29.01 0 001 11.75a29.01 29.01 0 00.46 5.33 2.78 2.78 0 001.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29.01 29.01 0 00.46-5.33 29.01 29.01 0 00-.46-5.33zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z"/></svg>
              </div>
            </div>
          </div>
          {/* Strategy Plan */}
          <div style={{ flex: 1, backgroundColor: 'white', borderRadius: '16px', padding: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
            <p style={{ fontSize: '13px', fontWeight: 600, color: '#1E283B', margin: '0 0 16px 0' }}>Strategy Plan</p>
            {['Audience Research', 'Competitor Analysis', 'Content Strategy', 'Growth Roadmap'].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <div style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#11B981', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0 }}>
                  <CheckIcon />
                </div>
                <span style={{ fontSize: '11px', color: '#334155', fontWeight: 600 }}>{item}</span>
              </div>
            ))}
          </div>
       </div>
    </div>
  </div>
);

const Card2Design = () => (
  <div style={{ position: 'relative', width: '100%', height: '100%', background: 'linear-gradient(135deg, #F8F8FF 0%, #E9ECFB 100%)', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    {/* Background decorative blobs */}
    <div style={{ position: 'absolute', top: '10%', left: '10%', width: '60%', height: '60%', background: 'radial-gradient(circle, rgba(167,139,250,0.15) 0%, rgba(167,139,250,0) 70%)', borderRadius: '50%', filter: 'blur(40px)' }} />
    <div style={{ position: 'absolute', bottom: '10%', right: '10%', width: '50%', height: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(139,92,246,0) 70%)', borderRadius: '50%', filter: 'blur(40px)' }} />

    {/* Content Container */}
    <div style={{ display: 'flex', gap: '15px', alignItems: 'center', position: 'relative', zIndex: 10, transform: 'scale(0.95)' }}>
      {/* Facebook Mockup */}
      <div style={{ width: '135px', backgroundColor: 'white', borderRadius: '14px', padding: '10px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', height: '320px', position: 'relative' }}>

        {/* Floating FB Logo */}
        <div style={{ position: 'absolute', top: '-12px', left: '-12px', width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#1877F3', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 4px 10px rgba(24, 119, 242, 0.3)' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
        </div>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px', marginTop: '6px' }}>
          <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#E3E8F0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#95A2B9"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
          </div>
          <div>
            <p style={{ fontSize: '10px', fontWeight: 700, margin: 0, color: '#1E283B' }}>Your Brand</p>
            <p style={{ fontSize: '8px', color: '#65748A', margin: 0 }}>Sponsored</p>
          </div>
        </div>

        {/* Image */}
        <div style={{ flex: 1, backgroundColor: '#8A5DF7', borderRadius: '6px', marginBottom: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
          <Image src="/images/services/product.jpg" width={800} height={800} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="shoe" />
        </div>

        {/* Button */}
        <button style={{ backgroundColor: '#1877F3', color: 'white', border: 'none', borderRadius: '6px', padding: '6px', fontSize: '10px', fontWeight: 700, width: '100%', cursor: 'pointer' }}>Shop Now</button>
      </div>

      {/* Instagram Mockup (overlaps) */}
      <div style={{ width: '155px', backgroundColor: 'white', borderRadius: '14px', padding: '10px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', height: '360px', transform: 'translateY(-10px)', zIndex: 2, position: 'relative' }}>

        {/* Floating Insta Logo */}
        <div style={{ position: 'absolute', top: '-14px', left: '-14px', width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(45deg, #f19532 0%, #e7693c 25%, #dc2742 50%, #cd2267 75%, #bd1988 100%)', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 4px 10px rgba(220, 39, 67, 0.3)' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
        </div>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px', marginTop: '8px' }}>
          <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#E3E8F0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#95A2B9"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
          </div>
          <div>
            <p style={{ fontSize: '11px', fontWeight: 700, margin: 0, color: '#1E283B' }}>Your Brand</p>
            <p style={{ fontSize: '9px', color: '#65748A', margin: 0 }}>Sponsored</p>
          </div>
        </div>

        {/* Image */}
        <div style={{ flex: 1, backgroundColor: '#EDF2F6', borderRadius: '6px', marginBottom: '10px', overflow: 'hidden', position: 'relative' }}>
          <Image src="/images/services/avatar-1.jpg" width={600} height={600} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="girl" />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '32px', height: '32px', borderRadius: '50%', border: '2px solid white', backgroundColor: 'rgba(0,0,0,0.3)', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M5 3l14 9-14 9V3z"/></svg>
          </div>
        </div>

        {/* Button */}
        <button style={{ backgroundColor: '#F1F4F9', color: '#1E283B', border: 'none', borderRadius: '6px', padding: '6px', fontSize: '10px', fontWeight: 700, width: '100%', cursor: 'pointer' }}>Learn More</button>
      </div>

      {/* Stats Column */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '130px' }}>
        <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          <p style={{ fontSize: '10px', color: '#65748A', margin: '0 0 4px 0', fontWeight: 600 }}>ROAS</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h4 style={{ fontSize: '18px', fontWeight: 800, margin: 0, color: '#0E172A' }}>4.8x</h4>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#11B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
          </div>
        </div>
        <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          <p style={{ fontSize: '10px', color: '#65748A', margin: '0 0 4px 0', fontWeight: 600 }}>Conversions</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h4 style={{ fontSize: '18px', fontWeight: 800, margin: 0, color: '#0E172A' }}>1,240</h4>
            <span style={{ color: '#11B981', fontSize: '10px', fontWeight: 700 }}>↑ 62%</span>
          </div>
        </div>
        <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          <p style={{ fontSize: '10px', color: '#65748A', margin: '0 0 4px 0', fontWeight: 600 }}>CTR</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h4 style={{ fontSize: '18px', fontWeight: 800, margin: 0, color: '#0E172A' }}>3.6%</h4>
            <span style={{ color: '#11B981', fontSize: '10px', fontWeight: 700 }}>↑ 28%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Card3Design = () => (
  <div style={{ position: 'relative', width: '100%', height: '100%', background: 'linear-gradient(135deg, #FFF1F4 0%, #FEE5E1 100%)', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    {/* Background decorative blobs */}
    <div style={{ position: 'absolute', top: '20%', left: '20%', width: '60%', height: '60%', background: 'radial-gradient(circle, rgba(255,182,193,0.3) 0%, rgba(255,182,193,0) 70%)', borderRadius: '50%', filter: 'blur(40px)' }} />
    <div style={{ position: 'absolute', bottom: '-10%', right: '10%', width: '50%', height: '50%', background: 'radial-gradient(circle, rgba(255,105,180,0.15) 0%, rgba(255,105,180,0) 70%)', borderRadius: '50%', filter: 'blur(40px)' }} />

    {/* Center Phone Mockup */}
    <div style={{ width: '180px', height: '360px', backgroundColor: 'white', borderRadius: '24px', padding: '10px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', zIndex: 10, position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', padding: '0 4px' }}>
        <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#F1F4F9', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
           <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#F53F5E' }} />
        </div>
        <div style={{ display: 'flex', gap: '2px' }}>
          <div style={{ width: '3px', height: '3px', borderRadius: '50%', backgroundColor: '#CBD5E0' }} />
          <div style={{ width: '3px', height: '3px', borderRadius: '50%', backgroundColor: '#CBD5E0' }} />
          <div style={{ width: '3px', height: '3px', borderRadius: '50%', backgroundColor: '#CBD5E0' }} />
        </div>
      </div>
      <div style={{ flex: 1, backgroundColor: '#EDF2F6', borderRadius: '12px', position: 'relative', overflow: 'hidden', marginBottom: '10px' }}>
        <Image src="/images/services/avatar-2.jpg" width={600} height={600} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="center content" />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '36px', height: '36px', borderRadius: '50%', border: '2px solid white', backgroundColor: 'rgba(0,0,0,0.3)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M5 3l14 9-14 9V3z"/></svg>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 4px 4px 4px' }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#EE4544" stroke="#EE4544"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#65748A" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#65748A" strokeWidth="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
        </div>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#65748A" strokeWidth="2"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/></svg>
      </div>
    </div>

    {/* Left Polaroid */}
    <div style={{ position: 'absolute', left: '30px', top: '40px', width: '130px', height: '170px', backgroundColor: 'white', padding: '8px', paddingBottom: '24px', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', transform: 'rotate(-8deg)', zIndex: 5 }}>
      <Image src="/images/services/product.jpg" width={800} height={800} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }} alt="polaroid left" />
    </div>

    {/* Right Polaroid */}
    <div style={{ position: 'absolute', right: '30px', top: '50px', width: '130px', height: '170px', backgroundColor: 'white', padding: '8px', paddingBottom: '24px', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', transform: 'rotate(8deg)', zIndex: 5 }}>
      <Image src="/images/services/avatar-3.jpg" width={600} height={600} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }} alt="polaroid right" />
    </div>

    {/* Red Like Bubble */}
    <div style={{ position: 'absolute', left: '20px', top: '160px', backgroundColor: '#FF5A5F', color: 'white', padding: '8px 12px', borderRadius: '16px', borderBottomLeftRadius: '4px', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700, fontSize: '13px', zIndex: 12, boxShadow: '0 8px 20px rgba(255,90,95,0.3)' }}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
      2.4K
    </div>

    {/* Bottom Left Toolbar Pill */}
    <div style={{ position: 'absolute', left: '20px', bottom: '40px', backgroundColor: 'white', padding: '10px 16px', borderRadius: '24px', display: 'flex', gap: '12px', zIndex: 12, boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
      <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#EFF7FE', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3A83F7" strokeWidth="2.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
      </div>
      <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#F1F4F9', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#1E283B', fontWeight: 700, fontSize: '12px' }}>Aa</div>
      <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#FEF7ED', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F87217" strokeWidth="2.5"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/></svg>
      </div>
    </div>

    {/* Top Right New Post Pill */}
    <div style={{ position: 'absolute', right: '15px', top: '25px', backgroundColor: 'white', padding: '8px 16px', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '8px', zIndex: 12, boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#EE4544" strokeWidth="2.5"><path d="M12 2v20M2 12h20M7.05 7.05l9.9 9.9M16.95 7.05l-9.9 9.9"/></svg>
      <span style={{ fontSize: '13px', fontWeight: 700, color: '#1E283B' }}>New Post</span>
    </div>

    {/* Bottom Right Engagement Card */}
    <div style={{ position: 'absolute', right: '15px', bottom: '30px', backgroundColor: 'white', padding: '16px', borderRadius: '16px', width: '140px', zIndex: 12, boxShadow: '0 15px 35px rgba(0,0,0,0.08)' }}>
      <p style={{ fontSize: '11px', color: '#65748A', margin: '0 0 4px 0', fontWeight: 600 }}>Engagement</p>
      <h4 style={{ fontSize: '18px', fontWeight: 800, margin: '0 0 12px 0', color: '#0E172A' }}>+186%</h4>
      <div style={{ display: 'flex', gap: '6px', alignItems: 'flex-end', height: '40px' }}>
        {[20, 30, 45, 60, 80, 100].map((h, i) => (
          <div key={i} style={{ flex: 1, height: `${h}%`, background: 'linear-gradient(to top, #F472B7, #FB7085)', borderRadius: '4px' }} />
        ))}
      </div>
    </div>

  </div>
);

const Card4Design = () => (
  <div style={{ position: 'relative', width: '100%', height: '100%', background: 'linear-gradient(135deg, #F0FDF4 0%, #F9FBFD 100%)', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    {/* Background decorative blobs */}
    <div style={{ position: 'absolute', top: '10%', left: '10%', width: '60%', height: '60%', background: 'radial-gradient(circle, rgba(134,239,172,0.15) 0%, rgba(134,239,172,0) 70%)', borderRadius: '50%', filter: 'blur(40px)' }} />
    <div style={{ position: 'absolute', bottom: '10%', right: '10%', width: '50%', height: '50%', background: 'radial-gradient(circle, rgba(167,243,208,0.15) 0%, rgba(167,243,208,0) 70%)', borderRadius: '50%', filter: 'blur(40px)' }} />

    {/* Left Video Mockup */}
    <div style={{ position: 'absolute', left: '20px', top: '70px', width: '140px', height: '280px', backgroundColor: 'white', padding: '6px', borderRadius: '16px', boxShadow: '0 15px 35px rgba(0,0,0,0.08)', transform: 'rotate(-5deg)', zIndex: 5 }}>
      <Image src="/images/services/avatar-1.jpg" width={600} height={600} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} alt="left video" />
    </div>

    {/* Green Squiggly Line (above left video) */}
    <svg style={{ position: 'absolute', left: '50px', top: '35px', zIndex: 12, transform: 'rotate(-10deg)' }} width="60" height="30" viewBox="0 0 60 30" fill="none" stroke="#23C45F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 25 Q 15 5 25 15 T 45 5" />
    </svg>

    {/* Bottom Left Views Pill */}
    <div style={{ position: 'absolute', left: '15px', bottom: '80px', backgroundColor: 'white', padding: '12px 16px', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '10px', zIndex: 12, boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0E172A" strokeWidth="2.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
      <div>
        <h4 style={{ fontSize: '15px', fontWeight: 800, margin: 0, color: '#0E172A' }}>1.2M</h4>
        <p style={{ fontSize: '10px', color: '#65748A', margin: 0, fontWeight: 700 }}>Views</p>
      </div>
    </div>

    {/* Center iPhone Mockup */}
    <div style={{ width: '190px', height: '390px', backgroundColor: '#1E283B', borderRadius: '32px', padding: '8px', boxShadow: '0 25px 50px rgba(0,0,0,0.2)', display: 'flex', flexDirection: 'column', zIndex: 10, position: 'relative', border: '2px solid #334155' }}>

      {/* iPhone Notch */}
      <div style={{ position: 'absolute', top: '8px', left: '50%', transform: 'translateX(-50%)', width: '80px', height: '18px', backgroundColor: '#1E283B', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', zIndex: 20 }}></div>

      <div style={{ flex: 1, backgroundColor: '#EDF2F6', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}>
        <Image src="/images/services/team-1.jpg" width={900} height={1200} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Team photo" />

        {/* Play Button */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '44px', height: '44px', borderRadius: '50%', border: '2px solid white', backgroundColor: 'rgba(0,0,0,0.3)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M5 3l14 9-14 9V3z"/></svg>
        </div>

        {/* Top Status Bar Content */}
        <div style={{ position: 'absolute', top: '8px', left: '16px', color: 'white', fontSize: '9px', fontWeight: 600 }}>4:20</div>
        <div style={{ position: 'absolute', top: '8px', right: '16px', display: 'flex', gap: '4px' }}>
          <div style={{ width: '12px', height: '6px', backgroundColor: 'white', borderRadius: '2px' }}></div>
        </div>

        {/* Video Controls Overlay */}
        <div style={{ position: 'absolute', bottom: '15px', left: '15px', right: '15px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white', fontSize: '9px', fontWeight: 700, marginBottom: '6px' }}>
            <span>▶ 0:00 / 0:28</span>
            <div style={{ display: 'flex', gap: '8px' }}>
               <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
               <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
            </div>
          </div>
          <div style={{ width: '100%', height: '3px', backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: '2px' }}>
            <div style={{ width: '30%', height: '100%', backgroundColor: 'white', borderRadius: '2px' }}></div>
          </div>
        </div>
      </div>
    </div>

    {/* Right Stats Card */}
    <div style={{ position: 'absolute', right: '25px', top: '30px', backgroundColor: 'white', padding: '16px 20px', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '16px', zIndex: 12, boxShadow: '0 15px 35px rgba(0,0,0,0.06)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#EE4544" stroke="#EE4544"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
        <span style={{ fontSize: '12px', fontWeight: 700, color: '#334155' }}>86K</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#0E172A"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>
        <span style={{ fontSize: '12px', fontWeight: 700, color: '#334155' }}>2.1K</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#0E172A"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
        <span style={{ fontSize: '12px', fontWeight: 700, color: '#334155' }}>4.3K</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0E172A" strokeWidth="2.5"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/></svg>
        <span style={{ fontSize: '12px', fontWeight: 700, color: '#334155' }}>1.1K</span>
      </div>
    </div>

    {/* Bottom Right Photo */}
    <div style={{ position: 'absolute', right: '20px', bottom: '40px', width: '140px', height: '140px', backgroundColor: 'white', padding: '6px', borderRadius: '16px', boxShadow: '0 15px 35px rgba(0,0,0,0.08)', zIndex: 5 }}>
      <Image src="/images/services/team-2.jpg" width={900} height={1200} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} alt="Team photo" />
    </div>

  </div>
);

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  strategy: (
    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#FFFEFE" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
      <path d="M12 2l4 4-4 4" />
    </svg>
  ),
  ads: (
    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#FFFEFE" strokeWidth="1.5">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  content: (
    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#FFFEFE" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  ),
  ugc: (
    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#FFFEFE" strokeWidth="1.5">
      <polygon points="23 7 16 12 23 17 23 7" />
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
  )
};

const SERVICE_DESIGNS: Record<string, React.ReactNode> = {
  card1: <Card1Design />,
  card2: <Card2Design />,
  card3: <Card3Design />,
  card4: <Card4Design />
};

const Services = ({ content }: { content: ServicesContent }) => {
  const [scale, setScale] = useState(1);
  const targetRef = useRef<HTMLDivElement>(null);

  const isMobile = useIsMobile();

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      if (mobile) {
        setScale(1);
      } else {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const scaleX = screenWidth / 1600;
        const scaleY = screenHeight / 946;
        let newScale = Math.min(scaleX, scaleY);
        if (newScale > 1.2) newScale = 1.2;
        setScale(newScale);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Card 1 is static (or slightly offset if we wanted, but static is fine).
  const y1 = 0;

  // Card 2 comes up between 0% and 33% of the scroll
  const y2 = useTransform(scrollYProgress, [0, 0.33], [1200, 20]);

  // Card 3 comes up between 33% and 66% of the scroll
  const y3 = useTransform(scrollYProgress, [0.33, 0.66], [1200, 40]);

  // Card 4 comes up between 66% and 99% of the scroll
  const y4 = useTransform(scrollYProgress, [0.66, 0.99], [1200, 60]);

  const cardYs = [y1, y2, y3, y4];

  const cards = content.cards.map((card) => ({
    ...card,
    bgColor: card.theme.bg,
    badgeBg: card.theme.badge,
    icon: SERVICE_ICONS[card.iconKey],
    rightSide: SERVICE_DESIGNS[card.designKey]
  }));

  if (isMobile) {
    return (
      <div style={{ width: '100%', backgroundColor: '#FBFADD', padding: '60px 20px', boxSizing: 'border-box' }}>
        {/* Header Section */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', marginBottom: '60px' }}>
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

        {/* Cards Section Stacked */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              style={{
                backgroundColor: card.bgColor,
                borderRadius: '32px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                color: 'white',
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '60px', height: '60px' }}>
                {card.icon}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <motion.h3
                  style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 700, fontSize: '28px', margin: 0, lineHeight: '32px' }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                  variants={{
                    visible: { transition: { staggerChildren: 0.05 } },
                    hidden: {}
                  }}
                >
                  {card.title.split(" ").map((word, i, arr) => (
                    <React.Fragment key={i}>
                      <span style={{ overflow: 'hidden', display: 'inline-flex', verticalAlign: 'bottom' }}>
                        <motion.span
                          variants={{
                            hidden: { y: '100%', opacity: 0 },
                            visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
                          }}
                        >
                          {word}
                        </motion.span>
                      </span>
                      {i < arr.length - 1 && ' '}
                    </React.Fragment>
                  ))}
                </motion.h3>
                <motion.p
                  style={{ fontFamily: '"Inter", sans-serif', fontWeight: 500, fontSize: '15px', lineHeight: '140%', margin: 0, opacity: 0.9 }}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {card.desc}
                </motion.p>
                <motion.div
                  style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {card.badges.map(badge => (
                    <div key={badge} style={{ ...styles.badge, backgroundColor: card.badgeBg }}>
                      {badge}
                    </div>
                  ))}
                </motion.div>
              </div>
              <div style={{ width: '100%', height: '300px', borderRadius: '16px', overflow: 'hidden' }}>
                {card.rightSide ? card.rightSide : null}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div ref={targetRef} style={styles.scrollTrack}>
      <div style={styles.stickyWindow}>
        <div style={{ ...styles.container, transform: `scale(${scale})` }}>

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

          {/* Cards Section */}
          <div style={styles.cardsContainer}>
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                style={{
                  ...styles.card,
                  backgroundColor: card.bgColor,
                  y: cardYs[idx],
                  zIndex: idx + 1
                }}
              >
                <div style={styles.cardIcon}>
                  {card.icon}
                </div>
                <div style={styles.cardContent}>
                  <div style={styles.cardTextGroup}>
                    <motion.h3
                      style={styles.cardTitle}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.5 }}
                      variants={{
                        visible: { transition: { staggerChildren: 0.05 } },
                        hidden: {}
                      }}
                    >
                      {card.title.split(" ").map((word, i, arr) => (
                        <React.Fragment key={i}>
                          <span style={{ overflow: 'hidden', display: 'inline-flex', verticalAlign: 'bottom' }}>
                            <motion.span
                              variants={{
                                hidden: { y: '100%', opacity: 0 },
                                visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
                              }}
                            >
                              {word}
                            </motion.span>
                          </span>
                          {i < arr.length - 1 && ' '}
                        </React.Fragment>
                      ))}
                    </motion.h3>
                    <motion.p
                      style={styles.cardDesc}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.5 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      {card.desc}
                    </motion.p>
                  </div>
                  <motion.div
                    style={styles.badgesRow}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {card.badges.map(badge => (
                      <div key={badge} style={{ ...styles.badge, backgroundColor: card.badgeBg }}>
                        {badge}
                      </div>
                    ))}
                  </motion.div>
                </div>
                <div style={{...styles.cardImage, overflow: 'hidden'}}>
                  {card.rightSide ? card.rightSide : null}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  scrollTrack: {
    width: '100%',
    height: '400vh',
    backgroundColor: '#FBFADD',
    position: 'relative',
  },
  stickyWindow: {
    position: 'sticky',
    top: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', // Changed from flex-start to center
    overflow: 'hidden',
  },
  container: {
    width: '1600px',
    height: '946px', // Updated to ensure bottom padding (946 - 866 = 80px) equals top padding (80px)
    position: 'relative',
    transformOrigin: 'center center',
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
    height: '252px',
    left: '50%',
    transform: 'translateX(-50%)',
    top: '80px',
  },
  pillRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '5px',
    width: '112px',
    height: '24px',
  },
  pillSquare: {
    width: '8px',
    height: '8px',
    backgroundColor: '#034F46',
    borderRadius: '2px',
  },
  pillText: {
    fontFamily: "'Inter Tight', sans-serif",
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '24px',
    textAlign: 'center',
    textTransform: 'capitalize',
    color: '#000101',
  },
  titleGroup: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '16px',
    width: '844px',
    height: '208px',
  },
  mainTitle: {
    fontFamily: "'Goudy Old Style', 'Goudy Bookletter 1911', serif",
    fontWeight: 700,
    fontSize: '70px',
    lineHeight: '70px',
    textAlign: 'center',
    letterSpacing: '-0.02em',
    color: '#034F46',
    margin: 0,
    width: '788px',
  },
  subTitle: {
    fontFamily: "'Inter Tight', sans-serif",
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '26px',
    textAlign: 'center',
    textTransform: 'capitalize',
    color: '#034F46',
    margin: 0,
    width: '648px',
  },
  cardsContainer: {
    position: 'absolute',
    width: '1240px',
    height: '474px',
    left: '188px',
    top: '392px',
  },
  card: {
    width: '1240px',
    height: '474px',
    borderRadius: '16px',
    position: 'absolute',
    left: 0,
    top: 0,
    flexShrink: 0,
    boxShadow: '0px -10px 30px rgba(0,0,0,0.05)',
  },
  cardIcon: {
    position: 'absolute',
    width: '85px',
    height: '82px',
    left: '40px',
    top: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '24px',
    position: 'absolute',
    width: '482px',
    left: '40px',
    top: '269px',
  },
  cardTextGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '5px',
    width: '463px',
  },
  cardTitle: {
    fontFamily: "'Goudy Old Style', 'Goudy Bookletter 1911', serif",
    fontWeight: 700,
    fontSize: '40px',
    lineHeight: '50px',
    color: '#FFFEFE',
    margin: 0,
  },
  cardDesc: {
    fontFamily: "'Inter Tight', sans-serif",
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '26px',
    textTransform: 'capitalize',
    color: '#FFFEFE',
    margin: 0,
  },
  badgesRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '8px',
    width: '100%',
    flexWrap: 'wrap',
  },
  badge: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '4px 12px',
    borderRadius: '999px',
    fontFamily: "'Inter Tight', sans-serif",
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '26px',
    textTransform: 'capitalize',
    color: '#FFFEFE',
    whiteSpace: 'nowrap',
  },
  cardImage: {
    position: 'absolute',
    width: '476px',
    height: '454px',
    left: '754px',
    top: '10px',
    backgroundColor: '#FFFEFE',
    borderRadius: '12px',
  }
};

export default Services;
