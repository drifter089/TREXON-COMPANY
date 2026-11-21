"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

const HERO_SLIDES = [
  {
    src: "/images/hero/industrial-roof.jpg",
    alt: "Steel trusses and skylights inside an industrial facility",
    label: "Roofing & sheet applications",
  },
  {
    src: "/images/hero/industrial-pipes.jpg",
    alt: "Industrial pipework and equipment inside a production facility",
    label: "Industrial composites",
  },
  {
    src: "/images/hero/industrial-tanks.jpg",
    alt: "Large industrial storage tanks beside a port",
    label: "Tanks & process equipment",
  },
] as const;

const ROTATION_DELAY = 7000;

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const rotation = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % HERO_SLIDES.length);
    }, ROTATION_DELAY);

    return () => window.clearInterval(rotation);
  }, [isPaused]);

  return (
    <main className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Polyester resin supply · Uttar Pradesh</p>

          <h1 className={styles.headline}>
            The right resin.
            <br />
            <span>Reliable local supply.</span>
          </h1>

          <p className={styles.intro}>
            Polyester resin for FRP and composite manufacturers. Get help choosing a suitable grade, a competitive quotation, and dependable supply planning.
          </p>

          <div className={styles.ctas}>
            <Link href="/contact" className={styles.primaryCta}>
              Request a resin quotation
            </Link>
            <Link href="/contact" className={styles.secondaryCta}>
              Help me choose a grade
            </Link>
          </div>

          <p className={styles.partnerNote}>
            Official manufacturing partner: ORCPL
          </p>
        </div>

        <section
          className={styles.media}
          aria-label="Illustrative industrial applications"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node)) {
              setIsPaused(false);
            }
          }}
        >
          <div className={styles.imageFrame}>
            {HERO_SLIDES.map((slide, index) => (
              <Image
                key={slide.src}
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="(max-width: 820px) 100vw, 48vw"
                className={`${styles.image} ${index === activeSlide ? styles.imageActive : ""}`}
              />
            ))}

            <div className={styles.imageShade} aria-hidden />
            <p className={styles.slideLabel}>{HERO_SLIDES[activeSlide].label}</p>
          </div>

          <div className={styles.slideControls} aria-label="Choose an application image">
            {HERO_SLIDES.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                className={`${styles.slideControl} ${index === activeSlide ? styles.slideControlActive : ""}`}
                onClick={() => setActiveSlide(index)}
                aria-label={`Show ${slide.label}`}
                aria-pressed={index === activeSlide}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
