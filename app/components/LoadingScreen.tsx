"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./LoadingScreen.module.css";

const TAGLINE = "Software · Websites · Digital Marketing";

export default function LoadingScreen() {
  const [show, show_] = useState<boolean | null>(null);

  useEffect(() => {
    const seen = sessionStorage.getItem("threxon-loaded");
    if (seen) {
      show_(false);
      return;
    }
    show_(true);
    const t = setTimeout(() => {
      sessionStorage.setItem("threxon-loaded", "1");
      show_(false);
    }, 2200);
    return () => clearTimeout(t);
  }, []);

  if (show === null) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className={styles.curtain}
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.0, ease: [0.83, 0, 0.17, 1] }}
        >
          <div className={styles.inner}>
            <motion.span
              className={styles.brand}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              THREXON
            </motion.span>

            <h1 className={styles.tagline} aria-label={TAGLINE}>
              {TAGLINE.split("").map((char, i) => (
                <motion.span
                  key={i}
                  className={styles.char}
                  initial={{ opacity: 0, y: "100%" }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + i * 0.018,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {char === " " ? " " : char}
                </motion.span>
              ))}
            </h1>

            <div className={styles.progress}>
              <motion.span
                className={styles.progressBar}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.4, delay: 0.4, ease: [0.83, 0, 0.17, 1] }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
