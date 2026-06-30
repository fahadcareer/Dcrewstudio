import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';

const items = [
  {
    title: 'Rigor & Engineering Precision',
    desc: 'We construct blueprints with strict tolerances. Our engineering and onsite oversight ensure physical alignments match the initial design render with millimetric accuracy.',
  },
  {
    title: 'Bespoke Architectural Customization',
    desc: 'We reject template-based work. Every facade, spatial volume, and furniture layout is designed exclusively to accommodate the site context and our clients lifestyle.',
  },
  {
    title: 'Material Honesty',
    desc: 'We work with raw, genuine materials: exposed brutalist concrete, hand-selected travertine stones, structural steel, and solid timber. We celebrate natural grains and authentic aging textures.',
  },
  {
    title: 'Full Transparency Framework',
    desc: 'Providing high-end clients with secure digital client portals. Track construction timeline schedules, materials invoices, and live progress feeds in real time.',
  },
];

const WhyChooseUs = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.4, ease: 'easeOut' } 
    },
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
        
        {/* Left Column: Premium Architectural Graphic (Span 6) */}
        <div className="lg:col-span-6 relative w-full h-[350px] sm:h-[480px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="w-full h-full overflow-hidden bg-bgLight border border-gray-100"
          >
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800"
              alt="Architectural details"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              loading="lazy"
            />
          </motion.div>
          {/* Subtle gold line floating frame */}
          <div className="absolute -bottom-6 -left-6 w-48 h-48 border-b border-l border-secondary/30 -z-10 hidden sm:block" />
        </div>

        {/* Right Column: Values Checklist (Span 6) */}
        <div className="lg:col-span-6 flex flex-col items-start">
          <SectionTitle
            tag="The Distinction"
            title="Sustained Excellence"
            subtitle="The core philosophies that separate our collective from typical development firms."
            align="left"
            className="mb-8"
          />

          <motion.div
            className="flex flex-col gap-6 w-full"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {items.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex gap-4 group"
              >
                {/* Gold Circle Checkmark */}
                <div className="w-5 h-5 rounded-full border border-secondary flex items-center justify-center shrink-0 mt-1 bg-transparent group-hover:bg-secondary text-secondary group-hover:text-white transition-all duration-300">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </div>
                
                <div>
                  <h4 className="font-serif text-lg font-light text-primary mb-1.5 transition-colors group-hover:text-secondary">
                    {item.title}
                  </h4>
                  <p className="text-textDark/80 font-sans text-xs font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </Container>
    </section>
  );
};

export default WhyChooseUs;
