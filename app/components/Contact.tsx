"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/app/lib/firebase";
import styles from "./Contact.module.css";

const PROJECT_TYPES = [
  { value: "software", label: "Custom software" },
  { value: "website", label: "Website" },
  { value: "marketing", label: "Marketing / Growth" },
  { value: "other", label: "Something else" },
];

const BUDGET_RANGES = [
  { value: "<10k", label: "Under $10k" },
  { value: "10k-25k", label: "$10k – $25k" },
  { value: "25k-50k", label: "$25k – $50k" },
  { value: "50k+", label: "$50k+" },
  { value: "unsure", label: "Not sure yet" },
];

const TIMELINES = [
  { value: "asap", label: "ASAP" },
  { value: "1-3mo", label: "1 – 3 months" },
  { value: "3-6mo", label: "3 – 6 months" },
  { value: "exploring", label: "Just exploring" },
];

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting" || !name.trim() || !email.trim() || !message.trim()) return;

    setStatus("submitting");
    try {
      await addDoc(collection(db, "contact_submissions"), {
        name: name.trim(), email: email.trim(), company: company.trim() || null,
        projectType: projectType || null, budget: budget || null, timeline: timeline || null,
        message: message.trim(), source: "contact-page", createdAt: serverTimestamp(),
      });
      setStatus("success");
    } catch (error) {
      console.error("Contact form failed", error);
      setStatus("error");
    }
  }

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Contact</span>
          <h1 className={styles.heroTitle}>Tell us what you&apos;re building.</h1>
          <p className={styles.heroBody}>A site, an app, a campaign, or something messier. We&apos;ll come back with what&apos;s feasible, what it&apos;ll take, and the questions we&apos;d ask before quoting.</p>
        </div>
      </section>

      <section className={styles.formSection}>
        <div className={styles.formInner}>
          <div className={styles.formCol}>
            {status === "success" ? (
              <div className={styles.successCard}>
                <span className={styles.successKicker}>Sent</span>
                <h2 className={styles.successTitle}>Thanks{name.split(" ")[0] && ` ${name.split(" ")[0]}`}. We&apos;ll be in touch within a day.</h2>
                <p className={styles.successBody}>A reply from a real person is on its way. In the meantime, feel free to <Link href="/" className={styles.successLink}>see our work</Link>.</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <div className={styles.fieldRow}>
                  <label className={styles.field}><span className={styles.fieldLabel}>Name</span><input type="text" required autoComplete="name" placeholder="Jordan Smith" value={name} onChange={(event) => setName(event.target.value)} disabled={status === "submitting"} className={styles.input} /></label>
                  <label className={styles.field}><span className={styles.fieldLabel}>Email</span><input type="email" required autoComplete="email" placeholder="you@company.com" value={email} onChange={(event) => setEmail(event.target.value)} disabled={status === "submitting"} className={styles.input} /></label>
                </div>
                <label className={styles.field}><span className={styles.fieldLabel}>Company <span className={styles.fieldHint}>(optional)</span></span><input type="text" autoComplete="organization" placeholder="Acme Co." value={company} onChange={(event) => setCompany(event.target.value)} disabled={status === "submitting"} className={styles.input} /></label>
                <fieldset className={styles.fieldset}>
                  <legend className={styles.fieldLabel}>Project type</legend>
                  <div className={styles.chips}>{PROJECT_TYPES.map((type) => <button key={type.value} type="button" className={`${styles.chip} ${projectType === type.value ? styles.chipActive : ""}`} onClick={() => setProjectType(projectType === type.value ? "" : type.value)} disabled={status === "submitting"}>{type.label}</button>)}</div>
                </fieldset>
                <div className={styles.fieldRow}>
                  <label className={styles.field}><span className={styles.fieldLabel}>Budget <span className={styles.fieldHint}>(optional)</span></span><select value={budget} onChange={(event) => setBudget(event.target.value)} disabled={status === "submitting"} className={styles.select}><option value="">Select a range</option>{BUDGET_RANGES.map((range) => <option key={range.value} value={range.value}>{range.label}</option>)}</select></label>
                  <label className={styles.field}><span className={styles.fieldLabel}>Timeline <span className={styles.fieldHint}>(optional)</span></span><select value={timeline} onChange={(event) => setTimeline(event.target.value)} disabled={status === "submitting"} className={styles.select}><option value="">Select a window</option>{TIMELINES.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}</select></label>
                </div>
                <label className={styles.field}><span className={styles.fieldLabel}>Message</span><textarea required rows={6} maxLength={1500} placeholder="A few lines about what you're building, the problem you're solving, and anything else we should know." value={message} onChange={(event) => setMessage(event.target.value)} disabled={status === "submitting"} className={styles.textarea} /></label>
                <button type="submit" className={styles.submit} disabled={status === "submitting"}><span className={styles.submitText}>{status === "submitting" ? "Sending…" : "Send message"}</span><span className={styles.submitArrow} aria-hidden><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg></span></button>
                {status === "error" && <span className={styles.errorText}>Something went wrong. Please try again or refresh.</span>}
              </form>
            )}
          </div>
          <aside className={styles.aside}>
            <div className={styles.infoBlock}><span className={styles.infoKicker}>Response time</span><p className={styles.infoText}>Most replies within 24 hours. We read every brief — no templates.</p></div>
            <div className={styles.infoBlock}><span className={styles.infoKicker}>What you&apos;ll get</span><p className={styles.infoText}>A real answer from someone who&apos;d build it: feasibility, rough timeline, ballpark price, and the questions we&apos;d ask before quoting.</p></div>
            <div className={styles.infoBlock}><span className={styles.infoKicker}>What you won&apos;t get</span><p className={styles.infoText}>A pitch deck. A &ldquo;let&apos;s schedule a discovery workshop.&rdquo; Someone reading from a script.</p></div>
          </aside>
        </div>
      </section>
    </main>
  );
}
