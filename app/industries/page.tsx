import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import IndustriesExplorer from "./IndustriesExplorer";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Industries We Serve — Polyester Resin Supply",
  description:
    "Polyester resin supply support for FRP, composites, cast products and electrical-composite manufacturers in Uttar Pradesh.",
};

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <section className={styles.hero} aria-labelledby="industries-heading">
          <Image
            src="/images/hero/fiberglass-layup.jpg"
            alt="Fiberglass lay-up work in a composite production workshop"
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay}>
            <div className={styles.heroCopy}>
              <h1 id="industries-heading">Industries we serve</h1>
              <p>Polyester resins and composite-material support for a wide range of manufacturing applications.</p>
            </div>
          </div>
        </section>

        <section className={styles.introduction} aria-labelledby="introduction-heading">
          <div>
            <h2 id="introduction-heading">Start with what you make.</h2>
          </div>
          <p>
            Resin selection depends on the application, production process and performance requirement. Tell us about your product and process, and we&apos;ll help frame the right grade conversation.
          </p>
        </section>

        <IndustriesExplorer />
      </main>
      <Footer />
    </>
  );
}
