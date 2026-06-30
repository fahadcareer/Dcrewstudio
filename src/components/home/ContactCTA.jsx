import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';

const ContactCTA = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-primary overflow-hidden">
      {/* Background Image with heavy dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600"
          alt="Concrete structure details"
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-primary/75" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-secondary font-sans font-semibold text-[10px] sm:text-[11px] uppercase tracking-[0.25em] mb-4 block"
          >
            Start Your Project
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white leading-tight mb-6"
          >
            Let's construct something <span className="italic text-secondary font-normal">timeless</span>.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-gray-300 font-sans text-sm font-light leading-relaxed mb-10 max-w-xl"
          >
            From bespoke architectural design to interior refinement and structural build execution, we bring rigorous design methodologies to create your space.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <Button href="/contact" variant="gold" icon={ArrowRight}>
              Schedule Consultation
            </Button>
          </motion.div>
        </div>
      </Container>

      {/* Decorative frame elements */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-white/10 hidden md:block" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-white/10 hidden md:block" />
    </section>
  );
};

export default ContactCTA;
