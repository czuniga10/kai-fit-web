import AnimateOnScroll from './AnimateOnScroll';

export default function Problem() {
  const struggles = [
    { icon: '😤', text: 'You start strong then lose momentum by week 2' },
    { icon: '📅', text: 'You plan to work out \u201ctomorrow\u201d \u2014 every single day' },
    { icon: '😔', text: "You know exactly what to do, you just don't do it" },
    { icon: '🔄', text: "You've tried 5 different apps and nothing sticks" },
  ];

  return (
    <section>
      <div
        className="py-24 px-6"
        style={{
          background: 'linear-gradient(180deg, #0A1628 0%, #081020 50%, #0A1628 100%)',
        }}
      >
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll>
            {/* Main quote */}
            <div className="text-center mb-16">
              <div className="inline-flex mb-6">
                <span className="px-4 py-1.5 rounded-full text-sm font-semibold text-kai-sky/80"
                  style={{ background: 'rgba(61,174,245,0.08)', border: '1px solid rgba(61,174,245,0.15)' }}>
                  Sound familiar?
                </span>
              </div>
              <blockquote className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight max-w-3xl mx-auto">
                "You know what to do.{' '}
                <span className="gradient-text">
                  You just need someone to hold you accountable.
                </span>
                "
              </blockquote>
              <p className="text-white/50 text-lg mt-6 max-w-xl mx-auto">
                Motivation is temporary. Accountability is what creates lasting change.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Struggle cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {struggles.map((item, i) => (
              <AnimateOnScroll key={i} delay={i + 1}>
                <div className="glass-card rounded-2xl p-5 flex items-center gap-4">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <p className="text-white/70 text-base">{item.text}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Bridge */}
          <AnimateOnScroll className="text-center mt-16">
            <p className="text-white/40 text-lg">
              That's exactly why we built{' '}
              <span className="text-white font-semibold">Kai.</span>
            </p>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
