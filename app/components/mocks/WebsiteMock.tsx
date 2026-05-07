"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./WebsiteMock.module.css";

const ease = [0.16, 1, 0.3, 1] as const;

const CARDS = [
  { tag: "Identity", title: "Brand system" },
  { tag: "Product", title: "Web build" },
  { tag: "Launch", title: "Go live" },
];

export default function WebsiteMock() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <div ref={ref} className={styles.frame}>
      <div className={styles.chrome}>
        <span className={`${styles.cdot} ${styles.cdotRed}`} />
        <span className={`${styles.cdot} ${styles.cdotYellow}`} />
        <span className={`${styles.cdot} ${styles.cdotGreen}`} />
        <span className={styles.url}>threxon.com</span>
      </div>

      <div className={styles.body}>
        <motion.nav
          className={styles.nav}
          initial={{ opacity: 0, y: -6 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -6 }}
          transition={{ duration: 0.5, delay: 0.2, ease }}
        >
          <span className={styles.logo}>THREXON</span>
          <span className={styles.navLinks}>
            <span>Work</span>
            <span>About</span>
            <span>Contact</span>
          </span>
        </motion.nav>

        <motion.div
          className={styles.hero}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.9, delay: 0.5, ease }}
        >
          <motion.span
            className={styles.heroEyebrow}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.85, ease }}
          >
            <span className={styles.heroDot} />
            Now booking — Q3
          </motion.span>

          <motion.h4
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.7, delay: 0.95, ease }}
          >
            Build <span className={styles.italicAccent}>something</span> that lasts.
          </motion.h4>

          <motion.span
            className={styles.heroCta}
            initial={{ opacity: 0, y: 6 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
            transition={{ duration: 0.5, delay: 1.15, ease }}
          >
            Start a project <span aria-hidden>→</span>
          </motion.span>
        </motion.div>

        <div className={styles.cards}>
          {CARDS.map((c, i) => (
            <motion.div
              key={c.tag}
              className={styles.card}
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
              transition={{ duration: 0.6, delay: 1.4 + i * 0.1, ease }}
            >
              <div className={styles.cardImage}>
                <span className={styles.cardNum}>{`0${i + 1}`}</span>
              </div>
              <span className={styles.cardTag}>{c.tag}</span>
              <span className={styles.cardTitle}>{c.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
