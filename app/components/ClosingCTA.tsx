"use client";

import { useState, type FormEvent } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/app/lib/firebase";
import styles from "./ClosingCTA.module.css";

type Status = "idle" | "submitting" | "success" | "error";

export default function ClosingCTA() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting" || !email.trim() || !message.trim()) return;
    setStatus("submitting");
    try {
      await addDoc(collection(db, "contact_submissions"), { email: email.trim(), message: message.trim(), source: "closing-cta", createdAt: serverTimestamp() });
      setStatus("success");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("ClosingCTA submit failed", error);
      setStatus("error");
    }
  }

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.eyebrow}>Get in touch</span>
          <h2 className={styles.headline}>
            <span className={styles.line}><span className={styles.word}>Let&apos;s talk.</span></span>
            <span className={styles.line}><span className={`${styles.word} ${styles.dim}`}>About your project<span className={styles.accent}>.</span></span></span>
          </h2>
          <p className={styles.body}>Tell us what you&apos;re building — a site, an app, a campaign, or something messier. We&apos;ll come back with what&apos;s feasible and what it&apos;ll take.</p>
          <div className={styles.meta}><span><span className={styles.metaDot} />Replies within 24 hours</span><span className={styles.metaSep}>·</span><span>No decks. Just answers.</span></div>
        </div>
        <div className={styles.right}>
          {status === "success" ? (
            <div className={styles.successCard}><span className={styles.successKicker}>Sent</span><p className={styles.successText}>Thanks. We&apos;ll be in touch within a day<span className={styles.accent}>.</span></p></div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <label className={styles.field}><span className={styles.fieldLabel}>Email</span><input type="email" required autoComplete="email" placeholder="you@company.com" value={email} onChange={(event) => setEmail(event.target.value)} disabled={status === "submitting"} className={styles.input} /></label>
              <label className={styles.field}><span className={styles.fieldLabel}>Project</span><textarea required rows={4} maxLength={500} placeholder="A few lines about what you're building, the timeline, and anything we should know." value={message} onChange={(event) => setMessage(event.target.value)} disabled={status === "submitting"} className={styles.textarea} /></label>
              <button type="submit" className={styles.submit} disabled={status === "submitting"}><span className={styles.submitText}>{status === "submitting" ? "Sending…" : "Send message"}</span><span className={styles.submitArrow} aria-hidden><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg></span></button>
              {status === "error" && <span className={styles.errorText}>Something went wrong. Please try again.</span>}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
