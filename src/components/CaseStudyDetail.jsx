import React from 'react';
import { ArrowLeft, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CaseStudyDetail({ caseId, setRoute, onOpenContact }) {
  const caseDataMap = {
    'travel-booking-app': {
      title: 'Travel Booking App',
      heroImage: '/assets/case-detail-1.jpg',
      company: 'Shopify',
      industry: 'E-commerce',
      revenue: '$1.578 billion (2019)',
      size: '5,000+',
      headquarters: 'Ottawa, Ontario, Canada',
      founded: '2006',
      stats: [
        { label: 'Increase in user adoption', value: '35%' },
        { label: 'Increase in user retention', value: '25%' },
        { label: 'Increase in time spent on website', value: '84%' },
      ],
      challenge: 'The app had a cluttered interface, making it difficult for users to navigate and find essential features. Users were facing issues with the onboarding process, which was affecting new user adoption rates. The app lacked personalization and customization options, making it less engaging and user-friendly.',
      results: 'The redesigned app features a clean, clutter-free interface, making it easier for users to navigate and access essential features. The improved onboarding process resulted in a 35% increase in new user adoption rates.',
      quote: 'With our new visual branding and language in place, the new brand clearly captures the essence of our current and target customer base, our employees, and our values.',
      quoteAuthor: 'Tobias Lütke',
      quoteRole: 'CEO, Co-founder | Shopify',
      process: [
        { step: '01', title: 'Research & Analysis', desc: 'We conducted user interviews, surveys, and analyzed in-app analytics to understand the pain points and user needs. We also studied competitor apps and industry trends to gather insights.' },
        { step: '02', title: 'Information Architecture', desc: 'Based on the research findings, we restructured the app navigation and content, prioritizing features and information according to user needs.' },
        { step: '03', title: 'Wireframing & Prototyping', desc: 'We designed low-fidelity wireframes to visualize the new layout and navigation, iteratively refining them based on user feedback. Afterward, we built a high-fidelity interactive prototype.' },
        { step: '04', title: 'Usability Testing', desc: 'We conducted usability tests with a diverse group of users to validate the design and identify areas for improvement. Based on feedback, we made necessary adjustments.' },
        { step: '05', title: 'Visual Design & Style Guide', desc: 'We developed a cohesive visual language, including color schemes, typography, and iconography, ensuring consistency throughout the app.' },
      ]
    },
    'ecommerce-website-redesign': {
      title: 'Full-Stack Hospital Billing & Health Portal',
      heroImage: '/assets/case-detail-2.jpg',
      company: 'Ahalia International Foundation',
      industry: 'Hospital Billing & Healthcare',
      revenue: 'Enterprise',
      size: '500+ Staff',
      headquarters: 'Kerala, India',
      founded: '2024',
      stats: [
        { label: 'Role-Based Access Control', value: 'JWT RBAC' },
        { label: 'Audit Trail Tracking', value: '100% Automated' },
        { label: 'Billing Operations Efficiency', value: '+40%' },
      ],
      challenge: 'Managing healthcare billing workflows and digital prescriptions across Admin, General Practitioner (GP), and Patient user roles required strict access security, audit compliance, and seamless financial operations.',
      results: 'Engineered a full-stack hospital billing portal using Node.js, Express.js, and PostgreSQL with JWT-based role authorization, digital prescription handling, and automated activity audit logging.',
      quote: 'Implementing JWT-based RBAC and automated audit logs provided our healthcare network with complete security accountability and operational transparency.',
      quoteAuthor: 'Abhijith P K',
      quoteRole: 'Software Developer',
      process: [
        { step: '01', title: 'Security & Role Architecture', desc: 'Designed JWT-based role-based access control (RBAC) separating Admin, General Practitioner, and Patient authorization scopes.' },
        { step: '02', title: 'Hospital Billing & Prescription Modules', desc: 'Developed digital prescription management and automated billing workflows backed by PostgreSQL schemas.' },
        { step: '03', title: 'Automated Audit Logging System', desc: 'Built comprehensive activity logging triggers to track critical patient and financial transactions across the platform.' },
        { step: '04', title: 'REST API Optimization & Testing', desc: 'Optimized PostgreSQL queries and validated backend REST APIs using Postman to ensure fast, secure transactions.' }
      ]
    },
    'streamlining-ecommerce-navigation': {
      title: 'Full-Stack Healthcare & AI Assistant Portal',
      heroImage: '/assets/case-streaming.jpg',
      company: 'Ahalia International Foundation',
      industry: 'Healthcare & AI Solutions',
      revenue: 'Enterprise',
      size: '500+ Staff',
      headquarters: 'Kerala, India',
      founded: '2024',
      stats: [
        { label: 'ERP Synchronization', value: 'Real-Time' },
        { label: 'Core Workflows Automated', value: '6 Modules' },
        { label: 'System Integration Reliability', value: '99.9%' },
      ],
      challenge: 'Patient-facing healthcare workflows required seamless, real-time synchronization with enterprise Odoo 18 ERP services for appointments, digital prescriptions, lab results, billing, and pharmacy inventory without data latency or manual entry.',
      results: 'Engineered a full-stack Next.js and Python healthcare portal connected to Odoo 18 ERP via custom API bridges and Prisma ORM, enabling automated digital workflows and AI-assisted clinical services.',
      quote: 'The automated API bridges between Next.js and Odoo 18 drastically streamlined patient appointment booking and real-time pharmacy inventory tracking.',
      quoteAuthor: 'Abhijith P K',
      quoteRole: 'Software Developer',
      process: [
        { step: '01', title: 'ERP Schema & API Bridge Architecture', desc: 'Designed custom API integration bridges connecting Next.js patient-facing workflows with Odoo 18 ERP services.' },
        { step: '02', title: 'Full-Stack & Database Implementation', desc: 'Developed reusable UI components in Next.js/TypeScript and scalable Node.js/Python backend services with Prisma ORM.' },
        { step: '03', title: 'Real-Time Data Synchronization', desc: 'Synchronized patient health records, appointment bookings, digital prescriptions, lab results, and pharmacy inventory.' },
        { step: '04', title: 'API Testing & Operational Verification', desc: 'Executed Postman API testing pipelines and optimized PostgreSQL queries to ensure low latency and high availability.' }
      ]
    },
    'enhancing-mobile-banking-app-usability': {
      title: 'Full-Stack Clinical History Portal',
      heroImage: '/assets/case-banking.jpg',
      company: 'Ahalia International Foundation',
      industry: 'Clinical & Healthcare Systems',
      revenue: 'Enterprise',
      size: '500+ Staff',
      headquarters: 'Kerala, India',
      founded: '2024',
      stats: [
        { label: 'Multi-Center Record Sync', value: '100% Consolidated' },
        { label: 'Diagnostic Alerts', value: 'Real-Time' },
        { label: 'Role Security (RBAC)', value: 'Regional' },
      ],
      challenge: 'Managing patient histories across multi-center healthcare facilities required location-specific access control, dynamic visit timelines, and instant alerts for vital and ophthalmic diagnostics without losing temporal continuity.',
      results: 'Built a responsive React.js and Node.js portal integrated with PostgreSQL and Odoo ERP, delivering regional RBAC, interactive patient timelines, and real-time clinical diagnostic alerts.',
      quote: 'Consolidating multi-center patient histories into dynamic temporal timelines significantly improved diagnostic speed and patient care continuity.',
      quoteAuthor: 'Abhijith P K',
      quoteRole: 'Software Developer',
      process: [
        { step: '01', title: 'Multi-Center Odoo ERP Integration', desc: 'Integrated backend Node.js services with Odoo ERP to aggregate patient history data across multiple regional centers.' },
        { step: '02', title: 'Regional RBAC & Security Rules', desc: 'Implemented granular location-based access control to enforce secure regional data privacy and clinical authorization.' },
        { step: '03', title: 'Diagnostic Alert Engine', desc: 'Developed real-time alert triggers surfacing critical vital and ophthalmic diagnostic updates directly during practitioner visits.' },
        { step: '04', title: 'Interactive Timeline UI', desc: 'Designed responsive React visit timelines with temporal log sync for seamless patient record exploration.' }
      ]
    }
  };

  const currentCase = caseDataMap[caseId] || caseDataMap['travel-booking-app'];

  return (
    <motion.div
      className="case-detail-page"
      style={{ paddingTop: '120px', paddingBottom: '80px' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container-narrow">
        <motion.button
          onClick={() => { setRoute('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="btn-pill-light"
          style={{ marginBottom: '32px', padding: '8px 16px', fontSize: '13px' }}
          whileHover={{ scale: 1.05, x: -3 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          <ArrowLeft size={16} />
          Back to Home
        </motion.button>

        <h1 className="hero-title" style={{ textAlign: 'left', fontSize: '48px', marginBottom: '24px' }}>
          {currentCase.title}
        </h1>

        {/* Hero Image */}
        <motion.div
          style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', height: '400px', marginBottom: '48px' }}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <img
            src={currentCase.heroImage}
            alt={currentCase.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80';
            }}
          />
        </motion.div>

        {/* Company Meta Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px',
          padding: '24px 0',
          borderTop: '1px solid rgba(0,0,0,0.08)',
          borderBottom: '1px solid rgba(0,0,0,0.08)',
          marginBottom: '48px'
        }}>
          <div>
            <div style={{ fontSize: '12px', color: '#6b7280' }}>Headquarters</div>
            <div style={{ fontSize: '14px', fontWeight: 600 }}>{currentCase.headquarters}</div>
          </div>
          <div>
            <div style={{ fontSize: '12px', color: '#6b7280' }}>Industry</div>
            <div style={{ fontSize: '14px', fontWeight: 600 }}>{currentCase.industry}</div>
          </div>
          <div>
            <div style={{ fontSize: '12px', color: '#6b7280' }}>Revenue</div>
            <div style={{ fontSize: '14px', fontWeight: 600 }}>{currentCase.revenue}</div>
          </div>
          <div>
            <div style={{ fontSize: '12px', color: '#6b7280' }}>Company Size</div>
            <div style={{ fontSize: '14px', fontWeight: 600 }}>{currentCase.size}</div>
          </div>
        </div>

        {/* Stats Grid */}
        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
            background: 'var(--mint-bg)',
            borderRadius: 'var(--radius-lg)',
            padding: '32px',
            marginBottom: '48px'
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {currentCase.stats.map((s, idx) => (
            <div key={idx} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '40px', fontWeight: 700 }}>{s.value}</div>
              <div style={{ fontSize: '13px', color: '#4b5563', marginTop: '4px' }}>{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Challenge Section */}
        <motion.div
          style={{ marginBottom: '48px' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title" style={{ textAlign: 'left', fontSize: '28px' }}>Challenge</h2>
          <p style={{ fontSize: '16px', color: '#4b5563', lineHeight: '1.7', marginTop: '12px' }}>
            {currentCase.challenge}
          </p>
        </motion.div>

        {/* Results Section */}
        <motion.div
          style={{ marginBottom: '48px' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title" style={{ textAlign: 'left', fontSize: '28px' }}>Results</h2>
          <p style={{ fontSize: '16px', color: '#4b5563', lineHeight: '1.7', marginTop: '12px' }}>
            {currentCase.results}
          </p>
        </motion.div>

        {/* Quote Block */}
        <motion.div
          style={{
            background: '#ffffff',
            border: '1px solid rgba(0,0,0,0.08)',
            borderRadius: 'var(--radius-xl)',
            padding: '40px',
            marginBottom: '48px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Quote size={36} color="#9ca3af" style={{ marginBottom: '16px' }} />
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', fontStyle: 'italic', lineHeight: '1.6', color: '#171717' }}>
            "{currentCase.quote}"
          </p>
          <div style={{ marginTop: '20px', fontWeight: 600, fontSize: '15px' }}>{currentCase.quoteAuthor}</div>
          <div style={{ fontSize: '13px', color: '#6b7280' }}>{currentCase.quoteRole}</div>
        </motion.div>

        {/* Process Steps */}
        <div style={{ marginBottom: '64px' }}>
          <h2 className="section-title" style={{ textAlign: 'left', fontSize: '28px', marginBottom: '24px' }}>Process</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {currentCase.process.map((p, idx) => (
              <motion.div
                key={idx}
                style={{
                  background: '#ffffff',
                  borderRadius: 'var(--radius-md)',
                  padding: '24px',
                  border: '1px solid rgba(0,0,0,0.06)',
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'flex-start'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ x: 6 }}
              >
                <div style={{
                  background: 'var(--blue-bg)',
                  color: '#171717',
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '15px',
                  flexShrink: 0
                }}>
                  {p.step}
                </div>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '6px' }}>{p.title}</h3>
                  <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: '1.6' }}>{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', padding: '40px 0' }}>
          <h3 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '16px' }}>Need a similar solution for your product?</h3>
          <motion.button
            onClick={onOpenContact}
            className="btn-pill-dark"
            style={{ padding: '14px 32px' }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            Start a Project with Athos
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

