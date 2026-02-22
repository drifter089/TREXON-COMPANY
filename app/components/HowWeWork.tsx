import styles from "./HowWeWork.module.css";

export default function HowWeWork() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.eyebrow}>How We Work</span>
        <h2 className={styles.title}>
          Two countries. <span className={styles.italic}>One team.</span>
        </h2>
        <p className={styles.subtitle}>
          THREXON operates across India and South Africa. Each side owns what it
          does best — and they build together.
        </p>

        <div className={styles.grid}>
          {/* South Africa Card */}
          <div className={styles.card}>
            <span className={styles.flag}>🇿🇦</span>
            <h3 className={styles.country}>South Africa</h3>
            <span className={styles.role}>Market & Research</span>
            <p className={styles.desc}>
              Our co-founder is on the ground — running user research, building
              student relationships, understanding what to sell and how. Real
              market, real feedback, zero guesswork.
            </p>
          </div>

          {/* Connector */}
          <div className={styles.connector}>
            <span className={styles.connectorIcon}>⇄</span>
          </div>

          {/* India Card */}
          <div className={styles.card}>
            <span className={styles.flag}>🇮🇳</span>
            <h3 className={styles.country}>Delhi, India</h3>
            <span className={styles.role}>Product & Engineering</span>
            <p className={styles.desc}>
              This is where we build. The engineering team, content editors, and
              math tutors — all based in Delhi. You'd be here, building the
              product from scratch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
