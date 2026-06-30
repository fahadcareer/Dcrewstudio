import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Eye, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../components/common/Container';
import HeroBanner from '../components/common/HeroBanner';
import Breadcrumb from '../components/common/Breadcrumb';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import LightboxModal from '../components/common/LightboxModal';
import { siteProjects } from '../data/siteData';

const categories = ['All', 'Architecture', 'Interior Design', 'Construction'];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Lightbox Modal state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(0);

  // Filter projects based on selection
  const filteredProjects = activeCategory === 'All'
    ? siteProjects
    : siteProjects.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase());

  // Array of all filtered image URLs for lightbox scrolling
  const projectImages = filteredProjects.map((p) => p.image);

  const handleOpenLightbox = (e, index) => {
    e.preventDefault();
    e.stopPropagation();
    setLightboxIdx(index);
    setLightboxOpen(true);
  };

  return (
    <div className="bg-white">
      {/* 1. HERO BANNER */}
      <HeroBanner
        title="Bespoke Portfolio"
        subtitle="Selected residential structures, minimal lofts, and commercial monuments."
        tag="Selected Works"
        image="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1600"
      />

      {/* 2. BREADCRUMB */}
      <Breadcrumb items={[{ name: 'Portfolio', path: '/portfolio' }]} />

      {/* 3. CATEGORY FILTERS */}
      <section className="pt-20 pb-4 bg-white">
        <Container className="flex justify-center">
          <div className="flex items-center flex-wrap justify-center gap-6 border-b border-gray-100 pb-4 w-full max-w-xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="relative font-sans text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest py-1.5 focus:outline-none transition-colors duration-300 text-primary"
              >
                <span className={activeCategory === cat ? 'text-secondary' : 'text-primary/60 hover:text-primary'}>
                  {cat}
                </span>
                
                {/* Gold sliding underline indicator */}
                {activeCategory === cat && (
                  <motion.div
                    layoutId="portfolioActiveUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-secondary"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. PROJECTS GRID */}
      <section className="pb-24 pt-10 bg-white">
        <Container>
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => {
                const aspectClass = project.aspectRatio === 'portrait'
                  ? 'aspect-[3/4]'
                  : 'aspect-square';
                
                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="group relative overflow-hidden bg-bgLight"
                  >
                    {/* Project Image and Overlays */}
                    <div className={`relative w-full ${aspectClass} overflow-hidden`}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />

                      {/* Hover Overlay Mask */}
                      <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 sm:p-8" />

                      {/* Content (Visible on Hover in desktop, styled nicely) */}
                      <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                        
                        {/* Top: Category Tag */}
                        <div className="flex justify-between items-center w-full">
                          <span className="text-[10px] font-sans font-semibold tracking-widest text-secondary uppercase">
                            {project.category}
                          </span>
                          
                          {/* Quick Inspection Action (Lightbox trigger) */}
                          <button
                            onClick={(e) => handleOpenLightbox(e, idx)}
                            className="w-9 h-9 rounded-full bg-white/10 text-white hover:bg-white hover:text-primary flex items-center justify-center transition-all duration-300"
                            title="Quick view image"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Bottom: Project Description & Route Link */}
                        <div className="flex flex-col items-start gap-4">
                          <div>
                            <h3 className="text-xl sm:text-2xl font-serif font-light text-white leading-tight">
                              {project.title}
                            </h3>
                            <p className="text-gray-300 font-sans text-xs font-light mt-1">
                              {project.subtitle}
                            </p>
                          </div>
                          
                          <Link
                            to={`/portfolio/${project.id}`}
                            className="inline-flex items-center text-[10px] font-sans font-semibold tracking-widest text-secondary hover:text-white uppercase gap-2"
                          >
                            <span>Explore Case Study</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </Container>
      </section>

      {/* 5. STRONG INQUIRY CTA */}
      <section className="py-20 bg-bgLight border-t border-gray-100">
        <Container className="text-center max-w-2xl mx-auto flex flex-col items-center">
          <SectionTitle
            tag="Inquiries"
            title="Commission Our Services"
            subtitle="Connect with our design partners to discuss custom residential developments, penthouse interior designs, or commercial projects."
            align="center"
            className="mb-8"
          />
          <Button href="/contact" variant="gold">
            Begin Consultation
          </Button>
        </Container>
      </section>

      {/* 6. LIGHTBOX MODAL */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={projectImages}
        currentIndex={lightboxIdx}
      />
    </div>
  );
};

export default Portfolio;
