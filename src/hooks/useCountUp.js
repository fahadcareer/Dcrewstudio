import { useEffect, useState, useRef } from 'react';
import { useInView, animate } from 'framer-motion';

/**
 * Custom hook to count up to a number when the element enters the viewport.
 * Uses Framer Motion's animate utility.
 * 
 * @param {number} target - The number to count up to.
 * @param {number} duration - Animation duration in seconds (should keep under 0.5s for snappy luxury feel).
 * @param {number} delay - Animation delay in seconds.
 */
export function useCountUp(target, duration = 0.45, delay = 0) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, target, {
      duration,
      delay,
      ease: 'easeOut',
      onUpdate: (value) => setCount(Math.floor(value)),
    });

    return () => controls.stop();
  }, [target, duration, delay, isInView]);

  return [count, ref];
}
