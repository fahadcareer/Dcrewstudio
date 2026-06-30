import React from 'react';
import { motion } from 'framer-motion';
import { Check, Compass, Eye, ShieldCheck, PenTool, LayoutGrid } from 'lucide-react';
import Container from '../components/common/Container';
import HeroBanner from '../components/common/HeroBanner';
import Breadcrumb from '../components/common/Breadcrumb';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';

const processPhases = [
  {
    num: '01',
    phase: 'Briefing & Conception',
    title: 'Defining Spatial Vision',
    desc: 'The beginning of our project coordinates with intensive alignment workshops. We draft client checklists containing volume requests, lifestyle habits, preferred timber or stone profiles, solar requirements, and structural constraints.',
    deliverables: [
      'Lifestyle & Programmatic space brief.',
      'Initial site context and daylight path report.',
      'Target budget and cost envelope analysis.',
      'Schematic zoning code compliance review.',
    ],
    callout: 'Aligning lifestyle programs with site constraints sets the physical context for drawing blueprints.',
    icon: Compass,
  },
  {
    num: '02',
    phase: 'Schematic Design',
    title: 'Drafting Volumetric Forms',
    desc: 'Our design draftsmanship starts by carving layout configurations and masses. We model 3D structures showing wall cantilevers, courtyard pockets, window lines, and material transitions, letting you inspect the design volume before detail work.',
    deliverables: [
      'Volumetric floor plans and layout maps.',
      '3D photo-realistic digital renders.',
      'Initial structural system specifications.',
      'Travertine and raw wood sample panels.',
    ],
    callout: 'Visualizing spatial relationships and natural shadows before generating detailed engineering models.',
    icon: PenTool,
  },
  {
    num: '03',
    phase: 'Design Development',
    title: 'Detail Engineering & Sourcing',
    desc: 'Generating technical blueprints for construction permits. We write exact drawings for carpentry joinery, map precise lighting circuitry slots, choose granite and timber grades, and coordinate steel structural engineering calculations.',
    deliverables: [
      'Permit application blueprint sheets.',
      'Joinery and cabinet technical drawings.',
      'Lighting, wiring, and HVAC layouts.',
      'Final materials specification invoice sheets.',
    ],
    callout: 'Millimetric detailing bridges the gap between digital models and physical construction site grids.',
    icon: LayoutGrid,
  },
  {
    num: '04',
    phase: 'Construction Management',
    title: 'General Execution & Oversight',
    desc: 'Our chief engineer and principal managers supervise the project site. We direct general contracting crews, perform structural loading tests, audit mechanical plumbing networks, and verify carpentry alignments to build the concept safely.',
    deliverables: [
      'Daily site logs and weekly drone video updates.',
      'Subcontractor coordination and quality audits.',
      'Materials sourcing testing verification.',
      'Structural compression concrete checks.',
    ],
    callout: 'Supervising site tolerances ensures raw timbers and stone slabs are laid without aesthetic deviations.',
    icon: ShieldCheck,
  },
];

const Process = () => {
  return (
    <div className="bg-white">
      {/* 1. HERO BANNER */}
      <HeroBanner
        title="Our Design Process"
        subtitle="How D'Crew Studio translates conceptual geometries into completed luxury properties."
        tag="The Project Journey"
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600"
      />

      {/* 2. BREADCRUMB */}
      <Breadcrumb items={[{ name: 'Our Process', path: '/process' }]} />

      {/* 3. NARRATIVE INTRODUCTION */}
      <section className="py-20 bg-white">
        <Container className="max-w-3xl text-center">
          <SectionTitle
            tag="Methodology"
            title="Rigorous Coordination"
            subtitle="Explore our operational timeline. We operate as an integrated design-build collective, providing a single contract framework for both drawing and building."
            align="center"
          />
        </Container>
      </section>

      {/* 4. CHRONOLOGICAL PHASES */}
      <section className="pb-24 bg-white">
        <Container className="flex flex-col gap-24 relative pl-8 sm:pl-16 ml-0 border-l border-gray-100 max-w-5xl mx-auto">
          {processPhases.map((phase, idx) => {
            const Icon = phase.icon;
            return (
              <motion.div
                key={phase.num}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start group"
              >
                {/* Floating Timeline Node */}
                <div className="absolute -left-[45px] sm:-left-[77px] top-1.5 w-[25px] h-[25px] sm:w-[35px] sm:h-[35px] rounded-full border border-secondary flex items-center justify-center font-serif text-[10px] sm:text-xs text-secondary bg-white group-hover:bg-secondary group-hover:text-white transition-all duration-300 z-10 shadow-sm">
                  {phase.num}
                </div>

                {/* Left Side: Deliverables and Description (Span 7) */}
                <div className="lg:col-span-7 flex flex-col items-start">
                  <span className="text-[10px] font-sans font-semibold tracking-widest text-secondary uppercase mb-2">
                    Phase {phase.num} / {phase.phase}
                  </span>
                  
                  <h3 className="text-2xl font-serif font-light text-primary mb-4 transition-colors group-hover:text-secondary">
                    {phase.title}
                  </h3>

                  <p className="text-textDark/85 font-sans text-sm font-light leading-relaxed mb-6">
                    {phase.desc}
                  </p>

                  <h4 className="font-sans font-semibold text-[9px] tracking-widest uppercase text-primary mb-3">
                    Milestone Deliverables
                  </h4>
                  
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full">
                    {phase.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="flex gap-2 text-[11px] font-sans font-light text-textDark/80">
                        <Check className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Side: Editorial Callout & Icon (Span 5) */}
                <div className="lg:col-span-5 bg-bgLight border border-gray-100 p-8 shadow-sm flex flex-col gap-5 mt-6 lg:mt-0 relative overflow-hidden group-hover:border-secondary/35 transition-colors">
                  <div className="w-9 h-9 flex items-center justify-center text-secondary bg-white border border-gray-200">
                    <Icon className="w-4 h-4" />
                  </div>
                  <p className="font-serif text-sm font-light italic text-primary leading-relaxed">
                    "{phase.callout}"
                  </p>
                  
                  {/* Subtle corner detail */}
                  <div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b border-secondary/20" />
                </div>

              </motion.div>
            );
          })}
        </Container>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="py-20 bg-primary text-white text-center">
        <Container className="max-w-2xl mx-auto flex flex-col items-center gap-6">
          <span className="text-secondary font-sans font-semibold text-[10px] sm:text-[11px] uppercase tracking-[0.25em] block">
            Start Your Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-light">
            Ready to initiate our design schematics?
          </h2>
          <p className="text-gray-400 font-sans text-xs sm:text-sm font-light leading-relaxed max-w-lg mb-4">
            Get in touch with our principal designers to set up an introductory consultation.
          </p>
          <Button href="/contact" variant="gold">
            Begin Consultation
          </Button>
        </Container>
      </section>

    </div>
  );
};

export default Process;
