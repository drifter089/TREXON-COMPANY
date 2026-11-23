"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/app/lib/firebase";
import styles from "./QuoteForm.module.css";

const APPLICATIONS = [
  "FRP roofing sheets",
  "Tanks or vessels",
  "Pipes or fittings",
  "Moulded FRP parts",
  "Pultruded profiles",
  "Other composite product",
];

const QUANTITY_RANGES = [
  { value: "sample", label: "Sample or trial quantity" },
  { value: "up-to-1t", label: "Up to 1 tonne" },
  { value: "1t-5t", label: "1–5 tonnes" },
  { value: "5t-plus", label: "More than 5 tonnes" },
  { value: "not-sure", label: "Not sure yet" },
];

type Status = "idle" | "submitting" | "success" | "error";

export default function QuoteForm() {
  const [applications, setApplications] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [applicationError, setApplicationError] = useState(false);
  const [firstName, setFirstName] = useState("");

  function toggleApplication(application: string) {
    setApplicationError(false);
    setApplications((selected) =>
      selected.includes(application)
        ? selected.filter((item) => item !== application)
        : [...selected, application],
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    if (applications.length === 0) {
      setApplicationError(true);
      return;
    }

    const form = new FormData(event.currentTarget);
    const fullName = String(form.get("fullName") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const company = String(form.get("company") ?? "").trim();
    const location = String(form.get("location") ?? "").trim();
    const quantityRange = String(form.get("quantityRange") ?? "");
    const packaging = String(form.get("packaging") ?? "");
    const gradeSupport = String(form.get("gradeSupport") ?? "");
    const message = String(form.get("message") ?? "").trim();

    setFirstName(fullName.split(/\s+/)[0] ?? "");
    setStatus("submitting");

    try {
      await addDoc(collection(db, "quote_requests"), {
        fullName,
        phone,
        email: email || null,
        company: company || null,
        location: location || null,
        applications,
        quantityRange,
        packaging: packaging || null,
        gradeSupport,
        message: message || null,
        source: "quote-page",
        createdAt: serverTimestamp(),
      });
      setStatus("success");
    } catch (error) {
      console.error("Quote request failed", error);
      setStatus("error");
    }
  }

  return (
    <main className={styles.page}>
      <section className={styles.heroSection} aria-labelledby="quote-heading">
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
                <h1 id="quote-heading" className={styles.title}>Request a quotation</h1>
                <p className={styles.intro}>
                  Tell us what you make and the quantity you need. If you are unsure which polyester resin grade fits, we will help you narrow it down before quoting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.formSection} id="grade-help" aria-labelledby="form-heading">
        <div className={styles.formInner}>
          <div className={styles.formColumn}>
            {status === "success" ? (
              <div className={styles.successCard} role="status">
                <p className={styles.successKicker}>Request received</p>
                <h2 className={styles.successTitle}>
                  Thanks{firstName ? `, ${firstName}` : ""}. We will review your requirement and get back to you.
                </h2>
                <p className={styles.successText}>
                  We may ask a few technical questions before confirming the right grade and quotation.
                </p>
                <Link className={styles.homeLink} href="/">Return home</Link>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.sectionHeading}>
                  <h2 id="form-heading">Your requirement</h2>
                  <p>Fields marked with an asterisk are needed to prepare a useful response.</p>
                </div>

                <section className={styles.formGroup}>
                  <div className={styles.fieldRow}>
                    <label className={styles.field}>
                      <span className={styles.label}>Name *</span>
                      <input className={styles.input} name="fullName" type="text" autoComplete="name" required maxLength={120} placeholder="Your name" disabled={status === "submitting"} />
                    </label>
                    <label className={styles.field}>
                      <span className={styles.label}>Phone or WhatsApp *</span>
                      <input className={styles.input} name="phone" type="tel" autoComplete="tel" required minLength={7} maxLength={40} placeholder="Your contact number" disabled={status === "submitting"} />
                    </label>
                  </div>
                  <div className={styles.fieldRow}>
                    <label className={styles.field}>
                      <span className={styles.label}>Email <span className={styles.optional}>(optional)</span></span>
                      <input className={styles.input} name="email" type="email" autoComplete="email" maxLength={200} placeholder="you@company.com" disabled={status === "submitting"} />
                    </label>
                    <label className={styles.field}>
                      <span className={styles.label}>Company <span className={styles.optional}>(optional)</span></span>
                      <input className={styles.input} name="company" type="text" autoComplete="organization" maxLength={160} placeholder="Company name" disabled={status === "submitting"} />
                    </label>
                  </div>
                  <label className={styles.field}>
                    <span className={styles.label}>City or delivery location <span className={styles.optional}>(optional)</span></span>
                    <input className={styles.input} name="location" type="text" autoComplete="address-level2" maxLength={120} placeholder="City, district, or state" disabled={status === "submitting"} />
                  </label>
                </section>

                <section className={styles.formGroup}>
                  <fieldset className={styles.fieldset} aria-describedby={applicationError ? "application-error" : undefined}>
                    <legend className={styles.label}>
                      What are you making? * <span className={styles.selectionHint}>Select all that apply</span>
                    </legend>
                    <div className={styles.applicationChoices}>
                      {APPLICATIONS.map((application) => {
                        const selected = applications.includes(application);
                        return (
                          <button
                            key={application}
                            type="button"
                            className={`${styles.applicationChoice} ${selected ? styles.applicationChoiceSelected : ""}`}
                            aria-pressed={selected}
                            onClick={() => toggleApplication(application)}
                            disabled={status === "submitting"}
                          >
                            <span className={styles.optionCheck} aria-hidden>
                              {selected && (
                                <svg viewBox="0 0 12 12" fill="none">
                                  <path d="m2 6.1 2.35 2.35L10 2.9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              )}
                            </span>
                            <span>{application}</span>
                          </button>
                        );
                      })}
                    </div>
                    {applicationError && <p className={styles.errorText} id="application-error">Select at least one application.</p>}
                  </fieldset>
                  <div className={styles.fieldRow}>
                    <label className={styles.field}>
                      <span className={styles.label}>Approximate quantity *</span>
                      <select className={styles.select} name="quantityRange" required defaultValue="" disabled={status === "submitting"}>
                        <option value="" disabled>Select a quantity</option>
                        {QUANTITY_RANGES.map((range) => <option key={range.value} value={range.value}>{range.label}</option>)}
                      </select>
                    </label>
                    <label className={styles.field}>
                      <span className={styles.label}>Preferred packing <span className={styles.optional}>(optional)</span></span>
                      <select className={styles.select} name="packaging" defaultValue="" disabled={status === "submitting"}>
                        <option value="">Not sure / no preference</option>
                        <option value="drums">Drums</option>
                        <option value="bulk">Bulk / tanker</option>
                        <option value="other">Other</option>
                      </select>
                    </label>
                  </div>
                </section>

                <section className={styles.formGroup}>
                  <fieldset className={styles.fieldset}>
                    <legend className={styles.label}>How can we help? *</legend>
                    <div className={styles.radioChoices}>
                      <label className={styles.radioChoice}>
                        <input type="radio" name="gradeSupport" value="choose-grade" required defaultChecked disabled={status === "submitting"} />
                        <span><strong>Help me choose a grade</strong><small>I know the application but want technical guidance.</small></span>
                      </label>
                      <label className={styles.radioChoice}>
                        <input type="radio" name="gradeSupport" value="known-grade" disabled={status === "submitting"} />
                        <span><strong>I know the grade I need</strong><small>I need availability and a commercial quotation.</small></span>
                      </label>
                    </div>
                  </fieldset>
                  <label className={styles.field}>
                    <span className={styles.label}>Anything else we should know? <span className={styles.optional}>(optional)</span></span>
                    <textarea className={styles.textarea} name="message" rows={5} maxLength={1500} placeholder="For example: grade name, current consumption, delivery timing, or any technical requirement." disabled={status === "submitting"} />
                  </label>
                </section>

                <button className={styles.submit} type="submit" disabled={status === "submitting"}>
                  {status === "submitting" ? "Sending request…" : "Request a quotation"}
                </button>
                {status === "error" && <p className={styles.errorText} role="alert">We could not send your request. Please try again shortly.</p>}
              </form>
            )}
          </div>

          <aside className={styles.aside} aria-labelledby="quote-tips-heading">
            <h2 id="quote-tips-heading">For a faster quotation</h2>
            <ol className={styles.tips}>
              <li><div><strong>Specify the application</strong><p>Choose the product you are making to help narrow the suitable grade.</p></div></li>
              <li><div><strong>Estimate the quantity</strong><p>A trial quantity or expected requirement is enough to start.</p></div></li>
              <li><div><strong>Add the delivery city</strong><p>It helps us check local availability and delivery options.</p></div></li>
            </ol>
            <div className={styles.note}>
              <p>Please do not share payment details or confidential formulation information in this form.</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
