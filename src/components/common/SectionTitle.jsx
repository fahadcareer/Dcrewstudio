import React from 'react';
import { motion } from 'framer-motion';

/**
 * SectionTitle Component
 * A premium header block for page sections featuring architectural typography,
 * subtle gold dividers, alignment adjustments, and smooth scroll entry animations.
 */
const SectionTitle = ({
  tag = '',
  title,
  subtitle = '',
  align = 'center', // left | center | right
  dark = false, // adjusts text colors for dark sections
  divider = false,
  className = '',
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // premium custom cubic-bezier ease
      },
    },
  };

  const dividerVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: 48,
      opacity: 1,
      transition: { duration: 0.8, delay: 0.4, ease: 'easeInOut' },
    },
  };

  // Alignment styles
  const alignStyles = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <motion.div
      className={`flex flex-col mb-12 sm:mb-16 md:mb-20 max-w-3xl ${
        align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : 'mr-auto'
      } ${alignStyles[align]} ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {/* Supertitle / Tag */}
      {tag && (
        <motion.span
          className="text-secondary font-sans font-semibold text-[11px] uppercase tracking-[0.25em] mb-3 sm:mb-4 block"
          variants={itemVariants}
        >
          {tag}
        </motion.span>
      )}

      {/* Main Heading */}
      <motion.h2
        className={`text-3xl sm:text-4xl md:text-5xl font-serif font-light leading-tight ${
          dark ? 'text-white' : 'text-primary'
        }`}
        variants={itemVariants}
      >
        {title}
      </motion.h2>

      {/* Luxury Gold Line Divider */}
      {divider && (
        <motion.div
          className="h-[1.5px] bg-secondary my-5 sm:my-6"
          variants={dividerVariants}
        />
      )}

      {/* Subtitle / Description */}
      {subtitle && (
        <motion.p
          className={`mt-4 text-sm sm:text-base font-light leading-relaxed font-sans ${
            dark ? 'text-gray-300' : 'text-textDark/80'
          } max-w-2xl ${divider ? '' : 'pt-2'}`}
          variants={itemVariants}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
