'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import HlsVideo from './HlsVideo';
import BlurText from './BlurText';
import SectionReveal from './SectionReveal';

export default function StartSection() {
  return (
    <section
      id="courses"
      className="relative overflow-hidden"
      style={{ minHeight: '80vh' }}
      aria-labelledby="start-heading"
    >
      {/* HLS Video Background */}
      <HlsVideo
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 video-overlay-darker z-[1]" aria-hidden="true" />
      <div className="noise-overlay z-[2]" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-32 md:py-40">
        <SectionReveal>
          <div className="liquid-glass rounded-full px-4 py-1.5 inline-block mb-8 border border-white/15">
            <span className="text-[11px] font-body font-medium text-accent uppercase tracking-widest">
              Why VSCC
            </span>
          </div>
        </SectionReveal>

        <h2
          id="start-heading"
          className="font-heading italic text-white max-w-2xl mb-6"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '0.9' }}
        >
          <BlurText text="You dream it." delay={0.1} wordDelay={0.1} />
          <br />
          <BlurText
            text="We guide it."
            className="text-gradient-accent"
            delay={0.4}
            wordDelay={0.1}
          />
        </h2>

        <SectionReveal delay={0.3}>
          <p className="max-w-lg text-sm md:text-base font-body font-light text-white/60 leading-relaxed mb-10 px-4">
            VSCC combines strategic academic planning, personal mentorship, and
            modern teaching methods to prepare you not just for exams — but for
            a career in finance and commerce.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.5}>
          <a
            href="#features"
            className="inline-flex items-center gap-2 liquid-glass-strong rounded-full px-6 py-3 text-sm font-body font-medium text-white"
          >
            Explore Courses
            <ArrowUpRight size={15} strokeWidth={2} />
          </a>
        </SectionReveal>
      </div>
    </section>
  );
}