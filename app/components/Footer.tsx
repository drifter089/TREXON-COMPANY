import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

const PAGES = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const SOCIAL = [
  { href: "https://linkedin.com/company/threxon", label: "LinkedIn" },
  { href: "https://github.com/threxon", label: "GitHub" },
  { href: "https://instagram.com/threxon", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo} data-cursor="hover" aria-label="THREXON home">
              <Image
                src="/threxon_logo.png"
                alt="THREXON"
                width={72}
                height={72}
                className={styles.logoImage}
              />
            </Link>
            <p className={styles.tagline}>
              Software, websites, and growth — built for businesses ready to
              move.
            </p>
            <p className={styles.signoff}>
              Tell us what you&apos;re building.{" "}
              <Link href="/contact" className={styles.signoffLink} data-cursor="hover">
                Start a project <span aria-hidden>→</span>
              </Link>
            </p>
          </div>

          <div className={styles.cols}>
            <div className={styles.col}>
              <span className={styles.colKicker}>Pages</span>
              {PAGES.map((p) => (
                <Link key={p.label} href={p.href} className={styles.colLink} data-cursor="hover">
                  {p.label}
                </Link>
              ))}
            </div>

            <div className={styles.col}>
              <span className={styles.colKicker}>Connect</span>
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.colLink}
                  data-cursor="hover"
                >
                  {s.label}
                  <span className={styles.extArrow} aria-hidden>↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.divider} aria-hidden />

        <div className={styles.bottom}>
          <span className={styles.copy}>© 2026 THREXON</span>
          <span className={styles.metaSep}>·</span>
          <span className={styles.copy}>All rights reserved</span>
          <span className={styles.metaGap} />
          <span className={styles.metaTag}>
            <span className={styles.metaDot} />
            Built with intent
          </span>
        </div>
      </div>
    </footer>
  );
}
