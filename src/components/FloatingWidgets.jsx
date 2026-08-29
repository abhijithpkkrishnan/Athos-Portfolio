import React, { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingWidgets({ setRoute }) {
  const [showTemplates, setShowTemplates] = useState(false);
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const mins = String(now.getMinutes()).padStart(2, '0');
      setTimeStr(`${hours}:${mins}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  const templates = [
    { name: 'Anastasis', link: '#' },
    { name: 'Preview', link: '#' },
    { name: 'Prologue', link: '#' },
    { name: 'Athos Dark', link: '#' },
    { name: 'Valaam', link: '#' },
  ];

  return (
    <>
      {/* Bottom Left Badge */}
      <motion.div
        className="floating-bottom-left"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.button
          onClick={() => setRoute('calculator')}
          className="btn-pill-light"
          whileHover={{ scale: 1.06, y: -3 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          style={{
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
            fontSize: '12px',
            padding: '10px 18px',
            borderColor: 'rgba(0,0,0,0.1)'
          }}
        >
          Get Athos Plus
        </motion.button>
      </motion.div>

      {/* Bottom Right Studio Card Widget */}
      <motion.div
        className="floating-bottom-right"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="nicey-studio-card"
          style={{ position: 'relative' }}
          whileHover={{ y: -2, boxShadow: '0 14px 36px rgba(0,0,0,0.12)' }}
          transition={{ duration: 0.2 }}
        >
          {/* Template Popover Dropdown */}
          <AnimatePresence>
            {showTemplates && (
              <motion.div
                className="template-popover"
                initial={{ opacity: 0, scale: 0.9, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 12 }}
                transition={{ type: 'spring', stiffness: 400, damping: 26 }}
              >
                <div style={{ fontSize: '10px', color: '#9ca3af', padding: '4px 8px', fontWeight: 600 }}>
                  OTHER TEMPLATES
                </div>
                {templates.map((t, idx) => (
                  <motion.div
                    key={idx}
                    className="template-popover-item"
                    whileHover={{ x: 3, backgroundColor: '#f3f4f6' }}
                    transition={{ duration: 0.15 }}
                  >
                    <span>{t.name}</span>
                    <ExternalLink size={12} color="#6b7280" />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="nicey-header">
            <span style={{ fontWeight: 600, color: '#10b981', fontSize: '13px' }}>Available for Hire</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span className="status-dot" />
              <span>{timeStr || '15:46'} GMT+5:30</span>
            </div>
          </div>

          <div className="nicey-user">
            <img
              src="/assets/abhi_photo.jpeg"
              alt="Abhijith P K"
              className="nicey-avatar"
            />
            <div>
              <div className="nicey-name">Abhijith P K</div>
              <div className="nicey-role">Full-Stack & Node.js Developer</div>
            </div>
          </div>

          <motion.a
            href="https://wa.me/917594844227"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-nicey-templates"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              textDecoration: 'none'
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.87 11.87 0 005.708 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            +91 7594844227
          </motion.a>
        </motion.div>
      </motion.div>
    </>
  );
}


