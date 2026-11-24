import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import HomeSections from "@/app/components/HomeSections";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HomeSections />
      </main>
      <Footer />
    </>
  );
}
