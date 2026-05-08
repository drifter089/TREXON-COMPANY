"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "./CountUp";
import styles from "./DashboardMock.module.css";

const ease = [0.16, 1, 0.3, 1] as const;

const KPIS: {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals: number;
}[] = [
  { label: "Active", value: 1247, decimals: 0 },
  { label: "MRR", value: 8.2, prefix: "$", suffix: "k", decimals: 1 },
  { label: "Conv.", value: 3.4, suffix: "%", decimals: 1 },
  { label: "Uptime", value: 99.9, suffix: "%", decimals: 1 },
];

const BARS = [42, 58, 65, 49, 78, 92, 71];
const HIGHLIGHT_BAR = 5;

export default function DashboardMock() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <div ref={ref} className={styles.frame}>
      <div className={styles.chrome}>
        <span className={`${styles.cdot} ${styles.cdotRed}`} />
        <span className={`${styles.cdot} ${styles.cdotYellow}`} />
        <span className={`${styles.cdot} ${styles.cdotGreen}`} />
        <span className={styles.url}>threxon.app / dashboard</span>
      </div>

      <motion.span
        className={styles.loadingBar}
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.4, ease, delay: 0.1 }}
      />

      <div className={styles.body}>
        <div className={styles.revenueRow}>
          <div className={styles.revenueBlock}>
            <span className={styles.eyebrow}>Revenue · 30d</span>
            <CountUp
              from={0}
              to={47283}
              prefix="$"
              decimals={0}
              inView={inView}
              duration={1.6}
              delay={0.5}
              className={styles.revenueValue}
            />
          </div>
          <motion.span
            className={styles.deltaPill}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 1.4, ease }}
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H8M17 7v9" />
            </svg>
            12.4%
          </motion.span>
        </div>

        <div className={styles.kpiGrid}>
          {KPIS.map((kpi, i) => (
            <motion.div
              key={kpi.label}
              className={styles.kpiCard}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.55, delay: 0.7 + i * 0.08, ease }}
            >
              <span className={styles.kpiLabel}>{kpi.label}</span>
              <CountUp
                from={0}
                to={kpi.value}
                prefix={kpi.prefix}
                suffix={kpi.suffix}
                decimals={kpi.decimals}
                inView={inView}
                duration={1.1}
                delay={0.9 + i * 0.08}
                className={styles.kpiValue}
              />
            </motion.div>
          ))}
        </div>

        <div className={styles.chart}>
          <div className={styles.chartHeader}>
            <span className={styles.eyebrow}>Last 7 days</span>
            <span className={styles.chartLegend}>
              <span className={`${styles.legendDot} ${styles.legendDotInk}`} />
              Sessions
              <span className={`${styles.legendDot} ${styles.legendDotRust}`} />
              Peak
            </span>
          </div>
          <div className={styles.bars}>
            {BARS.map((h, i) => (
              <motion.span
                key={i}
                className={`${styles.bar} ${i === HIGHLIGHT_BAR ? styles.barHighlight : ""}`}
                initial={{ scaleY: 0 }}
                animate={inView ? { scaleY: h / 100 } : { scaleY: 0 }}
                transition={{ duration: 0.65, delay: 1.0 + i * 0.07, ease }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

