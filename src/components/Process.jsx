import React from 'react';
import { motion } from 'framer-motion';
import TextReveal from './TextReveal';

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Architect & Plan',
      desc: 'Analyze system requirements, define RESTful API contracts, and design optimized PostgreSQL database schemas. Map business logic and ERP integrations (Odoo) to lay a solid foundation.'
    },
    {
      num: '02',
      title: 'Build & Integrate',
      desc: 'Develop scalable Node.js, Express, and Python backend services alongside responsive Next.js/React interfaces with Prisma ORM, JWT authentication, and regional RBAC.'
    },
    {
      num: '03',
      title: 'Test & Optimize',
      desc: 'Validate API endpoints using Postman pipelines, optimize database queries, and debug real-time data sync workflows to achieve low-latency response times and high availability.'
    },
    {
      num: '04',
      title: 'API Lifecycle & Maintenance',
      desc: 'Maintain versioned REST APIs, optimize endpoint concurrency, troubleshoot production tracebacks, and automate continuous API release pipelines.'
    }
  ];

  return (
    <section className="process-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <TextReveal as="h2" className="section-title" style={{ justifyContent: 'flex-start', display: 'flex' }}>
            Development Process
          </TextReveal>
          <p className="section-subtitle">
            From initial system architecture and schema design to high-throughput API integration and automated deployment, my software engineering framework ensures scalable, secure, and production-ready applications.
          </p>
        </motion.div>

        <div className="process-grid">
          {steps.map((s, idx) => (
            <motion.div
              key={idx}
              className="process-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover="hover"
              initial="initial"
            >
              <h3 className="process-card-title">{s.title}</h3>
              <p className="process-card-desc">{s.desc}</p>
              <motion.div
                className="process-num"
                variants={{
                  initial: { scale: 1, opacity: 0.07 },
                  hover: { scale: 1.1, opacity: 0.14, x: 2, y: -2 }
                }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              >
                {s.num}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



