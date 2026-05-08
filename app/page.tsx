import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Practices from "@/app/components/Practices";
import WhyThrexon from "@/app/components/WhyThrexon";
import WayWeWork from "@/app/components/WayWeWork";
import ClosingCTA from "@/app/components/ClosingCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Practices />
      <WhyThrexon />
      <WayWeWork />
      <ClosingCTA />
      <Footer />
    </>
  );
}
