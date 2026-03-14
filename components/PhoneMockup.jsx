export default function PhoneMockup() {
  return (
    <div className="relative mx-auto animate-float" style={{ width: '260px', maxWidth: '100%' }}>
      {/* Outer glow */}
      <div
        className="absolute inset-0 rounded-[2.8rem] blur-2xl opacity-40 -z-10"
        style={{
          background: 'linear-gradient(180deg, #1A5FB4 0%, #3DAEF5 100%)',
          transform: 'scale(0.88) translateY(8%)',
        }}
      />

      {/* Phone frame */}
      <div
        className="relative rounded-[2.8rem] overflow-hidden"
        style={{
          border: '1.5px solid rgba(255,255,255,0.12)',
          background: 'linear-gradient(180deg, #0A1628 0%, #0d1f35 100%)',
          boxShadow:
            '0 32px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)',
        }}
      >
        {/* Dynamic island */}
        <div className="flex justify-center pt-4 pb-2">
          <div
            className="w-24 h-7 rounded-full"
            style={{ background: '#000' }}
          />
        </div>

        {/* Screen content */}
        <div className="px-5 pb-8 pt-2">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-white/50 text-xs">Good morning</p>
              <p className="text-white font-semibold text-sm">Chad 👋</p>
            </div>
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-white text-sm"
              style={{ background: 'linear-gradient(135deg, #1A5FB4, #3DAEF5)' }}
            >
              K
            </div>
          </div>

          {/* Streak card */}
          <div
            className="rounded-2xl p-4 mb-3"
            style={{ background: 'linear-gradient(135deg, #1A5FB4 0%, #1B7AD4 100%)' }}
          >
            <div className="flex items-center justify-between mb-1">
              <p className="text-white/70 text-xs font-medium">Current Streak</p>
              <span className="text-lg">🔥</span>
            </div>
            <p className="text-white text-2xl font-black mb-1">14 days</p>
            <div className="flex gap-1">
              {Array.from({ length: 7 }).map((_, i) => (
                <div
                  key={i}
                  className="flex-1 h-1.5 rounded-full"
                  style={{ background: i < 6 ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.25)' }}
                />
              ))}
            </div>
          </div>

          {/* Chat messages */}
          <div className="space-y-2.5">
            {/* Kai message */}
            <div className="flex items-start gap-2">
              <div
                className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 font-black text-white text-xs"
                style={{ background: 'linear-gradient(135deg, #1A5FB4, #3DAEF5)' }}
              >
                K
              </div>
              <div
                className="rounded-2xl rounded-tl-sm px-3 py-2.5 max-w-[80%]"
                style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <p className="text-white text-xs leading-relaxed">
                  How was your workout today? 💪
                </p>
              </div>
            </div>

            {/* User reply */}
            <div className="flex justify-end">
              <div
                className="rounded-2xl rounded-tr-sm px-3 py-2.5 max-w-[80%]"
                style={{ background: 'linear-gradient(135deg, #1A5FB4, #1B7AD4)' }}
              >
                <p className="text-white text-xs leading-relaxed">
                  Crushed 45 min cardio! ✅
                </p>
              </div>
            </div>

            {/* Kai response */}
            <div className="flex items-start gap-2">
              <div
                className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 font-black text-white text-xs"
                style={{ background: 'linear-gradient(135deg, #1A5FB4, #3DAEF5)' }}
              >
                K
              </div>
              <div
                className="rounded-2xl rounded-tl-sm px-3 py-2.5 max-w-[80%]"
                style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <p className="text-white text-xs leading-relaxed">
                  Amazing! 14 days straight 🎯 You're unstoppable!
                </p>
              </div>
            </div>
          </div>

          {/* Check-in button */}
          <div className="mt-4">
            <div
              className="w-full rounded-full py-2.5 text-center text-white text-xs font-bold"
              style={{ background: 'linear-gradient(135deg, #1A5FB4, #3DAEF5)' }}
            >
              Daily Check-in ✓
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
