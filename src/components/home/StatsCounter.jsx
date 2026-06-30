import React from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import { useCountUp } from '../../hooks/useCountUp';

const StatItem = ({ target, label, suffix = '', duration = 0.45, delay = 0 }) => {
  const [count, countRef] = useCountUp(target, duration, delay);

  return (
    <div ref={countRef} className="flex flex-col items-center text-center p-4">
      <span className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-secondary mb-2 tracking-tight">
        {count}
        {suffix}
      </span>
      <span className="font-sans text-[10px] sm:text-xs font-semibold text-primary uppercase tracking-[0.2em]">
        {label}
      </span>
    </div>
  );
};

const StatsCounter = () => {
  const stats = [
    { target: 15, suffix: '+', label: 'Years of Expertise' },
    { target: 120, suffix: '+', label: 'Completed Masterworks' },
    { target: 45, suffix: '+', label: 'Design & Build Accolades' },
    { target: 98, suffix: '%', label: 'Client Retention' },
  ];

  return (
    <section className="relative z-10 -mt-10 sm:-mt-12 mb-12">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white border border-gray-100 shadow-luxury py-8 sm:py-10 grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-gray-100"
        >
          {stats.map((stat, idx) => (
            <StatItem
              key={idx}
              target={stat.target}
              suffix={stat.suffix}
              label={stat.label}
              delay={idx * 0.08}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default StatsCounter;
