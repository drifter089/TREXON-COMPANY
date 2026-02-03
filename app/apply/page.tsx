"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import styles from "./apply.module.css";

const ROLES = {
  engineer: {
    title: "Software Engineer",
    location: "Delhi, India (On-site)",
    type: "Full-time",
    description: "Build the MatricMath platform from scratch — you'll own the product.",
    responsibilities: [
      "Develop the web app (Next.js, TypeScript) and mobile app (React Native)",
      "Build real-time video infrastructure for live tutoring sessions",
      "Create tools for tutors: scheduling, progress tracking, lesson management",
      "Work directly with the founders — no layers, no waiting",
    ],
    requirements: [
      "1+ years experience with React / Next.js",
      "Comfortable across the stack — frontend, backend, database",
      "Moves fast and ships often",
      "Excited about building a product from zero",
    ],
  },
  editor: {
    title: "Video Editor",
    location: "Delhi, India (On-site)",
    type: "Full-time",
    description: "Create educational content that makes math accessible and engaging.",
    responsibilities: [
      "Edit tutorial videos and recorded lessons for the platform",
      "Create marketing content for social media and ads",
      "Design motion graphics for educational materials",
      "Collaborate with tutors to produce high-quality content",
    ],
    requirements: [
      "1+ years of video editing experience",
      "Proficient in Premiere Pro, After Effects, or similar",
      "Eye for clean, professional educational content",
      "Fast turnaround and attention to detail",
    ],
  },
  teacher: {
    title: "Math Teacher",
    location: "Delhi, India (On-site)",
    type: "Full-time",
    description: "Teach South African matric students mathematics through live online sessions.",
    responsibilities: [
      "Conduct live tutoring sessions with small batches of students",
      "Follow the South African CAPS curriculum (we'll train you)",
      "Track student progress and provide personalized feedback",
      "Review and grade handwritten homework submissions",
    ],
    requirements: [
      "B.Sc/M.Sc in Mathematics, Engineering, or related field",
      "1+ years teaching or tutoring experience",
      "Strong English communication skills",
      "Patient, encouraging, and genuinely cares about students",
    ],
  },
};

const FAQ = [
  {
    q: "Do I need to know the South African syllabus?",
    a: "No, we provide full training on the CAPS curriculum for all tutors.",
  },
  {
    q: "Is this a remote position?",
    a: "No, all roles are on-site at our Delhi office. We believe in building together.",
  },
  {
    q: "What's the interview process?",
    a: "Application → Short call → Task/Demo → Offer. Usually 1-2 weeks total.",
  },
  {
    q: "When do you start?",
    a: "We're hiring now. Successful candidates can start immediately.",
  },
];

type RoleKey = "engineer" | "editor" | "teacher";

export default function ApplyPage() {
  const [activeRole, setActiveRole] = useState<RoleKey>("engineer");
  const role = ROLES[activeRole];

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 72 }}>
        {/* Page Header */}
        <section className={styles.header}>
          <div className={styles.headerInner}>
            <span className={styles.eyebrow}>Careers</span>
            <h1 className={styles.title}>Join THREXON</h1>
            <p className={styles.subtitle}>
              We're building our founding team in Delhi. Three roles. Massive impact.
            </p>
          </div>
        </section>

        {/* Role Toggle */}
        <section className={styles.toggleSection}>
          <div className={styles.toggleInner}>
            <div className={styles.toggle}>
              <button
                className={`${styles.toggleBtn} ${activeRole === "engineer" ? styles.active : ""}`}
                onClick={() => setActiveRole("engineer")}
              >
                Software Engineer
              </button>
              <button
                className={`${styles.toggleBtn} ${activeRole === "editor" ? styles.active : ""}`}
                onClick={() => setActiveRole("editor")}
              >
                Video Editor
              </button>
              <button
                className={`${styles.toggleBtn} ${activeRole === "teacher" ? styles.active : ""}`}
                onClick={() => setActiveRole("teacher")}
              >
                Math Teacher
              </button>
            </div>
          </div>
        </section>

        {/* Role Description */}
        <section className={styles.roleSection}>
          <div className={styles.roleInner}>
            <div className={styles.roleHeader}>
              <h2 className={styles.roleTitle}>{role.title}</h2>
              <div className={styles.roleMeta}>
                <span className={styles.tag}>{role.type}</span>
                <span className={styles.tag}>{role.location}</span>
              </div>
              <p className={styles.roleDesc}>{role.description}</p>
            </div>

            <div className={styles.roleDetails}>
              <div className={styles.roleColumn}>
                <h3>What you'll do</h3>
                <ul>
                  {role.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.roleColumn}>
                <h3>What we're looking for</h3>
                <ul>
                  {role.requirements.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className={styles.formSection}>
          <div className={styles.formInner}>
            <h2 className={styles.formTitle}>Apply Now</h2>
            <form className={styles.form} action="https://formspree.io/f/xnjzgaoe" method="POST">
              <input type="hidden" name="role" value={role.title} />

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" name="phone" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="location">Current Location</label>
                  <input type="text" id="location" name="location" required />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="experience">Years of Experience</label>
                <select id="experience" name="experience" required>
                  <option value="">Select...</option>
                  <option value="0-1">Less than 1 year</option>
                  <option value="1-2">1-2 years</option>
                  <option value="2-4">2-4 years</option>
                  <option value="4+">4+ years</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="why">Why do you want to join TREXON?</label>
                <textarea id="why" name="why" rows={4} required></textarea>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="resume">Resume / CV Link</label>
                <input type="url" id="resume" name="resume" placeholder="Google Drive, Dropbox, or LinkedIn URL" required />
                <span className={styles.fileHint}>Share a link to your resume (Google Drive, Dropbox, etc.)</span>
              </div>

              <button type="submit" className={styles.submitBtn}>
                Submit Application
              </button>
            </form>
          </div>
        </section>

        {/* FAQ */}
        <section className={styles.faqSection}>
          <div className={styles.faqInner}>
            <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
            <div className={styles.faqGrid}>
              {FAQ.map((item, i) => (
                <div key={i} className={styles.faqItem}>
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
