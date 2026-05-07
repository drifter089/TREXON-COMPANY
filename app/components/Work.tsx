"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  WORK_PROJECTS,
  WORK_PRACTICES,
  type WorkProject,
  type WorkPractice,
} from "@/app/data/work";
import styles from "./Work.module.css";

const WalkingFigure = dynamic(() => import("./WalkingFigure"), {
  ssr: false,
  loading: () => null,
});

const ease = [0.16, 1, 0.3, 1] as const;

export default function Work() {
  return (
    <main className={styles.page}>
      <Hero />
      <section className={styles.body} aria-label="Selected projects">
        {WORK_PRACTICES.map((practice) => (
          <PracticeBlock
            key={practice.id}
            practice={practice}
            projects={WORK_PROJECTS.filter((p) => p.category === practice.id)}
          />
        ))}
      </section>
    </main>
  );
}

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <motion.span
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease }}
        >
          <span className={styles.eyebrowDot} aria-hidden />
          .work
        </motion.span>

        <motion.h1
          className={styles.heroTitle}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.05, delay: 0.15, ease }}
        >
          Selected
          <span className={styles.italic}> work</span>
          <span className={styles.accent}>.</span>
        </motion.h1>

        <motion.p
          className={styles.heroSub}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.4, ease }}
        >
          A small set of things we&apos;ve shipped — software and websites for
          teams who&apos;d rather build than pitch.
        </motion.p>
      </div>

      <motion.div
        className={styles.figureStage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.6, ease }}
        aria-hidden
      >
        <WalkingFigure />
      </motion.div>
    </section>
  );
}

function PracticeBlock({
  practice,
  projects,
}: {
  practice: WorkPractice;
  projects: WorkProject[];
}) {
  const [hero, ...rest] = projects;

  // Pair the remaining into 2-up rows.
  const pairs: WorkProject[][] = [];
  for (let i = 0; i < rest.length; i += 2) {
    pairs.push(rest.slice(i, i + 2));
  }

  return (
    <article className={styles.practice}>
      <header className={styles.practiceHead}>
        <motion.span
          className={styles.practiceIndex}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, ease }}
        >
          <span className={styles.indexNum}>{practice.index}</span>
          <span className={styles.indexTotal}> / {practice.total}</span>
        </motion.span>

        <motion.h2
          className={styles.practiceTitle}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.85, delay: 0.05, ease }}
        >
          {practice.title}
          <span className={styles.titleAccent}>.</span>
        </motion.h2>

        <motion.p
          className={styles.practiceBlurb}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, delay: 0.18, ease }}
        >
          {practice.blurb}
        </motion.p>
      </header>

      <div className={styles.tiles}>
        {hero && <ProjectTile project={hero} variant="big" delay={0.05} />}
        {pairs.map((pair, i) => (
          <div key={i} className={styles.pairRow}>
            {pair.map((p, j) => (
              <ProjectTile
                key={p.slug}
                project={p}
                variant="paired"
                delay={0.1 + j * 0.08}
              />
            ))}
          </div>
        ))}
      </div>
    </article>
  );
}

function ProjectTile({
  project,
  variant,
  delay,
}: {
  project: WorkProject;
  variant: "big" | "paired";
  delay: number;
}) {
  const className =
    variant === "big" ? `${styles.tile} ${styles.tileBig}` : styles.tile;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.85, delay, ease }}
    >
      <Link
        href={`/work/${project.slug}`}
        className={styles.tileLink}
        data-cursor="hover"
        aria-label={`Open ${project.title}`}
      >
        <div className={styles.cover}>
          <Image
            src={project.cover}
            alt={project.title}
            fill
            sizes={
              variant === "big"
                ? "(max-width: 768px) 100vw, 90vw"
                : "(max-width: 768px) 100vw, 45vw"
            }
            className={styles.coverImage}
          />
          <span className={styles.coverLabel} aria-hidden>
            {project.title}
          </span>
        </div>
        <div className={styles.tileMeta}>
          <span className={styles.tileCategory}>{project.category}</span>
          <span className={styles.tileYear}>{project.year}</span>
        </div>
        <p className={styles.tileCaption}>{project.caption}</p>
      </Link>
    </motion.div>
  );
}
