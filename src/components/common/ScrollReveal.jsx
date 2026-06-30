import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable ScrollReveal Component
 * Wraps child elements to trigger smooth, GPU-friendly entry animations on viewport scroll.
 * Animates only opacity and transforms (no layout shifts) for 60 FPS performance.
 * 
 * @param {string} direction - Slide entry direction: 'up' | 'down' | 'left' | 'right' | 'none'
 * @param {number} delay - Animation delay in seconds
 * @param {number} duration - Animation duration in seconds (should keep under 0.5s)
 * @param {number} distance - Offset displacement distance in pixels
 */
const ScrollReveal = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.45,
  distance = 15,
  className = '',
}) => {
  // Compute initial layout offsets based on direction
  const offsets = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  };

  const variants = {
    hidden: {
      opacity: 0,
      ...offsets[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Premium cubic-bezier ease out
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
