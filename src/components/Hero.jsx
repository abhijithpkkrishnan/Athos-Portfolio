import React from 'react';
import { Sparkles, Download, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import TextReveal from './TextReveal';
import MagneticButton from './MagneticButton';

export default function Hero({ onOpenContact, setRoute }) {
  const brands = [
    { name: 'Framer', color: '#0055FF' },
    { name: 'Figma', color: '#F24E1E' },
    { name: 'VWO', color: '#6A26DA' },
    { name: 'Fathom', color: '#171717' },
    { name: 'Notion', color: '#000000' },
    { name: 'Lovable', color: '#FF4F00' },
    { name: 'Relume', color: '#171717' },
    { name: 'Webflow', color: '#4353FF' },
  ];

  return (
    <section className="hero-section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Avatar & Pro Expert Badge */}
        <motion.div
          className="avatar-badge-wrapper"
          initial={{ scale: 0.82, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
          <img
            src="/assets/abhi_photo.jpeg"
            alt="Abhijith P K"
            className="hero-avatar"
          />
          <motion.div
            className="pro-expert-tag"
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              style={{ display: 'inline-flex' }}
            >
              <Sparkles size={13} fill="#000" color="#000" />
            </motion.div>
            <span>Software Engineer</span>
          </motion.div>
        </motion.div>

        {/* Hero Title line mask reveal */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
          <TextReveal
            as="h1"
            className="hero-title"
            style={{ justifyContent: 'center' }}
            delay={0.12}
            stagger={0.06}
          >
            Full-Stack & Node.js Engineer
          </TextReveal>
        </div>

        {/* Hero Subtitle */}
        <motion.p
          className="hero-subtitle"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
        >
          Building scalable web applications, REST APIs, and backend architectures
        </motion.p>

        {/* Hero Magnetic Buttons */}
        <motion.div
          className="hero-cta-group"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="/Abhijith_Nodejs.pdf"
            download="Abhijith_Nodejs.pdf"
            style={{ textDecoration: 'none' }}
          >
            <MagneticButton
              className="btn-pill-dark"
              strength={0.28}
            >
              <Download size={16} />
              Download Resume
            </MagneticButton>
          </a>
          <a
            href="https://www.linkedin.com/in/abhijith-pk-ba0848213/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <MagneticButton
              className="btn-pill-light"
              strength={0.28}
            >
              LinkedIn
              <ArrowUpRight size={16} />
            </MagneticButton>
          </a>
        </motion.div>

        {/* Marquee Continuous Tech Skills Ticker */}
        <motion.div
          className="marquee-wrapper"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.48 }}
        >
          <div className="marquee-track">
            {(() => {
              const skillList = [
                {
                  name: 'Node.js',
                  icon: (
                    <svg width="18" height="20" viewBox="0 0 24 24" fill="#339933">
                      <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm0 2.31l7.5 4.12v8.14L12 20.69l-7.5-4.12V8.43L12 4.31z"/>
                    </svg>
                  )
                },
                {
                  name: 'TypeScript',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="4" fill="#3178C6"/>
                      <path d="M11.5 15.5h-2v-6H7v-1.5h7v1.5h-2.5v6zm3.5 0c-.8 0-1.5-.2-2-.6v-1.6c.6.5 1.3.7 2 .7.6 0 .9-.2.9-.5 0-.9-3-.4-3-2.3 0-1.3 1-2.2 2.7-2.2.7 0 1.5.2 2 .5v1.6c-.6-.4-1.3-.6-1.9-.6-.5 0-.8.2-.8.5 0 .8 3 .4 3 2.3 0 1.4-1.1 2.2-2.9 2.2z" fill="#fff"/>
                    </svg>
                  )
                },
                {
                  name: 'React.js',
                  icon: (
                    <svg width="20" height="18" viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="2">
                      <ellipse cx="12" cy="12" rx="10" ry="4"/>
                      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/>
                      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>
                      <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
                    </svg>
                  )
                },
                {
                  name: 'PostgreSQL',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#4169E1">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                    </svg>
                  )
                },
                {
                  name: 'Python',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#3776AB">
                      <path d="M11.88 2c-3.4 0-3.18 1.47-3.18 1.47l.03 1.52h3.24v.46H7.4s-2.14.24-2.14 3.1c0 2.85 1.86 2.75 1.86 2.75h1.11v-1.57s-.06-1.87 1.84-1.87h3.14s1.75.03 1.75-1.7V4.74S15.4 2 11.88 2zm-1.8 1.15c.37 0 .66.3.66.67 0 .37-.3.67-.67.67-.37 0-.67-.3-.67-.67 0-.37.3-.67.67-.67zm2.04 18.85c3.4 0 3.18-1.47 3.18-1.47l-.03-1.52h-3.24v-.46h4.57s2.14-.24 2.14-3.1c0-2.85-1.86-2.75-1.86-2.75h-1.11v1.57s.06 1.87-1.84 1.87h-3.14s-1.75-.03-1.75 1.7v1.44s-.44 2.74 3.08 2.74zm1.8-1.15c-.37 0-.66-.3-.66-.67 0-.37.3-.67.67-.67.37 0 .67.3.67.67 0 .37-.3.67-.67.67z"/>
                    </svg>
                  )
                },
                {
                  name: 'Docker',
                  icon: (
                    <svg width="20" height="16" viewBox="0 0 24 24" fill="#2496ED">
                      <path d="M13 8.5h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2H7zm6-3h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2H7zm6-3h2v2h-2zm-9 9h2v2H4zm18.3 1.8c-.4-.3-1.3-.4-2-.2-.5-1.3-1.8-2.1-3.2-2.1H1v4c0 3.3 2.7 6 6 6h7c4.4 0 8-3.6 8-8 0-.6-.1-1.2-.3-1.7z"/>
                    </svg>
                  )
                },
                {
                  name: 'FastAPI',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#009688">
                      <path d="M12 2L2 12h9l-1 10 10-10h-9l1-10z"/>
                    </svg>
                  )
                },
                {
                  name: 'REST APIs',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#6A26DA">
                      <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
                    </svg>
                  )
                },
                {
                  name: 'Postman',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#FF6C37">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M8 12l3 3 5-5" stroke="#fff" strokeWidth="2" fill="none"/>
                    </svg>
                  )
                },
                {
                  name: 'Git & GitHub',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#181717">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                  )
                }
              ];
              return [...skillList, ...skillList, ...skillList].map((skill, idx) => (
                <motion.div
                  key={idx}
                  className="marquee-item"
                  whileHover={{ scale: 1.08, y: -2 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 16px',
                    borderRadius: '24px',
                    backgroundColor: 'rgba(255, 255, 255, 0.75)',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
                  }}
                >
                  {skill.icon}
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#171717', letterSpacing: '-0.01em' }}>
                    {skill.name}
                  </span>
                </motion.div>
              ));
            })()}
          </div>
        </motion.div>
      </div>
    </section>
  );
}



