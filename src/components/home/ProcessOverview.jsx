import React from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';

const steps = [
  {
    num: '01',
    phase: 'Briefing',
    title: 'Vision & Workspace Research',
    desc: 'Conducting in-depth consultations to align on programmatic needs, structural scaling requirements, luxury finishes, budget structures, and client expectations.',
  },
  {
    num: '02',
    phase: 'Conception',
    title: 'Schematics & Spatial Form',
    desc: 'Drafting initial volume layouts, mass orientations, solar/shade schedules, and generating photorealistic 3D spatial renders to visualize the design geometry.',
  },
  {
    num: '03',
    phase: 'Refinement',
    title: 'Detailed Engineering',
    desc: 'Generating permit blueprints, structural loading calculations, electrical layouts, materials listings, and choosing bespoke furniture and carpentry textures.',
  },
  {
    num: '04',
    phase: 'Execution',
    title: 'Construction Management',
    desc: 'On-site execution, engineering supervision, materials sourcing quality control, and final bespoke detailing up to hand-over keys.',
  },
];

const ProcessOverview = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <section className="py-24 bg-bgLight overflow-hidden">
      <Container>
        <SectionTitle
          tag="The Journey"
          title="The Architectural Process"
          subtitle="How we guide architectural concepts from initial blueprint lines to key handovers."
          align="center"
          divider={true}
        />

        {/* Process Steps Wrapper */}
        <motion.div
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pt-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {/* Horizontal Connection track line (Visible on large screens) */}
          <div className="absolute top-[35px] left-10 right-10 h-[1px] bg-secondary/15 hidden lg:block pointer-events-none" />

          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              variants={itemVariants}
              className="flex flex-col items-start relative group"
            >
              {/* Step indicator node */}
              <div className="w-[50px] h-[50px] rounded-full border border-secondary flex items-center justify-center font-serif text-lg text-secondary bg-white mb-6 group-hover:bg-secondary group-hover:text-white transition-all duration-400 z-10 shadow-sm relative">
                {step.num}
                {/* Micro outer gold rings */}
                <div className="absolute inset-[-4px] border border-secondary/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-400" />
              </div>

              <span className="text-[10px] font-sans font-semibold tracking-widest text-secondary uppercase mb-2 block">
                Phase {step.phase}
              </span>

              <h4 className="font-serif text-lg font-light text-primary mb-3 transition-colors group-hover:text-secondary">
                {step.title}
              </h4>

              <p className="text-textDark/75 font-sans text-xs font-light leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default ProcessOverview;
