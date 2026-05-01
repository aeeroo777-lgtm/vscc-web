'use client';

import React, { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Play, Star } from 'lucide-react';
import BlurText from './BlurText';

const programs = [
  'CA Foundation',
  'ACCA',
  'CFA',
  'B.Com',
  'XI/XII Commerce',
];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef?.current;
    if (!video) return;
    video?.play()?.catch(() => {});
  }, []);

  return (
    <section
      className="relative overflow-visible"
      style={{ height: '1000px' }}
      aria-label="Hero section"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        poster="/images/vscc-hero.jpg"
        className="absolute left-0 w-full h-auto object-contain z-0"
        style={{ top: '20%' }}
        aria-hidden="true"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
          type="video/mp4"
        />
      </video>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/10 z-[1]" aria-hidden="true" />
      {/* Bottom fade gradient — 300px */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[2] pointer-events-none"
        style={{
          height: '300px',
          background:
            'linear-gradient(to bottom, transparent 0%, rgba(3,3,3,0.85) 60%, #030303 100%)',
        }}
        aria-hidden="true"
      />
      {/* Noise texture */}
      <div className="noise-overlay z-[3]" aria-hidden="true" />
      {/* Hero Content */}
      <div
        className="relative z-10 flex flex-col items-center text-center px-4"
        style={{ paddingTop: '150px' }}
      >
        {/* Announcement Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <div className="liquid-glass rounded-full px-5 py-2.5 inline-flex items-center gap-3 border border-white/15">
            <span className="flex items-center gap-1 text-accent">
              <Star size={12} fill="currentColor" />
              <span className="text-xs font-body font-medium text-white/90">
                4.5★ Rated Commerce Institute in Lucknow
              </span>
            </span>
            <span className="w-px h-3 bg-white/20" aria-hidden="true" />
            <span className="text-xs font-body font-light text-white/60 hidden sm:inline">
              Trusted by toppers &amp; future professionals.
            </span>
          </div>
        </motion.div>

        {/* Heading — BlurText */}
        <h1
          className="font-heading italic leading-[0.85] tracking-[-0.04em] max-w-3xl mb-6 text-white"
          style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}
        >
          <BlurText text="Build Your Future" delay={0.2} wordDelay={0.1} />
          <br />
          <BlurText
            text="In Commerce & Finance"
            className="text-gradient-accent"
            delay={0.5}
            wordDelay={0.08}
          />
        </h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="max-w-xl text-sm md:text-base font-body font-light text-white/65 leading-relaxed mb-10 px-4"
        >
          Premier coaching for XI, XII, B.Com, CA, CFA, ACCA, CS &amp; CMA
          aspirants — blending expert mentorship, academic excellence, and
          career-focused learning.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16"
        >
          <a
            href="#contact"
            className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-body font-medium text-white inline-flex items-center gap-2"
          >
            Book a Free Counseling Session
            <ArrowUpRight size={15} strokeWidth={2} />
          </a>
          <button className="inline-flex items-center gap-2 text-sm font-body font-medium text-white/70 hover:text-white transition-colors group">
            <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/40 transition-colors">
              <Play size={12} fill="currentColor" />
            </span>
            Watch Campus Tour
          </button>
        </motion.div>

        {/* Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          className="flex flex-wrap items-center justify-center gap-3 px-4"
        >
          <span className="liquid-glass rounded-full px-4 py-1.5 text-[11px] font-body font-medium text-white/50 uppercase tracking-widest border border-white/10">
            Programs Offered
          </span>
          {programs?.map((program, i) => (
            <span
              key={program}
              className="font-heading italic text-white/80 hover:text-white transition-colors cursor-default"
              style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
              }}
            >
              {program}
              {i < programs?.length - 1 && (
                <span className="text-white/20 ml-3 not-italic font-body font-light text-sm">
                  /
                </span>
              )}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}