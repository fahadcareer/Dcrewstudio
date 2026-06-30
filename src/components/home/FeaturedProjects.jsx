import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import Card from '../common/Card';
import Button from '../common/Button';

const projects = [
  {
    id: 1,
    title: 'The Obsidian Residence',
    subtitle: 'High-Contrast Waterfront Villa',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800',
    href: '/portfolio/obsidian-residence',
    aspectRatio: 'portrait',
  },
  {
    id: 2,
    title: 'Aura Living Pavilion',
    subtitle: 'Warm Minimalism Living Space',
    category: 'Interior Design',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800',
    href: '/portfolio/aura-living-pavilion',
    aspectRatio: 'square',
  },
  {
    id: 3,
    title: 'The Concrete Gridhouse',
    subtitle: 'Brutalist Framework Concept',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800',
    href: '/portfolio/concrete-gridhouse',
    aspectRatio: 'square',
  },
  {
    id: 4,
    title: 'Helix Office Monolith',
    subtitle: 'Parametric Concrete Facade',
    category: 'Construction',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800',
    href: '/portfolio/helix-monolith',
    aspectRatio: 'portrait',
  },
];

const FeaturedProjects = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
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
    <section className="py-24 bg-white">
      <Container>
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <SectionTitle
            tag="Selected Work"
            title="Monolithic Creations"
            subtitle="Explore private residences, curated interiors, and sustained structures developed by our creative studio."
            align="left"
            className="mb-0 max-w-2xl"
          />
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="shrink-0"
          >
            <Button href="/portfolio" variant="gold-outline" icon={ArrowRight}>
              Full Gallery
            </Button>
          </motion.div>
        </div>

        {/* Offset Asymmetry Masonry Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {/* Left Column (No top offset) */}
          <div className="flex flex-col gap-8 lg:gap-12">
            <motion.div variants={itemVariants}>
              <Card
                title={projects[0].title}
                subtitle={projects[0].subtitle}
                category={projects[0].category}
                image={projects[0].image}
                href={projects[0].href}
                variant="project"
                aspectRatio={projects[0].aspectRatio}
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Card
                title={projects[1].title}
                subtitle={projects[1].subtitle}
                category={projects[1].category}
                image={projects[1].image}
                href={projects[1].href}
                variant="project"
                aspectRatio={projects[1].aspectRatio}
              />
            </motion.div>
          </div>

          {/* Right Column (Offset top margin on desktop to break alignment symmetry) */}
          <div className="flex flex-col gap-8 lg:gap-12 md:pt-20">
            <motion.div variants={itemVariants}>
              <Card
                title={projects[2].title}
                subtitle={projects[2].subtitle}
                category={projects[2].category}
                image={projects[2].image}
                href={projects[2].href}
                variant="project"
                aspectRatio={projects[2].aspectRatio}
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Card
                title={projects[3].title}
                subtitle={projects[3].subtitle}
                category={projects[3].category}
                image={projects[3].image}
                href={projects[3].href}
                variant="project"
                aspectRatio={projects[3].aspectRatio}
              />
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default FeaturedProjects;
