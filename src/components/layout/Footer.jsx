import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Phone, Mail } from 'lucide-react';
import { Instagram, Twitter, Facebook } from '../common/Icons';
import Container from '../common/Container';
import Logo from '../common/Logo';


/**
 * Premium Dark Footer Component
 * Structured layout featuring business overview, quick links, contact channels,
 * and a stylized modern newsletter input field.
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Newsletter registration logic placeholder
  };

  return (
    <footer className="bg-primary text-gray-400 font-sans text-sm font-light pt-20 pb-8 border-t border-white/5">
      <Container>
        {/* Top Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
          
          {/* Column 1: Studio Description (Span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link to="/" className="flex items-center w-max h-[34px] sm:h-[42px]">
              <Logo scrolled={false} mobileMenuOpen={false} />
            </Link>
            <p className="text-gray-400 leading-relaxed font-light text-sm max-w-sm">
              An architectural and interior design collective crafting bespoke residential, hospitality, and commercial masterpieces. We construct narratives that transcend form and function, detailing the art of spaces.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://www.instagram.com/dcrewstudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/10 hover:border-secondary hover:text-white flex items-center justify-center transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://x.com/DCrewStudio0619"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/10 hover:border-secondary hover:text-white flex items-center justify-center transition-all duration-300 group"
                aria-label="Twitter"
              >
                <Twitter className="w-4.5 h-4.5 fill-current text-gray-400 group-hover:text-white group-hover:scale-110 transition-all" />
              </a>
              <a
                href="https://www.facebook.com/dcrewstudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/10 hover:border-secondary hover:text-white flex items-center justify-center transition-all duration-300 group"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Column 2: Studio Links (Span 3) */}
          <div className="lg:col-span-2 lg:col-start-6 flex flex-col gap-6">
            <h4 className="text-white font-sans font-semibold text-xs tracking-[0.2em] uppercase">
              The Studio
            </h4>
            <nav className="flex flex-col gap-3">
              <Link to="/about" className="hover:text-white transition-colors duration-300">
                About Us
              </Link>
              <Link to="/services" className="hover:text-white transition-colors duration-300">
                Our Services
              </Link>
              <Link to="/portfolio" className="hover:text-white transition-colors duration-300">
                Portfolio
              </Link>
              <Link to="/contact" className="hover:text-white transition-colors duration-300">
                Contact
              </Link>
            </nav>
          </div>

          {/* Column 3: Contact Info (Span 3) */}
          <div className="lg:col-span-2 lg:col-start-8 flex flex-col gap-6">
            <h4 className="text-white font-sans font-semibold text-xs tracking-[0.2em] uppercase">
              Get In Touch
            </h4>
            <div className="flex flex-col gap-4">
               <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  155, N Veli St, Arajar Salai, Simmakkal, Madurai Main, Madurai, Tamil Nadu 625001
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-secondary shrink-0" />
                <span>+91 96296 30202</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-secondary shrink-0" />
                <span>inquire@dcrewstudio.com</span>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter Subscription (Span 3) */}
          <div className="lg:col-span-3 lg:col-start-10 flex flex-col gap-6">
            <h4 className="text-white font-sans font-semibold text-xs tracking-[0.2em] uppercase">
              Newsletter
            </h4>
            <p className="leading-relaxed text-sm">
              Subscribe to receive updates on our design innovations and selected project releases.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <div className="relative border-b border-white/20 focus-within:border-secondary transition-colors duration-300 py-1.5">
                <input
                  type="email"
                  placeholder="Your email address"
                  required
                  className="bg-transparent border-none text-white placeholder-gray-500 focus:outline-none w-full pr-10 text-xs tracking-wider"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-secondary hover:text-white transition-colors p-1"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* Bottom copyright details */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {currentYear} D'Crew Studio. Developed by <a href="https://kubecentrix.in/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition-colors font-medium">Kubecentrix</a>. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
