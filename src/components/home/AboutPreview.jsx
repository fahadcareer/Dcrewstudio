import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';

const AboutPreview = () => {
  // Stagger entry configurations
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const imageContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const imageItem1 = {
    hidden: { opacity: 0, x: -30, y: 10 },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  const imageItem2 = {
    hidden: { opacity: 0, x: 30, y: 30 },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
        
        {/* Left Column: Narrative (Span 5) */}
        <motion.div 
          className="lg:col-span-5 flex flex-col items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            visible: { transition: { staggerChildren: 0.12 } }
          }}
        >
          <motion.span 
            variants={fadeUpVariants}
            className="text-secondary font-sans font-semibold text-[11px] uppercase tracking-[0.25em] mb-4 block"
          >
            Who We Are
          </motion.span>
          
          <motion.h2 
            variants={fadeUpVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-light leading-tight text-primary mb-6"
          >
            We sculpt spaces that <span className="italic text-secondary font-normal">resonate</span> with absolute order.
          </motion.h2>

          <motion.p 
            variants={fadeUpVariants}
            className="text-textDark/80 font-sans text-sm font-light leading-relaxed mb-6"
          >
            Founded by a collective of visionary architects and designers, D'Crew Studio crafts architectural marvels, bespoke interior structures, and custom residential masterworks. We look beyond basic construction to compose a balanced marriage of pure physics, raw materials, and curated spatial luxury.
          </motion.p>

          <motion.p 
            variants={fadeUpVariants}
            className="text-textDark/70 font-sans text-sm font-light leading-relaxed mb-10"
          >
            Every line we trace, every block we position is an investigation of natural lighting, texture harmony, and visual quietness. We service elite residential developers and design clients globally.
          </motion.p>

          <motion.div variants={fadeUpVariants}>
            <Button href="/about" variant="secondary" icon={ArrowRight}>
              Our Philosophy
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Column: Overlapping Geometric Images (Span 7) */}
        <motion.div 
          className="lg:col-span-7 relative w-full h-[400px] sm:h-[550px] flex items-center justify-center lg:justify-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={imageContainerVariants}
        >
          {/* Decorative outline backplate border */}
          <div className="absolute right-[5%] top-[5%] w-[80%] h-[85%] border border-secondary/20 -z-10 hidden sm:block pointer-events-none" />

          {/* Underlayer main photo (large) */}
          <motion.div 
            variants={imageItem1}
            className="w-[75%] sm:w-[65%] h-[85%] overflow-hidden bg-bgLight shadow-luxury border border-gray-100 mr-auto lg:mr-16"
          >
            <motion.img 
              src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800" 
              alt="Architectural space drafting" 
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.6 }}
              loading="lazy"
            />
          </motion.div>

          {/* Overlapping floating photo (smaller) */}
          <motion.div 
            variants={imageItem2}
            className="absolute bottom-[5%] right-[5%] w-[45%] sm:w-[42%] h-[60%] overflow-hidden bg-bgLight shadow-luxury border-4 border-white z-10"
          >
            <motion.img 
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800" 
              alt="Bespoke furniture setup" 
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.6 }}
              loading="lazy"
            />
          </motion.div>

          {/* Gold structural corner detail */}
          <div className="absolute top-[8%] left-[2%] w-6 h-6 border-t-2 border-l-2 border-secondary/40 hidden sm:block" />
        </motion.div>

      </Container>
    </section>
  );
};

export default AboutPreview;
