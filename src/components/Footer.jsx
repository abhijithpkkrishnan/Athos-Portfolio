import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Footer({ onOpenContact }) {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-cta">
          <h2 className="footer-title">Let's work together</h2>
          <p style={{ fontSize: '16px', color: '#6b7280', marginBottom: '32px' }}>
            Have a project in mind? Book a discovery call or reach out directly.
          </p>
          <button onClick={onOpenContact} className="btn-pill-dark" style={{ padding: '14px 32px' }}>
            Book a discovery call
            <ArrowUpRight size={16} />
          </button>
        </div>

        <div className="footer-bottom">
          <div>Nicey © 2025. Designed by Goran Babarogic</div>
          <div className="social-links">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
            <a href="mailto:hello@nicey.studio">Mail</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
