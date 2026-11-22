import type { Metadata } from "next";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import QuoteForm from "@/app/components/QuoteForm";

export const metadata: Metadata = {
  title: "Request a Resin Quotation",
  description:
    "Request a quotation or get help choosing a polyester resin grade for your FRP and composite production.",
};

export default function QuotePage() {
  return (
    <>
      <Navbar />
      <QuoteForm />
      <Footer />
    </>
  );
}
