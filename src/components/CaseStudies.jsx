import React, { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

function StickyCaseCard({ item, index, total, handleOpenCase }) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start']
  });

  // Card scales slightly down as subsequent cards stack over top of it
  const scale = useTransform(scrollYProgress, [0.6, 1], [1, 0.95 - (total - index) * 0.01]);
  const topOffset = 110 + index * 24;

  return (
    <div
      ref={containerRef}
      className="case-card-sticky-wrapper"
      style={{
        position: 'sticky',
        top: `${topOffset}px`,
        marginBottom: index === total - 1 ? '60px' : '40px',
        zIndex: index + 1,
      }}
    >
      <motion.div
        className={`case-card ${item.colorClass}`}
        style={{
          scale,
          transformOrigin: 'top center',
        }}
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.75, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{
          y: -6,
          boxShadow: '0 24px 48px rgba(0,0,0,0.12)',
        }}
      >
        <div>
          <h2 className="case-card-title">{item.title}</h2>
          <p className="case-card-desc">{item.description}</p>

          {!item.comingSoon && (
            <div className="case-metrics-grid">
              {item.metrics.map((m, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.15 + idx * 0.1, type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div className="metric-label">{m.label}</div>
                  <div className="metric-value">{m.value}</div>
                </motion.div>
              ))}
            </div>
          )}

          {item.comingSoon ? (
            <span style={{
              display: 'inline-block',
              background: 'rgba(0,0,0,0.06)',
              padding: '8px 16px',
              borderRadius: 'var(--radius-full)',
              fontSize: '13px',
              fontWeight: 600,
              color: '#666'
            }}>
              Coming Soon
            </span>
          ) : !item.hideButton ? (
            <motion.button
              onClick={() => handleOpenCase(item)}
              className="btn-pill-dark"
              whileHover="hover"
              whileTap={{ scale: 0.96 }}
              initial="initial"
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              View Project
              <motion.span
                style={{ display: 'inline-flex' }}
                variants={{
                  initial: { x: 0, y: 0 },
                  hover: { x: 4, y: -4 }
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <ArrowUpRight size={16} />
              </motion.span>
            </motion.button>
          ) : null}
        </div>

        <motion.div
          className="case-card-image-wrapper"
          onClick={() => handleOpenCase(item)}
          style={{ cursor: item.comingSoon ? 'default' : 'pointer' }}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={item.image}
            alt={item.title}
            className="case-card-image"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80';
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function CaseStudies({ setSelectedCase, setRoute }) {
  const cases = [
    {
      id: 'healthcare-clinical-system',
      title: 'Healthcare & Clinical Operations System',
      description: 'Developed scalable healthcare management modules, RESTful API integrations, and PostgreSQL database workflows at Ahalia International Foundation using Python, Node.js, and Odoo.',
      colorClass: 'card-mint',
      image: '/assets/real_emr_history_mockup_1788186077379.jpg',
      metrics: [
        { label: 'API Response Time', value: '<120ms' },
        { label: 'Module Efficiency', value: '+35%' },
      ],
      comingSoon: false,
      hideButton: true,
    },
    {
      id: 'ecommerce-website-redesign',
      title: 'Full-Stack Hospital Billing & Health Portal',
      description: 'Engineered a secure hospital billing & healthcare portal at Ahalia International Foundation using Node.js, Express, PostgreSQL, and JWT RBAC with digital prescription management and automated audit logging.',
      colorClass: 'card-sand',
      image: '/assets/real_hospital_billing_mockup_1788186105839.jpg',
      metrics: [
        { label: 'Role Security', value: 'JWT RBAC' },
        { label: 'Audit Logging', value: 'Automated' },
      ],
      comingSoon: false,
    },
    {
      id: 'streamlining-ecommerce-navigation',
      title: 'Full-Stack Healthcare & AI Assistant Portal',
      description: 'Built a full-stack healthcare portal using Next.js, Node.js, TypeScript, Python, and Prisma with Odoo 18 ERP API bridges for automated prescriptions, lab delivery, and real-time pharmacy tracking.',
      colorClass: 'card-blue',
      image: '/assets/real_ai_healthcare_portal_mockup_1788186137331.jpg',
      metrics: [
        { label: 'ERP Data Sync', value: 'Real-Time' },
        { label: 'Automated Modules', value: '6 Workflows' },
      ],
      comingSoon: false,
    },
    {
      id: 'enhancing-mobile-banking-app-usability',
      title: 'Full-Stack Clinical History Portal',
      description: 'Built a responsive multi-center clinical history portal with React.js, Node.js, PostgreSQL, and Odoo ERP integration, featuring regional RBAC, real-time diagnostic alerts, and interactive visit timelines.',
      colorClass: 'card-purple',
      image: '/assets/real_clinical_history_mockup_1788186169156.jpg',
      metrics: [
        { label: 'Diagnostic Alerts', value: 'Real-Time' },
        { label: 'Record Sync', value: 'Multi-Center' },
      ],
      comingSoon: false,
    },
  ];

  const handleOpenCase = (c) => {
    if (c.comingSoon) return;
    setSelectedCase(c.id);
    setRoute('case-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="case-studies" className="work-section">
      <div className="container" style={{ position: 'relative' }}>
        {cases.map((item, index) => (
          <StickyCaseCard
            key={item.id}
            item={item}
            index={index}
            total={cases.length}
            handleOpenCase={handleOpenCase}
          />
        ))}

        <motion.div
          className="view-all-cases-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.button
            onClick={() => { setRoute('cases'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="btn-pill-light"
            whileHover="hover"
            whileTap={{ scale: 0.96 }}
            initial="initial"
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            View All Projects
            <motion.span
              style={{ display: 'inline-flex' }}
              variants={{
                initial: { x: 0, y: 0 },
                hover: { x: 4, y: -4 }
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <ArrowUpRight size={16} />
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}



