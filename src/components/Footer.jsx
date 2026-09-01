import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Footer({ onOpenContact }) {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-cta">
          <h2 className="footer-title">Let's Build Something Great</h2>
          <p style={{ fontSize: '16px', color: '#6b7280', marginBottom: '32px' }}>
            Looking to engineer scalable full-stack web applications, REST APIs, or ERP integrations? Let's connect.
          </p>
          <button onClick={onOpenContact} className="btn-pill-dark" style={{ padding: '14px 32px' }}>
            Get in Touch
            <ArrowUpRight size={16} />
          </button>
        </div>

        <div className="footer-bottom">
          <div>Abhijith P K © {new Date().getFullYear()}. Full Stack Software Developer.</div>
          <div className="social-links">
            <a href="https://github.com/abhijithpkkrishnan" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/abhijith-pk-ba0848213/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:abhijithpkkrishnan@gmail.com">Mail</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

