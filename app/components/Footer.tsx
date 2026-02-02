import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          MatricMath<span className={styles.dot}>.</span>
        </Link>

        <div className={styles.links}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/apply">Apply</Link>
        </div>

        <span className={styles.copy}>
          © 2026 MatricMath. Delhi, India.
        </span>
      </div>
    </footer>
  );
}