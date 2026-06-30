import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';

const reviews = [
  {
    quote: "Collaborating with D'Crew Studio was an absolute revelation. Their architectural vision and material sensitivity turned our raw lakefront plot into a concrete and cedar masterpiece that balances light and mass.",
    author: "Elena Rostova",
    role: "Private Owner, Lakehouse Monolith",
  },
  {
    quote: "Their interior design sensibilities are unparalleled. They managed to make 6,000 square feet feel warm and intimate, playing with minimalist timber screens, custom travertine pieces, and balanced lighting.",
    author: "Dr. Marcus Thorne",
    role: "Proprietor, The Obsidian Villa",
  },
  {
    quote: "Executing blueprints with absolute precision. D'Crew Studio delivered our commercial headquarters on schedule, demonstrating impeccable project oversight, materials honesty, and client reporting.",
    author: "Julian Vane",
    role: "Director, Vane Development Group",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const transitionSettings = {
    duration: 0.35,
    ease: 'easeInOut',
  };

  return (
    <section className="py-24 bg-white overflow-hidden border-t border-gray-100">
      <Container className="max-w-4xl">
        <SectionTitle
          tag="Client Narratives"
          title="Refined Impressions"
          align="center"
          className="mb-12"
        />

        {/* Quotes Display Area */}
        <div className="relative min-h-[220px] sm:min-h-[180px] flex items-center justify-center text-center px-4 sm:px-12">
          {/* Decorative quote mark */}
          <span className="absolute top-0 left-0 font-serif text-[120px] leading-none text-secondary/10 select-none pointer-events-none">
            “
          </span>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={transitionSettings}
              className="flex flex-col items-center gap-6"
            >
              <blockquote className="font-serif text-lg sm:text-xl md:text-2xl font-light italic leading-relaxed text-primary max-w-3xl">
                "{reviews[current].quote}"
              </blockquote>

              <cite className="not-italic flex flex-col gap-1">
                <span className="font-sans font-semibold text-xs text-primary uppercase tracking-widest">
                  {reviews[current].author}
                </span>
                <span className="font-sans text-[10px] text-secondary uppercase tracking-[0.15em]">
                  {reviews[current].role}
                </span>
              </cite>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel controls */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-gray-200 hover:border-secondary text-primary hover:text-secondary flex items-center justify-center transition-all duration-300 focus:outline-none"
            aria-label="Previous quote"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <span className="font-sans text-[10px] font-semibold text-secondary tracking-widest">
            {String(current + 1).padStart(2, '0')} / {String(reviews.length).padStart(2, '0')}
          </span>

          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-gray-200 hover:border-secondary text-primary hover:text-secondary flex items-center justify-center transition-all duration-300 focus:outline-none"
            aria-label="Next quote"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </Container>
    </section>
  );
};

export default Testimonials;
