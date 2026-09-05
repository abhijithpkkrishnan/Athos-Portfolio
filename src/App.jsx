import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CaseStudies from './components/CaseStudies';
import CaseStudyDetail from './components/CaseStudyDetail';
import Process from './components/Process';
import SkillsExperience from './components/SkillsExperience';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import Calculator from './components/Calculator';
import Proposal from './components/Proposal';
import FloatingWidgets from './components/FloatingWidgets';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';
import BackgroundGlow from './components/BackgroundGlow';

const routeMetaMap = {
  home: {
    title: 'Abhijith — Best Software Engineer in Kerala | Full Stack & Node.js Developer',
    description: 'Portfolio of Abhijith P K, recognized as the Best Software Engineer in Kerala, India. Building scalable web applications, REST APIs, PostgreSQL databases, Python microservices, and enterprise Odoo ERP integrations.'
  },
  cases: {
    title: 'Full Stack Engineering Case Studies & Projects — Abhijith P K (Best Software Engineer in Kerala)',
    description: 'Explore full-stack healthcare management portals, hospital billing systems, clinical history systems, and Odoo ERP integration bridges built by Abhijith P K.'
  },
  'case-detail': {
    title: 'Project Case Study — Abhijith P K Portfolio',
    description: 'Detailed technical overview, system architecture, database design, and key engineering metrics for software solutions built by Abhijith P K.'
  },
  proposal: {
    title: 'Project Proposal & Technical Scope — Abhijith P K',
    description: 'Tailored full-stack web application development proposal, deliverable breakdown, tech stack scoping, and project timeline by Abhijith P K.'
  },
  calculator: {
    title: 'Interactive Project Estimator & Tech Stack Calculator — Abhijith P K',
    description: 'Calculate custom web application development scope, features, timeline, and cost estimates with Abhijith P K.'
  }
};

function useSEO(route, selectedCase) {
  useEffect(() => {
    const meta = routeMetaMap[route] || routeMetaMap.home;
    let title = meta.title;
    let description = meta.description;

    if (route === 'case-detail' && selectedCase) {
      const caseTitles = {
        'healthcare-clinical-system': 'Healthcare & Clinical Operations System — Abhijith P K',
        'ecommerce-website-redesign': 'Full-Stack Hospital Billing & Health Portal — Abhijith P K',
        'streamlining-ecommerce-navigation': 'Full-Stack Healthcare & AI Assistant Portal — Abhijith P K',
        'enhancing-mobile-banking-app-usability': 'Full-Stack Clinical History Portal — Abhijith P K',
        'aladdin-ecommerce-platform': 'E-Commerce Platform & Mobile App APIs — Abhijith P K'
      };
      if (caseTitles[selectedCase]) {
        title = caseTitles[selectedCase];
      }
    }

    document.title = title;

    const setMeta = (name, content) => {
      let el = document.querySelector(`meta[name="${name}"]`) || document.querySelector(`meta[property="${name}"]`);
      if (el) {
        el.setAttribute('content', content);
      }
    };

    setMeta('description', description);
    setMeta('og:title', title);
    setMeta('og:description', description);
    setMeta('og:image', 'https://abhijithpk.com/assets/og-image.png');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', 'https://abhijithpk.com/assets/og-image.png');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      const baseUrl = 'https://abhijithpk.com/';
      const routePath = route === 'home' ? '' : `#${route}`;
      canonical.setAttribute('href', `${baseUrl}${routePath}`);
    }
  }, [route, selectedCase]);
}

export default function App() {
  const [route, setRoute] = useState('home');
  const [selectedCase, setSelectedCase] = useState('healthcare-clinical-system');
  const [contactOpen, setContactOpen] = useState(false);

  useSEO(route, selectedCase);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app-root" style={{ position: 'relative' }}>
      <BackgroundGlow />

      <Navbar
        currentRoute={route}
        setRoute={setRoute}
        onOpenContact={() => setContactOpen(true)}
      />

      <AnimatePresence mode="wait">
        <motion.main
          key={route}
          initial={{ opacity: 0, y: 35, scale: 0.99 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -25, scale: 0.99 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          {route === 'home' && (
            <>
              <Hero onOpenContact={() => setContactOpen(true)} setRoute={setRoute} />
              <CaseStudies setSelectedCase={setSelectedCase} setRoute={setRoute} />
              <Process />
              <SkillsExperience />
              <FAQ />
              <Blog />
            </>
          )}

          {route === 'cases' && (
            <div style={{ paddingTop: '100px' }}>
              <CaseStudies setSelectedCase={setSelectedCase} setRoute={setRoute} />
            </div>
          )}

          {route === 'case-detail' && (
            <CaseStudyDetail
              caseId={selectedCase}
              setRoute={setRoute}
              onOpenContact={() => setContactOpen(true)}
            />
          )}

          {route === 'calculator' && (
            <Calculator onOpenContact={() => setContactOpen(true)} />
          )}

          {route === 'proposal' && (
            <Proposal onOpenContact={() => setContactOpen(true)} />
          )}
        </motion.main>
      </AnimatePresence>

      <Footer onOpenContact={() => setContactOpen(true)} />

      <FloatingWidgets setRoute={setRoute} />

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </div>
  );
}
