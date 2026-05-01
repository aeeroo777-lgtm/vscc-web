'use client';

import React from 'react';
import { Zap, Palette, BarChart3, Shield } from 'lucide-react';
import SectionReveal from './SectionReveal';
import BlurText from './BlurText';
import Icon from '@/components/ui/AppIcon';


/*
BENTO GRID AUDIT:
Array has 4 cards: [FastGrowth, ModernTeaching, ResultOriented, TrustedEnvironment]
Row 1 (desktop, grid-cols-4): [col-1: FastGrowth cs-1] [col-2: ModernTeaching cs-1] [col-3: ResultOriented cs-1] [col-4: TrustedEnvironment cs-1]
Placed 4/4 cards ✓
*/

const features = [
  {
    icon: Zap,
    title: 'Fast Academic Growth',
    body: 'Focused mentorship and targeted practice sessions help students accelerate their learning curve — often improving by 2+ grades within a semester.',
  },
  {
    icon: Palette,
    title: 'Modern Teaching Style',
    body: 'Interactive sessions using visual aids, case studies, and real-world finance examples make complex concepts genuinely engaging and memorable.',
  },
  {
    icon: BarChart3,
    title: 'Result-Oriented',
    body: 'Consistent track record of strong academic results across CA Foundation, ACCA, B.Com and Board examinations. We measure success by yours.',
  },
  {
    icon: Shield,
    title: 'Trusted Environment',
    body: 'A safe, motivating, and discipline-focused atmosphere where students feel supported, challenged, and genuinely cared for by faculty.',
  },
];

export default function FeaturesGrid() {
  return (
    <section
      className="py-16 md:py-24 px-4 sm:px-8 lg:px-16 max-w-screen-xl mx-auto"
      aria-labelledby="features-grid-heading"
    >
      <SectionReveal className="text-center mb-12">
        <h2
          id="features-grid-heading"
          className="font-heading italic text-white mb-4"
          style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', lineHeight: '0.9' }}
        >
          <BlurText text="Why Students Choose VSCC" delay={0.1} wordDelay={0.07} />
        </h2>
        <p className="font-body font-light text-white/50 text-sm max-w-md mx-auto">
          Four pillars that define the VSCC difference — and why our students consistently outperform.
        </p>
      </SectionReveal>
      {/* 4-col grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features?.map((feature, i) => {
          const Icon = feature?.icon;
          return (
            <SectionReveal key={feature?.title} delay={i * 0.1}>
              {/* card: [FastGrowth] [ModernTeaching] [ResultOriented] [TrustedEnvironment] */}
              <div className="liquid-glass rounded-2xl p-6 md:p-8 flex flex-col gap-5 border border-white/10 hover:border-white/20 transition-all duration-300 h-full group">
                <div className="w-10 h-10 rounded-full liquid-glass border border-white/15 flex items-center justify-center flex-shrink-0 group-hover:border-accent/40 transition-colors">
                  <Icon size={18} className="text-accent" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="font-body font-semibold text-white text-base leading-tight">
                    {feature?.title}
                  </h3>
                  <p className="font-body font-light text-white/55 text-sm leading-relaxed">
                    {feature?.body}
                  </p>
                </div>
              </div>
            </SectionReveal>
          );
        })}
      </div>
    </section>
  );
}