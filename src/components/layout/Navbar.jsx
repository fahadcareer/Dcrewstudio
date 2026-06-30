import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';
import Logo from '../common/Logo';


const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact', path: '/contact' },
];

/**
 * Sticky Premium Navbar
 * Automatically detects page scroll to transition heights/opacities.
 * Includes slide-in fullscreen navigation overlay on mobile screen widths.
 */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll handler to toggle solid background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page redirection
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Framer Motion definitions for mobile menu container
  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'tween',
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1], // easeOutQuart
      },
    },
    opened: {
      x: 0,
      transition: {
        type: 'tween',
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, x: 20 },
    opened: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md py-4 border-b border-gray-100 shadow-sm'
            : 'bg-transparent py-6'
        }`}
      >
        <Container className="flex items-center justify-between">
          {/* Logo Branding */}
          <Link to="/" className="flex items-center z-50 h-[30px] sm:h-[38px]">
            <Logo 
              scrolled={scrolled} 
              mobileMenuOpen={mobileMenuOpen} 
              className="transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `font-sans text-[11px] font-semibold uppercase tracking-widest text-underline-animated pb-1 transition-colors duration-300 ${
                    isActive
                      ? 'text-secondary'
                      : scrolled || mobileMenuOpen
                      ? 'text-primary hover:text-secondary'
                      : 'text-white hover:text-secondary'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Consultation CTA */}
          <div className="hidden md:block">
            <Button href="/contact" variant="gold" size="sm">
              Inquire
            </Button>
          </div>

          {/* Mobile Menu Toggle button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-1.5 z-50 transition-colors focus:outline-none ${
              scrolled || mobileMenuOpen ? 'text-primary hover:text-secondary' : 'text-white hover:text-secondary'
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </Container>
      </motion.header>

      {/* Fullscreen Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 w-full h-full bg-white z-30 flex flex-col pt-32 pb-12 px-6 sm:px-12"
            variants={menuVariants}
            initial="closed"
            animate="opened"
            exit="closed"
          >
            {/* Background luxury overlay pattern */}
            <div className="absolute inset-0 bg-bgLight/30 pointer-events-none -z-10" />

            <div className="flex flex-col h-full justify-between">
              {/* Menu Links */}
              <nav className="flex flex-col gap-6 sm:gap-8">
                {navLinks.map((link) => (
                  <motion.div key={link.name} variants={linkVariants}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `font-serif text-3xl sm:text-4xl font-light tracking-wide transition-colors duration-300 ${
                          isActive ? 'text-secondary' : 'text-primary hover:text-secondary'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              {/* Bottom Details */}
              <motion.div 
                className="border-t border-gray-100 pt-8 flex flex-col gap-6"
                variants={linkVariants}
              >
                <div className="flex flex-col gap-1 text-[11px] font-sans tracking-wider uppercase text-textDark/60">
                  <span>General Enquiries: info@dcrewstudio.com</span>
                  <span>Direct Dial: +91 96296 30202</span>
                </div>
                <Button
                  href="/contact"
                  variant="primary"
                  className="w-full"
                  icon={ArrowRight}
                >
                  Book Consultation
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
