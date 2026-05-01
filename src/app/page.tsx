import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/app/components/Hero';
import StartSection from '@/app/components/StartSection';
import FeaturesChess from '@/app/components/FeaturesChess';
import FeaturesGrid from '@/app/components/FeaturesGrid';
import Stats from '@/app/components/Stats';
import Testimonials from '@/app/components/Testimonials';
import CtaFooter from '@/app/components/CtaFooter';

export default function HomePage() {
  return (
    <div className="bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <div className="bg-background">
        <StartSection />
        <FeaturesChess />
        <FeaturesGrid />
        <Stats />
        <Testimonials />
        <CtaFooter />
      </div>
    </div>
  );
}