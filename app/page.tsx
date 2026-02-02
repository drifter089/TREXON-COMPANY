import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero'
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
