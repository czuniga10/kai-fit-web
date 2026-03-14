import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import EarlyAccess from '../components/EarlyAccess';
import WaitlistForm from '../components/WaitlistForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-kai-dark overflow-x-hidden">
      <Nav />
      <Hero />
      <Problem />
      <Features />
      <HowItWorks />
      <EarlyAccess />
      <WaitlistForm />
      <Footer />
    </main>
  );
}
