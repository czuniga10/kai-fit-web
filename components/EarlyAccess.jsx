'use client';

import AnimateOnScroll from './AnimateOnScroll';

export default function EarlyAccess() {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll>
          <div
            className="relative rounded-3xl p-12 text-center overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #1A5FB4 0%, #1B7AD4 50%, #3DAEF5 100%)',
              boxShadow: '0 40px 100px rgba(26,95,180,0.4)',
            }}
          >
            {/* Background pattern */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />

            {/* Content */}
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)' }}>
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="text-white text-sm font-semibold">Early Access Open</span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
                Join 47 people already <br className="hidden sm:block" />
                on the waitlist
              </h2>

              <p className="text-white/75 text-xl mb-10 max-w-lg mx-auto leading-relaxed">
                Early access members get first priority, beta features, and a
                founding discount. Don't miss out.
              </p>

              {/* Stats row */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-10">
                {[
                  { value: '47', label: 'Waitlist members' },
                  { value: 'Free', label: 'During beta' },
                  { value: '< 60s', label: 'Daily check-in' },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className="text-white text-3xl font-black">{stat.value}</p>
                    <p className="text-white/60 text-sm font-medium mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={scrollToWaitlist}
                className="inline-flex items-center gap-2 px-10 py-5 rounded-full font-black text-lg transition-all hover:scale-105"
                style={{ background: 'white', color: '#1A5FB4', boxShadow: '0 8px 32px rgba(0,0,0,0.2)' }}
              >
                Claim Your Spot →
              </button>

              <p className="text-white/50 text-sm mt-4">
                No credit card. Cancel anytime.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
