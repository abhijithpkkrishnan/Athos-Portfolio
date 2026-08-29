import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import TextReveal from './TextReveal';

export default function FAQ() {
  const faqs = [
    {
      q: 'What is your design process?',
      a: 'My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design.'
    },
    {
      q: 'What tools and software do you use for UX design?',
      a: 'I specialize in Framer, Figma, Notion for documentation, VWO for A/B testing, Rive for advanced vector micro-animations, and modern web frameworks (React/HTML/CSS) for full-stack implementation.'
    },
    {
      q: 'How do you measure the success of your UX designs?',
      a: 'Success is measured through quantitative metrics (conversion rate improvements, reduction in churn, increased session duration, task completion time) and qualitative feedback collected during usability testing sessions.'
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



