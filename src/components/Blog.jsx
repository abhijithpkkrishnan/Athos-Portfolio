import React, { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import TextReveal from './TextReveal';

export default function Blog() {
  const posts = [
    {
      id: 'scalable-rest-apis',
      date: 'Feb 18, 2026',
      title: 'Building Scalable RESTful APIs with Node.js, Express & PostgreSQL',
      image: '/assets/sleek_blog_api_design_1788188153347.jpg',
      content: 'Architecting scalable REST APIs requires modular controller patterns, asynchronous middleware pipelines, and PostgreSQL query optimization. Learn how proper database indexing, connection pooling, and payload validation ensure low-latency response times under high concurrency.'
    },
    {
      id: 'odoo-erp-integration',
      date: 'Jan 24, 2026',
      title: 'Integrating Healthcare Workflows with Odoo 18 ERP & Custom Bridges',
      image: '/assets/sleek_blog_odoo_design_1788188197317.jpg',
      content: 'Connecting patient-facing web applications to enterprise ERP platforms demands robust bi-directional data synchronization. Explore how custom REST API bridges automate patient appointment scheduling, digital prescription dispatch, and real-time pharmacy inventory tracking.'
    },
    {
      id: 'jwt-rbac-security',
      date: 'Dec 15, 2025',
      title: 'Implementing JWT & Role-Based Access Control (RBAC) in Enterprise Portals',
      image: '/assets/case-detail-3.jpg',
      content: 'Security and data privacy in multi-user enterprise applications rely on granular authorization. Discover how JWT access tokens, refresh token strategies, regional role-based access permissions, and automated audit logging protect critical patient records.'
    }
  ];

  const [activeArticle, setActiveArticle] = useState(null);

  return (
    <section id="blog" className="blog-section">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
          <TextReveal as="h2" className="section-title" style={{ justifyContent: 'center' }}>
            Blog
          </TextReveal>
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
              <img
                src={post.image}
                alt={post.title}
                className="blog-card-img"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=600&q=80';
                }}
              />
              <div className="blog-card-body">
                <div className="blog-date">{post.date}</div>
                <h3 className="blog-card-title">{post.title}</h3>
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
              style={{ maxWidth: '640px' }}
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.92, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.92, y: 20, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            >
              <button className="close-modal-btn" onClick={() => setActiveArticle(null)}>
                <X size={20} />
              </button>
              <div className="blog-date" style={{ marginBottom: '8px' }}>{activeArticle.date}</div>
              <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '16px' }}>{activeArticle.title}</h2>
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: '12px', marginBottom: '20px' }}
              />
              <p style={{ fontSize: '15px', color: '#4b5563', lineHeight: '1.7' }}>
                {activeArticle.content}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

