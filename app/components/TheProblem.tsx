import styles from "./TheProblem.module.css";

const STATS = [
  {
    number: "R519M",
    description: "Addressable market in South African ed-tech tutoring",
  },
  {
    number: "50%+",
    description: "Of matric students score below 40% in mathematics",
  },
  {
    number: "~0",
    description: "Affordable, quality online math tutoring options available",
  },
];

export default function TheProblem() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.eyebrow}>The Problem</span>
        <h2 className={styles.title}>
          Mathematics is failing South African students
        </h2>
        <p className={styles.description}>
          Millions of South African matric students struggle with mathematics
          every year. Quality tutoring exists — but only for those who can afford
          premium prices. The middle-income segment — families willing to invest
          ₹100–300/month — has almost no options. That's the gap we're closing.
        </p>

        <div className={styles.statsGrid}>
          {STATS.map((stat) => (
            <div key={stat.number} className={styles.statCard}>
              <span className={styles.statNumber}>{stat.number}</span>
              <p className={styles.statDesc}>{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
