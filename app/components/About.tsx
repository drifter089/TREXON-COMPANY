"use client";

import { motion, type Variants } from "framer-motion";
import styles from "./About.module.css";

const ease = [0.16, 1, 0.3, 1] as const;

const HERO_LINES = [
  "We believe great businesses",
  "deserve great software — built with",
];

const lineVariant: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.95, delay: 0.15 + i * 0.18, ease },
  }),
};

export default function About() {
  return (
    <main className={styles.page}>
      {/* --- Hero --- */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>
            {HERO_LINES.map((text, i) => (
              <motion.span
                key={i}
                className={styles.line}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={lineVariant}
              >
                {text}
              </motion.span>
            ))}
            <motion.span
              className={styles.line}
              custom={2}
              initial="hidden"
              animate="visible"
              variants={lineVariant}
            >
              passion, precision, and{" "}
              <span className={styles.italic}>purpose</span>
              <span className={styles.accent}>.</span>
            </motion.span>
          </h1>
        </div>
      </section>

      {/* --- Story --- */}
      <section className={styles.story}>
        <div className={styles.storyInner}>
          <motion.span
            className={styles.eyebrow}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.6, ease }}
          >
            <span className={styles.eyebrowDot} aria-hidden />
            Our Story
          </motion.span>

          <motion.div
            className={styles.storyBody}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.85, delay: 0.2, ease }}
          >
            <p className={styles.storyPara}>
              We started THREXON because we love building things. Not just
              shipping code — but crafting digital products that genuinely
              help businesses grow.{" "}
              <strong className={styles.bold}>
                That&apos;s what gets us out of bed.
              </strong>
            </p>
            <p className={styles.storyPara}>
              Our team brings together engineering, design, and strategy under
              one roof.{" "}
              <strong className={styles.bold}>
                That means your project doesn&apos;t get lost between
                departments or agencies.
              </strong>{" "}
              One team, one vision, one product — from first conversation to
              launch and beyond.
            </p>
            <p className={styles.storyPara}>
              We move fast because momentum matters. We obsess over details
              because quality compounds. And we stay close to every project
              because we&apos;re genuinely invested in seeing it succeed.
            </p>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
