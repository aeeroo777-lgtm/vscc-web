'use client';

import React, { useEffect, useRef, useState } from 'react';

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function SectionReveal({
  children,
  className = '',
  delay = 0,
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(() => setVisible(true), delay * 1000);
          observer.disconnect();
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`section-fade-in ${visible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}