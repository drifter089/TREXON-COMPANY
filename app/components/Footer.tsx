import Link from "next/link";
import Image from "next/image";
import { CONTACT_DETAILS } from "@/app/data/contact";
import styles from "./Footer.module.css";

const PAGES = [
  { href: "/", label: "Home" },
  { href: "/#resins", label: "Resins" },
  { href: "/#services", label: "Buyer Support" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
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
                width={96}
                height={96}
                className={styles.logoImage}
              />
            </Link>
            <p className={styles.tagline}>
              Polyester resin supply for FRP and composite manufacturers in Uttar Pradesh.
            </p>
          </div>

          <div className={styles.contact}>
            <span className={styles.colKicker}>Contact</span>
            <a className={styles.contactValue} href={`tel:${CONTACT_DETAILS.phone.replace(/\s/g, "")}`}>
              {CONTACT_DETAILS.phone}
            </a>
            <a className={styles.contactEmail} href={`mailto:${CONTACT_DETAILS.email}`}>
              {CONTACT_DETAILS.email}
            </a>
            <address className={styles.address}>
              <span>Service area</span>
              {CONTACT_DETAILS.location}
            </address>
          </div>

          <div className={styles.cols}>
            <nav className={styles.col} aria-label="Footer navigation">
              <span className={styles.colKicker}>Navigation</span>
              {PAGES.map((p) => (
                <Link key={p.label} href={p.href} className={styles.colLink}>
                  {p.label}
                </Link>
              ))}
            </nav>
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
            Official manufacturing partner: ORCPL
          </span>
        </div>
      </div>
    </footer>
  );
}
