import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

/**
 * Premium Card Component
 * Supports multiple design layouts:
 * - 'project': Image-heavy with a rich overlay, title, subtitle, and tags that animate on hover.
 * - 'service': Bordered text card with icons, descriptions, and a link.
 * - 'editorial': Minimal text card with the image on top and details styled elegantly underneath.
 */
const Card = ({
  image = '',
  title,
  subtitle = '',
  category = '',
  href = '',
  icon: Icon = null,
  variant = 'project', // project | service | editorial
  aspectRatio = 'portrait', // portrait (3:4) | square (1:1) | video (16:9) | tall (2:3)
  className = '',
  ...props
}) => {
  const aspectClasses = {
    portrait: 'aspect-[3/4]',
    square: 'aspect-square',
    video: 'aspect-video',
    tall: 'aspect-[2/3]',
  };

  const imageTransition = {
    duration: 0.7,
    ease: [0.16, 1, 0.3, 1], // luxury cubic-bezier transition
  };

  // Card Content Wrapper
  const CardWrapper = ({ children }) => {
    if (href) {
      const isExternal = href.startsWith('http');
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`block group overflow-hidden bg-white ${className}`}
            {...props}
          >
            {children}
          </a>
        );
      }
      return (
        <Link
          to={href}
          className={`block group overflow-hidden bg-white ${className}`}
          {...props}
        >
          {children}
        </Link>
      );
    }
    return (
      <div className={`block overflow-hidden bg-white ${className}`} {...props}>
        {children}
      </div>
    );
  };

  // 1. PROJECT VARIANT: Architectural portfolio card with smooth hover overlay
  if (variant === 'project') {
    return (
      <CardWrapper>
        <div className={`relative w-full ${aspectClasses[aspectRatio]} overflow-hidden`}>
          {/* Main Image */}
          {image ? (
            <motion.img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={imageTransition}
            />
          ) : (
            <div className="w-full h-full bg-light flex items-center justify-center text-primary/30">
              [Image Placeholder]
            </div>
          )}

          {/* Dark Premium Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-60 group-hover:opacity-75 transition-opacity duration-500" />

          {/* Luxury Text Overlay */}
          <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
            <motion.div
              initial={{ y: 15, opacity: 0.95 }}
              whileHover={{ y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="transform translate-y-3 transition-transform duration-300 ease-out"
            >
              {category && (
                <span className="text-secondary font-sans font-semibold text-[10px] uppercase tracking-[0.2em] mb-2 block">
                  {category}
                </span>
              )}
              <h3 className="text-xl sm:text-2xl font-serif text-white leading-tight font-light">
                {title}
              </h3>
              {subtitle && (
                <p className="text-gray-300 font-sans text-xs font-light mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                  {subtitle}
                </p>
              )}
            </motion.div>

            {/* Decorative layout brackets */}
            <div className="absolute top-6 left-6 w-5 h-5 border-t border-l border-secondary/50 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0" />
            <div className="absolute bottom-6 right-6 w-5 h-5 border-r border-b border-secondary/50 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0" />
          </div>
        </div>
      </CardWrapper>
    );
  }

  // 2. SERVICE VARIANT: Detailed text block for listing services
  if (variant === 'service') {
    return (
      <div className={`border border-gray-100 p-8 hover:border-secondary/40 bg-white flex flex-col h-full justify-between group shadow-sm hover:shadow-luxury transform hover:-translate-y-1.5 transition-all duration-300 ${className}`} {...props}>
        <div>
          {/* Icon Header */}
          {Icon && (
            <div className="w-12 h-12 flex items-center justify-center border border-gray-100 text-secondary bg-bgLight mb-6 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:border-primary">
              <Icon className="w-5 h-5 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
            </div>
          )}
          
          <h3 className="text-xl font-serif font-light text-primary mb-3">
            {title}
          </h3>
          
          <p className="text-textDark/80 font-sans text-sm font-light leading-relaxed mb-6">
            {subtitle}
          </p>
        </div>

        {href && (
          <Link
            to={href}
            className="inline-flex items-center text-[11px] font-sans font-semibold tracking-widest text-primary hover:text-secondary uppercase mt-auto gap-2"
          >
            <span>Read More</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        )}
      </div>
    );
  }

  // 3. EDITORIAL VARIANT: Clean image with metadata positioned underneath
  return (
    <CardWrapper>
      <div className="flex flex-col h-full">
        <div className={`relative w-full ${aspectClasses[aspectRatio]} overflow-hidden mb-5`}>
          {image ? (
            <motion.img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.04 }}
              transition={imageTransition}
            />
          ) : (
            <div className="w-full h-full bg-light flex items-center justify-center text-primary/30">
              [Image Placeholder]
            </div>
          )}
          {category && (
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm border border-gray-100 px-3 py-1">
              <span className="text-secondary font-sans font-semibold text-[9px] uppercase tracking-widest block">
                {category}
              </span>
            </div>
          )}
        </div>
        
        <div>
          <h3 className="text-lg sm:text-xl font-serif font-light text-primary group-hover:text-secondary transition-colors duration-300">
            {title}
          </h3>
          {subtitle && (
            <p className="text-textDark/70 font-sans text-sm font-light leading-relaxed mt-2 line-clamp-2">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </CardWrapper>
  );
};

export default Card;
