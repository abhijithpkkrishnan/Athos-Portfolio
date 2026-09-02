import React, { useState } from 'react';
import { ChevronDown, Check, MessageSquare, Mail, Calendar, ArrowRight, Sparkles, Download, Clock, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Proposal({ onOpenContact }) {
  const [accepted, setAccepted] = useState(false);
  const [expandedScope, setExpandedScope] = useState({ 0: true, 1: false, 2: false });
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [signedDate, setSignedDate] = useState('');

  const scopeItems = [
    { title: 'REST API & Node.js Backend Service', price: '₹55,000', desc: 'Scalable Node.js & Express API architecture with PostgreSQL database schema and JWT role-based access control.' },
    { title: 'Responsive React / Next.js Frontend', price: '₹45,000', desc: 'Component-driven, accessible UI built with Framer Motion micro-animations, theme support, and responsive layouts.' },
    { title: 'Odoo ERP & Third-Party Integration Bridge', price: '₹25,000', desc: 'Custom bi-directional API bridges connecting patient-facing web interfaces with Odoo 18 ERP services.' },
  ];

  const toggleScope = (idx) => {
    setExpandedScope(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const handleAccept = () => {
    setAccepted(true);
    setSignedDate(new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' }));
  };

  const whatsappMessage = encodeURIComponent("Hi Abhijith, I've just accepted your Full-Stack Web Application Proposal (₹1,25,000). Let's connect for the kickoff!");
  const whatsappUrl = `https://wa.me/917594844227?text=${whatsappMessage}`;

  const emailSubject = encodeURIComponent("Proposal Accepted: Full-Stack Enterprise Web Application");
  const emailBody = encodeURIComponent("Hi Abhijith,\n\nI have reviewed and accepted the project proposal for the Full-Stack Enterprise Web Application (₹1,25,000).\n\nPlease let me know the next steps for onboarding and repository access.\n\nBest regards.");
  const emailUrl = `mailto:abhijithpkkrishnan@gmail.com?subject=${emailSubject}&body=${emailBody}`;

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
          style={{ position: 'relative', overflow: 'hidden' }}
        >
          {/* Top Status Banner if Accepted */}
          {accepted && (
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              className="proposal-accepted-banner"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={18} />
                <span>Proposal Officially Confirmed & Accepted (#PROP-2026-8942)</span>
              </div>
              <span style={{ fontSize: '12px', opacity: 0.9, fontWeight: 400 }}>{signedDate}</span>
            </motion.div>
          )}

          {/* Header info */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <img
              src="/assets/abhi_photo.jpeg"
              alt="Abhijith P K"
              style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover' }}
            />
            <div>
              <div style={{ fontSize: '12px', color: '#6b7280' }}>Prepared by</div>
              <div style={{ fontSize: '14px', fontWeight: 600 }}>Abhijith P K</div>
            </div>
          </div>

          <h1 className="proposal-hero-title">
            Full-Stack Enterprise Web Application
          </h1>

          <div className="proposal-meta-bar">
            <div>
              <div style={{ fontSize: '12px', color: '#6b7280' }}>Prepared for</div>
              <div style={{ fontSize: '14px', fontWeight: 600 }}>Enterprise Client</div>
            </div>
            <div>
              <div style={{ fontSize: '12px', color: '#6b7280' }}>Date</div>
              <div style={{ fontSize: '14px', fontWeight: 600 }}>September 2, 2026</div>
            </div>
            <div>
              <div style={{ fontSize: '12px', color: '#6b7280' }}>Total Project Value</div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#171717' }}>₹1,25,000</div>
            </div>
          </div>

          {/* Overview */}
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '12px' }}>Project Overview</h2>
            <p style={{ fontSize: '15px', color: '#4b5563', lineHeight: '1.7' }}>
              This proposal outlines the scope, deliverables, timeline, and architectural pricing for building a secure, high-performance web application powered by Node.js, React.js, PostgreSQL, and Odoo ERP integrations.
            </p>
          </div>

          {/* Scope of Work */}
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '16px' }}>Scope of Work</h2>

            {scopeItems.map((item, idx) => {
              const isOpen = expandedScope[idx];
              return (
                <div key={idx} className="proposal-scope-item">
                  <div className="proposal-scope-header" onClick={() => toggleScope(idx)}>
                    <div className="proposal-scope-title-group">
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                        style={{ display: 'inline-flex', flexShrink: 0 }}
                      >
                        <ChevronDown size={18} />
                      </motion.div>
                      <span className="proposal-scope-title">{item.title}</span>
                    </div>
                    <span className="proposal-scope-price">{item.price}</span>
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
                        <div className="proposal-scope-desc">
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
            <h2 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '16px' }}>Payment Schedule</h2>
            <div className="proposal-payment-grid">
              <div className="proposal-payment-card">
                <div style={{ fontSize: '12px', color: '#6b7280', fontWeight: 500 }}>50% Upfront Deposit</div>
                <div style={{ fontSize: '20px', fontWeight: 700, marginTop: '4px', color: '#171717' }}>₹62,500</div>
              </div>
              <div className="proposal-payment-card">
                <div style={{ fontSize: '12px', color: '#6b7280', fontWeight: 500 }}>50% Upon Completion</div>
                <div style={{ fontSize: '20px', fontWeight: 700, marginTop: '4px', color: '#171717' }}>₹62,500</div>
              </div>
            </div>
          </div>

          {/* Action CTA & Interactive Post-Acceptance Experience */}
          <div style={{ paddingTop: '28px', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
            <AnimatePresence mode="wait">
              {accepted ? (
                <motion.div
                  key="accepted-view"
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  className="proposal-accepted-card"
                >
                  {/* Confetti & Success Badge */}
                  <div className="proposal-accepted-header">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 20, delay: 0.1 }}
                      className="proposal-accepted-badge"
                    >
                      <Check size={36} strokeWidth={3} />
                    </motion.div>
                    <h3 className="proposal-accepted-title">
                      Proposal Accepted! 🎉
                    </h3>
                    <p className="proposal-accepted-subtext">
                      Thank you! Abhijith P K has been notified. Choose your preferred instant notification channel below to begin onboarding.
                    </p>
                  </div>

                  {/* Creative Action Deck */}
                  <div className="proposal-accepted-actions-grid">
                    {/* Instant WhatsApp Ping */}
                    <motion.a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="kickoff-action-card whatsapp-card"
                      whileHover={{ scale: 1.015, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="action-card-icon-box">
                        <MessageSquare size={20} />
                      </div>
                      <div className="action-card-body">
                        <div className="action-card-title">Ping on WhatsApp</div>
                        <div className="action-card-subtext">Instant notification to +91-7594844227</div>
                      </div>
                      <div className="action-card-arrow">
                        <ArrowRight size={18} />
                      </div>
                    </motion.a>

                    {/* Email Confirmation */}
                    <motion.a
                      href={emailUrl}
                      className="kickoff-action-card email-card"
                      whileHover={{ scale: 1.015, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="action-card-icon-box">
                        <Mail size={20} />
                      </div>
                      <div className="action-card-body">
                        <div className="action-card-title">Send Signed Email</div>
                        <div className="action-card-subtext">Pre-filled email with scope & value</div>
                      </div>
                      <div className="action-card-arrow">
                        <ArrowRight size={18} />
                      </div>
                    </motion.a>

                    {/* Book Kickoff Meeting */}
                    <motion.button
                      onClick={onOpenContact}
                      className="kickoff-action-card schedule-card"
                      whileHover={{ scale: 1.015, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="action-card-icon-box">
                        <Calendar size={20} />
                      </div>
                      <div className="action-card-body">
                        <div className="action-card-title">Schedule Kickoff</div>
                        <div className="action-card-subtext">Pick a 15-min discovery call slot</div>
                      </div>
                      <div className="action-card-arrow">
                        <ArrowRight size={18} />
                      </div>
                    </motion.button>
                  </div>

                  {/* Project Roadmap Timeline */}
                  <div className="proposal-accepted-steps">
                    <div className="steps-header">
                      <Clock size={16} color="#0284c7" />
                      <span>Next Onboarding Steps:</span>
                    </div>

                    <div className="proposal-steps-grid">
                      <div className="step-item step-completed">
                        <div className="step-badge">
                          <Check size={15} strokeWidth={3} />
                        </div>
                        <div className="step-info">
                          <strong className="step-title">Proposal Locked</strong>
                          <span className="step-desc">Scope & timeline finalized</span>
                        </div>
                      </div>
                      <div className="step-item step-active">
                        <div className="step-badge">
                          <span className="step-active-dot" />
                        </div>
                        <div className="step-info">
                          <strong className="step-title">Repo & SLA Setup</strong>
                          <span className="step-desc">Within 2 hours</span>
                        </div>
                      </div>
                      <div className="step-item step-upcoming">
                        <div className="step-badge">
                          <span className="step-upcoming-dot" />
                        </div>
                        <div className="step-info">
                          <strong className="step-title">Kickoff Call</strong>
                          <span className="step-desc">Sprint 1 kickoff</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="proposal-actions-row">
                  <motion.button
                    onClick={handleAccept}
                    className="btn-pill-dark proposal-accept-btn"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  >
                    <Sparkles size={18} style={{ color: '#facc15' }} />
                    <span>Accept Proposal</span>
                  </motion.button>
                  <motion.button
                    onClick={onOpenContact}
                    className="btn-pill-light proposal-contact-btn"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  >
                    <span>Book a Call</span>
                  </motion.button>
                </div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
