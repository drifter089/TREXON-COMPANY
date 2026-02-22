import styles from "./WhoWeWant.module.css";

const TRAITS = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
    title: "Passionate",
    description:
      "You care about what you build. Not just the paycheck — the craft.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </svg>
    ),
    title: "Unafraid",
    description:
      "Ambiguity doesn't scare you. You thrive when things aren't figured out yet.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Fast mover",
    description:
      "You ship often, learn fast, and don't wait for perfect.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
      </svg>
    ),
    title: "Builder mindset",
    description:
      "Blank canvas excites you. You want to create, not maintain.",
  },
];

export default function WhoWeWant() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.eyebrow}>Who We Want</span>
        <h2 className={styles.title}>
          We're looking for <span className={styles.italic}>builders</span>
        </h2>
        <p className={styles.subtitle}>
          We're not looking for people who want a safe job. We want people who
          get excited about building something from nothing — who'd rather figure
          it out than wait for instructions.
        </p>

        <div className={styles.grid}>
          {TRAITS.map((trait) => (
            <div key={trait.title} className={styles.card}>
              <div className={styles.icon}>{trait.icon}</div>
              <h3 className={styles.cardTitle}>{trait.title}</h3>
              <p className={styles.cardDesc}>{trait.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
