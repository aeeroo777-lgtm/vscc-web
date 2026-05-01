'use client';

import React from 'react';
import { ArrowUpRight, TrendingUp } from 'lucide-react';
import AppImage from '@/components/ui/AppImage';
import SectionReveal from './SectionReveal';
import BlurText from './BlurText';

export default function FeaturesChess() {
  return (
    <section
      id="features"
      className="py-24 md:py-32 px-4 sm:px-8 lg:px-16 max-w-screen-xl mx-auto"
      aria-labelledby="features-heading">

      {/* Section Header */}
      <SectionReveal className="text-center mb-16">
        <div className="liquid-glass rounded-full px-4 py-1.5 inline-block mb-6 border border-white/15">
          <span className="text-[11px] font-body font-medium text-accent uppercase tracking-widest">
            Capabilities
          </span>
        </div>
        <h2
          id="features-heading"
          className="font-heading italic text-white"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: '0.9' }}>

          <BlurText text="Elite preparation." delay={0.1} wordDelay={0.09} />
          <br />
          <BlurText
            text="Real outcomes."
            className="text-gradient-accent"
            delay={0.4}
            wordDelay={0.1} />

        </h2>
      </SectionReveal>

      {/* Row 1 */}
      <SectionReveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 items-center">
          {/* Text Side */}
          <div className="flex flex-col justify-center gap-6 py-8 lg:py-12 order-2 lg:order-1">
            <h3
              className="font-heading italic text-white leading-tight"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)' }}>

              Designed for academic excellence.
            </h3>
            <p className="font-body font-light text-white/60 text-sm md:text-base leading-relaxed max-w-md">
              Our structured mentorship program pairs each student with
              experienced faculty who understand your individual learning pace.
              From concept building to exam strategy, every step is guided with
              precision and care — ensuring you don't just pass, but excel.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-body font-medium text-white/70 hover:text-white transition-colors group w-fit">

              <span className="border-b border-white/20 group-hover:border-white/60 transition-colors pb-0.5">
                Learn more
              </span>
              <ArrowUpRight size={14} strokeWidth={2} />
            </a>
          </div>

          {/* Visual Side */}
          <div className="relative order-1 lg:order-2">
            <div className="liquid-glass rounded-2xl overflow-hidden border border-white/10 aspect-[4/3]">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1fd9fdf36-1772919749603.png"
                alt="Students in a bright modern classroom with books and laptops, focused study environment"
                fill
                className="object-cover w-full h-full"
                sizes="(max-width: 768px) 100vw, 50vw" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" aria-hidden="true" />
            </div>
            {/* Floating stat */}
            <div className="absolute -bottom-4 -left-4 liquid-glass rounded-2xl px-5 py-3 border border-white/15">
              <div className="flex items-center gap-3">
                <TrendingUp size={18} className="text-accent" />
                <div>
                  <div className="text-white font-body font-semibold text-sm">Structured Learning</div>
                  <div className="text-white/50 font-body font-light text-xs">Personalized pace</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* Divider */}
      <div className="w-full h-px bg-white/8 my-4" aria-hidden="true" />

      {/* Row 2 */}
      <SectionReveal delay={0.1}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Visual Side */}
          <div className="relative">
            <div className="liquid-glass rounded-2xl overflow-hidden border border-white/10 aspect-[4/3]">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1ec3e9812-1772516149149.png"
                alt="Young professionals in a workshop setting, collaborative group discussion with warm lighting"
                fill
                className="object-cover w-full h-full"
                sizes="(max-width: 768px) 100vw, 50vw" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" aria-hidden="true" />
            </div>
            {/* Floating stat */}
            <div className="absolute -bottom-4 -right-4 liquid-glass rounded-2xl px-5 py-3 border border-white/15">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
                <div>
                  <div className="text-white font-body font-semibold text-sm">Career Workshops</div>
                  <div className="text-white/50 font-body font-light text-xs">Live &amp; Online</div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="flex flex-col justify-center gap-6 py-8 lg:py-12">
            <h3
              className="font-heading italic text-white leading-tight"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)' }}>

              Growth beyond marks.
            </h3>
            <p className="font-body font-light text-white/60 text-sm md:text-base leading-relaxed max-w-md">
              VSCC goes beyond textbooks. Our students gain real-world
              perspective through career guidance workshops, finance industry
              webinars, and mock interviews — building the professional
              confidence that employers and exam boards look for.
            </p>
            <a
              href="#testimonials"
              className="inline-flex items-center gap-2 text-sm font-body font-medium text-white/70 hover:text-white transition-colors group w-fit">

              <span className="border-b border-white/20 group-hover:border-white/60 transition-colors pb-0.5">
                See student success
              </span>
              <ArrowUpRight size={14} strokeWidth={2} />
            </a>
          </div>
        </div>
      </SectionReveal>
    </section>);

}