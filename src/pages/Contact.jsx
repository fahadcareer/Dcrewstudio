import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, ChevronDown, CheckCircle2 } from 'lucide-react';
import Container from '../components/common/Container';
import HeroBanner from '../components/common/HeroBanner';
import Breadcrumb from '../components/common/Breadcrumb';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { siteFaq } from '../data/siteData';

// FAQ Accordion Item Component
const FaqItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-100 py-5">
      <button
        onClick={onToggle}
        className="flex justify-between items-center w-full text-left font-serif text-lg font-light text-primary hover:text-secondary transition-colors focus:outline-none"
      >
        <span>{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-secondary shrink-0 ml-4"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pt-4 font-sans text-xs sm:text-sm font-light text-textDark/80 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Contact = () => {
  // Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Architecture',
    message: '',
  });

  // Accordion State
  const [openFaqIdx, setOpenFaqIdx] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const toggleFaq = (idx) => {
    setOpenFaqIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="bg-white">
      {/* 1. HERO BANNER */}
      <HeroBanner
        title="Engage Our Studio"
        subtitle="Get in touch to discuss luxury residential commissions, commercial headquarters, or interior spaces."
        tag="Contact Us"
        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600"
      />

      {/* 2. BREADCRUMB */}
      <Breadcrumb items={[{ name: 'Contact', path: '/contact' }]} />

      {/* 3. CONTACT FORM & OFFICE INFO GRID */}
      <section className="py-24 bg-white">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
          
          {/* Left Column: Form Sheets (Span 7) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {!formSubmitted ? (
                <motion.div
                  key="contact-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <SectionTitle
                    tag="Inquire"
                    title="Design Brief Request"
                    subtitle="Fill out the project details form below, and a managing partner will contact you."
                    align="left"
                    className="mb-8"
                  />
                  
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6 font-sans text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name input */}
                      <div className="flex flex-col gap-2 group">
                        <label htmlFor="name" className="font-semibold text-primary uppercase tracking-wider text-[9px] group-focus-within:text-secondary transition-colors duration-300">
                          Your Name *
                        </label>
                        <div className="relative">
                          <input
                            id="name"
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full border border-gray-200 focus:border-gray-300 focus:ring-0 p-3 bg-transparent placeholder-gray-400 font-light focus:outline-none transition-colors duration-300"
                            placeholder="e.g. Elena Rostova"
                          />
                          <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-secondary transition-all duration-300 group-focus-within:w-full" />
                        </div>
                      </div>
                      
                      {/* Email input */}
                      <div className="flex flex-col gap-2 group">
                        <label htmlFor="email" className="font-semibold text-primary uppercase tracking-wider text-[9px] group-focus-within:text-secondary transition-colors duration-300">
                          Email Address *
                        </label>
                        <div className="relative">
                          <input
                            id="email"
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full border border-gray-200 focus:border-gray-300 focus:ring-0 p-3 bg-transparent placeholder-gray-400 font-light focus:outline-none transition-colors duration-300"
                            placeholder="e.g. elena@lakehouse.com"
                          />
                          <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-secondary transition-all duration-300 group-focus-within:w-full" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Phone input */}
                      <div className="flex flex-col gap-2 group">
                        <label htmlFor="phone" className="font-semibold text-primary uppercase tracking-wider text-[9px] group-focus-within:text-secondary transition-colors duration-300">
                          Telephone Number
                        </label>
                        <div className="relative">
                          <input
                            id="phone"
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full border border-gray-200 focus:border-gray-300 focus:ring-0 p-3 bg-transparent placeholder-gray-400 font-light focus:outline-none transition-colors duration-300"
                            placeholder="e.g. +91 96296 30202"
                          />
                          <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-secondary transition-all duration-300 group-focus-within:w-full" />
                        </div>
                      </div>
                      
                      {/* Project Type select */}
                      <div className="flex flex-col gap-2 group">
                        <label htmlFor="projectType" className="font-semibold text-primary uppercase tracking-wider text-[9px] group-focus-within:text-secondary transition-colors duration-300">
                          Discipline Interest *
                        </label>
                        <div className="relative">
                          <select
                            id="projectType"
                            name="projectType"
                            required
                            value={formData.projectType}
                            onChange={handleInputChange}
                            className="w-full border border-gray-200 focus:border-gray-300 focus:ring-0 p-3 bg-transparent font-light focus:outline-none cursor-pointer transition-colors duration-300"
                          >
                            <option value="Architecture">Architectural Design</option>
                            <option value="Interior Design">Bespoke Interior Craft</option>
                            <option value="General Construction">General Construction</option>
                            <option value="Other">Other / Master-planning</option>
                          </select>
                          <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-secondary transition-all duration-300 group-focus-within:w-full" />
                        </div>
                      </div>
                    </div>

                    {/* Message input */}
                    <div className="flex flex-col gap-2 group">
                      <label htmlFor="message" className="font-semibold text-primary uppercase tracking-wider text-[9px] group-focus-within:text-secondary transition-colors duration-300">
                        Project Overview *
                      </label>
                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows="5"
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full border border-gray-200 focus:border-gray-300 focus:ring-0 p-3 bg-transparent placeholder-gray-400 font-light focus:outline-none resize-none transition-colors duration-300"
                          placeholder="Tell us about your plot location, space requirements, and style timeline..."
                        />
                        <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-secondary transition-all duration-300 group-focus-within:w-full" />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="mt-4 bg-primary text-white hover:bg-secondary py-4 px-8 font-sans font-semibold tracking-widest uppercase text-[10px] transition-colors duration-300 flex items-center justify-center gap-2 group focus:outline-none relative overflow-hidden z-10"
                    >
                      <span className="absolute inset-0 bg-secondary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-[0.16,1,0.3,1] -z-10" />
                      <span>Transmit Inquiry</span>
                      <Send className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="bg-bgLight border border-secondary/30 p-8 sm:p-12 flex flex-col items-center text-center gap-5 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <h3 className="font-serif text-2xl text-primary">
                    Transmission Received
                  </h3>
                  <p className="text-textDark/80 font-sans text-xs sm:text-sm font-light leading-relaxed max-w-sm">
                    Inquiry successfully routed. A studio principal partner will review your project brief and contact you within 24 hours to schedule a consultation.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="font-sans text-[10px] font-semibold text-secondary hover:text-primary tracking-widest uppercase border-b border-secondary hover:border-primary pb-0.5 pt-4 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Office Info & Socials (Span 5) */}
          <div className="lg:col-span-5 bg-bgLight border border-gray-100 p-8 sm:p-10 shadow-sm flex flex-col gap-8">
            <h3 className="font-serif text-lg font-light text-primary border-b border-gray-200 pb-3">
              Office HQ details
            </h3>

            {/* General Info */}
            <div className="flex flex-col gap-5 text-xs font-sans font-light text-textDark/80">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-primary uppercase text-[9px] tracking-wider mb-1">Office Address</p>
                  <p className="leading-relaxed font-sans text-xs">155, N Veli St, Arajar Salai, Simmakkal, Madurai Main, Madurai, Tamil Nadu 625001</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-primary uppercase text-[9px] tracking-wider mb-1">Telephone</p>
                  <p>+91 96296 30202</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-primary uppercase text-[9px] tracking-wider mb-1">Email Coordinates</p>
                  <p>inquire@dcrewstudio.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-primary uppercase text-[9px] tracking-wider mb-1">Office Hours</p>
                  <p>Mon - Fri: 09:00 - 18:00 CET</p>
                  <p className="text-gray-400 italic">Sat - Sun: By Appointment Only</p>
                </div>
              </div>
            </div>

            {/* Social handles */}
            <div className="border-t border-gray-200/60 pt-6">
              <h4 className="font-semibold text-primary uppercase text-[9px] tracking-wider mb-3">Connect Digitally</h4>
              <div className="flex gap-4 font-sans text-xs font-semibold text-secondary">
                <a href="https://www.instagram.com/dcrewstudio/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  INSTAGRAM
                </a>
                <span>/</span>
                <a href="https://x.com/DCrewStudio0619" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  TWITTER (X)
                </a>
                <span>/</span>
                <a href="https://www.facebook.com/dcrewstudio/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  FACEBOOK
                </a>
              </div>
            </div>
          </div>

        </Container>
      </section>

      {/* 4. PREMIUM styled MOCK MAP OVERLAY (Lighthouse-friendly) */}
      <section className="py-10 bg-white">
        <Container>
          <div className="relative w-full h-[350px] sm:h-[450px] bg-primary overflow-hidden flex items-center justify-center border border-gray-100 shadow-sm">
            {/* Mock Dark luxury grid background representing Map lines */}
            <div className="absolute inset-0 z-0 bg-neutral-900 opacity-90 select-none">
              {/* Fake abstract architectural site map overlay */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#B88E4A_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
              <div className="absolute top-[20%] bottom-[20%] left-[30%] right-[30%] border border-white/5" />
              <div className="absolute top-[40%] bottom-[40%] left-[10%] right-[10%] border-t border-b border-white/5" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-secondary/20 rounded-full animate-pulse" />
            </div>

            {/* Map label modal */}
            <div className="relative z-10 bg-primary/95 border border-secondary/30 max-w-sm p-8 text-center text-white mx-4 shadow-2xl flex flex-col items-center gap-4">
              <MapPin className="w-8 h-8 text-secondary" />
              <h4 className="font-serif text-lg">D'Crew Studio HQ</h4>
              <p className="font-sans text-xs font-light text-gray-300 leading-relaxed">
                155, N Veli St, Arajar Salai, Simmakkal, Madurai Main, Madurai, Tamil Nadu 625001
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 bg-secondary text-white hover:bg-white hover:text-primary py-3 px-6 font-sans font-semibold tracking-widest uppercase text-[9px] transition-all duration-300 shadow-md"
              >
                Launch Google Maps Navigation
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. FAQ ACCORDION SECTION */}
      <section className="py-24 bg-white border-t border-gray-100">
        <Container className="max-w-3xl">
          <SectionTitle
            tag="Questions"
            title="General FAQ"
            subtitle="Explore our standard operations, project coordinates, and general licensing policies."
            align="center"
          />

          <div className="mt-12 flex flex-col">
            {siteFaq.map((faq, idx) => (
              <FaqItem
                key={idx}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaqIdx === idx}
                onToggle={() => toggleFaq(idx)}
              />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
