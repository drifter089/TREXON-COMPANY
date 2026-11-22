"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

const HERO_IMAGES = [
  {
    src: "/images/hero/fiberglass-layup.jpg",
    alt: "Fiberglass cloth being applied during composite fabrication",
    label: "Fiberglass hand lay-up",
  },
  {
    src: "/images/hero/composite-workshop.jpg",
    alt: "Craftsperson finishing a composite component in a workshop",
    label: "Composite fabrication",
  },
  {
    src: "/images/hero/industrial-tanks.jpg",
    alt: "Industrial storage tanks at a manufacturing site",
    label: "Tanks and pipe applications",
  },
];

const ROTATION_DELAY = 7000;

export default function Hero() {
  const [activeImage, setActiveImage] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduceMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;

    const rotation = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % HERO_IMAGES.length);
    }, ROTATION_DELAY);

    return () => window.clearInterval(rotation);
  }, [reduceMotion]);

  return (
    <main className={styles.hero}>
      <section className={styles.frame} aria-labelledby="hero-heading">
        <div className={styles.imageStage}>
          {HERO_IMAGES.map((image, index) => (
            <Image
              key={image.src}
              src={image.src}
              alt={index === activeImage ? image.alt : ""}
              aria-hidden={index !== activeImage}
              fill
              priority={index === 0}
              sizes="100vw"
              className={`${styles.image} ${index === activeImage ? styles.imageActive : ""}`}
            />
          ))}
        </div>

        <div className={styles.panel}>
          <div className={styles.copy}>
            <h1 id="hero-heading" className={styles.headline}>
              Polyester resin
              <span>for FRP production.</span>
            </h1>

            <p className={styles.intro}>
              Reliable grades, technical guidance, and commercial quotations for FRP roofing, tanks, pipes, and moulded composite manufacturers.
            </p>
          </div>
        </div>

        <Link href="/contact" className={styles.quoteAction}>
          Request a quotation <span aria-hidden>→</span>
        </Link>

        <div className={styles.imageMeta}>
          <p className={styles.imageLabel}>{HERO_IMAGES[activeImage].label}</p>
          <div className={styles.imageControls} aria-label="Hero images">
            {HERO_IMAGES.map((image, index) => (
              <button
                key={image.src}
                type="button"
                className={`${styles.imageControl} ${index === activeImage ? styles.imageControlActive : ""}`}
                aria-label={`Show ${image.label}`}
                aria-pressed={index === activeImage}
                onClick={() => setActiveImage(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
