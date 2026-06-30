import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToTop from '../common/BackToTop';

/**
 * Global Page Layout Wrapper
 * Controls top spacing for sticky navigation, wraps all child pages,
 * forces window scroll-to-top on route changes, and supplies entry transitions.
 */
const PageLayout = ({ children }) => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant' // Instant is preferred for layout changes to avoid scroll jumps
    });
  }, [pathname]);

  // Premium subtle page transition variants
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 10,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1], // Luxury cubic ease-out
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.3,
        ease: 'easeIn',
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Global Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <motion.main
        key={pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex-grow" // Removed padding top to let Hero and banners sit under transparent navbar
      >
        {children}
      </motion.main>

      {/* Global Footer */}
      <Footer />

      {/* Floating Back to Top Trigger */}
      <BackToTop />
    </div>
  );
};

export default PageLayout;
