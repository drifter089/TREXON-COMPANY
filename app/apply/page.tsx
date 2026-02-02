import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { POSITIONS } from "@/app/data/positions";
import styles from "./apply.module.css";

export default function ApplyPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 72 }}>
        {/* Page Header */}
        <section className={styles.header}>
          <div className={styles.headerInner}>
            <span
              className={`${styles.eyebrow} animate-fade-up`}
              style={{ animationDelay: "0.1s" }}
            >
              Join us
            </span>
            <h1
              className={`${styles.title} animate-fade-up`}
              style={{ animationDelay: "0.2s" }}
            >
              Help us transform education across continents
            </h1>
            <p
              className={`${styles.subtitle} animate-fade-up`}
              style={{ animationDelay: "0.3s" }}
            >
              We're building a team of passionate people who believe every
              student deserves access to quality education.
            </p>
          </div>
        </section>

        {/* Open Positions */}
        <section className={styles.positionsSection}>
          <div className={styles.positionsInner}>
            <span className={styles.sectionTitle}>Open Positions</span>
            <div className={styles.positionsGrid}>
              {POSITIONS.map((position, i) => (
                <div
                  key={i}
                  className={`${styles.positionCard} animate-fade-up`}
                  style={{ animationDelay: `${0.1 + i * 0.1}s` }}
                >
                  <div className={styles.positionInfo}>
                    <h3 className={styles.positionTitle}>{position.title}</h3>
                    <div className={styles.positionMeta}>
                      <span className={styles.tag}>{position.type}</span>
                      <span className={styles.tag}>{position.location}</span>
                    </div>
                    <p className={styles.positionDesc}>{position.description}</p>
                  </div>
                  <div className={styles.arrow}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaInner}>
            <div>
              <h2 className={styles.ctaTitle}>Ready to make an impact?</h2>
              <p className={styles.ctaText}>
                Send us your CV and tell us why you want to join our mission to
                democratize education.
              </p>
            </div>
            <div className={styles.ctaContact}>
              <p className={styles.ctaLabel}>Email us at</p>
              <a href="mailto:careers@matricmath.com" className={styles.ctaEmail}>
                careers@matricmath.com
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
