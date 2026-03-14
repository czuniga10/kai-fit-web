import AnimateOnScroll from './AnimateOnScroll';

const features = [
  {
    icon: '🔔',
    title: 'Daily Reminders',
    description:
      'Personalized nudges at the right time. Kai knows your schedule and sends check-ins that actually get you moving — not generic spam.',
    gradient: 'from-[#1A5FB4] to-[#1B7AD4]',
  },
  {
    icon: '⚡',
    title: 'Simple Check-in',
    description:
      "Done in under 60 seconds. Log your workout, mood, and progress with a few taps. No journaling essays — just what matters.",
    gradient: 'from-[#1B7AD4] to-[#2494E8]',
  },
  {
    icon: '🤖',
    title: 'AI Coach',
    description:
      'Kai learns your patterns, celebrates your wins, and gives real advice when you need it. Like a personal trainer in your pocket — without the cost.',
    gradient: 'from-[#2494E8] to-[#3DAEF5]',
  },
  {
    icon: '🔥',
    title: 'Streaks & Progress',
    description:
      "Watch your consistency compound. Streaks, milestones, and weekly reports show you exactly how far you've come.",
    gradient: 'from-[#3DAEF5] to-[#4FC3F7]',
  },
];

export default function Features() {
  return (
    <section className="py-24 px-6" id="features">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <AnimateOnScroll className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-kai-sky mb-4"
            style={{ background: 'rgba(61,174,245,0.08)', border: '1px solid rgba(61,174,245,0.15)' }}
          >
            Features
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Everything you need to{' '}
            <span className="gradient-text">stay on track</span>
          </h2>
          <p className="text-white/55 text-xl max-w-xl mx-auto">
            No fluff. Just the tools that actually build habits.
          </p>
        </AnimateOnScroll>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <AnimateOnScroll key={i} delay={i + 1}>
              <div className="glass-card rounded-3xl p-7 h-full flex flex-col hover:border-white/15 transition-colors group">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-2xl mb-5 group-hover:scale-105 transition-transform`}
                >
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-lg mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-white/55 text-sm leading-relaxed flex-1">
                  {feature.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
