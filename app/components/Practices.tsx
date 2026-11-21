import { SERVICES, type Service } from "@/app/data/services";
import styles from "./Practices.module.css";

export default function Practices() {
  return (
    <section id="work" className={styles.section}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} aria-hidden />
            Practices
          </span>
          <p className={styles.intro}>A studio in three disciplines.</p>
          <h2 className={styles.title}>
            Things we <span className={styles.italic}>make</span>
            <span className={styles.accent}>.</span>
          </h2>
        </div>
      </header>

      <div className={styles.stack}>
        {SERVICES.map((service, index) => (
          <PracticeBlock key={service.id} service={service} reverse={index % 2 === 1} />
        ))}
      </div>
    </section>
  );
}

function PracticeBlock({ service, reverse }: { service: Service; reverse: boolean }) {
  return (
    <article className={`${styles.block} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.blockInner}>
        <div className={styles.text}>
          <span className={styles.label}>
            <span className={styles.labelKind}>Practice</span>
            <span className={styles.labelDash} aria-hidden>—</span>
            <span className={styles.labelNum}>№{service.index}</span>
          </span>
          <h3 className={styles.blockTitle}>
            {service.title}
            <span className={styles.accent}>.</span>
          </h3>
          <p className={styles.brief}>{service.brief}</p>
          <ul className={styles.includes}>
            {service.includes.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>

        <div className={styles.showcaseWrap}>
          <div className={styles.showcase} aria-hidden>
            <span className={styles.showcaseIndex}>{service.index}</span>
            <span className={styles.showcaseTitle}>{service.title}</span>
          </div>
          <span className={styles.showcaseLabel}>
            <span className={styles.asterisk} aria-hidden>*</span>
            {service.showcase.project}
          </span>
        </div>
      </div>
    </article>
  );
}
