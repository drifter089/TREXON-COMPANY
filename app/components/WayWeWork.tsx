"use client";

import { motion, type Variants } from "framer-motion";
import styles from "./WayWeWork.module.css";

const ease = [0.16, 1, 0.3, 1] as const;

type StepKind = "listen" | "sketch" | "build" | "iterate";

const STEPS: {
  kind: StepKind;
  title: string;
  desc: string;
}[] = [
  {
    kind: "listen",
    title: "Listen first",
    desc: "Short call to align on what you actually need — and what you don't.",
  },
  {
    kind: "sketch",
    title: "Sketch the shape",
    desc: "Direction beats decks. We map the build before we touch a line of code.",
  },
  {
    kind: "build",
    title: "Build in chunks",
    desc: "Two-week loops. Every loop ships something you can click on.",
  },
  {
    kind: "iterate",
    title: "Iterate after launch",
    desc: "Launch is day one. We keep tuning until the numbers move.",
  },
];

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease },
  },
};

export default function WayWeWork() {
  return (
    <section className={styles.section} aria-label="How we work">
      <motion.div
        className={styles.inner}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-15%" }}
      >
        <motion.h2 className={styles.lead} variants={item}>
          <span className={styles.leadEmphasis}>How we work.</span>{" "}
          <span className={styles.leadDim}>
            Four moves on every project. We listen, sketch, build, and keep
            tuning — in two-week loops, never quarters.
          </span>
        </motion.h2>

        <div className={styles.grid}>
          {STEPS.map((step) => (
            <motion.article
              key={step.kind}
              className={styles.col}
              variants={item}
            >
              <div className={styles.illoWrap}>
                <Illustration kind={step.kind} />
              </div>
              <h3 className={styles.colTitle}>{step.title}</h3>
              <p className={styles.colDesc}>{step.desc}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function Illustration({ kind }: { kind: StepKind }) {
  switch (kind) {
    case "listen":
      return (
        <svg
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        >
          <circle cx="100" cy="100" r="22" />
          <circle cx="100" cy="100" r="46" opacity="0.7" />
          <circle cx="100" cy="100" r="70" opacity="0.5" />
          <circle cx="100" cy="100" r="94" opacity="0.3" />
          <circle cx="100" cy="100" r="2.6" fill="currentColor" stroke="none" />
        </svg>
      );
    case "sketch":
      return (
        <svg
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        >
          <rect x="34" y="56" width="108" height="76" />
          <rect x="58" y="80" width="108" height="76" opacity="0.55" />
          <line x1="58" y1="80" x2="142" y2="80" opacity="0.3" />
          <line x1="58" y1="104" x2="142" y2="104" opacity="0.3" />
        </svg>
      );
    case "build":
      return (
        <svg
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        >
          <rect x="50" y="132" width="100" height="32" />
          <rect x="50" y="96" width="100" height="32" opacity="0.8" />
          <rect x="50" y="60" width="100" height="32" opacity="0.55" />
          <line x1="62" y1="148" x2="78" y2="148" stroke="currentColor" strokeWidth="2" />
          <line x1="62" y1="112" x2="78" y2="112" opacity="0.8" stroke="currentColor" strokeWidth="2" />
          <line x1="62" y1="76" x2="78" y2="76" opacity="0.55" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "iterate":
      return (
        <svg
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        >
          <path d="M 158 100 A 58 58 0 1 1 100 42" />
          <path d="M 100 42 L 112 52" />
          <path d="M 100 42 L 92 54" />
          <circle cx="100" cy="100" r="3" fill="currentColor" stroke="none" />
        </svg>
      );
  }
}
