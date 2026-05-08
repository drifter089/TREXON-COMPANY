"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "./CountUp";
import styles from "./MarketingMock.module.css";

const ease = [0.16, 1, 0.3, 1] as const;

const STATS: {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals: number;
}[] = [
  { label: "Sessions", value: 247, prefix: "+", suffix: "%", decimals: 0 },
  { label: "ROAS", value: 8.4, suffix: "x", decimals: 1 },
  { label: "Conversions", value: 2.1, suffix: "k", decimals: 1 },
];

const POINTS: [number, number][] = [
  [0, 132],
  [50, 122],
  [100, 110],
  [150, 96],
  [200, 105],
  [250, 78],
  [300, 60],
  [350, 36],
  [400, 18],
];

const linePath = "M " + POINTS.map(([x, y]) => `${x},${y}`).join(" L ");
const fillPath = `${linePath} L 400,160 L 0,160 Z`;

export default function MarketingMock() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <div ref={ref} className={styles.frame}>
      <div className={styles.chrome}>
        <span className={`${styles.cdot} ${styles.cdotRed}`} />
        <span className={`${styles.cdot} ${styles.cdotYellow}`} />
        <span className={`${styles.cdot} ${styles.cdotGreen}`} />
        <span className={styles.url}>analytics.threxon.app</span>
      </div>

      <div className={styles.body}>
        <div className={styles.head}>
          <div className={styles.headBlock}>
            <span className={styles.eyebrow}>Organic traffic · 90d</span>
            <CountUp
              from={0}
              to={2.4}
              suffix="M sessions"
              decimals={1}
              inView={inView}
              duration={1.4}
              delay={0.5}
              className={styles.bigNum}
            />
          </div>
          <motion.span
            className={styles.deltaPill}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 1.6, ease }}
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H8M17 7v9" />
            </svg>
            247%
          </motion.span>
        </div>

        <div className={styles.chartArea}>
          <svg
            viewBox="0 0 400 160"
            className={styles.chartSvg}
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="mkFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(166, 61, 47, 0.32)" />
                <stop offset="100%" stopColor="rgba(166, 61, 47, 0)" />
              </linearGradient>
            </defs>

            <line x1="0" y1="40" x2="400" y2="40" stroke="rgba(15,14,13,0.05)" strokeWidth="1" />
            <line x1="0" y1="80" x2="400" y2="80" stroke="rgba(15,14,13,0.05)" strokeWidth="1" />
            <line x1="0" y1="120" x2="400" y2="120" stroke="rgba(15,14,13,0.05)" strokeWidth="1" />

            <motion.path
              d={fillPath}
              fill="url(#mkFill)"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.9, ease, delay: 1.7 }}
            />

            <motion.path
              d={linePath}
              fill="none"
              stroke="var(--rust)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 1.7, ease, delay: 0.4 }}
            />

            <motion.circle
              cx="400"
              cy="18"
              r="4"
              fill="var(--rust)"
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.4, ease, delay: 2.05 }}
            />
          </svg>
        </div>

        <div className={styles.stats}>
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              className={styles.statCard}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.6, delay: 2.2 + i * 0.1, ease }}
            >
              <CountUp
                from={0}
                to={s.value}
                prefix={s.prefix}
                suffix={s.suffix}
                decimals={s.decimals}
                inView={inView}
                duration={1.0}
                delay={2.4 + i * 0.1}
                className={styles.statValue}
              />
              <span className={styles.statLabel}>{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
