"use client";

import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Subtle grid background */}
      <div className={styles.grid} />

      <div className={styles.content}>
        {/* Tag */}
        <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <span className={styles.tag}>Delhi → South Africa</span>
        </div>

        {/* Headline */}
        <h1
          className={`${styles.title} hero-title animate-fade-up`}
          style={{ animationDelay: "0.25s" }}
        >
          Unlocking mathematics
          <br />
          for <span className={styles.italic}>every</span> South African
          <br />
          matric student
        </h1>

        {/* Subtext */}
        <p
          className={`${styles.subtitle} animate-fade-up`}
          style={{ animationDelay: "0.4s" }}
        >
          World-class tutors from India, purpose-built technology, and
          affordable pricing — designed for the students who need it most.
        </p>

        {/* CTAs */}
        <div
          className={`${styles.ctas} animate-fade-up`}
          style={{ animationDelay: "0.55s" }}
        >
          <Link href="/apply" className={styles.primaryBtn}>
            Join the Team
          </Link>
          <Link href="/about" className={styles.secondaryBtn}>
            Learn More
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`${styles.scrollIndicator} animate-fade-in`}
        style={{ animationDelay: "1.2s" }}
      >
        <span className={styles.scrollText}>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}