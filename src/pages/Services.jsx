import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Paintbrush, ClipboardList, Key, Eye, Check, ArrowRight } from 'lucide-react';
import Container from '../components/common/Container';
import HeroBanner from '../components/common/HeroBanner';
import Breadcrumb from '../components/common/Breadcrumb';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { siteServices } from '../data/siteData';

// Map icon string IDs to Lucide components
const iconMap = {
  consultation: Compass,
  execution: Paintbrush,
  pmc: ClipboardList,
  'turn-key': Key,
  visualization: Eye,
};

const Services = () => {
  return (
    <div className="bg-white">
      {/* 1. HERO BANNER */}
      <HeroBanner
        title="Disciplines of Design"
        subtitle="Full-service coordination spanning architectural engineering, joinery, and turn-key construction management."
        tag="Services We Offer"
        image="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600"
      />

      {/* 2. BREADCRUMB */}
      <Breadcrumb items={[{ name: 'Services', path: '/services' }]} />

      {/* 3. DETAILED SERVICES SECTION */}
      <section className="py-24 bg-white">
        <Container className="flex flex-col gap-24">
          <SectionTitle
            tag="Capabilities"
            title="End-to-End Execution"
            subtitle="Explore how we coordinate your design project from schematic draft lines to site key handovers."
            align="center"
            className="mb-8"
          />

          {siteServices.map((service, index) => {
            const IconComponent = iconMap[service.id] || Compass;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Image Block (Span 6) */}
                <div className={`lg:col-span-6 relative h-[300px] sm:h-[400px] ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}>
                  <div className="w-full h-full overflow-hidden bg-bgLight border border-gray-100 shadow-md">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  {/* Subtle float lines */}
                  <div className={`absolute -bottom-4 w-32 h-32 border-b border-secondary/20 -z-10 hidden sm:block ${
                    isEven ? '-left-4 border-l' : '-right-4 border-r'
                  }`} />
                </div>

                {/* Content Block (Span 6) */}
                <div className={`lg:col-span-6 flex flex-col items-start ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}>
                  {/* Title & Icon */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 flex items-center justify-center border border-gray-100 text-secondary bg-bgLight">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-sans font-semibold tracking-widest text-secondary uppercase">
                      0{index + 1} / Capability
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif font-light text-primary mb-3">
                    {service.title}
                  </h3>

                  <p className="text-secondary font-sans text-xs italic tracking-wider mb-5">
                    "{service.tagline}"
                  </p>

                  <p className="text-textDark/85 font-sans text-sm font-light leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  {/* Bullet Benefits list */}
                  <h4 className="font-sans font-semibold text-[10px] tracking-widest uppercase text-primary mb-3">
                    Deliverables & Benefits
                  </h4>
                  <ul className="flex flex-col gap-2.5 mb-8 w-full">
                    {service.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex gap-3 text-xs font-sans font-light text-textDark/80">
                        <Check className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5 stroke-[3]" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Button href={`/services/${service.id}`} variant="secondary" icon={ArrowRight}>
                    View Service Details
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </Container>
      </section>

      {/* 4. STRONG CTA SECTION */}
      <section className="py-20 bg-bgLight border-t border-gray-100">
        <Container className="text-center max-w-2xl mx-auto flex flex-col items-center">
          <SectionTitle
            tag="Let's Talk"
            title="Inquire About Our Capabilities"
            subtitle="Whether you need single-phase interior drafting or a complete integrated architectural design-build project, we scale our services to fit."
            align="center"
            className="mb-8"
          />
          <Button href="/contact" variant="gold">
            Schedule Consultation
          </Button>
        </Container>
      </section>
    </div>
  );
};

export default Services;
