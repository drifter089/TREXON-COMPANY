import styles from "./ValueCards.module.css";
import { VALUES } from "@/app/data/values";

export default function ValueCards() {
  return (
    <div>
      <h3 className={styles.eyebrow}>Our Values</h3>
      <div className={`${styles.grid} values-grid`}>
        {VALUES.map((v, i) => (
          <div key={i} className={styles.card}>
            <h4 className={styles.cardTitle}>{v.title}</h4>
            <p className={styles.cardDesc}>{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}