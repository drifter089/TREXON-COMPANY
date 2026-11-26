"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import { NAV_ITEMS } from "@/app/data/navigation";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label="Home">
          <Image
            src="/threxon_logo.png"
            alt="THREXON"
            width={80}
            height={80}
            priority
            className={styles.logoImage}
          />
        </Link>

        <div id="primary-navigation" className={`${styles.links} ${menuOpen ? styles.linksOpen : ""}`}>
          {NAV_ITEMS.map((item) => {
            const isAnchor = item.href.includes("#");
            const isActive = !isAnchor && pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.link} ${item.primary ? styles.primaryLink : ""} ${isActive ? styles.active : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          className={`${styles.menuToggle} ${menuOpen ? styles.menuToggleOpen : ""}`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        >
          <span className={styles.menuIcon} aria-hidden>
            <span />
            <span />
          </span>
        </button>
      </div>
    </nav>
  );
}
