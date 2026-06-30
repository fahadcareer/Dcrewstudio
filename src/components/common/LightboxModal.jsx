import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Reusable Fullscreen Lightbox Modal
 * Displays high-resolution images in a luxury slideshow layout.
 * Supports keyboard controls and smooth animations.
 */
const LightboxModal = ({
  isOpen,
  onClose,
  images = [],
  currentIndex = 0,
}) => {
  const [activeIdx, setActiveIdx] = useState(currentIndex);

  // Synchronize index state with prop changes
  useEffect(() => {
    setActiveIdx(currentIndex);
  }, [currentIndex, isOpen]);

  // Handle keyboard events (ESC to close, arrows to slide)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && images.length > 1) handleNext();
      if (e.key === 'ArrowLeft' && images.length > 1) handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    // Lock body scrolling
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, activeIdx, images]);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <AnimatePresence>
      {isOpen && images.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-primary/95 backdrop-blur-sm p-4 sm:p-8"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between w-full z-10 text-white pb-4">
            <span className="font-sans text-[10px] font-semibold tracking-widest uppercase text-secondary">
              Gallery / {String(activeIdx + 1).padStart(2, '0')} of {String(images.length).padStart(2, '0')}
            </span>
            <button
              onClick={onClose}
              className="p-2 text-white/70 hover:text-white transition-colors focus:outline-none"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Central Image Showcase */}
          <div className="relative flex-grow flex items-center justify-center">
            {/* Image Slide transition */}
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIdx}
                src={images[activeIdx]}
                alt={`Selected image ${activeIdx + 1}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="max-h-[70vh] sm:max-h-[80vh] max-w-[90vw] object-contain shadow-2xl select-none"
              />
            </AnimatePresence>

            {/* Left Slider Arrow (Conditional on multiple images) */}
            {images.length > 1 && (
              <button
                onClick={handlePrev}
                className="absolute left-0 sm:left-4 p-3 bg-white/5 hover:bg-white/10 text-white rounded-full transition-colors focus:outline-none"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}

            {/* Right Slider Arrow */}
            {images.length > 1 && (
              <button
                onClick={handleNext}
                className="absolute right-0 sm:right-4 p-3 bg-white/5 hover:bg-white/10 text-white rounded-full transition-colors focus:outline-none"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Bottom Space for styling stability */}
          <div className="h-6 w-full hidden sm:block pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LightboxModal;
