import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Contact from "@/app/components/Contact";

export const metadata: Metadata = {
  title: "Contact — Resin Supply Support",
  description:
    "Contact us with a general question about polyester resin availability, delivery, product documents, or local supply support.",
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
