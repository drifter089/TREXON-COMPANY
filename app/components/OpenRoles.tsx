import Link from "next/link";
import styles from "./OpenRoles.module.css";

const ROLES = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "Software Engineer",
    type: "Full-time · On-site",
    description:
      "Next.js, React Native, real-time video. Build the MatricMath platform from scratch — you'll own the product.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" />
      </svg>
    ),
    title: "Video Editor",
    type: "Full-time · On-site",
    description:
      "Educational content and marketing. Create lesson videos and brand content that South African students actually want to watch.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    title: "Math Teacher",
    type: "Full-time · On-site",
    description:
      "Live tutoring for matric students. Teach mathematics through our platform to students across South Africa.",
  },
];

export default function OpenRoles() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.eyebrow}>Open Roles</span>
        <h2 className={styles.title}>Join us in Delhi</h2>
        <p className={styles.subtitle}>
          On-site roles starting from ₹70,000/month. Founding team. Massive
          impact.
        </p>

        <div className={styles.perks}>
          <div className={styles.perk}>
            <span className={styles.perkValue}>₹70K+</span>
            <span className={styles.perkLabel}>Monthly salary</span>
          </div>
          <div className={styles.perkDivider} />
          <div className={styles.perk}>
            <span className={styles.perkValue}>2–3%</span>
            <span className={styles.perkLabel}>Equity after 6 months</span>
          </div>
          <div className={styles.perkDivider} />
          <div className={styles.perk}>
            <span className={styles.perkValue}>Day 1</span>
            <span className={styles.perkLabel}>Founding team member</span>
          </div>
        </div>

        <div className={styles.grid}>
          {ROLES.map((role) => (
            <Link
              key={role.title}
              href="/apply"
              className={styles.card}
            >
              <div className={styles.icon}>{role.icon}</div>
              <h3 className={styles.cardTitle}>{role.title}</h3>
              <span className={styles.cardType}>{role.type}</span>
              <p className={styles.cardDesc}>{role.description}</p>
              <span className={styles.cardLink}>View details →</span>
            </Link>
          ))}
        </div>

        <Link href="/apply" className={styles.cta}>
          Apply Now
        </Link>
      </div>
    </section>
  );
}
