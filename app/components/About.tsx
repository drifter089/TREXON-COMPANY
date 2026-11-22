import styles from "./About.module.css";

const HERO_LINES = [
  "We believe great businesses",
  "deserve great software — built with",
];

export default function About() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>
            {HERO_LINES.map((text) => <span key={text} className={styles.line}>{text}</span>)}
            <span className={styles.line}>
              passion, precision, and <span className={styles.italic}>purpose</span>
              <span className={styles.accent}>.</span>
            </span>
          </h1>
        </div>
      </section>

      <section className={styles.story}>
        <div className={styles.storyInner}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} aria-hidden />
            Our Story
          </span>
          <div className={styles.storyBody}>
            <p className={styles.storyPara}>
              We started THREXON because we love building things. Not just shipping code — but crafting digital products that genuinely help businesses grow. <strong className={styles.bold}>That&apos;s what gets us out of bed.</strong>
            </p>
            <p className={styles.storyPara}>
              Our team brings together engineering, design, and strategy under one roof. <strong className={styles.bold}>That means your project doesn&apos;t get lost between departments or agencies.</strong> One team, one vision, one product — from first conversation to launch and beyond.
            </p>
            <p className={styles.storyPara}>
              We move fast because momentum matters. We obsess over details because quality compounds. And we stay close to every project because we&apos;re genuinely invested in seeing it succeed.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
