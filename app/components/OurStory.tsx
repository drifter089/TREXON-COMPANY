import styles from "./OurStory.module.css";

export default function OurStory() {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.eyebrow}>Our Story</h3>
      <p className={styles.text}>
        MatricMath was born from a simple insight: India produces some of the
        world&apos;s best mathematics educators, and South Africa has over
        100,000 students who desperately need affordable, quality tutoring.
      </p>
      <p className={styles.text}>
        By building our operations in Delhi and leveraging technology, we deliver
        exceptional tutoring at a fraction of the cost — making it accessible
        for the &ldquo;missing middle&rdquo; families who are often overlooked.
      </p>
    </div>
  );
}