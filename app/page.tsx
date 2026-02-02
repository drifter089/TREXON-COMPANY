import Navbar from '@/app/Component/Navbar';
import Hero from '@/app/Component/Hero'
import Footer from './Component/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
