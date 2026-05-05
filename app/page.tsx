import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import SelectedWork from "@/app/components/SelectedWork";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SelectedWork />
      <Footer />
    </>
  );
}
