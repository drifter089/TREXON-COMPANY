"use client";

import { motion, type Variants } from "framer-motion";
import styles from "./WhyThrexon.module.css";

const ease = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.45,
      delayChildren: 0.15,
    },
  },
};

const block: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.95, ease },
  },
};

export default function WhyThrexon() {
  return (
    <section className={styles.section} aria-label="Why Threxon">
      <div className={styles.grid} aria-hidden />

      <motion.div
        className={styles.inner}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-15%" }}
      >
        <motion.p className={styles.statement} variants={block}>
          Software isn&apos;t just code.{" "}
          <span className={styles.accent}>
            It&apos;s intention, taste, and detail.
          </span>
        </motion.p>

        <motion.span className={styles.divider} variants={block} aria-hidden />

        <motion.p className={styles.statement} variants={block}>
          We build every product like our name is on it.{" "}
          <span className={styles.tail}>Because it is.</span>
        </motion.p>
      </motion.div>
    </section>
  );
}
