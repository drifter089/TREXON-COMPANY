"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
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

export default function HomeSections() {
  const [activeApplication, setActiveApplication] = useState<number | null>(null);
  const [applicationsRevealed, setApplicationsRevealed] = useState(false);
  const applicationsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = applicationsRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setApplicationsRevealed(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.16 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <section
        id="resins"
        ref={applicationsRef}
        className={styles.applications}
        aria-labelledby="applications-heading"
        data-revealed={applicationsRevealed}
      >
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
          <div className={styles.supportHero}>
            <div className={styles.supportOverview}>
              <h2 id="support-heading">Support before you order.</h2>
              <p>
                Whether you know the grade you need or are comparing options, the quotation process begins with the practical details of your production.
              </p>
              <p className={styles.supportContext}>
                From the application and production process to quantity and delivery area, those details shape the grade discussion, quotation and supply plan.
              </p>

              <div className={styles.supplyPlanning} aria-labelledby="supply-heading">
                <h3 id="supply-heading">Supply planning.</h3>
                <p>
                  We supply polyester resin from local Uttar Pradesh inventory for FRP and composite manufacturing businesses. The aim is straightforward: help buyers get a clear answer on grade direction, commercial quotation and delivery planning.
                </p>
                <p className={styles.partnerNote}>
                  ORCPL is our official manufacturing partner. We are a supplier and do not represent ORCPL&apos;s facilities as our own.
                </p>
              </div>
            </div>
            <div className={styles.supportImageCollage}>
              <div className={styles.supportImageMain}>
                <Image
                  src="/images/support/resin-lab-beaker.png"
                  alt="A gloved hand holding a glass beaker of clear polyester resin"
                  fill
                  sizes="(max-width: 800px) 88vw, 42vw"
                  className={styles.supportImage}
                />
              </div>
              <div className={styles.supportImageDetail}>
                <Image
                  src="/images/support/resin-pour-detail.png"
                  alt="Clear resin flowing from a steel mixing tool into a vessel"
                  fill
                  sizes="(max-width: 800px) 58vw, 26vw"
                  className={styles.supportDetailImage}
                />
              </div>
            </div>
          </div>

          <div className={styles.supportPillars}>
            <article className={styles.supportPillar}>
              <svg className={styles.supportIcon} viewBox="0 0 48 48" fill="none" aria-hidden="true">
                <path d="M8 35.5 24 8l16 27.5H8Z" />
                <path d="m24 8 7.5 27.5M16.5 35.5 24 23l7.5 12.5" />
              </svg>
              <h3>Start with the application.</h3>
              <p>Tell us what you make, how you produce it, and what you need the finished part to do.</p>
            </article>

            <article className={styles.supportPillar}>
              <svg className={styles.supportIcon} viewBox="0 0 48 48" fill="none" aria-hidden="true">
                <path d="M10 12h28M10 24h28M10 36h28" />
                <circle cx="18" cy="12" r="4" />
                <circle cx="30" cy="24" r="4" />
                <circle cx="22" cy="36" r="4" />
              </svg>
              <h3>Narrow the grade.</h3>
              <p>If you are not sure which polyester resin fits, we will help you frame the technical requirement.</p>
            </article>

            <article className={styles.supportPillar}>
              <svg className={styles.supportIcon} viewBox="0 0 48 48" fill="none" aria-hidden="true">
                <path d="M8 16 24 8l16 8-16 8L8 16Z" />
                <path d="M8 16v16l16 8 16-8V16M24 24v16" />
              </svg>
              <h3>Plan the supply.</h3>
              <p>Share the approximate quantity and delivery area so we can prepare a useful commercial response.</p>
            </article>
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
