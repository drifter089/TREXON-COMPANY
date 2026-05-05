"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import MagneticLink from "./MagneticLink";
import styles from "./Hero.module.css";

const Earth3D = dynamic(() => import("./Earth3D"), {
  ssr: false,
  loading: () => null,
});

interface Word {
  text: string;
  accentSuffix?: string;
}

const HEADLINE: Word[] = [
  { text: "Take" },
  { text: "your" },
  { text: "business" },
  { text: "online", accentSuffix: "." },
];

const SUBHEAD =
  "A digital studio for software, websites, and marketing.";

const MARQUEE = [
  "Custom Software",
  "Websites",
  "Digital Marketing",
  "Branding",
  "UI / UX",
  "E-commerce",
  "Mobile Apps",
  "SEO",
];

export default function Hero() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("threxon-loaded");
    if (seen) {
      setReady(true);
      return;
    }
    const t = setTimeout(() => setReady(true), 2400);
    return () => clearTimeout(t);
  }, []);

  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <motion.div
            className={styles.topRow}
            initial={{ opacity: 0, y: 12 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.05, ease }}
          >
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot} aria-hidden />
              Available worldwide
            </span>
          </motion.div>

          <h1
            className={styles.headline}
            aria-label={HEADLINE.map((w) => w.text + (w.accentSuffix ?? "")).join(" ")}
          >
            {HEADLINE.map((word, i) => (
              <span key={i} className={styles.wordWrap}>
                <motion.span
                  className={styles.word}
                  initial={{ y: "115%" }}
                  animate={ready ? { y: 0 } : {}}
                  transition={{
                    duration: 0.95,
                    delay: 0.15 + i * 0.07,
                    ease,
                  }}
                >
                  {word.text}
                  {word.accentSuffix && (
                    <span className={styles.accent}>{word.accentSuffix}</span>
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className={styles.subhead}
            initial={{ opacity: 0, y: 16 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7, ease }}
          >
            {SUBHEAD}
          </motion.p>

          <motion.div
            className={styles.ctas}
            initial={{ opacity: 0, y: 16 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.85, ease }}
          >
            <MagneticLink
              href="#work"
              className={styles.primaryCta}
              cursorVariant="hover"
            >
              <span className={styles.ctaText}>See our work</span>
              <span className={styles.ctaArrow} aria-hidden>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </span>
            </MagneticLink>
          </motion.div>

          <motion.div
            className={styles.bottomRow}
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.05, ease }}
          >
            <span className={styles.scrollHint}>
              <span className={styles.scrollLabel}>Scroll</span>
              <span className={styles.scrollLine} aria-hidden />
            </span>
            <span className={styles.metaRight}>
              <span className={styles.metaItem}>Top quality</span>
              <span className={styles.metaSep} aria-hidden>/</span>
              <span className={styles.metaItem}>Record time</span>
              <span className={styles.metaSep} aria-hidden>/</span>
              <span className={styles.metaItem}>Fair price</span>
            </span>
          </motion.div>
        </div>

        <Earth3D ready={ready} />
      </div>

      <motion.div
        className={styles.marquee}
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ duration: 1.2, delay: 1.3, ease }}
        aria-hidden
      >
        <div className={styles.marqueeTrack}>
          {[...MARQUEE, ...MARQUEE].map((item, i) => (
            <span key={i} className={styles.marqueeItem}>
              <span className={styles.marqueeDot} />
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
