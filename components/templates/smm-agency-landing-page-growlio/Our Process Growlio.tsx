'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Image from 'next/image';

import { useIsMobile } from '@/lib/use-is-mobile';
import type { ProcessContent } from '@/content/home/types';

const PROCESS_MOCKUP_IMAGES = [
  { src: '/images/process/content-preview-ig.jpg', icon: 'ig' },
  { src: '/images/process/content-preview-fb.jpg', icon: 'fb' },
  { src: '/images/process/content-preview-tiktok.jpg', icon: 'tiktok' }
];

const ProcessDiscoverDesign = () => (
  <div style={{ width: '100%', height: '100%', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px', boxSizing: 'border-box' }}>
    {/* Audience Insights Panel */}
    <div style={{ flex: 1, backgroundColor: '#F9FAF9', borderRadius: '16px', padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center' }}>
      <h4 style={{ margin: 0, fontFamily: 'Inter Tight', fontWeight: 600, fontSize: '20px', color: '#111926' }}>Audience Insights</h4>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

        {/* Donut Chart */}
        <div style={{
          width: '140px', height: '140px', borderRadius: '50%',
          background: 'conic-gradient(#109D75 0% 45%, #22B787 45% 80%, #68D0AD 80% 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <div style={{ width: '100px', height: '100px', backgroundColor: '#F9FAF9', borderRadius: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'Inter Tight', fontWeight: 700, fontSize: '24px', color: '#111926', lineHeight: '1.2' }}>125K</span>
            <span style={{ fontFamily: 'Inter Tight', fontWeight: 500, fontSize: '13px', color: '#6A7380' }}>Audience</span>
          </div>
        </div>

        {/* Progress Bars */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', flex: 1, marginLeft: '30px' }}>
           {[
             { age: '18-24', pct: 42, fill: '#109D75' },
             { age: '25-34', pct: 35, fill: '#22B787' },
             { age: '35-44', pct: 18, fill: '#68D0AD' },
             { age: '45+', pct: 5, fill: '#81DFBB' }
           ].map(item => (
             <div key={item.age} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
               <span style={{ width: '42px', fontFamily: 'Inter Tight', fontSize: '15px', color: '#111926', fontWeight: 500 }}>{item.age}</span>
               <div style={{ flex: 1, height: '14px', backgroundColor: '#E2ECE7', borderRadius: '999px', overflow: 'hidden' }}>
                 <div style={{ width: `${item.pct}%`, height: '100%', backgroundColor: item.fill, borderRadius: '999px' }} />
               </div>
               <span style={{ width: '32px', textAlign: 'right', fontFamily: 'Inter Tight', fontSize: '15px', color: '#111926', fontWeight: 500 }}>{item.pct}%</span>
             </div>
           ))}
        </div>
      </div>
    </div>

    {/* Bottom Row */}
    <div style={{ display: 'flex', flexDirection: 'row', gap: '16px', height: '180px' }}>

      {/* Top Platforms */}
      <div style={{ flex: '1.2', backgroundColor: '#FFFEFF', borderRadius: '16px', border: '1px solid #F3F4F6', boxShadow: '0px 2px 10px rgba(0,0,0,0.02)', padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <h4 style={{ margin: 0, fontFamily: 'Inter Tight', fontWeight: 600, fontSize: '18px', color: '#111926' }}>Top Platforms</h4>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
          {/* Instagram */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fc5949 45%, #d7249e 60%, #295BEA 90%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFEFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </div>
            <div style={{ width: '32px', height: '6px', backgroundColor: '#E3E9F0', borderRadius: '4px' }} />
          </div>
          {/* Facebook */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#1877F2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFEFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </div>
            <div style={{ width: '32px', height: '6px', backgroundColor: '#E3E9F0', borderRadius: '4px' }} />
          </div>
          {/* TikTok */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#010001', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFFEFF"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
            </div>
            <div style={{ width: '32px', height: '6px', backgroundColor: '#E3E9F0', borderRadius: '4px' }} />
          </div>
          {/* LinkedIn */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#0B67C2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFEFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </div>
            <div style={{ width: '32px', height: '6px', backgroundColor: '#E3E9F0', borderRadius: '4px' }} />
          </div>
        </div>
      </div>

      {/* Competitors */}
      <div style={{ flex: '1', backgroundColor: '#FFFEFF', borderRadius: '16px', border: '1px solid #F3F4F6', boxShadow: '0px 2px 10px rgba(0,0,0,0.02)', padding: '20px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
        <h4 style={{ margin: 0, fontFamily: 'Inter Tight', fontWeight: 600, fontSize: '18px', color: '#111926' }}>Competitors</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '4px' }}>
          {[
            { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="#FFFEFF"><path d="M21.9 4.3C22 4.1 22 4 21.8 3.9c-2-1.3-5.3-2-8.3-2-6 0-11 2-11 6.5 0 2.2 1.3 4.1 3.5 5.5.3.2.6.4 1 .6-1.5-.7-3-2.1-3-3.8 0-2.8 3.5-5.3 8-6.6.6-.2 1.3-.3 1.9-.4 2.8-.5 5.5-.3 7.8.6.1.1.1.2 0 .2-5 3.3-10.4 7.6-13.8 12-.1.2.2.4.4.2 4-2.8 9.3-7.5 13.5-12.2.1 0 .1-.2.1-.2z"/></svg>, bgColor: '#010001', pct: 65, fill: '#109D75', pills: 1 },
            { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="#010001"><path d="M19 18l-3-9h-3l3 9h3zm-5 0l-3-9h-3l3 9h3zm-5 0l-3-9H3l3 9h3z"/></svg>, bgColor: '#F3F4F6', pct: 45, fill: '#22B787', pills: 2 },
            { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="#FFFEFF"><path d="M12 21C8 21 5 18 5 14c0-3.3 2-6 5-7-1.5 1-2 3-2 5 0 2 1.5 4 4 4s4-2 4-4c0-2-.5-4-2-5 3 1 5 3.7 5 7 0 4-3 7-7 7zm0-4c-1.7 0-3-1.3-3-3 0-1.2.6-2.2 1.5-2.7C11.1 11 11.5 10 11.5 9c0-.6-.3-1-1-1.5 2 1 2.5 2.2 2.5 3.5 0 1-1 2-2 2.7-.9.5-1.5 1.5-1.5 2.7 0 1.7 1.3 3 3 3h.5C12.5 16.5 12 17 12 17z"/></svg>, bgColor: '#D81325', pct: 30, fill: '#68D0AD', pills: 2 }
          ].map((item, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: item.bgColor, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {item.icon}
              </div>
              <div style={{ flex: 1, height: '10px', backgroundColor: '#E4E7EB', borderRadius: '999px', overflow: 'hidden' }}>
                <div style={{ width: `${item.pct}%`, height: '100%', backgroundColor: item.fill, borderRadius: '999px' }} />
              </div>
              {Array.from({ length: item.pills }).map((_, p) => (
                <div key={p} style={{ width: '16px', height: '10px', backgroundColor: '#E4E7EB', borderRadius: '999px' }} />
              ))}
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
);

const ProcessStrategizeDesign = () => {
  // Calendar data
  const calendarDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const calendarCells = [
    ['ig', 'green-dark', 'gray', 'gray', 'green-light', 'gray', 'gray'],
    ['gray', 'gray', 'fb', 'gray', 'tiktok', 'green-mid', 'gray'],
    ['gray', 'green-dark', 'gray', 'green-light', 'gray', 'gray', 'yt'],
    ['gray', 'gray', 'gray', 'li', 'gray', 'green-light', 'gray']
  ];

  const getCellContent = (type: string) => {
    switch(type) {
      case 'gray': return <div style={{ width: '100%', height: '100%', backgroundColor: '#F3F4F6', borderRadius: '6px' }} />;
      case 'green-dark': return <div style={{ width: '100%', height: '100%', backgroundColor: '#109D75', borderRadius: '6px' }} />;
      case 'green-mid': return <div style={{ width: '100%', height: '100%', backgroundColor: '#22B787', borderRadius: '6px' }} />;
      case 'green-light': return <div style={{ width: '100%', height: '100%', backgroundColor: '#81DFBB', borderRadius: '6px' }} />;
      case 'ig': return (
        <div style={{ width: '100%', height: '100%', borderRadius: '6px', background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fc5949 45%, #d7249e 60%, #295BEA 90%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFEFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        </div>
      );
      case 'fb': return (
        <div style={{ width: '100%', height: '100%', borderRadius: '6px', backgroundColor: '#1877F2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFEFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
        </div>
      );
      case 'tiktok': return (
        <div style={{ width: '100%', height: '100%', borderRadius: '6px', backgroundColor: '#010001', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="#FFFEFF"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
        </div>
      );
      case 'li': return (
        <div style={{ width: '100%', height: '100%', borderRadius: '6px', backgroundColor: '#0B67C2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFEFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </div>
      );
      case 'yt': return (
        <div style={{ width: '100%', height: '100%', borderRadius: '6px', backgroundColor: '#FE0001', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="#FFFEFF"><path d="M22.5 7.1c-.2-1-.9-1.7-1.9-1.9C18.9 5 12 5 12 5s-6.9 0-8.6.2c-1 .2-1.7.9-1.9 1.9C1.3 8.8 1.3 12 1.3 12s0 3.2.2 4.9c.2 1 .9 1.7 1.9 1.9 1.7.2 8.6.2 8.6.2s6.9 0 8.6-.2c1-.2 1.7-.9 1.9-1.9.2-1.7.2-4.9.2-4.9s0-3.2-.2-4.9zM9.7 15V9l5.4 3-5.4 3z"/></svg>
        </div>
      );
    }
  };

  return (
    <div style={{ width: '100%', height: '100%', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px', boxSizing: 'border-box' }}>

      {/* Top Row */}
      <div style={{ flex: 1, backgroundColor: '#F9FAF9', borderRadius: '16px', padding: '16px', display: 'flex', flexDirection: 'row', gap: '12px' }}>

        {/* Content Strategy (Calendar) */}
        <div style={{ flex: 1.1, display: 'flex', flexDirection: 'column' }}>
          <h4 style={{ margin: '0 0 12px 4px', fontFamily: 'Inter Tight', fontWeight: 600, fontSize: '18px', color: '#111926' }}>Content Strategy</h4>
          <div style={{ flex: 1, backgroundColor: '#FFFEFF', borderRadius: '12px', padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {/* Days Header */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px' }}>
              {calendarDays.map(day => (
                <div key={day} style={{ textAlign: 'center', fontFamily: 'Inter Tight', fontSize: '11px', color: '#6A7380', fontWeight: 500 }}>{day}</div>
              ))}
            </div>
            {/* Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '6px', flex: 1 }}>
              {calendarCells.map((row, rIdx) =>
                row.map((cell, cIdx) => (
                  <div key={`${rIdx}-${cIdx}`} style={{ aspectRatio: '1/1' }}>
                    {getCellContent(cell)}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Content Mix */}
        <div style={{ flex: 1, backgroundColor: '#FFFEFF', borderRadius: '12px', padding: '16px', display: 'flex', flexDirection: 'column' }}>
          <h4 style={{ margin: '0 0 12px 0', fontFamily: 'Inter Tight', fontWeight: 600, fontSize: '16px', color: '#111926' }}>Content Mix</h4>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>

            {/* Donut Chart */}
            <div style={{
              width: '75px', height: '75px', borderRadius: '50%',
              background: 'conic-gradient(#109D75 0% 40%, #22B787 40% 70%, #68D0AD 70% 90%, #81DFBB 90% 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <div style={{ width: '50px', height: '50px', backgroundColor: '#FFFEFF', borderRadius: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'Inter Tight', fontWeight: 700, fontSize: '16px', color: '#111926', lineHeight: '1' }}>50</span>
                <span style={{ fontFamily: 'Inter Tight', fontWeight: 400, fontSize: '9px', color: '#6A7380' }}>Posts</span>
              </div>
            </div>

            {/* Legend */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { label: 'Reels', pct: '40%', color: '#109D75' },
                { label: 'Carousel', pct: '30%', color: '#22B787' },
                { label: 'Image', pct: '20%', color: '#68D0AD' },
                { label: 'Story', pct: '10%', color: '#81DFBB' }
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: item.color }} />
                  <span style={{ width: '42px', fontFamily: 'Inter Tight', fontSize: '11px', color: '#364150', fontWeight: 500 }}>{item.label}</span>
                  <span style={{ fontFamily: 'Inter Tight', fontSize: '11px', color: '#111926', fontWeight: 600 }}>{item.pct}</span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Row */}
      <div style={{ display: 'flex', flexDirection: 'row', gap: '16px', height: '170px' }}>

        {/* Campaign Plan */}
        <div style={{ flex: 1, backgroundColor: '#FFFEFF', borderRadius: '16px', border: '1px solid #F3F4F6', boxShadow: '0px 2px 10px rgba(0,0,0,0.02)', padding: '16px', display: 'flex', flexDirection: 'column' }}>
          <h4 style={{ margin: '0 0 16px 0', fontFamily: 'Inter Tight', fontWeight: 600, fontSize: '16px', color: '#111926' }}>Campaign Plan</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              { label: 'Awareness', pct: 70, icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#109D75" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 11 19 2 14 2 10"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg> },
              { label: 'Engagement', pct: 50, icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#109D75" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> },
              { label: 'Conversions', pct: 30, icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#109D75" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg> }
            ].map(item => (
              <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#E9F5F1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {item.icon}
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'Inter Tight', fontSize: '13px', color: '#111926', fontWeight: 500 }}>{item.label}</span>
                    <span style={{ fontFamily: 'Inter Tight', fontSize: '13px', color: '#111926', fontWeight: 600 }}>{item.pct}%</span>
                  </div>
                  <div style={{ width: '100%', height: '8px', backgroundColor: '#F3F4F6', borderRadius: '999px', overflow: 'hidden' }}>
                    <div style={{ width: `${item.pct}%`, height: '100%', backgroundColor: '#68D0AD', borderRadius: '999px' }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Audience Targeting */}
        <div style={{ flex: 1, backgroundColor: '#FFFEFF', borderRadius: '16px', border: '1px solid #F3F4F6', boxShadow: '0px 2px 10px rgba(0,0,0,0.02)', padding: '16px', display: 'flex', flexDirection: 'column' }}>
          <h4 style={{ margin: '0 0 12px 0', fontFamily: 'Inter Tight', fontWeight: 600, fontSize: '16px', color: '#111926' }}>Audience Targeting</h4>

          <div style={{ display: 'flex', flexDirection: 'row', gap: '8px', marginBottom: '16px' }}>
            <div style={{ flex: 1, backgroundColor: '#E9F5F1', borderRadius: '999px', padding: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ fontFamily: 'Inter Tight', fontSize: '10px', fontWeight: 600, color: '#111926', lineHeight: '1.2', whiteSpace: 'nowrap' }}>Age</span>
                <span style={{ fontFamily: 'Inter Tight', fontSize: '10px', fontWeight: 400, color: '#364150', whiteSpace: 'nowrap' }}>18-34</span>
              </div>
            </div>
            <div style={{ flex: 1, backgroundColor: '#E9F5F1', borderRadius: '999px', padding: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ fontFamily: 'Inter Tight', fontSize: '10px', fontWeight: 600, color: '#111926', lineHeight: '1.2', whiteSpace: 'nowrap' }}>Location</span>
                <span style={{ fontFamily: 'Inter Tight', fontSize: '10px', fontWeight: 400, color: '#364150', whiteSpace: 'nowrap' }}>BD</span>
              </div>
            </div>
            <div style={{ flex: 1, backgroundColor: '#E9F5F1', borderRadius: '999px', padding: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ fontFamily: 'Inter Tight', fontSize: '10px', fontWeight: 600, color: '#111926', lineHeight: '1.2', whiteSpace: 'nowrap' }}>Interests</span>
                <span style={{ fontFamily: 'Inter Tight', fontSize: '10px', fontWeight: 400, color: '#364150', whiteSpace: 'nowrap' }}>Fashion</span>
              </div>
            </div>
          </div>

          <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '0 4px' }}>
             {/* Bars */}
             {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, idx) => {
                const heights = ['35%', '70%', '40%', '30%', '80%', '40%', '40%'];
                return (
                  <div key={day} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', height: '100%', justifyContent: 'flex-end' }}>
                    <div style={{ width: '16px', height: heights[idx], backgroundColor: '#68D0AD', borderRadius: '4px' }} />
                    <span style={{ fontFamily: 'Inter Tight', fontSize: '10px', color: '#6A7380', fontWeight: 500 }}>{day}</span>
                  </div>
                )
             })}
          </div>
        </div>

      </div>
    </div>
  );
};

const ProcessCreateLaunchDesign = () => {
  const getSocialIcon = (type: string, size = 16) => {
    switch(type) {
      case 'ig': return (
        <div style={{ width: size, height: size, borderRadius: size/4, background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fc5949 45%, #d7249e 60%, #295BEA 90%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width={size*0.7} height={size*0.7} viewBox="0 0 24 24" fill="none" stroke="#FFFEFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        </div>
      );
      case 'fb': return (
        <div style={{ width: size, height: size, borderRadius: size/4, backgroundColor: '#1877F2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width={size*0.7} height={size*0.7} viewBox="0 0 24 24" fill="none" stroke="#FFFEFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
        </div>
      );
      case 'tiktok': return (
        <div style={{ width: size, height: size, borderRadius: size/4, backgroundColor: '#010001', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width={size*0.6} height={size*0.6} viewBox="0 0 24 24" fill="#FFFEFF"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
        </div>
      );
      case 'yt': return (
        <div style={{ width: size, height: size, borderRadius: size/4, backgroundColor: '#FE0001', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width={size*0.7} height={size*0.7} viewBox="0 0 24 24" fill="#FFFEFF"><path d="M22.5 7.1c-.2-1-.9-1.7-1.9-1.9C18.9 5 12 5 12 5s-6.9 0-8.6.2c-1 .2-1.7.9-1.9 1.9C1.3 8.8 1.3 12 1.3 12s0 3.2.2 4.9c.2 1 .9 1.7 1.9 1.9 1.7.2 8.6.2 8.6.2s6.9 0 8.6-.2c1-.2 1.7-.9 1.9-1.9.2-1.7.2-4.9.2-4.9s0-3.2-.2-4.9zM9.7 15V9l5.4 3-5.4 3z"/></svg>
        </div>
      );
    }
  };

  const images = PROCESS_MOCKUP_IMAGES;

  return (
    <div style={{ width: '100%', height: '100%', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px', boxSizing: 'border-box' }}>

      {/* Top Row */}
      <div style={{ flex: '1.2', backgroundColor: '#F9FAF9', borderRadius: '16px', padding: '16px', display: 'flex', flexDirection: 'row', gap: '16px' }}>

        {/* Content Preview */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <h4 style={{ margin: '0 0 12px 4px', fontFamily: 'Inter Tight', fontWeight: 600, fontSize: '16px', color: '#111926' }}>Content Preview</h4>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '8px', flex: 1 }}>
            {images.map((img, idx) => (
              <div key={idx} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ flex: 1, borderRadius: '8px', position: 'relative', overflow: 'hidden' }}>
                  <Image src={img.src} alt="" fill sizes="200px" style={{ objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', bottom: '6px', left: '6px', padding: '2px', backgroundColor: '#FFFEFF', borderRadius: '6px', display: 'flex' }}>
                    {getSocialIcon(img.icon, 20)}
                  </div>
                </div>
                <div style={{ width: '100%', height: '4px', backgroundColor: '#E4E7EB', borderRadius: '999px' }} />
                <div style={{ width: '70%', height: '4px', backgroundColor: '#E4E7EB', borderRadius: '999px' }} />
              </div>
            ))}
          </div>
        </div>

        {/* Post Schedule */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <h4 style={{ margin: '0 0 12px 0', fontFamily: 'Inter Tight', fontWeight: 600, fontSize: '16px', color: '#111926' }}>Post Schedule</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flex: 1 }}>
            {[
              { type: 'ig', title: 'Product Post', time: 'Mon, 10:00 AM' },
              { type: 'fb', title: 'Promo Video', time: 'Wed, 02:00 PM' },
              { type: 'tiktok', title: 'Behind the Scene', time: 'Fri, 05:00 PM' },
              { type: 'yt', title: 'Product Review', time: 'Sun, 11:00 AM' }
            ].map((post, idx) => (
              <div key={idx} style={{ flex: 1, backgroundColor: '#FFFEFF', borderRadius: '10px', padding: '0 10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                {getSocialIcon(post.type, 24)}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontFamily: 'Inter Tight', fontSize: '11px', fontWeight: 600, color: '#111926' }}>{post.title}</span>
                  <span style={{ fontFamily: 'Inter Tight', fontSize: '9px', fontWeight: 400, color: '#6A7380' }}>{post.time}</span>
                </div>
                {/* Toggle */}
                <div style={{ width: '28px', height: '16px', backgroundColor: '#109D75', borderRadius: '999px', display: 'flex', alignItems: 'center', padding: '2px', justifyContent: 'flex-end', boxSizing: 'border-box' }}>
                  <div style={{ width: '12px', height: '12px', backgroundColor: '#FFFEFF', borderRadius: '50%' }} />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Row */}
      <div style={{ display: 'flex', flexDirection: 'row', gap: '16px', flex: 1 }}>

        {/* Ad Campaign */}
        <div style={{ flex: '1.2', backgroundColor: '#FFFEFF', borderRadius: '16px', border: '1px solid #F3F4F6', boxShadow: '0px 2px 10px rgba(0,0,0,0.02)', padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h4 style={{ margin: 0, fontFamily: 'Inter Tight', fontWeight: 600, fontSize: '16px', color: '#111926' }}>Ad Campaign</h4>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6A7380" strokeWidth="2.5"><circle cx="5" cy="12" r="1"></circle><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle></svg>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '12px' }}>
            <div style={{ position: 'relative', width: 56, height: 56, flexShrink: 0 }}>
              <Image src={images[0].src} alt="" fill sizes="56px" style={{ borderRadius: '8px', objectFit: 'cover' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span style={{ fontFamily: 'Inter Tight', fontSize: '13px', fontWeight: 600, color: '#111926' }}>Summer Collection</span>
              <div style={{ backgroundColor: '#E9F5F1', borderRadius: '999px', padding: '4px 8px', display: 'flex', alignItems: 'center', gap: '4px', width: 'fit-content' }}>
                <div style={{ width: '6px', height: '6px', backgroundColor: '#109D75', borderRadius: '50%' }} />
                <span style={{ fontFamily: 'Inter Tight', fontSize: '10px', fontWeight: 600, color: '#109D75' }}>Live Now</span>
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '16px', backgroundColor: '#F9FAF9', padding: '10px 12px', borderRadius: '8px' }}>
            {[
              { label: 'Reach', value: '125K', growth: '48%' },
              { label: 'Clicks', value: '4.2K', growth: '62%' },
              { label: 'Conversions', value: '320', growth: '35%' }
            ].map((stat, idx) => (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '4px', borderRight: idx < 2 ? '1px solid #E4E7EB' : 'none', paddingRight: idx < 2 ? '16px' : '0' }}>
                <span style={{ fontFamily: 'Inter Tight', fontSize: '9px', fontWeight: 500, color: '#6A7380' }}>{stat.label}</span>
                <span style={{ fontFamily: 'Inter Tight', fontSize: '14px', fontWeight: 700, color: '#111926' }}>{stat.value}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#109D75" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
                  <span style={{ fontFamily: 'Inter Tight', fontSize: '10px', fontWeight: 600, color: '#109D75' }}>{stat.growth}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Launch */}
        <div style={{ flex: 1, backgroundColor: '#FFFEFF', borderRadius: '16px', border: '1px solid #F3F4F6', boxShadow: '0px 2px 10px rgba(0,0,0,0.02)', padding: '16px', display: 'flex', flexDirection: 'column' }}>
          <h4 style={{ margin: '0 0 12px 0', fontFamily: 'Inter Tight', fontWeight: 600, fontSize: '16px', color: '#111926' }}>Platform Launch</h4>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1, justifyContent: 'center' }}>
            {[
              { icon: 'ig', label: 'Instagram Content' },
              { icon: 'fb', label: 'Facebook Campaign' },
              { icon: 'tiktok', label: 'TikTok Videos' },
              { icon: 'yt', label: 'YouTube Shorts' }
            ].map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {getSocialIcon(item.icon, 20)}
                  <span style={{ fontFamily: 'Inter Tight', fontSize: '12px', fontWeight: 500, color: '#364150' }}>{item.label}</span>
                </div>
                <div style={{ width: '16px', height: '16px', backgroundColor: '#109D75', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FFFEFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

const ProcessAnalyzeGrowDesign = () => {
  const getSocialIcon = (type: string, size = 16) => {
    switch(type) {
      case 'ig': return (
        <div style={{ width: size, height: size, borderRadius: size/4, background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fc5949 45%, #d7249e 60%, #295BEA 90%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width={size*0.7} height={size*0.7} viewBox="0 0 24 24" fill="none" stroke="#FFFEFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        </div>
      );
      case 'fb': return (
        <div style={{ width: size, height: size, borderRadius: size/4, backgroundColor: '#1877F2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width={size*0.7} height={size*0.7} viewBox="0 0 24 24" fill="none" stroke="#FFFEFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
        </div>
      );
      case 'tiktok': return (
        <div style={{ width: size, height: size, borderRadius: size/4, backgroundColor: '#010001', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width={size*0.6} height={size*0.6} viewBox="0 0 24 24" fill="#FFFEFF"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
        </div>
      );
      case 'yt': return (
        <div style={{ width: size, height: size, borderRadius: size/4, backgroundColor: '#FE0001', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width={size*0.7} height={size*0.7} viewBox="0 0 24 24" fill="#FFFEFF"><path d="M22.5 7.1c-.2-1-.9-1.7-1.9-1.9C18.9 5 12 5 12 5s-6.9 0-8.6.2c-1 .2-1.7.9-1.9 1.9C1.3 8.8 1.3 12 1.3 12s0 3.2.2 4.9c.2 1 .9 1.7 1.9 1.9 1.7.2 8.6.2 8.6.2s6.9 0 8.6-.2c1-.2 1.7-.9 1.9-1.9.2-1.7.2-4.9.2-4.9s0-3.2-.2-4.9zM9.7 15V9l5.4 3-5.4 3z"/></svg>
        </div>
      );
    }
  };

  const images = PROCESS_MOCKUP_IMAGES;

  return (
    <div style={{ width: '100%', height: '100%', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px', boxSizing: 'border-box' }}>

      {/* Top Row */}
      <div style={{ flex: '1.2', display: 'flex', flexDirection: 'row', gap: '16px' }}>

        {/* Performance Overview */}
        <div style={{ flex: '1.3', backgroundColor: '#FFFEFF', borderRadius: '16px', border: '1px solid #F3F4F6', boxShadow: '0px 2px 10px rgba(0,0,0,0.02)', padding: '16px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h4 style={{ margin: 0, fontFamily: 'Inter Tight', fontWeight: 600, fontSize: '18px', color: '#111926' }}>Performance Overview</h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', border: '1px solid #E4E7EB', borderRadius: '6px', padding: '4px 8px' }}>
              <span style={{ fontFamily: 'Inter Tight', fontSize: '10px', color: '#6A7380' }}>Last 30 Days</span>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#6A7380" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </div>
          </div>
          <div style={{ flex: 1, position: 'relative' }}>
            <svg width="100%" height="100%" viewBox="0 0 300 120">
              <defs>
                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#109D75" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#109D75" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Grid lines */}
              {[30, 90, 150, 210, 270].map(x => (
                <line key={x} x1={x} y1="0" x2={x} y2="100" stroke="#F3F4F6" strokeWidth="1" strokeDasharray="4 4" />
              ))}
              {/* Fill */}
              <path d="M 20 100 L 40 85 L 80 65 L 130 80 L 180 50 L 230 60 L 280 20 L 280 120 L 20 120 Z" fill="url(#chartGrad)" />
              {/* Line */}
              <path d="M 20 100 L 40 85 L 80 65 L 130 80 L 180 50 L 230 60 L 280 20" fill="none" stroke="#109D75" strokeWidth="3" />
              {/* Nodes */}
              {[[20,100], [40,85], [80,65], [130,80], [180,50], [230,60], [280,20]].map((pt, i) => (
                <circle key={i} cx={pt[0]} cy={pt[1]} r="4" fill="#109D75" stroke="#FFFEFF" strokeWidth="2" />
              ))}
            </svg>
            <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', display: 'flex', justifyContent: 'space-between', padding: '0 10px' }}>
              {['Mar 1', 'Mar 7', 'Mar 14', 'Mar 21', 'Mar 28'].map(lbl => (
                <span key={lbl} style={{ fontFamily: 'Inter Tight', fontSize: '9px', color: '#9CA2AF' }}>{lbl}</span>
              ))}
            </div>
          </div>
        </div>

        {/* 4 Metrics */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {[
            { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#109D75" strokeWidth="2.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>, label: 'Reach', val: '125K', growth: '48%' },
            { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#109D75" strokeWidth="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>, label: 'Engagement', val: '12.4K', growth: '62%' },
            { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#109D75" strokeWidth="2.5"><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path></svg>, label: 'Website Clicks', val: '4.2K', growth: '35%' },
            { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#109D75" strokeWidth="2.5"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>, label: 'Conversions', val: '320', growth: '28%' }
          ].map(stat => (
            <div key={stat.label} style={{ flex: 1, backgroundColor: '#FFFEFF', borderRadius: '12px', border: '1px solid #F3F4F6', boxShadow: '0px 2px 10px rgba(0,0,0,0.02)', padding: '0 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: '#E9F5F1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {stat.icon}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontFamily: 'Inter Tight', fontSize: '10px', color: '#4B5463', fontWeight: 500 }}>{stat.label}</span>
                  <span style={{ fontFamily: 'Inter Tight', fontSize: '16px', color: '#111926', fontWeight: 700, lineHeight: '1.2' }}>{stat.val}</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#109D75" strokeWidth="2.5"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
                <span style={{ fontFamily: 'Inter Tight', fontSize: '12px', color: '#109D75', fontWeight: 600 }}>{stat.growth}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Row */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'row', gap: '16px' }}>

        {/* Platform Growth */}
        <div style={{ flex: 1, backgroundColor: '#FFFEFF', borderRadius: '16px', border: '1px solid #F3F4F6', boxShadow: '0px 2px 10px rgba(0,0,0,0.02)', padding: '16px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h4 style={{ margin: 0, fontFamily: 'Inter Tight', fontWeight: 600, fontSize: '16px', color: '#111926' }}>Platform Growth</h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', border: '1px solid #E4E7EB', borderRadius: '6px', padding: '4px 8px' }}>
              <span style={{ fontFamily: 'Inter Tight', fontSize: '10px', color: '#6A7380' }}>Last 30 Days</span>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#6A7380" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1, justifyContent: 'center' }}>
            {[
              { type: 'ig', label: 'Instagram', pct: 60, growth: '52%' },
              { type: 'fb', label: 'Facebook', pct: 45, growth: '38%' },
              { type: 'tiktok', label: 'TikTok', pct: 85, growth: '76%' },
              { type: 'yt', label: 'YouTube', pct: 50, growth: '41%' }
            ].map(item => (
              <div key={item.type} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                {getSocialIcon(item.type, 24)}
                <span style={{ width: '60px', fontFamily: 'Inter Tight', fontSize: '11px', color: '#111926', fontWeight: 500 }}>{item.label}</span>
                <div style={{ flex: 1, height: '8px', backgroundColor: '#F3F4F6', borderRadius: '999px', overflow: 'hidden' }}>
                  <div style={{ width: `${item.pct}%`, height: '100%', backgroundColor: '#22B787', borderRadius: '999px' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '2px', width: '36px', justifyContent: 'flex-end' }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#109D75" strokeWidth="2.5"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
                  <span style={{ fontFamily: 'Inter Tight', fontSize: '11px', color: '#109D75', fontWeight: 600 }}>{item.growth}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Performing Content */}
        <div style={{ flex: '1.2', backgroundColor: '#FFFEFF', borderRadius: '16px', border: '1px solid #F3F4F6', boxShadow: '0px 2px 10px rgba(0,0,0,0.02)', padding: '16px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <h4 style={{ margin: 0, fontFamily: 'Inter Tight', fontWeight: 600, fontSize: '16px', color: '#111926' }}>Top Performing Content</h4>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6A7380" strokeWidth="2.5"><circle cx="5" cy="12" r="1"></circle><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle></svg>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
            {[
              { img: images[0].src, title: 'Product Post', date: 'Mar 12, 2024', heart: '2.4K', comment: '320', share: '180' },
              { img: images[1].src, title: 'Promo Video', date: 'Mar 8, 2024', heart: '1.8K', comment: '210', share: '95' },
              { img: images[2].src, title: 'Brand Story', date: 'Mar 5, 2024', heart: '1.2K', comment: '140', share: '70' }
            ].map((post, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ position: 'relative', width: 42, height: 42, flexShrink: 0 }}>
                  <Image src={post.img} alt="" fill sizes="42px" style={{ borderRadius: '8px', objectFit: 'cover' }} />
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ fontFamily: 'Inter Tight', fontSize: '12px', fontWeight: 600, color: '#111926', lineHeight: '1.1' }}>{post.title}</span>
                  <span style={{ fontFamily: 'Inter Tight', fontSize: '9px', fontWeight: 400, color: '#6A7380', lineHeight: '1.1' }}>{post.date}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '2px' }}>
                    {/* Heart */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#6A7380" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                      <span style={{ fontFamily: 'Inter Tight', fontSize: '9px', color: '#6A7380' }}>{post.heart}</span>
                    </div>
                    {/* Comment */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#6A7380" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                      <span style={{ fontFamily: 'Inter Tight', fontSize: '9px', color: '#6A7380' }}>{post.comment}</span>
                    </div>
                    {/* Share */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#6A7380" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                      <span style={{ fontFamily: 'Inter Tight', fontSize: '9px', color: '#6A7380' }}>{post.share}</span>
                    </div>
                  </div>
                </div>
                <div style={{ width: '28px', height: '28px', backgroundColor: '#E9F5F1', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#109D75" strokeWidth="2.5"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};

const PROCESS_DESIGNS: Record<string, React.ReactNode> = {
  discover: <ProcessDiscoverDesign />,
  strategize: <ProcessStrategizeDesign />,
  'create-launch': <ProcessCreateLaunchDesign />,
  'analyze-grow': <ProcessAnalyzeGrowDesign />
};

const Process = ({ content }: { content: ProcessContent }) => {
  const [scale, setScale] = useState(1);
  const [viewportWidth, setViewportWidth] = useState(1600);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.25) setActiveStepIndex(0);
    else if (latest < 0.5) setActiveStepIndex(1);
    else if (latest < 0.75) setActiveStepIndex(2);
    else setActiveStepIndex(3);
  });

  const isMobile = useIsMobile();

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      if (mobile) {
        setScale(1);
        setViewportWidth(window.innerWidth);
      } else {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const clientW = document.documentElement.clientWidth;
        setViewportWidth(clientW);
        const scaleX = screenWidth / 1600;
        const scaleY = screenHeight / 906;
        let newScale = Math.min(scaleX, scaleY);
        if (newScale > 1.2) newScale = 1.2;
        setScale(newScale);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const steps = content.steps.map((step) => ({
    ...step,
    design: PROCESS_DESIGNS[step.designKey]
  }));

  const metrics = content.metrics;

  const renderMetrics = () => (
    <>
      {metrics.map((metric, idx) => (
        <div key={idx} style={styles.metricGroup}>
          <span style={styles.metricValue}>{metric.value}</span>
          <span style={styles.metricLabel}>/ {metric.label}</span>
        </div>
      ))}
    </>
  );

  if (isMobile) {
    return (
      <div style={{ width: '100%', backgroundColor: '#034E46', padding: '60px 20px', boxSizing: 'border-box' }}>
        <style>
          {`
            @keyframes processMarquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
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
          <motion.p style={{ ...styles.subTitle, width: '100%' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {content.subtitle}
          </motion.p>
        </div>

        {/* Steps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '60px', marginBottom: '60px' }}>
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.6 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <span style={{ color: '#81DFBB', fontFamily: 'Inter Tight', fontWeight: 600, fontSize: '18px' }}>0{idx + 1}. {step.name}</span>

                <motion.h3
                  style={{ ...styles.rightTitle, fontSize: '28px', lineHeight: '36px' }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  variants={{
                    visible: { transition: { staggerChildren: 0.05 } },
                    hidden: {}
                  }}
                >
                  {step.title.split(" ").map((word, i, arr) => (
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
                  style={{ ...styles.rightDesc, fontSize: '16px' }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  variants={{
                    visible: { transition: { staggerChildren: 0.015 } },
                    hidden: {}
                  }}
                >
                  {step.desc.split(" ").map((word, i, arr) => (
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
                </motion.p>
              </div>
              <div style={{ width: '100%', aspectRatio: '1/1', backgroundColor: '#FFFEFF', borderRadius: '24px', overflow: 'hidden' }}>
                {step.design}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Metrics Marquee */}
        <div style={{ width: '100%', overflow: 'hidden' }}>
          <div style={styles.metricsMarqueeScroller}>
            <div style={styles.metricsTrack}>
              {renderMetrics()}
            </div>
            <div style={styles.metricsTrack}>
              {renderMetrics()}
            </div>
          </div>
        </div>

      </div>
    );
  }

  return (
    <div ref={targetRef} style={styles.fullWidthWrapper}>
      <style>
        {`
          @keyframes processMarquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
      <div style={{
        ...(styles.stickyWindow as React.CSSProperties),
        height: `${1077 * scale}px`
      }}>
        <div style={{
          ...styles.container,
          transform: `scale(${scale})`
        }}>

        {/* Top Dark Green Area */}
        <div style={{
          ...styles.topGreenArea,
          width: `${viewportWidth / scale}px`,
          left: '50%',
          transform: 'translateX(-50%)'
        }}></div>

        {/* Header */}
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

        {/* Left Navigation */}
        <div style={styles.leftNavContainer}>
          <div style={styles.navTrack}>
            <div style={{
              ...styles.navIndicator,
              top: `${activeStepIndex * 53}px`
            }}></div>
          </div>

          <div style={styles.navTextList}>
            {steps.map((step, index) => {
              const isActive = index === activeStepIndex;
              return (
                <div
                  key={index}
                  onClick={() => setActiveStepIndex(index)}
                  style={{
                    ...styles.navItem,
                    color: isActive ? '#FFFEFF' : '#018E7D',
                    cursor: 'pointer',
                    transition: 'color 0.3s ease'
                  }}
                >
                  {step.name}
                </div>
              );
            })}
          </div>
        </div>

        {/* Center Image Box */}
        <div style={styles.centerImageBox}>
          <div style={{ width: '100%', height: '100%', backgroundColor: '#FFFEFF', borderRadius: '24px', overflow: 'hidden' }}>
            {steps[activeStepIndex].design || null}
          </div>
        </div>

        {/* Right Text Box */}
        <div style={styles.rightTextBox}>
          <motion.h3
            key={`title-${activeStepIndex}`}
            style={styles.rightTitle}
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.05 } },
              hidden: {}
            }}
          >
            {steps[activeStepIndex].title.split(" ").map((word, i, arr) => (
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
            key={`desc-${activeStepIndex}`}
            style={styles.rightDesc}
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.015 } },
              hidden: {}
            }}
          >
            {steps[activeStepIndex].desc.split(" ").map((word, i, arr) => (
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
          </motion.p>
        </div>

        {/* Bottom Metrics Marquee */}
        <div style={{
          ...styles.metricsMarqueeWrapper,
          width: `${viewportWidth / scale}px`,
          left: '50%',
          transform: 'translateX(-50%)'
        }}>
          <div style={styles.metricsMarqueeScroller}>
            <div style={styles.metricsTrack}>
              {renderMetrics()}
            </div>
            <div style={styles.metricsTrack}>
              {renderMetrics()}
            </div>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  fullWidthWrapper: {
    width: '100%',
    backgroundColor: '#1A1B1B',
    position: 'relative',
    height: '400vh',
  },
  stickyWindow: {
    position: 'sticky',
    top: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start', // Align to top
    backgroundColor: '#1A1B1B'
  },
  container: {
    width: '1600px',
    height: '1077px',
    position: 'relative',
    transformOrigin: 'top center',
    flexShrink: 0,
  },
  topGreenArea: {
    position: 'absolute',
    width: '1600px',
    height: '906px',
    left: '0px',
    top: '0px',
    backgroundColor: '#034E46',
    borderRadius: '0px 0px 60px 60px',
  },
  headerFrame: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    position: 'absolute',
    width: '845px',
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
    height: '24px',
  },
  pillSquare: {
    width: '8px',
    height: '8px',
    backgroundColor: '#FFFEFF',
    borderRadius: '2px',
  },
  pillText: {
    fontFamily: "'Inter Tight', sans-serif",
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '24px',
    textTransform: 'capitalize',
    color: '#FFFEFF',
  },
  titleGroup: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '16px',
    width: '845px',
  },
  mainTitle: {
    fontFamily: "'Goudy Old Style', 'Goudy Bookletter 1911', serif",
    fontWeight: 700,
    fontSize: '70px',
    lineHeight: '70px',
    letterSpacing: '-0.02em',
    color: '#FFFEFF',
    margin: 0,
    textAlign: 'center',
  },
  subTitle: {
    fontFamily: "'Inter Tight', sans-serif",
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '26px',
    textTransform: 'capitalize',
    color: '#FFFEFF',
    margin: 0,
    textAlign: 'center',
    width: '516px',
  },
  leftNavContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '22px',
    position: 'absolute',
    width: '177px',
    height: '183px',
    left: '140px',
    top: '322px',
  },
  navTrack: {
    width: '12px',
    height: '183px',
    backgroundColor: '#016458',
    borderRadius: '999px',
    position: 'relative',
  },
  navIndicator: {
    position: 'absolute',
    width: '12px',
    height: '47px',
    left: '0px',
    backgroundColor: '#FFFEFF',
    borderRadius: '999px',
    transition: 'top 0.3s ease',
  },
  navTextList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '29px',
    width: '143px',
  },
  navItem: {
    fontFamily: "'Inter Tight', sans-serif",
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '24px',
    textTransform: 'capitalize',
    height: '24px',
  },
  centerImageBox: {
    position: 'absolute',
    width: '466px',
    height: '504px',
    left: 'calc(50% - 233px)',
    top: '322px',
    backgroundColor: '#FFFEFF',
    borderRadius: '24px',
  },
  rightTextBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '6px',
    position: 'absolute',
    width: '429px',
    height: '134px',
    left: '1091px',
    top: '692px',
  },
  rightTitle: {
    fontFamily: "'Goudy Old Style', 'Goudy Bookletter 1911', serif",
    fontWeight: 700,
    fontSize: '40px',
    lineHeight: '50px',
    color: '#FFFEFF',
    margin: 0,
  },
  rightDesc: {
    fontFamily: "'Inter Tight', sans-serif",
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '26px',
    textTransform: 'capitalize',
    color: '#FFFEFF',
    margin: 0,
  },
  metricsMarqueeWrapper: {
    position: 'absolute',
    left: '0',
    top: '961px',
    width: '1600px', // width of the scaled container
    height: '50px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
  },
  metricsMarqueeScroller: {
    display: 'flex',
    width: 'max-content',
    animation: 'processMarquee 30s linear infinite',
  },
  metricsTrack: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '40px',
    paddingRight: '40px',
    width: 'max-content',
    flexShrink: 0,
  },
  metricGroup: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: '4px',
  },
  metricValue: {
    fontFamily: "'Goudy Old Style', 'Goudy Bookletter 1911', serif",
    fontWeight: 700,
    fontSize: '60px',
    lineHeight: '50px',
    color: '#FFFEFF',
  },
  metricLabel: {
    fontFamily: "'Inter Tight', sans-serif",
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '26px',
    textTransform: 'capitalize',
    color: '#C7C7C6',
    whiteSpace: 'nowrap',
    marginBottom: '6px', // slight visual alignment bump
  }
};

export default Process;
