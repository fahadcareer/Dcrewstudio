import React from 'react';
import Hero from '../components/home/Hero';
import AboutPreview from '../components/home/AboutPreview';
import ServicesPreview from '../components/home/ServicesPreview';
import FeaturedProjects from '../components/home/FeaturedProjects';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ProcessOverview from '../components/home/ProcessOverview';
import StatsCounter from '../components/home/StatsCounter';
import Testimonials from '../components/home/Testimonials';
import ContactCTA from '../components/home/ContactCTA';

/**
 * D'Crew Studio Main Home Page
 * Assembles all modular design sections.
 */
const Home = () => {
  return (
    <div className="relative">
      {/* 1. Hero Full Screen Image Slider */}
      <Hero />

      {/* 2. About Preview Narrative */}
      <AboutPreview />

      {/* 3. Services Preview Grid */}
      <ServicesPreview />

      {/* 4. Featured Projects Grid */}
      <FeaturedProjects />

      {/* 5. Why Choose Us Differentiators */}
      <WhyChooseUs />

      {/* 6. Process Journey Overview */}
      <ProcessOverview />

      {/* 7. Animated Statistics Counter Bar */}
      <StatsCounter />

      {/* 8. Client Testimonials Quote Slider */}
      <Testimonials />

      {/* 9. Contact Banner CTA */}
      <ContactCTA />
    </div>
  );
};

export default Home;
