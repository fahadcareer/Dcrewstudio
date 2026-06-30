import React from 'react';

/**
 * Container Component
 * Standardizes max-widths, horizontal paddings, and alignment across the site.
 */
const Container = ({
  children,
  className = '',
  as: Component = 'div',
  clean = false,
}) => {
  return (
    <Component
      className={`max-w-7xl mx-auto ${
        clean ? '' : 'px-4 sm:px-6 lg:px-8'
      } ${className}`}
    >
      {children}
    </Component>
  );
};

export default Container;
