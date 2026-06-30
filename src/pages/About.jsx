import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Hammer, ArrowRight } from 'lucide-react';
import Container from '../components/common/Container';
import HeroBanner from '../components/common/HeroBanner';
import Breadcrumb from '../components/common/Breadcrumb';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { sitePartners } from '../data/siteData';

const About = () => {
  const values = [
    {
      icon: Sparkles,
      title: 'Aesthetic Purity',
      desc: 'We strive for visual quietness, balancing structural weight, raw material grains, and natural daylight schemas to design balanced environments.',
    },
    {
      icon: Shield,
      title: 'Architectural Rigor',
      desc: 'Engineering layouts with millimeter precision. We coordinate closely with code inspectors and site builders to execute concepts without compromise.',
    },
    {
      icon: Hammer,
      title: 'Material Honesty',
      desc: 'We celebrate genuine materials. Exposed concrete, structured timber, and raw stone tiles are applied to expose their natural strength and age gracefully.',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <div className="bg-white">
      {/* 1. HERO BANNER */}
      <HeroBanner
        title="The Studio Collective"
        subtitle="A collaborative of visionaries, architects, and engineering craftspeople."
        tag="About D'Crew"
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600"
      />

      {/* 2. BREADCRUMB */}
      <Breadcrumb items={[{ name: 'About Us', path: '/about' }]} />

      {/* 3. STUDIO PHILOSOPHY SECTION */}
      <section className="py-24 bg-white">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          <div className="lg:col-span-5">
            <SectionTitle
              tag="Our Creed"
              title="Form, Void, and Travertine."
              align="left"
              className="mb-0"
            />
          </div>
          <div className="lg:col-span-7 font-sans text-sm font-light leading-relaxed text-textDark/85 flex flex-col gap-6">
            <p>
              D’Crew Studio is a multi-disciplinary architecture, interior design, and general construction studio crafting bespoke properties globally. We approach projects not as singular builds, but as cohesive narratives that bridge the gap between design theory and physical execution.
            </p>
            <p>
              By housing architectural planning, joinery specifications, and onsite construction services under a single roof, we eliminate the traditional friction between drawing boards and concrete slabs. This integrated format grants our team control over final execution details.
            </p>
          </div>
        </Container>
      </section>

      {/* 4. CORE VALUES SECTION */}
      <section className="py-20 bg-bgLight">
        <Container>
          <SectionTitle
            tag="The Standard"
            title="Our Principles"
            subtitle="The fundamental guidelines that drive our drafts, choices, and executions."
            align="center"
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-white p-8 border border-gray-100 flex flex-col gap-4 shadow-sm hover:shadow-luxury hover:border-secondary/45 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 flex items-center justify-center border border-gray-100 text-secondary bg-bgLight group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-lg font-light text-primary group-hover:text-secondary transition-colors duration-300">
                    {val.title}
                  </h3>
                  <p className="text-textDark/80 font-sans text-xs font-light leading-relaxed">
                    {val.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      {/* 5. TEAM / THE COLLECTIVE SECTION */}
      <section className="py-24 bg-white">
        <Container>
          <SectionTitle
            tag="The Minds"
            title="The Design Partners"
            subtitle="Meet the directors shaping our projects and engineering site work."
            align="center"
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {sitePartners.map((partner, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex flex-col gap-5 group"
              >
                {/* Portrait container */}
                <div className="aspect-[3/4] overflow-hidden bg-bgLight border border-gray-100">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-103 transition-all duration-500"
                    loading="lazy"
                  />
                </div>
                
                {/* Bio text details */}
                <div>
                  <h3 className="font-serif text-lg text-primary group-hover:text-secondary transition-colors duration-300">
                    {partner.name}
                  </h3>
                  <span className="text-[10px] font-sans font-semibold tracking-widest text-secondary uppercase block mb-3">
                    {partner.role}
                  </span>
                  <p className="text-textDark/80 font-sans text-xs font-light leading-relaxed">
                    {partner.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* 6. STRONG CALL-TO-ACTION (CTA) SECTION */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        {/* Background texture line overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200" 
          alt="Studio architecture model" 
          className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
        />

        <Container className="relative z-20">
          <div className="max-w-2xl">
            <span className="text-secondary font-sans font-semibold text-[10px] sm:text-[11px] uppercase tracking-[0.25em] mb-4 block">
              Collaborate With Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light leading-tight mb-6">
              Do you have a project in mind? Let's design its blueprint.
            </h2>
            <p className="text-gray-400 font-sans text-sm font-light leading-relaxed mb-8 max-w-lg">
              We specialize in custom residential constructions, commercial environments, and bespoke joinery fit-outs. Connect with our principal partners.
            </p>
            <Button href="/contact" variant="gold" icon={ArrowRight}>
              Initiate Project
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default About;
