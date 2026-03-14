import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const GOAL_LABELS = {
  'lose-weight': 'Lose Weight',
  'gain-muscle': 'Gain Muscle',
  'be-productive': 'Be More Productive',
};

const REFERRAL_LABELS = {
  instagram: 'Instagram',
  tiktok: 'TikTok',
  x: 'X (Twitter)',
  reddit: 'Reddit',
  friend: 'Friend / Word of Mouth',
  other: 'Other',
};

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, email, goal, referral } = body;

    // Basic validation
    if (!firstName || !email || !goal) {
      return Response.json(
        { error: 'First name, email, and goal are required.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    const goalLabel = GOAL_LABELS[goal] || goal;
    const referralLabel = REFERRAL_LABELS[referral] || referral || 'Not specified';

    // Send welcome email to the user
    await resend.emails.send({
      from: 'Kai <hello@kai-fit.com>',
      to: email,
      subject: "You're on the Kai waitlist! 🔥",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </head>
          <body style="margin:0;padding:0;background:#0A1628;font-family:system-ui,-apple-system,sans-serif;">
            <div style="max-width:600px;margin:0 auto;padding:40px 24px;">
              <!-- Logo / header -->
              <div style="text-align:center;margin-bottom:40px;">
                <div style="display:inline-block;width:60px;height:60px;background:linear-gradient(135deg,#1A5FB4,#3DAEF5);border-radius:16px;line-height:60px;font-size:28px;font-weight:900;color:white;letter-spacing:-1px;">K</div>
                <p style="color:#3DAEF5;font-size:14px;font-weight:600;letter-spacing:2px;margin-top:12px;text-transform:uppercase;">Kai · Your AI Fitness Guide</p>
              </div>

              <!-- Main card -->
              <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:24px;padding:40px 32px;margin-bottom:24px;">
                <h1 style="color:white;font-size:28px;font-weight:800;margin:0 0 12px;">
                  You're in, ${firstName}! 🎉
                </h1>
                <p style="color:rgba(255,255,255,0.7);font-size:16px;line-height:1.7;margin:0 0 28px;">
                  You've officially joined the Kai waitlist. We're putting the finishing touches on your new AI accountability coach, and you'll be one of the first to get access.
                </p>

                <!-- Goal highlight -->
                <div style="background:linear-gradient(135deg,#1A5FB4,#1B7AD4);border-radius:16px;padding:20px 24px;margin-bottom:28px;">
                  <p style="color:rgba(255,255,255,0.7);font-size:12px;font-weight:600;letter-spacing:1px;text-transform:uppercase;margin:0 0 6px;">Your Goal</p>
                  <p style="color:white;font-size:20px;font-weight:700;margin:0;">${goalLabel}</p>
                </div>

                <p style="color:rgba(255,255,255,0.7);font-size:15px;line-height:1.7;margin:0;">
                  We'll reach out when Kai is ready — we're working as fast as we can. In the meantime, share this with a friend who needs accountability too.
                </p>
              </div>

              <!-- What to expect -->
              <div style="margin-bottom:32px;">
                <p style="color:rgba(255,255,255,0.5);font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase;margin:0 0 16px;">What to expect</p>
                <div style="display:flex;flex-direction:column;gap:12px;">
                  ${[
                    ['🎯', 'Personalized AI coaching based on your goal'],
                    ['📲', 'Daily check-ins that take less than 60 seconds'],
                    ['🔥', 'Streak tracking to keep you motivated'],
                    ['🤖', 'AI that actually remembers your progress'],
                  ]
                    .map(
                      ([icon, text]) => `
                    <div style="display:flex;align-items:center;gap:14px;">
                      <span style="font-size:20px;">${icon}</span>
                      <p style="color:rgba(255,255,255,0.75);font-size:15px;margin:0;">${text}</p>
                    </div>`
                    )
                    .join('')}
                </div>
              </div>

              <!-- Footer -->
              <div style="border-top:1px solid rgba(255,255,255,0.08);padding-top:24px;text-align:center;">
                <p style="color:rgba(255,255,255,0.3);font-size:13px;margin:0;">
                  Questions? Reply to this email or reach us at
                  <a href="mailto:hello@kai-fit.com" style="color:#3DAEF5;text-decoration:none;">hello@kai-fit.com</a>
                </p>
                <p style="color:rgba(255,255,255,0.2);font-size:12px;margin:12px 0 0;">
                  © 2025 Kai · kai-fit.com
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    // Send notification to admin
    await resend.emails.send({
      from: 'Kai Waitlist <hello@kai-fit.com>',
      to: 'hello@kai-fit.com',
      subject: `New waitlist signup: ${firstName} (${goalLabel})`,
      html: `
        <div style="font-family:system-ui,sans-serif;max-width:480px;padding:24px;">
          <h2 style="margin:0 0 16px;">New Waitlist Signup</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#666;width:120px;">Name</td><td style="padding:8px 0;font-weight:600;">${firstName}</td></tr>
            <tr><td style="padding:8px 0;color:#666;">Email</td><td style="padding:8px 0;font-weight:600;">${email}</td></tr>
            <tr><td style="padding:8px 0;color:#666;">Goal</td><td style="padding:8px 0;font-weight:600;">${goalLabel}</td></tr>
            <tr><td style="padding:8px 0;color:#666;">Referral</td><td style="padding:8px 0;font-weight:600;">${referralLabel}</td></tr>
            <tr><td style="padding:8px 0;color:#666;">Time</td><td style="padding:8px 0;">${new Date().toISOString()}</td></tr>
          </table>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Waitlist API error:', error);
    return Response.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
