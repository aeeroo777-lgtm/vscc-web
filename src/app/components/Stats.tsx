'use client';

import React from 'react';
import HlsVideo from './HlsVideo';
import SectionReveal from './SectionReveal';
import BlurText from './BlurText';

const stats = [
  { value: '4.5★', label: 'Google Rating' },
  { value: '200+', label: 'Student Reviews' },
  { value: 'CA/CFA', label: 'Professional Programs' },
  { value: '10 PM', label: 'Extended Study Hours' },
];

export default function Stats() {
  return (
    <section
      id="stats"
      className="relative overflow-hidden py-24 md:py-32 px-4"
      aria-labelledby="stats-heading"
    >
      {/* HLS Video Background — grayscale */}
      <HlsVideo
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0"
        grayscale
      />
      {/* Overlay */}
      <div className="absolute inset-0 video-overlay-darker z-[1]" aria-hidden="true" />
      <div className="noise-overlay z-[2]" aria-hidden="true" />
      {/* Glass Card */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <SectionReveal>
          <div className="liquid-glass rounded-3xl p-10 md:p-16 border border-white/15">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="liquid-glass rounded-full px-4 py-1.5 inline-block mb-6 border border-white/15">
                <span className="text-[11px] font-body font-medium text-accent uppercase tracking-widest">
                  By the Numbers
                </span>
              </div>
              <h2
                id="stats-heading"
                className="font-heading italic text-white"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', lineHeight: '0.9' }}
              >
                <BlurText text="Results that speak." delay={0.1} wordDelay={0.1} />
              </h2>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              {stats?.map((stat, i) => (
                <SectionReveal key={stat?.label} delay={i * 0.1}>
                  <div className="flex flex-col items-center text-center gap-2">
                    <span
                      className="font-heading italic text-white leading-none"
                      style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
                    >
                      {stat?.value}
                    </span>
                    <span className="font-body font-light text-white/50 text-xs uppercase tracking-widest">
                      {stat?.label}
                    </span>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}