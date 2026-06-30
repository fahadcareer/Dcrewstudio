import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';

// High-definition luxury architecture slides
const slides = [
  {
    id: 1,
    tag: 'Architectural Excellence',
    title: 'Bespoke Structures. Timeless Geometry.',
    subtitle: 'Crafting luxury residential and hospitality spaces across the globe.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600',
    primaryCta: 'View Portfolio',
    primaryHref: '/portfolio',
    secondaryCta: 'Contact Us',
    secondaryHref: '/contact',
  },
  {
    id: 2,
    tag: 'Crafted Interior Architecture',
    title: 'Harmonious Spaces. Refined Details.',
    subtitle: 'Where light, texture, and tailored furniture assemble into pure atmosphere.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600',
    primaryCta: 'Explore Services',
    primaryHref: '/services',
    secondaryCta: 'Read Story',
    secondaryHref: '/about',
  },
  {
    id: 3,
    tag: 'Precision Construction',
    title: 'Rigorous Execution. Superb Materials.',
    subtitle: 'Enforcing execution accuracy and structural intelligence from foundation to finish.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600',
    primaryCta: 'Selected Works',
    primaryHref: '/portfolio',
    secondaryCta: 'Work With Us',
    secondaryHref: '/contact',
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Auto rotate slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Slide transition configurations (under 0.5s for snappiness)
  const slideTransition = {
    duration: 0.45,
    ease: 'easeInOut',
  };

  return (
    <section className="relative h-[90vh] md:h-screen w-full bg-primary overflow-hidden flex items-center">
      {/* 1. BACKGROUND IMAGE SLIDER (Cross-fade + Slow Zoom) */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={slideTransition}
            className="absolute inset-0 w-full h-full"
          >
            {/* Ken Burns effect: slow scale over slide lifecycle */}
            <motion.img
              src={slides[current].image}
              alt={slides[current].title}
              initial={{ scale: 1.08 }}
              animate={{ scale: 1.02 }}
              transition={{ duration: 6, ease: 'easeOut' }}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        {/* Luxury Linear Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/45 via-transparent to-transparent" />
      </div>

      {/* 2. SLIDE CONTENT */}
      <Container className="relative z-10 w-full text-white">
        <div className="max-w-3xl">
          {/* Staggered slide-up animations under 0.5s */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-secondary font-sans font-semibold text-[10px] sm:text-[11px] uppercase tracking-[0.25em] mb-4 block">
                {slides[current].tag}
              </span>
              
              <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light leading-[1.1] mb-6">
                {slides[current].title.split('. ').map((part, idx) => (
                  <span key={idx} className="block">
                    {part}
                    {idx === 0 && <span className="text-secondary">.</span>}
                  </span>
                ))}
              </h1>

              <p className="text-gray-300 font-sans text-sm sm:text-base font-light leading-relaxed mb-10 max-w-lg">
                {slides[current].subtitle}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button 
                  href={slides[current].primaryHref} 
                  variant="gold" 
                  icon={ArrowRight}
                >
                  {slides[current].primaryCta}
                </Button>
                <Button 
                  href={slides[current].secondaryHref} 
                  variant="secondary" 
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  {slides[current].secondaryCta}
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>

      {/* 3. SLIDE DOT INDICATORS */}
      <div className="absolute right-6 sm:right-12 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className="group relative flex items-center justify-center p-1 focus:outline-none"
            aria-label={`Go to slide ${idx + 1}`}
          >
            {/* Outer ring on active */}
            <span 
              className={`absolute w-5 h-5 rounded-full border border-secondary transition-all duration-300 ${
                current === idx ? 'scale-100 opacity-100' : 'scale-50 opacity-0 group-hover:opacity-40 group-hover:scale-75'
              }`}
            />
            {/* Core dot */}
            <span 
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                current === idx ? 'bg-secondary' : 'bg-white/40 group-hover:bg-white'
              }`}
            />
          </button>
        ))}
      </div>

      {/* 4. MOUSE SCROLL DOWN INDICATOR */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center gap-2">
        <span className="font-sans text-[9px] font-semibold text-gray-400 tracking-[0.2em] uppercase">
          Scroll Down
        </span>
        <div className="w-[18px] h-8 border border-white/30 rounded-full flex justify-center p-1">
          {/* Scrolling dot inside mouse */}
          <motion.div
            animate={{ 
              y: [0, 10, 0],
              opacity: [1, 0, 1]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="w-1 h-2 bg-secondary rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
