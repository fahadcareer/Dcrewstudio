import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Compass, Paintbrush, ClipboardList, Key, Eye, ArrowRight } from 'lucide-react';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import { siteServices } from '../../data/siteData';

// Map database service IDs to custom Lucide icons
const iconMap = {
  consultation: Compass,
  execution: Paintbrush,
  pmc: ClipboardList,
  'turn-key': Key,
  visualization: Eye,
};

const ServicesPreview = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <section className="py-24 bg-bgLight">
      <Container>
        <SectionTitle
          tag="Our Expertise"
          title="Disciplines of Execution"
          subtitle="Explore the custom project capabilities our studio delivers across design and construction."
          divider={true}
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {siteServices.map((service, index) => {
            const Icon = iconMap[service.id] || Compass;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="bg-white border border-gray-100 p-8 sm:p-10 flex flex-col justify-between group shadow-sm hover:shadow-luxury transform hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden"
              >
                {/* Subtle top indicator hover line */}
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-secondary group-hover:w-full transition-all duration-400" />
                
                <div>
                  {/* Service Number & Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl font-light text-secondary/30 group-hover:text-secondary transition-colors duration-300 tracking-wider">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="w-10 h-10 flex items-center justify-center border border-gray-100 text-secondary bg-bgLight transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                      <Icon className="w-4 h-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-serif font-light text-primary mb-3 group-hover:text-secondary transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-textDark/80 font-sans text-xs font-light leading-relaxed mb-8">
                    {service.desc}
                  </p>
                </div>

                <Link
                  to={`/services/${service.id}`}
                  className="inline-flex items-center text-[10px] font-sans font-semibold tracking-widest text-primary hover:text-secondary uppercase mt-auto gap-2 group/btn"
                >
                  <span>Discover Details</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1.5 transition-transform duration-300" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};

export default ServicesPreview;
