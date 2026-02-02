import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 72 }}>
        {/* Page Header */}
        <section className={styles.header}>
          <div className={styles.headerInner}>
            <span
              className={`${styles.eyebrow} animate-fade-up`}
              style={{ animationDelay: "0.1s" }}
            >
              About us
            </span>
            <h1
              className={`${styles.title} section-title animate-fade-up`}
              style={{ animationDelay: "0.2s" }}
            >
              An India-based team on a mission to transform South African
              education
            </h1>
          </div>
        </section>

        {/* Story + Values */}
        <section className={styles.storySection}>
          <div className={`${styles.storyGrid} story-grid`}>
           
          </div>
        </section>

       
      </main>
      <Footer />
    </>
  );
}