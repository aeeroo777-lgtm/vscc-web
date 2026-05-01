'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';


const navLinks = [
  { label: 'Courses', href: '#courses' },
  { label: 'Results', href: '#stats' },
  { label: 'CA Foundation', href: '#features' },
  { label: 'Success Stories', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-8 lg:px-16"
        role="navigation"
        aria-label="Main navigation"
      >
        <div
          className={`flex items-center justify-between py-3 px-4 sm:px-6 rounded-full transition-all duration-500 ${
            scrolled
              ? 'liquid-glass border border-white/15' :'bg-transparent'
          }`}
        >
          {/* Left: Logo */}
          <a
            href="#"
            className="flex items-center gap-3 min-w-0 flex-shrink-0"
            aria-label="VSCC Home"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="relative flex-shrink-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full liquid-glass border border-accent/30 flex items-center justify-center animate-pulse-glow">
                <span className="font-heading italic text-white text-sm sm:text-base font-normal leading-none">
                  VS
                </span>
              </div>
            </div>
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-white font-body font-semibold text-sm tracking-wide">
                VSCC
              </span>
              <span className="text-white/50 font-body font-light text-[10px] tracking-wider whitespace-nowrap">
                Dr. Vishal Saxena Commerce Classes
              </span>
            </div>
          </a>

          {/* Center: Nav Links (desktop) */}
          <div className="hidden lg:flex items-center gap-1 liquid-glass rounded-full px-2 py-1.5 border border-white/10">
            {navLinks?.map((link) => (
              <a
                key={link?.label}
                href={link?.href}
                className="px-4 py-1.5 text-xs font-body font-medium text-white/70 hover:text-white rounded-full hover:bg-white/8 transition-all duration-200 whitespace-nowrap"
              >
                {link?.label}
              </a>
            ))}
          </div>

          {/* Right: CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:flex items-center gap-1.5 bg-white text-black rounded-full px-4 py-2 text-xs font-body font-semibold hover:bg-white/90 transition-all duration-200 whitespace-nowrap"
            >
              Enroll Now
              <ArrowUpRight size={13} strokeWidth={2.5} />
            </a>
            <button
              className="lg:hidden text-white/80 hover:text-white transition-colors p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col"
          style={{ background: 'rgba(3,3,3,0.97)', backdropFilter: 'blur(20px)' }}
        >
          <div className="flex justify-end p-6">
            <button
              className="text-white/80 hover:text-white transition-colors p-2"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center flex-1 gap-6 pb-24">
            {navLinks?.map((link) => (
              <a
                key={link?.label}
                href={link?.href}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-heading italic text-white/80 hover:text-white transition-colors"
              >
                {link?.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 flex items-center gap-2 bg-white text-black rounded-full px-8 py-3 text-sm font-body font-semibold"
            >
              Enroll Now <ArrowUpRight size={14} />
            </a>
          </nav>
        </div>
      )}
    </>
  );
}