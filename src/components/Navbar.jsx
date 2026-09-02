import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ currentRoute, setRoute, onOpenContact }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [activeSection, setActiveSection] = useState('case-studies');

  // Track active section on scroll when on home route
  useEffect(() => {
    if (currentRoute !== 'home') return;

    const sectionIds = ['case-studies', 'experience', 'blog', 'faq'];
    
    const handleScroll = () => {
      const scrollPos = window.scrollY + 280;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentRoute]);

  const handleNavClick = (route, sectionId) => {
    setRoute(route);
    setMobileOpen(false);
    if (route === 'home' && sectionId) {
      setActiveSection(sectionId);
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
    <>
      {/* Perfectly Centered Classy macOS / iOS Dock Navigation Bar */}
      <div className="ios-mac-dock-fixed-outer">
        <motion.div
          className="ios-mac-dock-wrapper"
          initial={{ y: 50, opacity: 0, scale: 0.94 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <nav className="ios-mac-dock-container">
          {/* Logo Dock Item */}
          <motion.a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
            className="dock-item logo-dock-item"
            whileHover={{ scale: 1.22, y: -4 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: 'spring', stiffness: 450, damping: 22 }}
            aria-label="Home"
          >
            <img
              src="/assets/AbhijithLogo.svg"
              alt="Abhijith P K"
              style={{ height: '30px', width: 'auto', display: 'block' }}
            />
          </motion.a>

          {/* Vertical macOS Divider */}
          <div className="dock-divider" />

          {/* Desktop Nav Items with macOS Dock Magnification */}
          <div className="dock-nav-items">
            {navItems.map((item, idx) => {
              // EXACT match: single active section highlighted
              const isActive = currentRoute === 'home'
                ? item.sectionId === activeSection
                : currentRoute === item.route;

              const isHovered = hoveredIdx === idx;

              // macOS dock magnification effect
              let scale = 1;
              if (hoveredIdx !== null) {
                const distance = Math.abs(hoveredIdx - idx);
                if (distance === 0) scale = 1.14;
                else if (distance === 1) scale = 1.05;
              }

              return (
                <motion.button
                  key={item.key}
                  onClick={() => handleNavClick(item.route, item.sectionId)}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className={`dock-tab ${isActive ? 'active' : ''}`}
                  animate={{ scale, y: isHovered ? -3 : 0 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  style={{ position: 'relative' }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="macDockActivePill"
                      className="dock-active-pill"
                      transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                    />
                  )}

                  <span className="dock-tab-label">{item.label}</span>

                  {/* macOS active dot: rendered ONLY for the active item */}
                  {isActive && (
                    <motion.span
                      layoutId="macActiveDot"
                      className="dock-active-dot"
                      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Vertical macOS Divider */}
          <div className="dock-divider desktop-only-divider" />

          {/* macOS Action Button */}
          <motion.button
            onClick={onOpenContact}
            className="dock-cta-btn"
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            <span>Start a Project</span>
            <ArrowUpRight size={15} />
          </motion.button>

          {/* Mobile Menu Toggle inside Dock */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="dock-mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.button>
        </nav>
      </motion.div>
    </div>

      {/* Mobile macOS Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 380, damping: 28 }}
            className="mac-mobile-drawer"
          >
            <div className="mobile-drawer-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="status-dot" />
                <span style={{ fontSize: '13px', fontWeight: 600, color: '#10b981' }}>Available for Hire</span>
              </div>
              <span style={{ fontSize: '11px', color: '#6b7280', fontWeight: 500 }}>Node.js & Full-Stack</span>
            </div>
            <div className="mobile-drawer-divider" />
            {navItems.map((item) => (
              <button
                key={`mobile-${item.key}`}
                onClick={() => handleNavClick(item.route, item.sectionId)}
                className="mac-mobile-drawer-item"
              >
                {item.label}
              </button>
            ))}
            <div className="mobile-drawer-divider" />
            <a
              href="https://wa.me/917594844227"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-nicey-templates"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                textDecoration: 'none',
                marginTop: '4px',
                padding: '10px 14px',
                fontSize: '12px',
                borderRadius: '10px'
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.87 11.87 0 005.708 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp (+91 7594844227)
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
