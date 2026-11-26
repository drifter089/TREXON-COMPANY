"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { INDUSTRIES, type Industry } from "@/app/data/industries";
import styles from "./page.module.css";

export default function IndustriesExplorer() {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry | null>(null);
  const detailsRef = useRef<HTMLElement>(null);
  const industriesRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (selectedIndustry) {
      detailsRef.current?.scrollIntoView({ block: "start" });
    }
  }, [selectedIndustry]);

  function showOtherIndustries() {
    setSelectedIndustry(null);
    requestAnimationFrame(() => industriesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
  }

  return (
    <>
      <section ref={industriesRef} className={styles.industries} aria-label="Industry applications">
        {INDUSTRIES.map((industry) => {
          const isSelected = selectedIndustry?.title === industry.title;

          return (
            <article key={industry.title} className={`${styles.industry} ${isSelected ? styles.industrySelected : ""}`}>
              <div className={styles.industryImage}>
                <Image
                  src={industry.image.src}
                  alt={industry.image.alt}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  className={styles.industryImageAsset}
                  style={{ objectPosition: industry.image.position }}
                />
              </div>

              <div className={styles.industryContent}>
                <h2>{industry.title}</h2>
                <p>{industry.summary}</p>
                <button
                  type="button"
                  className={styles.industryButton}
                  aria-pressed={isSelected}
                  onClick={() => setSelectedIndustry(industry)}
                >
                  View details <span aria-hidden>→</span>
                </button>
              </div>
            </article>
          );
        })}
      </section>

      {selectedIndustry && (
        <section ref={detailsRef} className={styles.detailsPanel} aria-labelledby="selected-industry-heading" tabIndex={-1}>
          <div className={styles.detailsLead}>
            <div className={styles.detailsImage}>
              <Image
                src={selectedIndustry.image.src}
                alt={selectedIndustry.image.alt}
                fill
                sizes="(max-width: 760px) 100vw, 42vw"
                className={styles.detailsImageAsset}
                style={{ objectPosition: selectedIndustry.image.position }}
              />
            </div>

            <div className={styles.detailsIntro}>
              <h2 id="selected-industry-heading">{selectedIndustry.title}</h2>
              <p>{selectedIndustry.summary}</p>

              <div className={styles.detailApplications}>
                <h3>Applications</h3>
                <ul>
                  {selectedIndustry.applications.map((application) => <li key={application}>{application}</li>)}
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.detailBusinesses}>
            <h3>Businesses and products</h3>
            <dl>
              {selectedIndustry.businesses.map((business) => (
                <div key={business.name}>
                  <dt>{business.name}</dt>
                  <dd>{business.products}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className={styles.grades}>
            <div>
              <h3>Relevant resin grades</h3>
              <p>{selectedIndustry.grades}</p>
            </div>
            <div className={styles.detailsActions}>
              <button type="button" className={styles.otherIndustriesButton} onClick={showOtherIndustries}>
                View other industries <span aria-hidden>↑</span>
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
