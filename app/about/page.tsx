import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import About from "@/app/components/About";

export const metadata: Metadata = {
  title: "About — THREXON",
  description:
    "A small studio building software, websites, and growth for teams who'd rather ship than pitch.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <About />
      <Footer />
    </>
  );
}
