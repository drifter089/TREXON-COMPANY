"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./HomeSections.module.css";

const APPLICATIONS = [
  {
    title: "Roofing and panels",
    description: "For FRP roofing sheets, translucent daylight panels and profile-based panel production.",
    src: "/images/hero/industrial-roof.jpg",
    alt: "Industrial roofing panels on a factory building",
    position: "center center",
  },
  {
    title: "Tanks and vessels",
    description: "For fabrication of FRP tanks, storage vessels and industrial containment systems.",
    src: "/images/hero/industrial-tanks.jpg",
    alt: "Industrial storage tanks at a manufacturing site",
    position: "center center",
  },
  {
    title: "Pipes and fittings",
    description: "For FRP pipe systems, fittings and continuous production requirements.",
    src: "/images/hero/industrial-pipes.jpg",
    alt: "Industrial pipework inside a production facility",
    position: "center center",
  },
  {
    title: "FRP components",
    description: "For moulded FRP parts, hand lay-up work and general composite fabrication.",
    src: "/images/hero/composite-workshop.jpg",
    alt: "A composite component being finished in a workshop",
    position: "58% center",
  },
];

const SUPPORT_STEPS = [
  {
    number: "01",
    title: "Start with the application",
    description:
      "Tell us what you make, how you produce it, and what you need the finished part to do.",
  },
  {
    number: "02",
    title: "Narrow the grade",
    description:
      "If you are not sure which polyester resin fits, we will help you frame the technical requirement.",
  },
  {
    number: "03",
    title: "Plan the supply",
    description:
      "Share the approximate quantity and delivery area so we can prepare a useful commercial response.",
  },
];

export default function HomeSections() {
  const [activeApplication, setActiveApplication] = useState<number | null>(null);

  return (
    <div>
      <section id="resins" className={styles.applications} aria-labelledby="applications-heading">
        <div className={styles.productsHeader}>
          <div className={styles.productsHeaderInner}>
            <div>
              <h2 id="applications-heading">Polyester resins</h2>
              <p>Choose the application closest to your production process, and we’ll help you find the right resin grade.</p>
            </div>
          </div>
        </div>

        <div
          className={styles.productWall}
          data-active={activeApplication ?? "none"}
          onPointerLeave={() => setActiveApplication(null)}
        >
          {APPLICATIONS.map((application, index) => (
            <button
              key={application.title}
              type="button"
              className={styles.applicationPanel}
              aria-pressed={activeApplication === index}
              aria-label={`Show ${application.title} details`}
              onPointerEnter={() => setActiveApplication(index)}
              onFocus={() => setActiveApplication(index)}
              onClick={() => setActiveApplication(index)}
            >
              <Image
                src={application.src}
                alt={application.alt}
                fill
                priority={index === 0}
                sizes="(max-width: 700px) 100vw, 25vw"
                className={styles.applicationImage}
                style={{ objectPosition: application.position }}
              />
              <span className={styles.panelOverlay} aria-hidden />
              <span className={styles.panelCopy}>
                <span className={styles.panelTitle}>{application.title}</span>
                <span className={styles.panelDescription}>{application.description}</span>
              </span>
            </button>
          ))}
        </div>

        <div className={styles.productsFoot}>
          <p>Temporary illustrative photography. Replace with approved product imagery before launch.</p>
          <Link href="/quote#grade-help">Find the right grade</Link>
        </div>
      </section>

      <section id="services" className={styles.support} aria-labelledby="support-heading">
        <div className={styles.inner}>
          <div className={styles.supportIntro}>
            <h2 id="support-heading">Support before the order is placed.</h2>
            <p>
              Whether you know the grade you need or are comparing options, the quotation process begins with the practical details of your production.
            </p>
          </div>

          <ol className={styles.steps}>
            {SUPPORT_STEPS.map((step) => (
              <li key={step.number} className={styles.step}>
                <span className={styles.stepNumber}>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.supply} aria-labelledby="supply-heading">
        <div className={styles.inner}>
          <div className={styles.supplyGrid}>
            <h2 id="supply-heading">Supply built around a production schedule.</h2>
            <div className={styles.supplyCopy}>
              <p>
                We supply polyester resin from local Uttar Pradesh inventory for FRP and composite manufacturing businesses. The aim is straightforward: help buyers get a clear answer on grade direction, commercial quotation and delivery planning.
              </p>
              <p>
                ORCPL is our official manufacturing partner. We are a supplier and do not represent ORCPL&apos;s facilities as our own.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta} aria-labelledby="cta-heading">
        <div className={styles.inner}>
          <div className={styles.ctaPanel}>
            <h2 id="cta-heading">Ready to discuss a resin requirement?</h2>
            <p>
              Tell us what you manufacture and the quantity you are planning for. We will use that information to prepare the right next step.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/quote" className={styles.primaryAction}>Request a resin quotation</Link>
              <Link href="/contact" className={styles.secondaryAction}>Ask a general supply question <span aria-hidden>→</span></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
