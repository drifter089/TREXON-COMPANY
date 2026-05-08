import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Contact from "@/app/components/Contact";

export const metadata: Metadata = {
  title: "Contact — THREXON",
  description:
    "Tell us what you're building. We reply within 24 hours — no decks, just answers.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <Contact />
      <Footer />
    </>
  );
}
