"use client";

import Image from "next/image";
import { CONTACT_DETAILS } from "@/app/data/contact";
import EnquiryForm from "./EnquiryForm";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <main className={styles.page}>
      <section className={styles.heroSection} aria-labelledby="contact-heading">
        <div className={styles.heroInner}>
          <div className={styles.heroImage}>
            <Image
              src="/images/hero/industrial-pipes.jpg"
              alt="Industrial pipework inside a production facility"
              fill
              priority
              sizes="100vw"
              className={styles.heroImageAsset}
            />
            <div className={styles.heroOverlay}>
              <div className={styles.heroCopy}>
                <h1 id="contact-heading" className={styles.title}>Contact</h1>
                <p className={styles.intro}>
                  Ask about local resin availability, delivery, product documents, or general supply support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.locationSection} aria-labelledby="location-heading">
        <div className={styles.locationInner}>
          <div className={styles.locationCopy}>
            <h2 id="location-heading">Local supply coverage</h2>
            <p className={styles.locationDescription}>Local inventory and supply support for FRP and composite-production requirements across Uttar Pradesh.</p>
            <address className={styles.address}>
              <span>Service area</span>
              {CONTACT_DETAILS.location}
            </address>
            <dl className={styles.contactDetails}>
              <div>
                <dt>Phone / WhatsApp</dt>
                <dd className={styles.contactActions}>
                  <a href={`tel:${CONTACT_DETAILS.phone.replace(/\s/g, "")}`}>
                    {CONTACT_DETAILS.phone}
                  </a>
                  <a
                    className={styles.whatsAppLink}
                    href={`https://wa.me/${CONTACT_DETAILS.phone.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp
                  </a>
                </dd>
              </div>
              <div>
                <dt>Sales email</dt>
                <dd>
                  <a href={`mailto:${CONTACT_DETAILS.email}`}>{CONTACT_DETAILS.email}</a>
                </dd>
              </div>
            </dl>
          </div>

          <div className={styles.formPanel}>
            <EnquiryForm />
          </div>
          <div className={styles.mapFrame}>
            <iframe
              title="Service area in Uttar Pradesh, India"
              src={CONTACT_DETAILS.mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
