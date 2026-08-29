import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function BackgroundGlow() {
  const { scrollYProgress } = useScroll();
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 1800]);

  return (
    <div className="bg-glow-container">
      <motion.div className="hero-glow-wrapper" style={{ y: glowY }}>
        <div className="hero-glow hero-glow-primary animated-pulse-1" />
        <div className="hero-glow hero-glow-secondary animated-pulse-2" />
      </motion.div>
    </div>
  );
}
