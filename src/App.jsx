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

export default function App() {
  const [route, setRoute] = useState('home'); // 'home' | 'cases' | 'case-detail' | 'proposal' | 'calculator'
  const [selectedCase, setSelectedCase] = useState('travel-booking-app');
  const [contactOpen, setContactOpen] = useState(false);

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


