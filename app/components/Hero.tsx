import Link from "next/link";
import styles from "./Hero.module.css";

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

const SUBHEAD = "A digital studio for software, websites, and marketing.";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.topRow}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot} aria-hidden />
              Available worldwide
            </span>
          </div>

          <h1
            className={styles.headline}
            aria-label={HEADLINE.map((word) => word.text + (word.accentSuffix ?? "")).join(" ")}
          >
            {HEADLINE.map((word) => (
              <span key={word.text} className={styles.wordWrap}>
                <span className={styles.word}>
                  {word.text}
                  {word.accentSuffix && <span className={styles.accent}>{word.accentSuffix}</span>}
                </span>
              </span>
            ))}
          </h1>

          <p className={styles.subhead}>{SUBHEAD}</p>

          <div className={styles.ctas}>
            <Link href="#work" className={styles.primaryCta}>
              <span className={styles.ctaText}>See our work</span>
              <span className={styles.ctaArrow} aria-hidden>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>

          <div className={styles.bottomRow}>
            <span className={styles.metaRight}>
              <span className={styles.metaItem}>Top quality</span>
              <span className={styles.metaSep} aria-hidden>/</span>
              <span className={styles.metaItem}>Record time</span>
              <span className={styles.metaSep} aria-hidden>/</span>
              <span className={styles.metaItem}>Fair price</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
