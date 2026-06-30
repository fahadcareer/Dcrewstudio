import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

/**
 * BackToTop Floating Button
 * Appears when user scrolls past a vertical offset.
 * Performs a smooth, hardware-accelerated scroll back to the top of the page.
 */
const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  // Monitor scroll height
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth native scrolling
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 15, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 15, scale: 0.9 }}
          whileHover={{ 
            y: -4, 
            transition: { duration: 0.2, ease: 'easeOut' } 
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 w-10 h-10 rounded-full border border-secondary bg-white text-secondary hover:bg-secondary hover:text-white flex items-center justify-center transition-colors duration-300 shadow-md focus:outline-none focus:ring-1 focus:ring-secondary/50 will-change-transform"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-4 h-4 stroke-[2.5]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
