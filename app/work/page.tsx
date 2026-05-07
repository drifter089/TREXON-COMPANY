import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Work from "@/app/components/Work";

export const metadata: Metadata = {
  title: "Work — THREXON",
  description:
    "Selected projects — software, websites, and growth campaigns built by THREXON.",
};

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <Work />
      <Footer />
    </>
  );
}
