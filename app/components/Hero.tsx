import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <main className={styles.hero}>
      <section className={styles.frame}>
        <Image
          src="/images/hero/industrial-pipes.jpg"
          alt="Industrial pipework and equipment inside a production facility"
          fill
          priority
          sizes="100vw"
          className={styles.image}
        />

        <div className={styles.panel}>
          <div className={styles.copy}>
            <h1 className={styles.headline}>
              Polyester resin
              <span>for FRP production.</span>
            </h1>

            <p className={styles.intro}>
              Reliable grades, technical guidance, and commercial quotations for FRP roofing, tanks, pipes, and moulded composite manufacturers.
            </p>
          </div>
        </div>

        <Link href="/contact" className={styles.quoteAction}>
          Request a quotation <span aria-hidden>→</span>
        </Link>
      </section>
    </main>
  );
}
