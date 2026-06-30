import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

/**
 * Premium Button Component
 * Features Framer Motion micro-animations, multiple luxury variations,
 * and support for both router Links and standard anchor tags.
 */
const Button = ({
  children,
  onClick,
  href = '',
  type = 'button',
  variant = 'primary', // primary | secondary | gold | gold-outline | text
  size = 'md', // sm | md | lg
  disabled = false,
  icon: Icon = null,
  iconPosition = 'right', // left | right
  className = '',
  fullWidth = false,
  ...props
}) => {
  // Styles configuration
  const baseStyles = 'relative overflow-hidden group z-10 inline-flex items-center justify-center font-sans font-medium tracking-widest uppercase transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-secondary/50 disabled:opacity-50 disabled:pointer-events-none';
  
  const sizeStyles = {
    sm: 'text-[10px] px-5 py-2.5 gap-1.5',
    md: 'text-[11px] px-8 py-3.5 gap-2',
    lg: 'text-[12px] px-10 py-4.5 gap-2.5',
  };

  const variantStyles = {
    primary: 'text-white border border-primary shadow-md',
    secondary: 'text-primary hover:text-white border border-primary',
    gold: 'text-white border border-secondary shadow-md',
    'gold-outline': 'text-secondary border border-secondary hover:text-white',
    text: 'bg-transparent text-primary hover:text-secondary px-0 py-1 border-b border-transparent hover:border-secondary tracking-widest font-semibold',
  };

  const defaultBgColors = {
    primary: 'bg-primary',
    secondary: 'bg-transparent',
    gold: 'bg-secondary',
    'gold-outline': 'bg-transparent',
  };

  const hoverMaskColors = {
    primary: 'bg-secondary',
    secondary: 'bg-primary',
    gold: 'bg-primary',
    'gold-outline': 'bg-secondary',
  };


  // Motion variants for button container
  const buttonVariants = {
    hover: { 
      y: -2,
      transition: { duration: 0.2, ease: 'easeOut' }
    },
    tap: { 
      scale: 0.98,
      transition: { duration: 0.1 }
    }
  };

  // Motion variants for standard arrows/icons
  const iconVariants = {
    hover: { 
      x: iconPosition === 'right' ? 4 : -4,
      transition: { duration: 0.2, ease: 'easeInOut' }
    }
  };

  const renderContent = () => (
    <motion.span 
      className="flex items-center justify-center gap-2"
      whileHover="hover"
    >
      {Icon && iconPosition === 'left' && (
        <motion.span variants={iconVariants}>
          <Icon className={`${size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4'}`} />
        </motion.span>
      )}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && (
        <motion.span variants={iconVariants}>
          <Icon className={`${size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4'}`} />
        </motion.span>
      )}
    </motion.span>
  );

  const classes = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${fullWidth ? 'w-full' : ''} ${className}`;

  // If href is provided, render either Link or standard anchor
  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel');
    
    if (isExternal) {
      return (
        <motion.a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          {...props}
        >
          {variant !== 'text' && (
            <>
              <span className={`absolute inset-0 ${defaultBgColors[variant]} -z-20`} />
              <span className={`absolute inset-0 ${hoverMaskColors[variant]} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-[0.16,1,0.3,1] -z-10`} />
            </>
          )}
          {renderContent()}
        </motion.a>
      );
    }

    return (
      <MotionLink
        to={href}
        className={classes}
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        {...props}
      >
        {variant !== 'text' && (
          <>
            <span className={`absolute inset-0 ${defaultBgColors[variant]} -z-20`} />
            <span className={`absolute inset-0 ${hoverMaskColors[variant]} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-[0.16,1,0.3,1] -z-10`} />
          </>
        )}
        {renderContent()}
      </MotionLink>
    );

  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      {...props}
    >
      {variant !== 'text' && (
        <>
          <span className={`absolute inset-0 ${defaultBgColors[variant]} -z-20`} />
          <span className={`absolute inset-0 ${hoverMaskColors[variant]} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-[0.16,1,0.3,1] -z-10`} />
        </>
      )}
      {renderContent()}
    </motion.button>
  );
};

export default Button;
