'use client';

import { useState } from 'react';
import AnimateOnScroll from './AnimateOnScroll';

const GOALS = [
  { value: '', label: 'Select your goal...' },
  { value: 'lose-weight', label: 'Lose weight' },
  { value: 'gain-muscle', label: 'Gain muscle' },
  { value: 'be-productive', label: 'Be more productive / active' },
];

const REFERRALS = [
  { value: '', label: 'How did you hear about us?' },
  { value: 'instagram', label: 'Instagram' },
  { value: 'tiktok', label: 'TikTok' },
  { value: 'x', label: 'X (Twitter)' },
  { value: 'reddit', label: 'Reddit' },
  { value: 'friend', label: 'Friend / Word of mouth' },
  { value: 'other', label: 'Other' },
];

export default function WaitlistForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    goal: '',
    referral: '',
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.goal) return;

    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please check your connection and try again.');
    }
  };

  return (
    <section
      id="waitlist"
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0A1628 0%, #081020 100%)' }}
    >
      {/* Background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-10 pointer-events-none blur-3xl"
        style={{ background: 'radial-gradient(ellipse, #3DAEF5 0%, transparent 70%)' }}
      />

      <div className="max-w-xl mx-auto relative">
        <AnimateOnScroll className="text-center mb-12">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-kai-sky mb-4"
            style={{ background: 'rgba(61,174,245,0.08)', border: '1px solid rgba(61,174,245,0.15)' }}
          >
            Join the Waitlist
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Your accountability<br />
            <span className="gradient-text">journey starts here</span>
          </h2>
          <p className="text-white/55 text-lg">
            Free during beta. Be the first to know when Kai launches.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={1}>
          {status === 'success' ? (
            /* Success state */
            <div
              className="rounded-3xl p-10 text-center"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(61,174,245,0.2)',
              }}
            >
              <div className="text-6xl mb-5">🎉</div>
              <h3 className="text-white text-2xl font-black mb-3">
                You're on the list!
              </h3>
              <p className="text-white/65 text-lg leading-relaxed">
                Check your email — we've sent you a confirmation.
                We'll reach out the moment Kai is ready for you.
              </p>
              <div className="mt-8 p-4 rounded-2xl"
                style={{ background: 'rgba(61,174,245,0.08)', border: '1px solid rgba(61,174,245,0.15)' }}>
                <p className="text-kai-sky text-sm font-medium">
                  Share Kai with a friend who needs this too 👇
                </p>
                <p className="text-white/50 text-sm mt-1">kai-fit.com</p>
              </div>
            </div>
          ) : (
            /* Form */
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl p-8 sm:p-10 space-y-5"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {/* First Name */}
              <div>
                <label className="block text-white/70 text-sm font-medium mb-2" htmlFor="firstName">
                  First Name *
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Your first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  autoComplete="given-name"
                  className="kai-input"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-white/70 text-sm font-medium mb-2" htmlFor="email">
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  className="kai-input"
                />
              </div>

              {/* Goal */}
              <div>
                <label className="block text-white/70 text-sm font-medium mb-2" htmlFor="goal">
                  Your Goal *
                </label>
                <select
                  id="goal"
                  name="goal"
                  value={formData.goal}
                  onChange={handleChange}
                  required
                  className="kai-input"
                >
                  {GOALS.map((g) => (
                    <option key={g.value} value={g.value} disabled={g.value === ''}>
                      {g.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Referral */}
              <div>
                <label className="block text-white/70 text-sm font-medium mb-2" htmlFor="referral">
                  How did you hear about us?
                </label>
                <select
                  id="referral"
                  name="referral"
                  value={formData.referral}
                  onChange={handleChange}
                  className="kai-input"
                >
                  {REFERRALS.map((r) => (
                    <option key={r.value} value={r.value} disabled={r.value === ''}>
                      {r.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Error message */}
              {status === 'error' && (
                <div
                  className="rounded-xl px-4 py-3 text-sm"
                  style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', color: '#fca5a5' }}
                >
                  {errorMsg}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="kai-btn-primary w-full text-lg mt-2"
              >
                {status === 'loading' ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Joining waitlist...
                  </span>
                ) : (
                  'Join the Free Waitlist →'
                )}
              </button>

              <p className="text-white/30 text-xs text-center pt-1">
                No credit card required. Unsubscribe anytime.
              </p>
            </form>
          )}
        </AnimateOnScroll>
      </div>
    </section>
  );
}
