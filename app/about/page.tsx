import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import About from "@/app/components/About";

export const metadata: Metadata = {
  title: "About — Resin Supply Support",
  description:
    "Learn how we support FRP and composite manufacturers in Uttar Pradesh with practical polyester resin supply planning.",
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
