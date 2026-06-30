import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Compass, Paintbrush, ClipboardList, Key, Check, ArrowRight, Eye } from 'lucide-react';
import Container from '../components/common/Container';
import HeroBanner from '../components/common/HeroBanner';
import Breadcrumb from '../components/common/Breadcrumb';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import LightboxModal from '../components/common/LightboxModal';
import { siteServices } from '../data/siteData';

// Map icon string IDs to Lucide components
const iconMap = {
  consultation: Compass,
  execution: Paintbrush,
  pmc: ClipboardList,
  'turn-key': Key,
  visualization: Eye,
};

const ServiceDetails = () => {
  const { serviceId } = useParams();
  
  // Find current service details in data array
  const service = siteServices.find((s) => s.id === serviceId);

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(0);

  // If service does not exist in dataset
  if (!service) {
    return (
      <div className="py-24 text-center">
        <Container>
          <SectionTitle
            tag="Error"
            title="Service Not Found"
            subtitle="The service route you requested does not exist in our studio registry."
            align="center"
          />
          <Button href="/services" variant="primary">
            Return to Services
          </Button>
        </Container>
      </div>
    );
  }

  const IconComponent = iconMap[service.id] || Compass;

  const handleOpenLightbox = (index) => {
    setLightboxIdx(index);
    setLightboxOpen(true);
  };

  return (
    <div className="bg-white">
      {/* 1. HERO BANNER */}
      <HeroBanner
        title={service.title}
        subtitle={service.tagline}
        tag="Services / Details"
        image={service.image}
      />

      {/* 2. BREADCRUMB */}
      <Breadcrumb
        items={[
          { name: 'Services', path: '/services' },
          { name: service.title, path: `/services/${service.id}` },
        ]}
      />

      {/* 3. IN-DEPTH OVERVIEW & BENEFITS */}
      <section className="py-24 bg-white">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Main Description */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-3 text-secondary">
              <IconComponent className="w-5 h-5" />
              <span className="font-sans font-semibold text-[10px] tracking-widest uppercase">
                Core Methodology
              </span>
            </div>
            
            <h2 className="text-3xl font-serif font-light leading-tight text-primary">
              Delivering high-end architectural systems under single contract responsibility.
            </h2>
            
            <p className="text-textDark/85 font-sans text-sm font-light leading-relaxed">
              {service.desc}
            </p>
            
            <p className="text-textDark/70 font-sans text-sm font-light leading-relaxed">
              Our multidisciplinary framework unites structural engineers, landscape designers, and spatial draftspeople under a unified management timeline. This ensures material consistency, accurate cost control, and minimal deviation from design blueprints.
            </p>
          </div>

          {/* Benefits Sidebar */}
          <div className="lg:col-span-5 bg-bgLight border border-gray-100 p-8 sm:p-10 shadow-sm flex flex-col gap-6">
            <h3 className="font-serif text-lg font-light text-primary border-b border-gray-200 pb-3">
              Service Advantages
            </h3>
            
            <ul className="flex flex-col gap-4">
              {service.benefits.map((benefit, idx) => (
                <li key={idx} className="flex gap-3 items-start text-xs font-sans font-light text-textDark/80">
                  <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5 stroke-[2.5]" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* 4. WORKFLOW PHASES */}
      <section className="py-20 bg-bgLight border-t border-b border-gray-100">
        <Container>
          <SectionTitle
            tag="Phases"
            title="The Process Workflow"
            subtitle="The operational stages detailing our deliverables during this discipline's execution."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {service.details.map((phase, idx) => (
              <div
                key={idx}
                className="bg-white p-8 border border-gray-100 shadow-sm relative group"
              >
                {/* Gold index overlay */}
                <span className="absolute top-6 right-6 font-serif text-3xl font-light text-secondary/20 group-hover:text-secondary transition-colors duration-300">
                  0{idx + 1}
                </span>
                
                <h4 className="font-serif text-lg font-light text-primary mb-3 mt-4">
                  {phase.title}
                </h4>
                
                <p className="text-textDark/80 font-sans text-xs font-light leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. WORK GALLERY GRID */}
      <section className="py-24 bg-white">
        <Container>
          <SectionTitle
            tag="Inspiration"
            title="Visual Deliverables"
            subtitle="Explore mock samples and completed components related to this discipline."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {service.gallery.map((imgUrl, idx) => (
              <div
                key={idx}
                onClick={() => handleOpenLightbox(idx)}
                className="group relative aspect-[4/3] overflow-hidden bg-bgLight border border-gray-100 cursor-pointer shadow-sm hover:shadow-luxury transition-all duration-300"
              >
                <img
                  src={imgUrl}
                  alt={`Service work ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Hover overlay button */}
                <div className="absolute inset-0 bg-primary/45 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-white/90 text-primary flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
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
            Ready to integrate this discipline into your next project?
          </h2>
          <p className="text-gray-400 font-sans text-xs sm:text-sm font-light leading-relaxed max-w-lg mb-4">
            Connect with our lead architects to schedule a design analysis and cost estimation.
          </p>
          <Button href="/contact" variant="gold" icon={ArrowRight}>
            Initiate Project Inquiry
          </Button>
        </Container>
      </section>

      {/* 7. LIGHTBOX MODAL */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={service.gallery}
        currentIndex={lightboxIdx}
      />
    </div>
  );
};

export default ServiceDetails;
