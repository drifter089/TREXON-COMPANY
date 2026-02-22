import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';
import TheProblem from '@/app/components/TheProblem';
import OurApproach from '@/app/components/OurApproach';
import HowWeWork from '@/app/components/HowWeWork';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TheProblem />
      <OurApproach />
      <HowWeWork />
      <Footer />
    </div>
  );
}
