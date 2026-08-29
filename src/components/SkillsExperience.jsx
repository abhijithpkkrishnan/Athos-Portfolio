import React from 'react';
import { motion } from 'framer-motion';
import TextReveal from './TextReveal';

export default function SkillsExperience() {
  const skills = [
    'UX Design', 'UI Design', 'Product Design', 'Design Systems',
    'Front-End Development', 'Workshops', 'Design Sprint', 'Interaction Design',
    'User Testing', 'Usability Testing', 'UX Research', 'Leadership',
    'Mentoring', 'No-Code'
  ];

  const experiences = [
    { role: 'Product Designer', company: 'Company', period: 'Jan 2020 - Jan 2023' },
    { role: 'Lead UX/UI Designer', company: 'Company', period: 'Jan 2018 - Jan 2020' },
    { role: 'Senior Product Designer', company: 'Company', period: 'Jun 2016 - Present' },
    { role: 'Co-Founder', company: 'Company', period: 'Jan 2011 - Jun 2015' }
  ];

  return (
    <section id="experience" className="skills-experience-section">
      <div className="container">
        {/* Skills Section */}
        <motion.div
          className="skills-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '80px' }}
        >
          <TextReveal as="h2" className="section-title" style={{ textAlign: 'left', display: 'flex', justifyContent: 'flex-start', marginBottom: '24px' }}>
            Skills
          </TextReveal>

          <div className="skills-flex">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                className="skill-pill"
                initial={{ scale: 0.85, opacity: 0, y: 10 }}
                whileInView={{ scale: 1, opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 350, damping: 20, delay: idx * 0.03 }}
                whileHover={{ scale: 1.06, y: -2, backgroundColor: '#333333' }}
                whileTap={{ scale: 0.94 }}
              >
                {skill}
              </motion.div>
            ))}
            <motion.div
              className="skill-pill more-pill"
              initial={{ scale: 0.85, opacity: 0, y: 10 }}
              whileInView={{ scale: 1, opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 350, damping: 20, delay: skills.length * 0.03 }}
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.94 }}
            >
              + More
            </motion.div>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <TextReveal as="h2" className="section-title" style={{ textAlign: 'left', display: 'flex', justifyContent: 'flex-start', marginBottom: '32px' }}>
            Experience
          </TextReveal>

          <div className="experience-list">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                className="experience-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ x: 6 }}
              >
                <div className="role-title">{exp.role}</div>
                <div>
                  <div className="company-name">{exp.company}</div>
                  <div className="role-dates">{exp.period}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}





