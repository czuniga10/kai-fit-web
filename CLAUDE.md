# Kai — AI Fitness Accountability App

## What This Is
Kai is an AI-powered fitness accountability coach app built by Chad Zuniga. It's currently in **Phase 1: Landing Page** to validate interest before building the full app.

## Current Task: Landing Page (kai-fit.com)
Build a sales-style landing page hosted on **Vercel** at **kai-fit.com** to collect waitlist signups.

### Landing Page Requirements
- **Style**: Sales page with app mockup images, feature highlights, emotional hook, waitlist form
- **Waitlist form collects**: Name, Email, Goal selection (Lose weight / Gain muscle / Be more productive), "How did you hear about us?" dropdown
- **Email handling**: Resend (send from marketing@kai-fit.com)
- **Logo**: Blue gradient circle with geometric white "K" lettermark (see `/assets/logo/` for files)
- **Brand colors**: Deep blue (#1A5FB4) → Sky blue (#3DAEF5 / #4FC3F7) gradient. White accents.
- **Tagline**: "Your AI Fitness Guide"
- **Deploy target**: Vercel (already configured for kai-fit.com)

### Landing Page Sections (suggested flow)
1. Hero — Bold headline, tagline, app mockup image, CTA to waitlist
2. Problem — "You know what to do. You just need someone to hold you accountable."
3. Features — Daily reminders, simple check-in, AI coach, streaks/progress
4. How it works — 3-step visual (Sign up → Get coached → Stay consistent)
5. Social proof / early access hook — "Join 100+ people on the waitlist"
6. Waitlist form — Name, email, goal, referral source
7. Footer — Links, branded email, social links

### Tech Stack (Landing Page)
- React (Next.js or Vite) — whatever is fastest for Vercel deploy
- Tailwind CSS for styling
- Resend for transactional/welcome emails
- Vercel for hosting

## The Full App (Phase 2-3, not building yet)
- React Native (Expo Managed), TypeScript
- Firebase (Auth, Firestore, FCM, Cloud Functions)
- OpenAI API (GPT-4o mini) for AI chat coach
- Stripe for payments
- See `PROJECT_SPEC.md` for full details

## Phased Plan
- **Phase 1 (this weekend)**: Landing page live on kai-fit.com with waitlist
- **Phase 2 (weeks 1-2)**: Mobile-responsive React web app for beta testing
- **Phase 3 (weeks 3-6)**: Iterate, then transition to native Expo app for App Store

## Key Decisions Made
- Logo: Use Image 1 (geometric K only) as primary icon, Image 2 (K + "AI") as alternate wordmark
- Email collection via Resend, not Firebase (for now)
- Traffic sources: Instagram, TikTok, X, Reddit fitness/productivity communities, word of mouth
- Pricing model (for later): 4-Month ($50) vs 8-Month ($80) with 50% earn-back incentive

## File Structure Convention
```
/assets/logo/       — Logo files (PNG, SVG)
/assets/mockups/    — App screen mockup images for landing page
/PROJECT_SPEC.md    — Full product & technical specification
```
