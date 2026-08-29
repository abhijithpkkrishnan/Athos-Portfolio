import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from './MagneticButton';

export default function Navbar({ currentRoute, setRoute, onOpenContact }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (route, sectionId) => {
    setRoute(route);
    setMobileOpen(false);
    if (route === 'home' && sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'Case Studies', route: 'home', sectionId: 'case-studies', key: 'case-studies' },
    { label: 'Experience', route: 'home', sectionId: 'experience', key: 'experience' },
    { label: 'Blog', route: 'home', sectionId: 'blog', key: 'blog' },
    { label: 'FAQ', route: 'home', sectionId: 'faq', key: 'faq' },
    { label: 'Proposal', route: 'proposal', sectionId: null, key: 'proposal' },
    { label: 'Calculator', route: 'calculator', sectionId: null, key: 'calculator' },
  ];

  return (
    <motion.header
      className="header-sticky"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container">
        <div className="nav-content">
          <motion.a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
            className="logo-link"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            {/* Athos Blue Logo Mark matching Image 2 */}
            <svg width="24" height="28" viewBox="0 0 24 28" fill="none">
              <path d="M7 3C7 3 2 9 2 15C2 21 7 25 7 25" stroke="#1d4ed8" strokeWidth="5.5" strokeLinecap="round"/>
              <path d="M20 3C20 3 22 8 22 14C22 20 16 25 16 25" stroke="#1d4ed8" strokeWidth="5.5" strokeLinecap="round"/>
            </svg>
          </motion.a>

          <nav className="nav-links" style={{ position: 'relative' }}>
            {navItems.map((item) => {
              const isActive = (item.route === currentRoute && (!item.sectionId || currentRoute === 'home'));
              return (
                <motion.button
                  key={item.key}
                  whileHover={{ y: -1, scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => handleNavClick(item.route, item.sectionId)}
                  className={`nav-item ${isActive ? 'active' : ''}`}
                  style={{ position: 'relative', padding: '6px 12px', borderRadius: 'var(--radius-full)' }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navTabBg"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.05)',
                        borderRadius: 'var(--radius-full)',
                        zIndex: -1
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </motion.button>
              );
            })}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <MagneticButton
              onClick={onOpenContact}
              className="btn-pill-light"
              strength={0.25}
              style={{ background: '#ffffff', border: '1px solid rgba(0, 0, 0, 0.12)', boxShadow: '0 2px 6px rgba(0,0,0,0.03)' }}
            >
              Start a Project
            </MagneticButton>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              className="mobile-menu-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle Menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{
              overflow: 'hidden',
              background: '#ffffff',
              padding: '20px 24px',
              borderBottom: '1px solid rgba(0,0,0,0.08)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}
          >
            {navItems.map((item) => (
              <button
                key={`mobile-${item.key}`}
                onClick={() => handleNavClick(item.route, item.sectionId)}
                className="nav-item"
                style={{ textAlign: 'left', fontSize: '16px', padding: '8px 0' }}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}



