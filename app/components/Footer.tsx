import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

const PAGES = [
  { href: "/", label: "Home" },
  { href: "/#resins", label: "Resins" },
  { href: "/#services", label: "Buyer Support" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const ENQUIRIES = [
  { href: "/quote", label: "Request a quotation" },
  { href: "/quote#grade-help", label: "Help me choose a grade" },
  { href: "/contact", label: "General supply question" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo} aria-label="Home">
              <Image
                src="/threxon_logo.png"
                alt="THREXON"
                width={72}
                height={72}
                className={styles.logoImage}
              />
            </Link>
            <p className={styles.tagline}>
              Polyester resin supply for FRP and composite manufacturers in Uttar Pradesh.
            </p>
            <p className={styles.signoff}>
              Have a requirement?{" "}
              <Link href="/quote" className={styles.signoffLink}>
                Request a quotation <span aria-hidden>→</span>
              </Link>
            </p>
          </div>

          <div className={styles.cols}>
            <div className={styles.col}>
              <span className={styles.colKicker}>Pages</span>
              {PAGES.map((p) => (
                <Link key={p.label} href={p.href} className={styles.colLink}>
                  {p.label}
                </Link>
              ))}
            </div>

            <div className={styles.col}>
              <span className={styles.colKicker}>Enquiries</span>
              {ENQUIRIES.map((enquiry) => (
                <Link key={enquiry.label} href={enquiry.href} className={styles.colLink}>
                  {enquiry.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.divider} aria-hidden />

        <div className={styles.bottom}>
          <span className={styles.copy}>© 2026 Resin Supply</span>
          <span className={styles.metaSep}>·</span>
          <span className={styles.copy}>All rights reserved</span>
          <span className={styles.metaGap} />
          <span className={styles.metaTag}>
            <span className={styles.metaDot} />
            Official manufacturing partner: ORCPL
          </span>
        </div>
      </div>
    </footer>
  );
}
