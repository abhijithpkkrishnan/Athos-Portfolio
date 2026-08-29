import React from 'react';
import { motion } from 'framer-motion';

export default function TextReveal({
  children,
  className = '',
  style = {},
  as = 'h2',
  delay = 0,
  stagger = 0.05,
  once = true
}) {
  const Component = motion[as] || motion.div;

  if (typeof children !== 'string') {
    return (
      <Component
        className={className}
        style={style}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once, margin: '-40px' }}
        transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </Component>
    );
  }

  const words = children.split(' ');

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: { y: '120%', opacity: 0, rotate: 2 },
    visible: {
      y: '0%',
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <Component
      className={className}
      style={{
        ...style,
        display: 'inline-flex',
        flexWrap: 'wrap',
        overflow: 'hidden',
        columnGap: '0.28em',
        rowGap: '0.1em'
      }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-40px' }}
    >
      {words.map((word, i) => (
        <span key={i} style={{ overflow: 'hidden', display: 'inline-block', paddingBottom: '0.08em' }}>
          <motion.span
            style={{ display: 'inline-block', transformOrigin: 'left bottom' }}
            variants={wordVariants}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}

