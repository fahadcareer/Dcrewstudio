import React from 'react';

/**
 * Reusable Vector Logo Component for D'Crew Studio
 * Recreates the exact concentric-arc letter 'd' monogram and thin typography in vector SVG format.
 * Renders with perfect clarity on high-DPI/Retina screens and adapts color dynamically.
 */
const Logo = ({ className = '', scrolled = false, mobileMenuOpen = false }) => {
  // Determine color class: white on dark hero header, charcoal (#171717) when scrolled
  const colorClass = scrolled || mobileMenuOpen ? 'text-primary' : 'text-white';

  return (
    <svg
      viewBox="0 0 220 52"
      className={`h-full w-auto fill-current ${colorClass} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Concentric Arc 'd' Monogram Icon (Centered in a 52x52 frame) */}
      <g transform="translate(0, 0)">
        {/* Outer Arc (Radius 21, center 26,26) */}
        <path
          d="M 47 26 A 21 21 0 1 1 26 5"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        {/* Middle Arc (Radius 14, center 26,26) */}
        <path
          d="M 40 26 A 14 14 0 1 1 26 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        {/* Inner Arc (Radius 7, center 26,26) */}
        <path
          d="M 33 26 A 7 7 0 1 1 26 19"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        {/* Vertical Stem of the 'd' */}
        <path
          d="M 47 26 L 47 5"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
      </g>

      {/* Brand Typography (Uses system sans-serif or Poppins loaded in index.html) */}
      {/* d'crew */}
      <text
        x="62"
        y="28"
        fontFamily="'Poppins', sans-serif"
        fontWeight="200"
        fontSize="24"
        letterSpacing="0.06em"
        fill="currentColor"
      >
        d'crew
      </text>

      {/* studio */}
      <text
        x="63"
        y="45"
        fontFamily="'Poppins', sans-serif"
        fontWeight="300"
        fontSize="10"
        letterSpacing="0.48em"
        fill="currentColor"
      >
        studio
      </text>
    </svg>
  );
};

export default Logo;
