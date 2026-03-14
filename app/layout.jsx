import './globals.css';

export const metadata = {
  title: 'Kai — Your AI Fitness Accountability Coach',
  description:
    'Stop falling off your fitness routine. Kai is your AI-powered accountability coach — daily check-ins, personalized guidance, and the consistency you need to finally see results.',
  openGraph: {
    title: 'Kai — Your AI Fitness Guide',
    description:
      'Finally, a fitness coach that holds you accountable. Join the waitlist.',
    url: 'https://kai-fit.com',
    siteName: 'Kai',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kai — Your AI Fitness Guide',
    description: 'Finally, a fitness coach that holds you accountable.',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
