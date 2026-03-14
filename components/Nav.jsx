'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-kai-dark/90 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-kai-deep to-kai-sky flex items-center justify-center glow-blue-sm overflow-hidden">
            <Image
              src="/kai-logo.svg"
              alt="Kai logo"
              width={32}
              height={32}
              className="w-8 h-8"
              style={{ filter: 'brightness(0) invert(1)' }}
              priority
            />
          </div>
          <span className="text-white font-bold text-xl tracking-tight">
            kai
          </span>
        </div>

        {/* CTA */}
        <button
          onClick={scrollToWaitlist}
          className="kai-btn-primary !py-3 !px-6 !text-sm"
        >
          Join Waitlist
        </button>
      </div>
    </nav>
  );
}
