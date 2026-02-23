"use client";

import { useState, useRef, DragEvent } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import styles from "./apply.module.css";
import { db, storage } from "@/app/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

interface UploadedFile {
  file: File;
  name: string;
  size: string;
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
  return (bytes / (1024 * 1024)).toFixed(1) + " MB";
}

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
    type: "Part-time",
    description: "Help South African matric students succeed in mathematics. No degree required.",
    responsibilities: [
      "Understand and teach the South African syllabus",
      "Design learning paths for students",
      "Help arrange and review homework sheets",
      "Provide detailed feedback on the app to develop an intuitive experience for kids",
    ],
    requirements: [
      "No degree required",
      "Experience teaching students",
      "Comfortable teaching in English",
      "Patient, encouraging, and genuinely cares about students",
      "Willing to learn the South African curriculum",
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
    a: "Apply → Review → Founder call → Decision. Usually under 1 week.",
  },
  {
    q: "When do you start?",
    a: "We're hiring now. Successful candidates can start immediately.",
  },
];

type RoleKey = "engineer" | "editor" | "teacher";

export default function ApplyPage() {
  const [activeRole, setActiveRole] = useState<RoleKey>("engineer");
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [resume, setResume] = useState<UploadedFile | null>(null);
  const [portfolio, setPortfolio] = useState<UploadedFile | null>(null);
  const [resumeDrag, setResumeDrag] = useState(false);
  const [portfolioDrag, setPortfolioDrag] = useState(false);
  const resumeRef = useRef<HTMLInputElement>(null);
  const portfolioRef = useRef<HTMLInputElement>(null);
  const role = ROLES[activeRole];

  const handleFile = (
    file: File,
    setter: (f: UploadedFile | null) => void
  ) => {
    setter({ file, name: file.name, size: formatFileSize(file.size) });
  };

  const handleDrop = (
    e: DragEvent<HTMLDivElement>,
    setter: (f: UploadedFile | null) => void,
    dragSetter: (v: boolean) => void
  ) => {
    e.preventDefault();
    dragSetter(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file, setter);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(false);
    setSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const timestamp = Date.now();
      let resumeUrl = "";
      let portfolioUrl = "";

      if (resume) {
        const resumeRef = ref(storage, `applications/${timestamp}_${resume.name}`);
        await uploadBytes(resumeRef, resume.file);
        resumeUrl = await getDownloadURL(resumeRef);
      }

      if (portfolio) {
        const portfolioRef = ref(storage, `applications/${timestamp}_${portfolio.name}`);
        await uploadBytes(portfolioRef, portfolio.file);
        portfolioUrl = await getDownloadURL(portfolioRef);
      }

      await addDoc(collection(db, "applications"), {
        role: formData.get("role"),
        roleTitle: ROLES[activeRole].title,
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        location: formData.get("location"),
        experience: formData.get("experience"),
        startDate: formData.get("startDate"),
        excitement: formData.get("excitement"),
        linkedin: formData.get("linkedin") || "",
        github: formData.get("github") || "",
        resumeUrl,
        portfolioUrl,
        submittedAt: new Date().toISOString(),
      });

      setSubmitted(true);
    } catch {
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <>
        <Navbar />
        <main style={{ paddingTop: 72 }}>
          <section className={styles.successSection}>
            <div className={styles.successInner}>
              <h1 className={styles.successTitle}>We've Got Your Application</h1>
              <p className={styles.successText}>
                Thank you for applying to join THREXON. Our team reviews every application carefully, and we'll get back to you within 2-3 business days. In the meantime, feel free to connect with us on LinkedIn.
              </p>
              <a
                href="https://linkedin.com/company/trexon"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.successLink}
              >
                → Follow us on LinkedIn
              </a>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

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

        {/* Hiring Process */}
        <section className={styles.processSection}>
          <div className={styles.processInner}>
            <h2 className={styles.processTitle}>Hiring Process</h2>
            <div className={styles.processSteps}>
              <div className={styles.processStep}>
                <span className={styles.processNumber}>1</span>
                <div className={styles.processConnector} />
                <h3>Apply</h3>
                <p>Submit your application through the form below</p>
              </div>
              <div className={styles.processStep}>
                <span className={styles.processNumber}>2</span>
                <div className={styles.processConnector} />
                <h3>Review</h3>
                <p>We review every application within 3 days</p>
              </div>
              <div className={styles.processStep}>
                <span className={styles.processNumber}>3</span>
                <div className={styles.processConnector} />
                <h3>Conversation</h3>
                <p>30-min call with a founder — no trick questions</p>
              </div>
              <div className={styles.processStep}>
                <span className={styles.processNumber}>4</span>
                <h3>Decision</h3>
                <p>You'll hear back within 1 week</p>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className={styles.formSection}>
          <div className={styles.formInner}>
            <h2 className={styles.formTitle}>Apply Now</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
              {/* Role (auto-filled from tab) */}
              <div className={styles.formGroup}>
                <label htmlFor="role">Role</label>
                <select id="role" name="role" value={activeRole} onChange={(e) => setActiveRole(e.target.value as RoleKey)}>
                  <option value="engineer">Software Engineer</option>
                  <option value="editor">Video Editor</option>
                  <option value="teacher">Math Teacher</option>
                </select>
              </div>

              {/* Name + Email */}
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" placeholder="Your full name" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="you@example.com" required />
                </div>
              </div>

              {/* Phone + Location */}
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" name="phone" placeholder="+91 ..." required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="location">Current Location</label>
                  <input type="text" id="location" name="location" placeholder="City, Country" required />
                </div>
              </div>

              {/* Experience + Start Date */}
              <div className={styles.formRow}>
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
                  <label htmlFor="startDate">Earliest Start Date</label>
                  <input type="date" id="startDate" name="startDate" required />
                </div>
              </div>

              {/* Motivation */}
              <div className={styles.formGroup}>
                <label htmlFor="excitement">What excites you about this?</label>
                <textarea id="excitement" name="excitement" rows={4} placeholder="Tell us what draws you to THREXON and this role..." required></textarea>
              </div>

              {/* Resume Upload */}
              <div className={styles.formGroup}>
                <label>Resume / CV <span className={styles.required}>*</span></label>
                <div
                  className={`${styles.dropZone} ${resumeDrag ? styles.dropZoneActive : ""} ${resume ? styles.dropZoneHasFile : ""}`}
                  onDragOver={(e) => { e.preventDefault(); setResumeDrag(true); }}
                  onDragLeave={() => setResumeDrag(false)}
                  onDrop={(e) => handleDrop(e, setResume, setResumeDrag)}
                  onClick={() => resumeRef.current?.click()}
                >
                  <input
                    ref={resumeRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className={styles.fileInput}
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleFile(file, setResume);
                    }}
                  />
                  {resume ? (
                    <div className={styles.filePreview}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                      <div className={styles.fileInfo}>
                        <span className={styles.fileName}>{resume.name}</span>
                        <span className={styles.fileSize}>{resume.size}</span>
                      </div>
                      <button
                        type="button"
                        className={styles.fileRemove}
                        onClick={(e) => { e.stopPropagation(); setResume(null); if (resumeRef.current) resumeRef.current.value = ""; }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <div className={styles.dropZoneContent}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1="12" y1="3" x2="12" y2="15" />
                      </svg>
                      <p>Drag & drop your resume here, or <span className={styles.browseLink}>browse</span></p>
                      <span className={styles.fileHint}>PDF or DOC, max 10MB</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Portfolio Upload (optional) */}
              <div className={styles.formGroup}>
                <label>Portfolio / Sample Work <span className={styles.optional}>(optional)</span></label>
                <div
                  className={`${styles.dropZone} ${portfolioDrag ? styles.dropZoneActive : ""} ${portfolio ? styles.dropZoneHasFile : ""}`}
                  onDragOver={(e) => { e.preventDefault(); setPortfolioDrag(true); }}
                  onDragLeave={() => setPortfolioDrag(false)}
                  onDrop={(e) => handleDrop(e, setPortfolio, setPortfolioDrag)}
                  onClick={() => portfolioRef.current?.click()}
                >
                  <input
                    ref={portfolioRef}
                    type="file"
                    accept=".pdf,.zip,.mp4,.png,.jpg,.jpeg"
                    className={styles.fileInput}
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleFile(file, setPortfolio);
                    }}
                  />
                  {portfolio ? (
                    <div className={styles.filePreview}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                      <div className={styles.fileInfo}>
                        <span className={styles.fileName}>{portfolio.name}</span>
                        <span className={styles.fileSize}>{portfolio.size}</span>
                      </div>
                      <button
                        type="button"
                        className={styles.fileRemove}
                        onClick={(e) => { e.stopPropagation(); setPortfolio(null); if (portfolioRef.current) portfolioRef.current.value = ""; }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <div className={styles.dropZoneContent}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1="12" y1="3" x2="12" y2="15" />
                      </svg>
                      <p>Click to upload or drag and drop</p>
                      <span className={styles.fileHint}>PDF, ZIP, MP4, or images — max 25MB</span>
                    </div>
                  )}
                </div>
              </div>

              {/* LinkedIn + GitHub */}
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="linkedin">LinkedIn Profile</label>
                  <input type="url" id="linkedin" name="linkedin" placeholder="https://linkedin.com/in/..." />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="github">GitHub Profile <span className={styles.optional}>(optional)</span></label>
                  <input type="url" id="github" name="github" placeholder="https://github.com/..." />
                </div>
              </div>

              {submitError && (
                <p className={styles.errorMsg}>
                  Something went wrong. Please try again.
                </p>
              )}

              <button type="submit" className={`${styles.submitBtn} ${submitting ? styles.submitBtnLoading : ""}`} disabled={submitting}>
                {submitting ? (
                  <span className={styles.submitSpinner}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  "Submit Application"
                )}
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
