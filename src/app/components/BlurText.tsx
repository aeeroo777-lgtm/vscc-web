'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  wordDelay?: number;
}

export default function BlurText({
  text,
  className = '',
  delay = 0,
  wordDelay = 0.08,
}: BlurTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const words = text.split(' ');

  return (
    <span ref={ref} className={`inline ${className}`} aria-label={text}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={{ filter: 'blur(10px)', opacity: 0, y: 50 }}
          animate={
            inView
              ? { filter: 'blur(0px)', opacity: 1, y: 0 }
              : { filter: 'blur(10px)', opacity: 0, y: 50 }
          }
          transition={{
            duration: 0.7,
            delay: delay + i * wordDelay,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="inline-block mr-[0.25em]"
          aria-hidden="true"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}