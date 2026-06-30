import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Compass, Maximize2, User, Eye, ArrowRight, CheckCircle2 } from 'lucide-react';
import Container from '../components/common/Container';
import Breadcrumb from '../components/common/Breadcrumb';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import LightboxModal from '../components/common/LightboxModal';
import { siteProjects } from '../data/siteData';

const ProjectDetails = () => {
  const { projectId } = useParams();
  
  // Find current project in data registry
  const project = siteProjects.find((p) => p.id === projectId);

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(0);

  // If project does not exist
  if (!project) {
    return (
      <div className="py-24 text-center">
        <Container>
          <SectionTitle
            tag="Error"
            title="Project Not Found"
            subtitle="The project case study you requested does not exist in our studio archives."
            align="center"
          />
          <Button href="/portfolio" variant="primary">
            Return to Portfolio
          </Button>
        </Container>
      </div>
    );
  }

  const handleOpenLightbox = (index) => {
    setLightboxIdx(index);
    setLightboxOpen(true);
  };

  return (
    <div className="bg-white">
      
      {/* 1. LARGE HERO BANNER */}
      <section className="relative h-[50vh] sm:h-[60vh] min-h-[400px] bg-primary flex items-end pb-12 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <motion.img
            src={project.image}
            alt={project.title}
            initial={{ scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent" />
        </div>

        {/* Heading content */}
        <Container className="relative z-10 w-full text-white">
          <div className="max-w-3xl">
            <span className="text-secondary font-sans font-semibold text-[10px] sm:text-[11px] uppercase tracking-[0.25em] mb-3 block">
              {project.category} / Case Study
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-tight">
              {project.title}
            </h1>
            <p className="text-gray-300 font-sans text-xs sm:text-sm font-light mt-3">
              {project.subtitle}
            </p>
          </div>
        </Container>
      </section>

      {/* 2. BREADCRUMB */}
      <Breadcrumb
        items={[
          { name: 'Portfolio', path: '/portfolio' },
          { name: project.title, path: `/portfolio/${project.id}` },
        ]}
      />

      {/* 3. PROJECT SPECS & OVERVIEW GRID */}
      <section className="py-24 bg-white">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Specifications list (Span 5) */}
          <div className="lg:col-span-5 bg-bgLight border border-gray-100 p-8 sm:p-10 shadow-sm flex flex-col gap-6">
            <h3 className="font-serif text-lg font-light text-primary border-b border-gray-200 pb-3">
              Project Specifications
            </h3>

            <div className="flex flex-col gap-4 font-sans text-xs font-light text-textDark/80">
              <div className="flex items-center justify-between py-1.5 border-b border-gray-200/50">
                <span className="flex items-center gap-2 text-primary font-semibold uppercase tracking-wider text-[9px]">
                  <User className="w-3.5 h-3.5 text-secondary" /> Client
                </span>
                <span>{project.overview.client}</span>
              </div>
              
              <div className="flex items-center justify-between py-1.5 border-b border-gray-200/50">
                <span className="flex items-center gap-2 text-primary font-semibold uppercase tracking-wider text-[9px]">
                  <MapPin className="w-3.5 h-3.5 text-secondary" /> Location
                </span>
                <span>{project.overview.location}</span>
              </div>

              <div className="flex items-center justify-between py-1.5 border-b border-gray-200/50">
                <span className="flex items-center gap-2 text-primary font-semibold uppercase tracking-wider text-[9px]">
                  <Calendar className="w-3.5 h-3.5 text-secondary" /> Completed
                </span>
                <span>{project.overview.year}</span>
              </div>

              <div className="flex items-center justify-between py-1.5 border-b border-gray-200/50">
                <span className="flex items-center gap-2 text-primary font-semibold uppercase tracking-wider text-[9px]">
                  <Maximize2 className="w-3.5 h-3.5 text-secondary" /> Spatial Area
                </span>
                <span>{project.overview.area}</span>
              </div>

              <div className="flex items-center justify-between py-1.5">
                <span className="flex items-center gap-2 text-primary font-semibold uppercase tracking-wider text-[9px]">
                  <Compass className="w-3.5 h-3.5 text-secondary" /> Project Type
                </span>
                <span>{project.overview.type}</span>
              </div>
            </div>
          </div>

          {/* Description & Materials list (Span 7) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div>
              <h3 className="font-serif text-2xl font-light text-primary mb-4">
                The Narrative
              </h3>
              <p className="text-textDark/85 font-sans text-sm font-light leading-relaxed mb-4">
                {project.description}
              </p>
              <p className="text-textDark/70 font-sans text-sm font-light leading-relaxed">
                By taking full design-build ownership of the project site, our studio ensured that materials tolerances, structural frames, and interior spatial joins were constructed exactly as specified in the blueprints. The resulting build harmonizes volume, texture, and light, reflecting a luxury minimalist environment.
              </p>
            </div>

            {/* Materials Checklist */}
            <div>
              <h3 className="font-sans font-semibold text-[10px] tracking-widest uppercase text-primary mb-4">
                Sourced Materials Palette
              </h3>
              
              <div className="flex flex-wrap gap-2.5">
                {project.materials.map((material, idx) => (
                  <span
                    key={idx}
                    className="font-sans text-[11px] font-light text-textDark bg-bgLight border border-gray-200/60 px-4 py-2 hover:border-secondary transition-colors duration-300"
                  >
                    {material}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </Container>
      </section>

      {/* 4. GALLERY SHOWCASE */}
      <section className="py-20 bg-bgLight border-t border-b border-gray-100">
        <Container>
          <SectionTitle
            tag="Details"
            title="Project Gallery"
            subtitle="Explore high-resolution visual detailing and interior angles."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {project.gallery.map((img, idx) => (
              <div
                key={idx}
                onClick={() => handleOpenLightbox(idx)}
                className="group relative aspect-square overflow-hidden bg-white border border-gray-100 cursor-pointer shadow-sm hover:shadow-luxury transition-all duration-300"
              >
                <img
                  src={img}
                  alt={`Gallery view ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-primary/45 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <div className="w-9 h-9 rounded-full bg-white/90 text-primary flex items-center justify-center transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. CONSTRUCTION TIMELINE MILESTONES */}
      <section className="py-24 bg-white">
        <Container className="max-w-3xl">
          <SectionTitle
            tag="Execution"
            title="The Construction Timeline"
            subtitle="The chronological milestone steps demonstrating how this development was executed."
            align="center"
          />

          <div className="mt-16 flex flex-col gap-10 relative pl-6 border-l border-secondary/15">
            {project.timeline.map((milestone, idx) => (
              <div key={idx} className="relative flex flex-col gap-2">
                {/* Timeline node */}
                <div className="absolute -left-[30px] top-1.5 w-[9px] h-[9px] rounded-full bg-secondary border border-white ring-4 ring-bgLight" />

                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-2">
                  <span className="font-sans font-semibold text-[10px] tracking-widest text-secondary uppercase">
                    {milestone.phase}
                  </span>
                  <span className="font-sans text-[10px] font-semibold text-textDark bg-bgLight px-2 py-0.5 border border-gray-200/50">
                    Duration: {milestone.duration}
                  </span>
                </div>

                <h4 className="font-serif text-lg font-light text-primary mt-1">
                  {milestone.description.split(' and ')[0]} {/* Grab summary */}
                </h4>
                
                <p className="text-textDark/80 font-sans text-xs font-light leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="py-20 bg-primary text-white text-center">
        <Container className="max-w-2xl mx-auto flex flex-col items-center gap-6">
          <span className="text-secondary font-sans font-semibold text-[10px] sm:text-[11px] uppercase tracking-[0.25em] block">
            Partner With Us
          </span>
          
          <h2 className="text-3xl sm:text-4xl font-serif font-light">
            Ready to design your physical space?
          </h2>
          
          <p className="text-gray-400 font-sans text-xs sm:text-sm font-light leading-relaxed max-w-lg mb-4">
            Connect with our managing partners for details on project licensing, schematics, and budgeting.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="gold">
              Inquire Now
            </Button>
            <Button href="/portfolio" variant="secondary" className="border-white text-white hover:bg-white hover:text-primary">
              Back to Portfolio
            </Button>
          </div>
        </Container>
      </section>

      {/* 7. LIGHTBOX MODAL */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={project.gallery}
        currentIndex={lightboxIdx}
      />
    </div>
  );
};

export default ProjectDetails;
