'use client';

import PhoneMockup from './PhoneMockup';

export default function Hero() {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 px-6 overflow-hidden">
      {/* Background gradient orbs */}
      <div
        className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #1A5FB4 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #3DAEF5 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div className="animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{ background: 'rgba(61,174,245,0.1)', border: '1px solid rgba(61,174,245,0.2)' }}>
              <span className="w-2 h-2 rounded-full bg-kai-sky animate-pulse-slow" />
              <span className="text-kai-sky text-sm font-semibold">Early Access — Waitlist Open</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl font-black leading-[1.05] mb-6 tracking-tight">
              Stop Falling Off.{' '}
              <span className="gradient-text block">Start Showing Up.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-white/65 text-xl leading-relaxed mb-10 max-w-lg">
              Kai is your AI-powered fitness accountability coach — daily
              check-ins, personalized guidance, and the push you need to{' '}
              <em className="text-white/85 not-italic font-medium">finally stay consistent.</em>
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button onClick={scrollToWaitlist} className="kai-btn-primary text-lg">
                Join the Free Waitlist →
              </button>
              <button
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 rounded-full border border-white/15 text-white/70 font-semibold hover:bg-white/5 transition-colors"
              >
                See how it works
              </button>
            </div>

            {/* Social proof dots */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {['#1A5FB4', '#1B7AD4', '#3DAEF5', '#4FC3F7', '#7DD3F7'].map((color, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-kai-dark"
                    style={{ background: `linear-gradient(135deg, ${color}, ${color}88)` }}
                  />
                ))}
              </div>
              <p className="text-white/50 text-sm">
                <span className="text-white font-semibold">47</span> people already on the waitlist
              </p>
            </div>
          </div>

          {/* Right: phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-6 h-10 rounded-full border border-white/30 flex items-start justify-center p-1.5">
          <div className="w-1 h-2.5 bg-white rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
