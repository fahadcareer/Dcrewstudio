import React from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';

/**
 * Reusable Breadcrumb Component
 * Handles site navigation context display with consistent margins and separators.
 * 
 * @param {Array} items - List of pathway nodes: [{ name: 'Home', path: '/' }, { name: 'Portfolio', path: '/portfolio' }]
 */
const Breadcrumb = ({ items = [] }) => {
  return (
    <div className="bg-bgLight border-b border-gray-100 py-3.5">
      <Container>
        <nav className="flex items-center flex-wrap gap-2 text-[10px] sm:text-[11px] font-sans font-semibold uppercase tracking-widest text-textDark/60">
          <Link 
            to="/" 
            className="hover:text-secondary transition-colors"
          >
            Home
          </Link>
          
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            
            return (
              <React.Fragment key={idx}>
                {/* Gold slash divider */}
                <span className="text-secondary/60">/</span>
                
                {isLast ? (
                  <span className="text-secondary select-none">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    to={item.path}
                    className="hover:text-secondary transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </Container>
    </div>
  );
};

export default Breadcrumb;
