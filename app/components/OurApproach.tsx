import styles from "./OurApproach.module.css";

const TIMELINE = [
  {
    step: "01",
    title: "Identified the problem",
    description:
      "Co-founder based in South Africa saw students struggling with math firsthand.",
  },
  {
    step: "02",
    title: "1 month of face-to-face research",
    description:
      "Both founders on the ground talking to students and understanding the real gaps.",
    location: "Cape Town, South Africa",
  },
  {
    step: "03",
    title: "Validated before building",
    description:
      "Confirmed demand, pricing, and what students actually need. Then started building.",
  },
  {
    step: "04",
    title: "Ongoing ground research",
    description:
      "Our SA founder continues gathering insights, testing, and iterating with real users.",
  },
];

export default function OurApproach() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* Left: Story */}
        <div className={styles.story}>
          <span className={styles.eyebrow}>Our Approach</span>
          <h2 className={styles.title}>
            We didn't guess.
            <br />
            <span className={styles.italic}>We went there.</span>
          </h2>
          <p className={styles.text}>
            Most startups build first and validate later. We did it the other way
            around. Before writing a single line of code, our founders spent a
            month on the ground in Cape Town — sitting with students, listening
            to teachers, understanding what's actually broken in math education.
          </p>
          <p className={styles.text}>
            Every feature in MatricMath exists because a real student asked for
            it. Every decision is backed by face-to-face conversations, not
            assumptions.
          </p>
        </div>

        {/* Right: Timeline */}
        <div className={styles.timelineCard}>
          <div className={styles.timeline}>
            {TIMELINE.map((item) => (
              <div key={item.step} className={styles.timelineItem}>
                <div className={styles.timelineLine}>
                  <span className={styles.dot} />
                  <span className={styles.connector} />
                </div>
                <div className={styles.timelineContent}>
                  <span className={styles.step}>{item.step}</span>
                  <h3 className={styles.timelineTitle}>{item.title}</h3>
                  <p className={styles.timelineDesc}>{item.description}</p>
                  {item.location && (
                    <span className={styles.location}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {item.location}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
