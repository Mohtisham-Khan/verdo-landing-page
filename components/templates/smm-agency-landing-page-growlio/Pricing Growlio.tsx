'use client';

import React from 'react';
import { motion } from 'framer-motion';
import type { PricingContent } from '@/content/home/types';

const Pricing = ({ content }: { content: PricingContent }) => {
  return (
    <section className="pricing-section">
      <style>{`
        .pricing-section {
          width: 100%;
          background: #FBFADD;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 80px 0;
          font-family: 'Inter Tight', sans-serif;
          position: relative;
        }

        .pricing-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          margin-bottom: 60px;
        }

        .pricing-tag {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 5px;
        }

        .pricing-tag-dot {
          width: 8px;
          height: 8px;
          background: #034F46;
          border-radius: 2px;
        }

        .pricing-tag-text {
          font-weight: 400;
          font-size: 18px;
          line-height: 24px;
          text-align: center;
          text-transform: capitalize;
          color: #000101;
        }

        .pricing-title-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .pricing-title {
          font-family: 'Goudy Old Style', 'Goudy Bookletter 1911', serif;
          font-weight: 700;
          font-size: 70px;
          line-height: 70px;
          text-align: center;
          letter-spacing: -0.02em;
          color: #034F46;
          margin: 0;
        }

        .pricing-subtitle {
          font-weight: 400;
          font-size: 16px;
          line-height: 26px;
          text-align: center;
          text-transform: capitalize;
          color: #034F46;
          max-width: 490px;
          margin: 0;
        }

        .pricing-cards {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 899px;
        }

        .pricing-card {
          width: 100%;
          background: #FEFFFF;
          border-radius: 24px;
          display: flex;
          flex-direction: row;
          padding: 30px;
          position: relative;
          box-sizing: border-box;
          justify-content: space-between;
          transition: all 0.3s ease;
        }

        .pricing-card:hover {
          background: #034F46;
        }

        .pricing-card:hover .plan-name,
        .pricing-card:hover .price-amount,
        .pricing-card:hover .plan-description,
        .pricing-card:hover .included-title,
        .pricing-card:hover .feature-text {
          color: #FEFFFF;
        }

        .pricing-card:hover .price-period {
          color: rgba(255, 255, 255, 0.7);
        }

        .pricing-card:hover .feature-dot {
          background: #FEFFFF;
        }

        .pricing-card.enterprise {
          background: #034F46;
          color: #FEFFFF;
        }

        .card-left {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 324px;
        }

        .enterprise .card-left {
          width: 368px;
        }

        .plan-name {
          font-weight: 400;
          font-size: 18px;
          line-height: 24px;
          text-transform: capitalize;
          color: #034F46;
          margin: 0;
        }

        .enterprise .plan-name {
          color: #FEFFFF;
        }

        .plan-price-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .price-row {
          display: flex;
          flex-direction: row;
          align-items: flex-end;
        }

        .price-amount {
          font-family: 'Goudy Old Style', 'Goudy Bookletter 1911', serif;
          font-weight: 700;
          font-size: 40px;
          line-height: 50px;
          letter-spacing: -0.02em;
          color: #034F46;
          margin: 0;
        }

        .enterprise .price-amount {
          color: #FEFFFF;
        }

        .price-period {
          font-weight: 400;
          font-size: 18px;
          line-height: 24px;
          text-align: center;
          text-transform: capitalize;
          color: #688683;
          margin: 0;
        }

        .plan-description {
          font-weight: 400;
          font-size: 18px;
          line-height: 24px;
          text-transform: capitalize;
          color: #034F46;
          margin: 0;
        }

        .enterprise .plan-description {
          color: #FEFFFF;
        }

        .get-started-btn {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 4px;
          gap: 2px;
          border: 1px solid #FBFADD;
          border-radius: 999px;
          width: max-content;
          cursor: pointer;
          margin-top: 50px;
        }

        .btn-text-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 6px 16px;
          background: #FBFADD;
          border-radius: 999px;
        }

        .btn-text {
          font-family: 'Goudy Old Style', 'Goudy Bookletter 1911', serif;
          font-weight: 700;
          font-size: 16px;
          line-height: 26px;
          color: #034F46;
          margin: 0;
        }

        .btn-arrow-container {
          width: 38px;
          height: 38px;
          background: #FBFADD;
          border-radius: 999px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .card-right {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 188px;
        }

        .enterprise .card-right {
          width: 248px;
        }

        .included-title {
          font-weight: 500;
          font-size: 18px;
          line-height: 24px;
          text-transform: capitalize;
          color: #034F46;
          margin: 0;
        }

        .enterprise .included-title {
          color: #FEFFFF;
        }

        .features-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .feature-item {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 5px;
        }

        .feature-dot {
          width: 8px;
          height: 8px;
          background: #034F46;
          border-radius: 2px;
        }

        .enterprise .feature-dot {
          background: #FEFFFF;
        }

        .feature-text {
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          text-align: center;
          text-transform: capitalize;
          color: #034F46;
          margin: 0;
        }

        .enterprise .feature-text {
          color: #FEFFFF;
        }

        @media (max-width: 900px) {
          .pricing-section {
            padding: 60px 20px;
          }
          .pricing-cards {
            width: 100%;
          }
          .pricing-card {
            flex-direction: column;
            gap: 40px;
          }
          .card-left, .enterprise .card-left, .card-right, .enterprise .card-right {
            width: 100%;
          }
          .pricing-title {
            font-size: 40px;
            line-height: 46px;
          }
        }
      `}</style>

      <div className="pricing-header">
        <div className="pricing-tag">
          <div className="pricing-tag-dot"></div>
          <div className="pricing-tag-text">{content.tag}</div>
        </div>
        <div className="pricing-title-container">
          <motion.h2
            className="pricing-title"
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
          <motion.p className="pricing-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {content.subtitle}
          </motion.p>
        </div>
      </div>

      <motion.div
        className="pricing-cards"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
          hidden: {}
        }}
      >
        {content.plans.map((plan) => (
          <motion.div
            key={plan.id}
            className={`pricing-card${plan.featured ? ' enterprise' : ''}`}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
          >
            <div className="card-left">
              <h3 className="plan-name">{plan.name}</h3>
              <div className="plan-price-container">
                <div className="price-row">
                  <p className="price-amount">{plan.price}</p>
                  <p className="price-period">{plan.period}</p>
                </div>
                <p className="plan-description">{plan.description}</p>
              </div>
              <a href={content.cta.href} className="get-started-btn animated-btn" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="btn-text-container">
                  <p className="btn-text">{content.cta.label}</p>
                </div>
                <div className="btn-arrow-container">
                  <svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L7.5 6L1 11" stroke="#034F46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 2"/>
                  </svg>
                </div>
              </a>
            </div>
            <div className="card-right">
              <h4 className="included-title">{content.includedLabel}</h4>
              <div className="features-list">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="feature-item">
                    <div className="feature-dot"></div>
                    <p className="feature-text">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

      </motion.div>
    </section>
  );
};

export default Pricing;
