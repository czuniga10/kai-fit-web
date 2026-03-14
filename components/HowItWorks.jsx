import AnimateOnScroll from './AnimateOnScroll';

const steps = [
  {
    number: '01',
    title: 'Sign Up',
    description:
      'Join the waitlist and tell Kai your fitness goal. Lose weight, gain muscle, or just move more consistently — Kai adapts to you.',
    icon: '📝',
  },
  {
    number: '02',
    title: 'Get Coached',
    description:
      'Kai checks in daily, tracks your progress, and gives you personalized advice. Think of it as a coach in your pocket, available 24/7.',
    icon: '🤖',
  },
  {
    number: '03',
    title: 'Stay Consistent',
    description:
      'Build streaks, hit milestones, and watch accountability compound over time. Most people see a difference within 2 weeks.',
    icon: '🏆',
  },
];

export default function HowItWorks() {
  return (
    <section
      className="py-24 px-6 relative overflow-hidden"
      id="how-it-works"
      style={{ background: 'linear-gradient(180deg, #0A1628 0%, #0d1020 100%)' }}
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-5xl mx-auto relative">
        {/* Header */}
        <AnimateOnScroll className="text-center mb-20">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-kai-sky mb-4"
            style={{ background: 'rgba(61,174,245,0.08)', border: '1px solid rgba(61,174,245,0.15)' }}
          >
            How It Works
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Three steps to{' '}
            <span className="gradient-text">lasting results</span>
          </h2>
          <p className="text-white/55 text-xl max-w-md mx-auto">
            No complicated setup. No 47-step onboarding. Just real accountability.
          </p>
        </AnimateOnScroll>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop only) */}
          <div
            className="hidden lg:block absolute top-14 left-[16.66%] right-[16.66%] h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(61,174,245,0.3) 20%, rgba(61,174,245,0.3) 80%, transparent)' }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {steps.map((step, i) => (
              <AnimateOnScroll key={i} delay={i + 1}>
                <div className="flex flex-col items-center text-center">
                  {/* Step icon/number */}
                  <div className="relative mb-6">
                    <div
                      className="w-28 h-28 rounded-3xl flex items-center justify-center text-4xl mb-0"
                      style={{
                        background: 'linear-gradient(135deg, rgba(26,95,180,0.2) 0%, rgba(61,174,245,0.1) 100%)',
                        border: '1px solid rgba(61,174,245,0.2)',
                      }}
                    >
                      {step.icon}
                    </div>
                    {/* Step number badge */}
                    <div
                      className="absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center text-xs font-black text-white"
                      style={{ background: 'linear-gradient(135deg, #1A5FB4, #3DAEF5)' }}
                    >
                      {i + 1}
                    </div>
                  </div>

                  <h3 className="text-white font-black text-2xl mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white/55 text-base leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
