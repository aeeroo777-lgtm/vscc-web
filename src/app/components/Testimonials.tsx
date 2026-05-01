'use client';

import React from 'react';
import { Quote } from 'lucide-react';
import SectionReveal from './SectionReveal';
import BlurText from './BlurText';

const testimonials = [
  {
    quote:
      'The atmosphere is really very positive and motivating. VSCC helped me become more confident academically — something I never expected from a coaching centre.',
    name: 'Nitya Bagga',
    role: 'CA Foundation Student',
    initials: 'NB',
  },
  {
    quote:
      'The teaching style is modern, friendly, and focused on real understanding rather than rote learning. My grades improved significantly within the first month.',
    name: 'Anshu Kapoor',
    role: 'B.Com Graduate',
    initials: 'AK',
  },
  {
    quote:
      'VSCC made commerce genuinely enjoyable while helping me improve my academic performance significantly. Dr. Saxena\u2019s approach is unlike any other educator I\u2019ve met.',
    name: 'Akshay Yadav',
    role: 'Class XII Commerce',
    initials: 'AY',
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 md:py-32 px-4 sm:px-8 lg:px-16 max-w-screen-xl mx-auto"
      aria-labelledby="testimonials-heading"
    >
      <SectionReveal className="text-center mb-14">
        <div className="liquid-glass rounded-full px-4 py-1.5 inline-block mb-6 border border-white/15">
          <span className="text-[11px] font-body font-medium text-accent uppercase tracking-widest">
            Success Stories
          </span>
        </div>
        <h2
          id="testimonials-heading"
          className="font-heading italic text-white"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: '0.9' }}
        >
          <BlurText text="What our students say." delay={0.1} wordDelay={0.08} />
        </h2>
      </SectionReveal>

      {/* 3-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <SectionReveal key={t.name} delay={i * 0.12}>
            <div className="liquid-glass rounded-2xl p-7 md:p-8 flex flex-col gap-6 border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
              {/* Quote icon */}
              <Quote
                size={22}
                className="text-accent/50 flex-shrink-0"
                strokeWidth={1.5}
              />

              {/* Quote text */}
              <p className="font-body font-light text-white/70 text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/8">
                <div className="w-9 h-9 rounded-full liquid-glass border border-white/15 flex items-center justify-center flex-shrink-0">
                  <span className="font-heading italic text-white/80 text-xs">
                    {t.initials}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-body font-medium text-white text-sm">
                    {t.name}
                  </span>
                  <span className="font-body font-light text-white/45 text-xs">
                    {t.role}
                  </span>
                </div>
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}