import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import TextReveal from './TextReveal';

export default function FAQ() {
  const faqs = [
    {
      q: 'What is your backend architecture & API development workflow?',
      a: 'I specialize in building scalable RESTful backend microservices and web APIs using Node.js, Express.js, Python, and FastAPI. My workflow covers database schema modeling with Prisma ORM, query optimization in PostgreSQL, implementing secure JWT authentication, and creating custom API bridges for enterprise integrations like Odoo 18 ERP.'
    },
    {
      q: 'What core technologies and development tools do you use for full-stack projects?',
      a: 'For frontend interfaces, I leverage React.js, Next.js, and TypeScript with responsive CSS3 and Bootstrap. On the backend and database layer, I utilize Node.js, Express, Python, PostgreSQL, and Docker. I manage version control through Git/GitHub, validate API endpoints via Postman testing pipelines, and adhere to Agile Scrum methodologies.'
    },
    {
      q: 'How do you handle security, authentication, and performance optimization in production applications?',
      a: 'I enforce secure authorization using JWT-based Role-Based Access Control (RBAC) across multi-user portals, implement automated audit logging to track user activity, and optimize PostgreSQL database queries and indexes to ensure low-latency response times and reliability in production workflows.'
    }
  ];

  const [openIdx, setOpenIdx] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <TextReveal as="h2" className="section-title" style={{ textAlign: 'left', display: 'flex', justifyContent: 'flex-start', marginBottom: '24px' }}>
            Frequently asked questions
          </TextReveal>

          <div className="faq-list">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <motion.div
                  key={idx}
                  className="faq-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                >
                  <button className="faq-header" onClick={() => toggleFaq(idx)}>
                    <span>{faq.q}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ type: 'spring', stiffness: 350, damping: 24 }}
                      style={{ display: 'inline-flex' }}
                    >
                      <ChevronDown size={20} className="faq-icon" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div className="faq-body">
                          <p>{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}



