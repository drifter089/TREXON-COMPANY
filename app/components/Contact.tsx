"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/app/lib/firebase";
import styles from "./Contact.module.css";

// Temporary details: replace all placeholder values before publishing the site.
const CONTACT_DETAILS = {
  location: "Uttar Pradesh, India",
  address: "Warehouse / office address to be confirmed",
  phone: "+91 00000 00000",
  email: "sales@example.com",
  mapSrc: "https://www.google.com/maps?q=Uttar+Pradesh%2C+India&z=7&output=embed",
};

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");

    try {
      await addDoc(collection(db, "contact_submissions"), {
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim() || null,
        location: location.trim() || null,
        message: message.trim(),
        source: "contact-page",
        createdAt: serverTimestamp(),
      });
      setStatus("success");
    } catch (error) {
      console.error("Contact form failed", error);
      setStatus("error");
    }
  }

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
            <h2 id="location-heading">{CONTACT_DETAILS.location}</h2>
            <p className={styles.locationDescription}>Local inventory and supply support for FRP and composite-production requirements.</p>
            <address className={styles.address}>
              <span>Supply location</span>
              {CONTACT_DETAILS.address}
            </address>
            <dl className={styles.contactDetails}>
              <div>
                <dt>Phone / WhatsApp</dt>
                <dd>{CONTACT_DETAILS.phone}</dd>
              </div>
              <div>
                <dt>Sales email</dt>
                <dd>{CONTACT_DETAILS.email}</dd>
              </div>
            </dl>
          </div>

          <div className={styles.formPanel}>
            {status === "success" ? (
              <div className={styles.successCard} role="status">
                <p className={styles.successKicker}>Message received</p>
                <h2 className={styles.successTitle}>
                  Thanks{name.trim().split(/\s+/)[0] ? `, ${name.trim().split(/\s+/)[0]}` : ""}. We&apos;ll get back to you about your question.
                </h2>
                <p className={styles.successText}>
                  If you also need pricing or technical grade guidance, send a separate quotation request with your production details.
                </p>
                <Link href="/quote" className={styles.homeLink}>Request a quotation</Link>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.sectionHeading}>
                  <h2 id="message-heading">Send a general enquiry</h2>
                  <p>This form is for a general supply enquiry, not a pricing request.</p>
                </div>

                <div className={styles.fieldRow}>
                  <label className={styles.field}>
                    <span className={styles.label}>Name *</span>
                    <input className={styles.input} name="name" type="text" required minLength={2} maxLength={120} autoComplete="name" placeholder="Your name" value={name} onChange={(event) => setName(event.target.value)} disabled={status === "submitting"} />
                  </label>
                  <label className={styles.field}>
                    <span className={styles.label}>Phone or WhatsApp *</span>
                    <input className={styles.input} name="phone" type="tel" required minLength={7} maxLength={40} autoComplete="tel" placeholder="Your contact number" value={phone} onChange={(event) => setPhone(event.target.value)} disabled={status === "submitting"} />
                  </label>
                </div>

                <div className={styles.fieldRow}>
                  <label className={styles.field}>
                    <span className={styles.label}>Email <span className={styles.optional}>(optional)</span></span>
                    <input className={styles.input} name="email" type="email" maxLength={200} autoComplete="email" placeholder="you@company.com" value={email} onChange={(event) => setEmail(event.target.value)} disabled={status === "submitting"} />
                  </label>
                  <label className={styles.field}>
                    <span className={styles.label}>City or delivery area <span className={styles.optional}>(optional)</span></span>
                    <input className={styles.input} name="location" type="text" maxLength={120} autoComplete="address-level2" placeholder="City, district, or state" value={location} onChange={(event) => setLocation(event.target.value)} disabled={status === "submitting"} />
                  </label>
                </div>

                <label className={styles.field}>
                  <span className={styles.label}>Your question *</span>
                  <textarea className={styles.textarea} name="message" required rows={5} minLength={2} maxLength={1500} placeholder="For example: availability in my area, delivery timing, product documents, or a general supply question." value={message} onChange={(event) => setMessage(event.target.value)} disabled={status === "submitting"} />
                </label>

                <button type="submit" className={styles.submit} disabled={status === "submitting"}>
                  {status === "submitting" ? "Sending message…" : "Send message"}
                </button>
                {status === "error" && <p className={styles.errorText} role="alert">We could not send your message. Please try again shortly.</p>}
              </form>
            )}
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
