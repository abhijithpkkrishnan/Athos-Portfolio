import React, { useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Proposal({ onOpenContact }) {
  const [accepted, setAccepted] = useState(false);
  const [expandedScope, setExpandedScope] = useState({ 0: true, 1: false, 2: false });

  const scopeItems = [
    { title: 'Sales Pages & Responsive Landing', price: '€400', desc: 'Design and implementation of 3 core responsive landing pages with high conversion layout.' },
    { title: 'Custom Interactive Components', price: '€600', desc: 'Framer motion micro-animations, interactive cost calculator, and dynamic pricing accordions.' },
    { title: 'CMS Setup & Blog System', price: '€210', desc: 'Structured Content Management System setup for client case studies and news updates.' },
  ];

  const toggleScope = (idx) => {
    setExpandedScope(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <motion.div
      className="proposal-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container-narrow">
        <motion.div
          className="proposal-card"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Header info */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <img
              src="/assets/avatar.png"
              alt="Goran Babarogic"
              style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover' }}
            />
            <div>
              <div style={{ fontSize: '12px', color: '#6b7280' }}>Prepared by</div>
              <div style={{ fontSize: '14px', fontWeight: 600 }}>Goran Babarogic</div>
            </div>
          </div>

          <h1 className="hero-title" style={{ textAlign: 'left', fontSize: '40px', marginBottom: '20px' }}>
            Real Estate Development Website
          </h1>

          <div className="proposal-meta-bar">
            <div>
              <div style={{ fontSize: '12px', color: '#6b7280' }}>Prepared for</div>
              <div style={{ fontSize: '14px', fontWeight: 600 }}>Joe Cole</div>
            </div>
            <div>
              <div style={{ fontSize: '12px', color: '#6b7280' }}>Date</div>
              <div style={{ fontSize: '14px', fontWeight: 600 }}>April 14, 2025</div>
            </div>
            <div>
              <div style={{ fontSize: '12px', color: '#6b7280' }}>Total Project Value</div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#171717' }}>€1,210</div>
            </div>
          </div>

          {/* Overview */}
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '12px' }}>Project Overview</h2>
            <p style={{ fontSize: '15px', color: '#4b5563', lineHeight: '1.7' }}>
              This proposal outlines the scope, deliverables, timeline, and pricing for the development of a website for a real estate development project. The website will be implemented in Framer based on the Figma prototype provided.
            </p>
          </div>

          {/* Scope of Work */}
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '16px' }}>Scope of Work</h2>

            {scopeItems.map((item, idx) => {
              const isOpen = expandedScope[idx];
              return (
                <div key={idx} className="proposal-scope-item">
                  <div className="proposal-scope-header" onClick={() => toggleScope(idx)}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                        style={{ display: 'inline-flex' }}
                      >
                        <ChevronDown size={18} />
                      </motion.div>
                      <span>{item.title}</span>
                    </div>
                    <span>{item.price}</span>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div style={{ padding: '0 20px 16px 46px', fontSize: '14px', color: '#6b7280' }}>
                          {item.desc}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Payment Terms */}
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '16px' }}>Payment Schedule</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px',
              background: '#f8fafc',
              padding: '20px',
              borderRadius: 'var(--radius-md)'
            }}>
              <div>
                <div style={{ fontSize: '12px', color: '#6b7280' }}>50% Upfront Deposit</div>
                <div style={{ fontSize: '20px', fontWeight: 700, marginTop: '4px' }}>€605</div>
              </div>
              <div>
                <div style={{ fontSize: '12px', color: '#6b7280' }}>50% Upon Completion</div>
                <div style={{ fontSize: '20px', fontWeight: 700, marginTop: '4px' }}>€605</div>
              </div>
            </div>
          </div>

          {/* Action CTA */}
          <div style={{ textAlign: 'center', paddingTop: '24px', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
            {accepted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                style={{
                  background: '#dcfce7',
                  color: '#15803d',
                  padding: '16px',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <Check size={20} />
                Proposal Accepted! Thank you Joe.
              </motion.div>
            ) : (
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                <motion.button
                  onClick={() => setAccepted(true)}
                  className="btn-pill-dark"
                  style={{ padding: '14px 32px' }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  Accept Proposal
                </motion.button>
                <motion.button
                  onClick={onOpenContact}
                  className="btn-pill-light"
                  style={{ padding: '14px 32px' }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  Book a Call
                </motion.button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

