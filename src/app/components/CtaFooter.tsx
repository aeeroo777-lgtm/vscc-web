'use client';

import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import HlsVideo from './HlsVideo';
import BlurText from './BlurText';
import SectionReveal from './SectionReveal';


export default function CtaFooter() {
  const [year] = useState(() => new Date()?.getFullYear());

  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* HLS Video Background */}
      <HlsVideo
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Overlay */}
      <div className="absolute inset-0 video-overlay-darker z-[1]" aria-hidden="true" />
      <div className="noise-overlay z-[2]" aria-hidden="true" />
      {/* CTA Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-32 pb-24 md:pt-40 md:pb-32">
        <SectionReveal>
          <div className="liquid-glass rounded-full px-4 py-1.5 inline-block mb-8 border border-white/15">
            <span className="text-[11px] font-body font-medium text-accent uppercase tracking-widest">
              Begin Your Journey
            </span>
          </div>
        </SectionReveal>

        <h2
          id="cta-heading"
          className="font-heading italic text-white max-w-3xl mb-6"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
            lineHeight: '0.85',
          }}
        >
          <BlurText text="Your academic" delay={0.1} wordDelay={0.1} />
          <br />
          <BlurText
            text="journey starts here."
            className="text-gradient-accent"
            delay={0.4}
            wordDelay={0.09}
          />
        </h2>

        <SectionReveal delay={0.3}>
          <p className="max-w-md text-sm md:text-base font-body font-light text-white/60 leading-relaxed mb-10 px-4">
            Book a free one-on-one counseling session with Dr. Vishal Saxena and
            discover the right academic path for your goals — CA, CFA, ACCA,
            B.Com, or Board excellence.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.5}>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="mailto:info@vscc.in"
              className="liquid-glass-strong rounded-full px-7 py-3 text-sm font-body font-medium text-white inline-flex items-center gap-2"
            >
              Book Counseling
              <ArrowUpRight size={15} strokeWidth={2} />
            </a>
            <a
              href="#courses"
              className="bg-white text-black rounded-full px-7 py-3 text-sm font-body font-semibold hover:bg-white/90 transition-all inline-flex items-center gap-2"
            >
              View Courses
            </a>
          </div>
        </SectionReveal>
      </div>
      {/* Footer Bar */}
      <div
        className="relative z-10 border-t px-4 sm:px-8 lg:px-16 py-5"
        style={{ borderColor: 'rgba(255,255,255,0.10)' }}
      >
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left: Brand */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full liquid-glass border border-accent/25 flex items-center justify-center">
              <span className="font-heading italic text-white/80 text-[10px]">VS</span>
            </div>
            <p className="font-body font-light text-white/40 text-xs whitespace-nowrap">
              &copy; {year} VSCC — Dr. Vishal Saxena Commerce Classes. All rights reserved.
            </p>
          </div>

          {/* Right: Links */}
          <nav className="flex items-center gap-6" aria-label="Footer navigation">
            {[
              { label: 'Privacy', href: '#' },
              { label: 'Admissions', href: '#courses' },
              { label: 'Contact', href: '#contact' },
            ]?.map((link) => (
              <a
                key={link?.label}
                href={link?.href}
                className="font-body font-medium text-white/40 hover:text-white/80 transition-colors text-xs tracking-wide"
              >
                {link?.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}