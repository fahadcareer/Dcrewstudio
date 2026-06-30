import React from 'react';
import { motion } from 'framer-motion';
import Container from './Container';

/**
 * Reusable Subpage Hero Banner
 * Renders a consistent title banner with background image parallax and dark overlays.
 */
const HeroBanner = ({
  title,
  subtitle = '',
  tag = '',
  image = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600',
}) => {
  return (
    <section className="relative h-[40vh] sm:h-[45vh] min-h-[300px] bg-primary flex items-center overflow-hidden">
      {/* Background image with parallax scale */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={image}
          alt={title}
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
      </div>

      {/* Narrative Container */}
      <Container className="relative z-10 w-full text-white pt-12 md:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          {tag && (
            <span className="text-secondary font-sans font-semibold text-[10px] sm:text-[11px] uppercase tracking-[0.25em] mb-3 block">
              {tag}
            </span>
          )}
          
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="text-gray-300 font-sans text-xs sm:text-sm font-light tracking-wide mt-3 max-w-lg leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </Container>
    </section>
  );
};

export default HeroBanner;
