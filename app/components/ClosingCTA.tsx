"use client";

import { useRef, useState, type FormEvent } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/app/lib/firebase";
import styles from "./ClosingCTA.module.css";

const ease = [0.16, 1, 0.3, 1] as const;

type Status = "idle" | "submitting" | "success" | "error";

export default function ClosingCTA() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const headlineInView = useInView(headlineRef, {
    once: true,
    margin: "-10%",
  });

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();
    if (!trimmedEmail || !trimmedMessage) return;

    setStatus("submitting");
    try {
      await addDoc(collection(db, "contact_submissions"), {
        email: trimmedEmail,
        message: trimmedMessage,
        source: "closing-cta",
        createdAt: serverTimestamp(),
      });
      setStatus("success");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("ClosingCTA submit failed", err);
      setStatus("error");
    }
  }

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <motion.span
            className={styles.eyebrow}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease }}
          >
            Get in touch
          </motion.span>

          <h2 ref={headlineRef} className={styles.headline}>
            <span className={styles.line}>
              <motion.span
                className={styles.word}
                initial={{ y: "110%" }}
                animate={headlineInView ? { y: 0 } : { y: "110%" }}
                transition={{ duration: 0.9, delay: 0.1, ease }}
              >
                Let&apos;s talk.
              </motion.span>
            </span>
            <span className={styles.line}>
              <motion.span
                className={`${styles.word} ${styles.dim}`}
                initial={{ y: "110%" }}
                animate={headlineInView ? { y: 0 } : { y: "110%" }}
                transition={{ duration: 0.9, delay: 0.22, ease }}
              >
                About your project<span className={styles.accent}>.</span>
              </motion.span>
            </span>
          </h2>

          <motion.p
            className={styles.body}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, delay: 0.5, ease }}
          >
            Tell us what you&apos;re building — a site, an app, a campaign, or
            something messier. We&apos;ll come back with what&apos;s feasible
            and what it&apos;ll take.
          </motion.p>

          <motion.div
            className={styles.meta}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, delay: 0.7, ease }}
          >
            <span>
              <span className={styles.metaDot} />
              Replies within 24 hours
            </span>
            <span className={styles.metaSep}>·</span>
            <span>No decks. Just answers.</span>
          </motion.div>
        </div>

        <motion.div
          className={styles.right}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.85, delay: 0.45, ease }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {status === "success" ? (
              <motion.div
                key="success"
                className={styles.successCard}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.6, ease }}
              >
                <span className={styles.successKicker}>Sent</span>
                <p className={styles.successText}>
                  Thanks. We&apos;ll be in touch within a day
                  <span className={styles.accent}>.</span>
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                className={styles.form}
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease }}
                noValidate
              >
                <label className={styles.field}>
                  <span className={styles.fieldLabel}>Email</span>
                  <input
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === "submitting"}
                    className={styles.input}
                    data-cursor="hover"
                  />
                </label>

                <label className={styles.field}>
                  <span className={styles.fieldLabel}>Project</span>
                  <textarea
                    required
                    rows={4}
                    maxLength={500}
                    placeholder="A few lines about what you're building, the timeline, and anything we should know."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    disabled={status === "submitting"}
                    className={styles.textarea}
                    data-cursor="hover"
                  />
                </label>

                <button
                  type="submit"
                  className={styles.submit}
                  disabled={status === "submitting"}
                  data-cursor="hover"
                >
                  <span className={styles.submitText}>
                    {status === "submitting" ? "Sending…" : "Send message"}
                  </span>
                  <span className={styles.submitArrow} aria-hidden>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>

                {status === "error" && (
                  <motion.span
                    className={styles.errorText}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, ease }}
                  >
                    Something went wrong. Please try again.
                  </motion.span>
                )}
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
