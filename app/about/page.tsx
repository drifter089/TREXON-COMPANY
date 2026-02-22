import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 72 }}>
        {/* Hero - Who We Are + What We Do */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <span className={styles.eyebrow}>About THREXON</span>
            <h1 className={styles.title}>
              Ed-tech company based in Delhi, building MatricMath
            </h1>
            <p className={styles.subtitle}>
              We connect India's best math tutors with South African matric
              students through live online sessions.
            </p>
            <Link href="/apply" className={styles.ctaButton}>
              See Open Roles
            </Link>
          </div>
        </section>

        {/* Mission */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <span className={styles.eyebrow}>Our Mission</span>
            <h2 className={styles.sectionTitle}>
              Make quality math tutoring accessible to every South African student
            </h2>
            <p className={styles.sectionSubtitle}>
              India has an abundance of brilliant math educators. South Africa has
              millions of students who can't access quality tutoring. We bridge
              that gap — affordably, at scale, through technology.
            </p>

            <div className={styles.journey}>
              <div className={styles.journeyStep}>
                <div className={styles.journeyLine}>
                  <span className={styles.journeyDot} />
                  <span className={styles.journeyConnector} />
                </div>
                <div className={styles.journeyContent}>
                  <span className={styles.journeyLabel}>Done</span>
                  <h3>Research-first</h3>
                  <p>
                    We spent a month on the ground in Cape Town before writing a
                    single line of code. Every product decision is backed by real
                    conversations with real students.
                  </p>
                </div>
              </div>

              <div className={styles.journeyStep}>
                <div className={styles.journeyLine}>
                  <span className={styles.journeyDot} />
                  <span className={styles.journeyConnector} />
                </div>
                <div className={styles.journeyContent}>
                  <span className={styles.journeyLabel}>Done</span>
                  <h3>Cross-border by design</h3>
                  <p>
                    One founder in South Africa owns the market. One founder in
                    India builds the product. This isn't remote work — it's a
                    deliberately distributed company.
                  </p>
                </div>
              </div>

              <div className={styles.journeyStep}>
                <div className={styles.journeyLine}>
                  <span className={styles.journeyDotActive} />
                  <span className={styles.journeyConnector} />
                </div>
                <div className={styles.journeyContent}>
                  <span className={styles.journeyLabelActive}>In progress</span>
                  <h3>Build fast, learn faster</h3>
                  <p>
                    We're a startup. We ship quickly, test with real users, and
                    iterate. No months of planning — just building what students
                    actually need.
                  </p>
                </div>
              </div>

              <div className={styles.journeyStep}>
                <div className={styles.journeyLine}>
                  <span className={styles.journeyDotNext} />
                </div>
                <div className={styles.journeyContent}>
                  <span className={styles.journeyLabelNext}>Next</span>
                  <h3>Launch MatricMath</h3>
                  <p>
                    Roll out the platform to South African matric students. Live
                    tutoring, video lessons, and practice tools — all in one place.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How MatricMath Works */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <span className={styles.eyebrow}>The Product</span>
            <h2 className={styles.sectionTitle}>How MatricMath works</h2>
            <p className={styles.sectionSubtitle}>
              A comprehensive learning platform built for South African matric
              students, powered by Indian math talent.
            </p>

            <div className={styles.circleProcess}>
              {/* SVG ring with arrows */}
              <svg className={styles.ringLine} viewBox="0 0 400 400" fill="none">
                <circle cx="200" cy="200" r="160" stroke="var(--gray-200)" strokeWidth="1.5" strokeDasharray="6 6" />
                {/* Arrow: 1 → 2 (top to bottom-right) */}
                <path d="M 310 80 L 340 110" stroke="var(--gray-300)" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                {/* Arrow: 2 → 3 (bottom-right to bottom-left) */}
                <path d="M 310 330 L 280 340" stroke="var(--gray-300)" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                {/* Arrow: 3 → 1 (bottom-left to top) */}
                <path d="M 70 280 L 60 250" stroke="var(--gray-300)" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                <defs>
                  <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                    <path d="M 0 0 L 8 3 L 0 6" fill="var(--gray-300)" />
                  </marker>
                </defs>
              </svg>

              {/* Step 1 — top center */}
              <div className={`${styles.circleStep} ${styles.step1}`}>
                <div className={styles.stepNumber}>1</div>
                <h3>Video Lessons</h3>
                <p>
                  Pre-recorded lessons aligned to the South African matric
                  curriculum. Students learn at their own pace.
                </p>
              </div>

              {/* Step 2 — bottom right */}
              <div className={`${styles.circleStep} ${styles.step2}`}>
                <div className={styles.stepNumber}>2</div>
                <h3>Live Sessions</h3>
                <p>
                  Small-batch live tutoring with Indian math teachers. Real-time
                  interaction, dual-camera setup with AI feedback.
                </p>
              </div>

              {/* Step 3 — bottom left */}
              <div className={`${styles.circleStep} ${styles.step3}`}>
                <div className={styles.stepNumber}>3</div>
                <h3>Practice & Track</h3>
                <p>
                  Practice problems, progress tracking, and scheduling tools.
                  Students and tutors see exactly where they stand.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Story */}
        <section className={styles.section}>
          <div className={styles.founderInner}>
            <div className={styles.founderStory}>
              <span className={styles.eyebrow}>Why We Built This</span>
              <h2 className={styles.sectionTitle}>
                Born from real research, not assumptions
              </h2>
              <p className={styles.founderText}>
                Our co-founder, based in South Africa, saw students struggling
                with mathematics every day — not because they weren't smart, but
                because affordable help didn't exist.
              </p>
              <p className={styles.founderText}>
                Instead of guessing what might work, both founders went to Cape
                Town for a month. Face-to-face conversations with students.
                Understanding what's broken, what they need, what they'd pay for.
              </p>
              <p className={styles.founderText}>
                The research never stopped. Our South Africa-based founder
                continues to go into the field — testing ideas, gathering
                feedback, and making sure what we build actually works for the
                students who'll use it.
              </p>
            </div>

            <div className={styles.founderQuote}>
              <svg className={styles.quoteMark} width="40" height="32" viewBox="0 0 40 32" fill="none">
                <path d="M0 20.8C0 27.2 3.6 32 9.6 32c4.4 0 8-3.2 8-7.6 0-4-3.2-7.2-7.2-7.2-1.2 0-2 .4-2.8.8 0-6 4.4-12.8 10.4-16L14.8 0C5.6 4.8 0 12.8 0 20.8zm22 0c0 6.4 3.6 11.2 9.6 11.2 4.4 0 8-3.2 8-7.6 0-4-3.2-7.2-7.2-7.2-1.2 0-2 .4-2.8.8 0-6 4.4-12.8 10.4-16L36.8 0C27.6 4.8 22 12.8 22 20.8z" fill="var(--gray-200)" />
              </svg>
              <p className={styles.quoteText}>
                We talked to students before we wrote any code. Every feature
                exists because someone asked for it.
              </p>
              <div className={styles.quoteAuthor}>
                <div className={styles.quoteAvatar}>
                  <Image src="/akshat.jpeg" alt="Akshat" fill className={styles.avatarImage} style={{ objectPosition: 'center 15%', transform: 'scale(1.8)' }} />
                </div>
                <div>
                  <span className={styles.quoteName}>Akshat</span>
                  <span className={styles.quoteRole}>Co-founder & CTO, THREXON</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <span className={styles.eyebrow}>Our Stack</span>
            <h2 className={styles.sectionTitle}>What you'd work with</h2>
            <p className={styles.sectionSubtitle}>
              Modern tools, clean architecture. We build for speed without
              sacrificing quality.
            </p>

            <div className={styles.stackGrid}>
              <div className={styles.stackCard}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 19h20L12 2z" /><path d="M12 9v4" /><circle cx="12" cy="16" r="0.5" fill="currentColor" /></svg>
                <h3>Next.js</h3>
                <p>Web app</p>
              </div>
              <div className={styles.stackCard}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="5" y="2" width="14" height="20" rx="2" /><path d="M12 18h.01" /></svg>
                <h3>React Native</h3>
                <p>Mobile app</p>
              </div>
              <div className={styles.stackCard}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" /></svg>
                <h3>TypeScript</h3>
                <p>Language</p>
              </div>
              <div className={styles.stackCard}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" /></svg>
                <h3>Real-time Video</h3>
                <p>Live sessions</p>
              </div>
              <div className={styles.stackCard}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93" /><path d="M12 2a4 4 0 0 0-4 4c0 1.95 1.4 3.58 3.25 3.93" /><path d="M12 10v4" /><circle cx="12" cy="18" r="4" /><path d="M10 18h4" /></svg>
                <h3>AI / ML</h3>
                <p>Handwriting feedback</p>
              </div>
              <div className={styles.stackCard}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg>
                <h3>PostgreSQL</h3>
                <p>Database</p>
              </div>
              <div className={styles.stackCard}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
                <h3>Vercel</h3>
                <p>Deployment</p>
              </div>
              <div className={styles.stackCard}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="18" r="3" /><circle cx="6" cy="6" r="3" /><circle cx="18" cy="6" r="3" /><path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9" /><path d="M12 12v3" /></svg>
                <h3>GitHub</h3>
                <p>Version control</p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Need */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <span className={styles.eyebrow}>We're Hiring</span>
            <h2 className={styles.sectionTitle}>Join us in Delhi</h2>
            <p className={styles.sectionSubtitle}>
              On-site roles starting from ₹70,000/month
            </p>

            <div className={styles.rolesGrid}>
              <div className={styles.roleCard}>
                <h3>Software Engineer</h3>
                <p>Next.js, React Native, real-time video</p>
              </div>
              <div className={styles.roleCard}>
                <h3>Video Editor</h3>
                <p>Educational content and marketing</p>
              </div>
              <div className={styles.roleCard}>
                <h3>Math Teacher</h3>
                <p>Live tutoring for matric students</p>
              </div>
            </div>

            <Link href="/apply" className={styles.ctaButtonOutline}>
              Apply Now
            </Link>
          </div>
        </section>

        {/* Team */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <span className={styles.eyebrow}>The Team</span>
            <h2 className={styles.sectionTitle}>Meet the team</h2>

            <div className={styles.teamGrid}>
              <div className={styles.teamCard}>
                <div className={styles.avatar}>
                  <Image src="/akshat.jpeg" alt="Akshat" fill className={styles.avatarImage} style={{ objectPosition: 'center 15%', transform: 'scale(1.8)' }} />
                </div>
                <h3>Akshat</h3>
                <p>Software Engineer</p>
              </div>
              <div className={styles.teamCard}>
                <div className={styles.avatar}>
                  <Image src="/kerwin.jpeg" alt="Kerwin" fill className={styles.avatarImage} style={{ objectPosition: 'center top' }} />
                </div>
                <h3>Kerwin</h3>
                <p>Marketing</p>
              </div>
              <div className={styles.teamCard}>
                <div className={styles.avatar}>
                  <Image src="/aom.jpeg" alt="Aom" fill className={styles.avatarImage} style={{ objectPosition: '40% 60%', transform: 'scale(2.5)', transformOrigin: '40% 60%' }} />
                </div>
                <h3>Aom</h3>
                <p>Software Engineer</p>
              </div>
              <div className={styles.teamCard}>
                <div className={styles.avatar}>AJ</div>
                <h3>Ajay</h3>
                <p>Management</p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Links */}
        <section className={styles.socialSection}>
          <div className={styles.socialInner}>
            <a href="https://linkedin.com/company/trexon" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/trexon" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>
            <a href="https://instagram.com/trexon" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Instagram</span>
            </a>
            <a href="https://discord.gg/trexon" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/>
              </svg>
              <span>Discord</span>
            </a>
            <a href="https://youtube.com/@trexon" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>YouTube</span>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
