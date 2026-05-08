"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import { NAV_ITEMS } from "@/app/data/navigation";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} data-cursor="hover" aria-label="THREXON home">
          <Image
            src="/threxon_logo.png"
            alt="THREXON"
            width={56}
            height={56}
            priority
            className={styles.logoImage}
          />
        </Link>

        <div className={styles.links}>
          {NAV_ITEMS.map((item) => {
            const isAnchor = item.href.includes("#");
            const isActive = !isAnchor && pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                data-cursor="hover"
                className={`${styles.link} ${isActive ? styles.active : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}