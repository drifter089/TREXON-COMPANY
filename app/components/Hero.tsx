"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import styles from "./Hero.module.css";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate particles
      const particles = particlesRef.current?.querySelectorAll(`.${styles.particle}`);
      if (particles) {
        particles.forEach((particle, i) => {
          gsap.to(particle, {
            y: "random(-20, 20)",
            x: "random(-20, 20)",
            duration: "random(3, 5)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: i * 0.1,
          });
        });
      }

      // Content animations
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        `.${styles.tag}`,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 }
      )
        .fromTo(
          `.${styles.title}`,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1 },
          "-=0.5"
        )
        .fromTo(
          `.${styles.subtitle}`,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          `.${styles.productSection}`,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.4"
        )
        .fromTo(
          `.${styles.ctas}`,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(
          `.${styles.scrollIndicator}`,
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          "-=0.2"
        );

      // Gradient animation
      gsap.to(`.${styles.gradientOrb1}`, {
        x: 100,
        y: -50,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(`.${styles.gradientOrb2}`, {
        x: -80,
        y: 60,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(`.${styles.gradientOrb3}`, {
        x: 60,
        y: 40,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className={styles.hero}>
      {/* Animated gradient background */}
      <div className={styles.gradientBg}>
        <div className={`${styles.gradientOrb} ${styles.gradientOrb1}`} />
        <div className={`${styles.gradientOrb} ${styles.gradientOrb2}`} />
        <div className={`${styles.gradientOrb} ${styles.gradientOrb3}`} />
      </div>

      {/* Floating particles */}
      <div ref={particlesRef} className={styles.particles}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={styles.particle}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* Grid overlay */}
      <div className={styles.grid} />

      <div ref={contentRef} className={styles.content}>
        {/* Tag */}
        <span className={styles.tag}>Delhi → South Africa</span>

        {/* Headline */}
        <h1 className={styles.title}>
          We're building the future
          <br />
          of education. <span className={styles.italic}>From Delhi.</span>
        </h1>

        {/* Subtext */}
        <p className={styles.subtitle}>
          TREXON is an ed-tech company connecting India's best math talent with
          South African students who need it most.
        </p>

        {/* Product Section */}
        <div className={styles.productSection}>
          <h3 className={styles.productTitle}>MatricMath — Our Product</h3>
          <div className={styles.productGrid}>
            <div className={styles.productCard}>
              <div className={styles.productIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8M12 17v4" />
                </svg>
              </div>
              <span>Online Tutoring Platform</span>
            </div>
            <div className={styles.productCard}>
              <div className={styles.productIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="5" y="2" width="14" height="20" rx="2" />
                  <path d="M12 18h.01" />
                </svg>
              </div>
              <span>Mobile App</span>
            </div>
            <div className={styles.productCard}>
              <div className={styles.productIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <span>Live Sessions</span>
            </div>
          </div>
          <p className={styles.productDesc}>
            This is the tech you'd build. This is what tutors teach through.
          </p>
        </div>

        {/* CTAs */}
        <div className={styles.ctas}>
          <Link href="/apply" className={styles.primaryBtn}>
            See Open Roles
          </Link>
          <Link href="/about" className={styles.secondaryBtn}>
            Learn More
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
