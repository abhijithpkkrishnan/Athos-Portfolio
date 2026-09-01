import React, { useState } from 'react';
import { X, ArrowRight, Tag, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import TextReveal from './TextReveal';

export default function Blog() {
  const posts = [
    {
      id: 'odoo-erp-integration',
      date: 'Feb 24, 2026',
      readTime: '5 min read',
      tag: 'Backend & ERP',
      title: 'Integrating Odoo 18 ERP with Node.js & Next.js Applications',
      image: '/assets/sleek_blog_odoo_design_1788188197317.jpg',
      content: 'Connecting patient-facing web applications to enterprise ERP platforms demands robust bi-directional data synchronization. Explore how custom REST API bridges automate patient appointment scheduling, digital prescription dispatch, and real-time pharmacy inventory tracking across healthcare environments.'
    },
    {
      id: 'jwt-rbac-security',
      date: 'Feb 10, 2026',
      readTime: '6 min read',
      tag: 'Security & Auth',
      title: 'Implementing Scalable JWT & Role-Based Access Control (RBAC)',
      image: '/assets/blog_jwt_rbac_security_1788187276242.jpg',
      content: 'Security and data privacy in multi-user enterprise applications rely on granular authorization. Discover how JWT access tokens, refresh token strategies, regional role-based access permissions, and automated audit logging protect critical patient records and maintain compliance.'
    },
    {
      id: 'scalable-rest-apis',
      date: 'Jan 28, 2026',
      readTime: '4 min read',
      tag: 'Node.js & PostgreSQL',
      title: 'Building Scalable RESTful APIs with Node.js, Express & PostgreSQL',
      image: '/assets/sleek_blog_api_design_1788188153347.jpg',
      content: 'Architecting high-throughput REST APIs requires modular controller patterns, asynchronous middleware pipelines, and PostgreSQL query optimization. Learn how proper database indexing, connection pooling, and payload validation ensure low-latency response times under high concurrency.'
    }
  ];

  const [activeArticle, setActiveArticle] = useState(null);

  return (
    <section id="blog" className="blog-section">
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '24px' }}>
          <TextReveal as="h2" className="section-title" style={{ justifyContent: 'center' }}>
            Blog & Technical Insights
          </TextReveal>
          <p style={{ color: '#666', fontSize: '15px', marginTop: '8px', textAlign: 'center' }}>
            Engineering articles on Node.js, REST API architecture, ERP bridges, and database security.
          </p>
        </div>

        <div className="blog-grid">
          {posts.map((post, idx) => (
            <motion.div
              key={post.id}
              className="blog-card"
              onClick={() => setActiveArticle(post)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, boxShadow: '0 16px 36px rgba(0,0,0,0.08)' }}
            >
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="blog-card-img"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80';
                  }}
                />
                <span style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  background: 'rgba(255, 255, 255, 0.92)',
                  backdropFilter: 'blur(8px)',
                  padding: '4px 10px',
                  borderRadius: '20px',
                  fontSize: '11px',
                  fontWeight: '600',
                  color: '#111827',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                }}>
                  <Tag size={12} color="#2563eb" /> {post.tag}
                </span>
              </div>
              <div className="blog-card-body">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px', fontSize: '12px', color: '#6b7280' }}>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={12} /> {post.readTime}</span>
                </div>
                <h3 className="blog-card-title">{post.title}</h3>
                <div style={{ marginTop: '14px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: '600', color: '#2563eb' }}>
                  Read Article <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Article Detail Overlay */}
      <AnimatePresence>
        {activeArticle && (
          <motion.div
            className="modal-overlay"
            onClick={() => setActiveArticle(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="modal-card"
              style={{ maxWidth: '680px', padding: '32px' }}
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.92, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.92, y: 20, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            >
              <button className="close-modal-btn" onClick={() => setActiveArticle(null)}>
                <X size={20} />
              </button>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <span style={{
                  background: '#eff6ff',
                  color: '#2563eb',
                  padding: '4px 12px',
                  borderRadius: '16px',
                  fontSize: '12px',
                  fontWeight: '600'
                }}>
                  {activeArticle.tag}
                </span>
                <span style={{ fontSize: '13px', color: '#6b7280' }}>{activeArticle.date}</span>
                <span style={{ fontSize: '13px', color: '#6b7280' }}>• {activeArticle.readTime}</span>
              </div>

              <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#111827', marginBottom: '18px', lineHeight: '1.35' }}>
                {activeArticle.title}
              </h2>

              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                style={{ width: '100%', height: '280px', objectFit: 'cover', borderRadius: '14px', marginBottom: '20px' }}
              />

              <p style={{ fontSize: '15px', color: '#374151', lineHeight: '1.75' }}>
                {activeArticle.content}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}


