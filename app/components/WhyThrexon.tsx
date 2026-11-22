import styles from "./WhyThrexon.module.css";

export default function WhyThrexon() {
  return (
    <section className={styles.section} aria-label="Why Threxon">
      <div className={styles.grid} aria-hidden />
      <div className={styles.inner}>
        <p className={styles.statement}>
          Software isn&apos;t just code. <span className={styles.accent}>It&apos;s intention, taste, and detail.</span>
        </p>
        <span className={styles.divider} aria-hidden />
        <p className={styles.statement}>
          We build every product like our name is on it. <span className={styles.tail}>Because it is.</span>
        </p>
      </div>
    </section>
  );
}
