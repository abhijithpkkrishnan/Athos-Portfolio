import React, { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import TextReveal from './TextReveal';

export default function Blog() {
  const posts = [
    {
      id: 'user-testing',
      date: 'Sep 5, 2023',
      title: 'The Importance of User Testing in Product Development',
      image: '/assets/blog-hero-1.png',
      content: 'User testing is the foundation of user-centered design. By testing your product with real users early and often, you uncover hidden usability issues, validate hypotheses, and build features that solve actual user pain points.'
    },
    {
      id: 'uxui-trends-2023',
      date: 'Sep 4, 2023',
      title: 'UX/UI Trends to Watch for in 2023',
      image: '/assets/case-detail-3.jpg',
      content: 'From glassmorphism and subtle micro-interactions to hyper-personalized AI workflows and accessible color palettes, modern digital products demand clean aesthetics and intuitive performance.'
    },
    {
      id: 'accessible-websites',
      date: 'Sep 3, 2023',
      title: 'Creating Accessible Websites: A Guide for Designers',
      image: '/assets/case-detail-4.jpg',
      content: 'Accessibility is not an afterthought—it is essential. Learn how semantic HTML structure, proper ARIA attributes, keyboard navigation, and contrast ratios empower all users.'
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

