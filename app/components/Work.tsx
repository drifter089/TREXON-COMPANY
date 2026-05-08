"use client";

import { Fragment, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { WORK_PROJECTS, type WorkProject } from "@/app/data/work";
import styles from "./Work.module.css";

const WorkSculpture = dynamic(() => import("./WorkSculpture"), {
  ssr: false,
  loading: () => null,
});

const ease = [0.16, 1, 0.3, 1] as const;

export default function Work() {
  const [entering, setEntering] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const W = window as Window & { __threxonWorkSeen?: boolean };
    if (W.__threxonWorkSeen) return;
    W.__threxonWorkSeen = true;

    const seen = sessionStorage.getItem("threxon-work-intro");
    if (seen) return;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEntering(true);
    const t = setTimeout(() => {
      setEntering(false);
      // Only mark seen AFTER the intro completes — so a Strict-Mode
      // double-mount in dev (which clears the first timer) doesn't
      // permanently mark the page as seen without ever showing.
      sessionStorage.setItem("threxon-work-intro", "1");
    }, 1800);
    return () => {
      clearTimeout(t);
      // Allow Strict Mode remount to re-fire the intro
      W.__threxonWorkSeen = false;
    };
  }, []);

  return (
    <main className={`${styles.page} ${entering ? styles.entering : ""}`}>
      <Sculpture />
      <Intro />
      <Grid />
      <Closing />
      {entering && <span className={styles.strobe} aria-hidden />}
    </main>
  );
}

function Intro() {
  return (
    <section className={styles.intro}>
      <motion.span
        className={styles.introEyebrow}
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6, ease }}
      >
        <span className={styles.introDot} aria-hidden />
        Selected
      </motion.span>
      <motion.p
        className={styles.introBody}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.85, delay: 0.1, ease }}
      >
        Software, websites, and brand systems — designed and engineered at
        Threxon. Newest first.
      </motion.p>
    </section>
  );
}

function Closing() {
  return (
    <section className={styles.closing}>
      <motion.div
        className={styles.closingInner}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.95, ease }}
      >
        <p className={styles.closingKicker}>Working on something?</p>
        <h2 className={styles.closingTitle}>
          Let&apos;s build it
          <span className={styles.closingAccent}>.</span>
        </h2>
        <Link
          href="/contact"
          className={styles.closingCta}
          data-cursor="hover"
        >
          Start a project <span aria-hidden>→</span>
        </Link>
      </motion.div>
    </section>
  );
}

function Sculpture() {
  return (
    <motion.section
      className={styles.sculpture}
      aria-hidden
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.2, ease }}
    >
      <div className={styles.sculptureInner}>
        <WorkSculpture />
      </div>
    </motion.section>
  );
}

function Grid() {
  return (
    <section className={styles.grid} aria-label="Selected projects">
      <span className={styles.verticalRule} aria-hidden />
      {WORK_PROJECTS.flatMap((project, i, arr) => {
        const items = [
          <ProjectCard
            key={project.slug}
            project={project}
            delay={i * 0.05}
          />,
        ];
        if (i % 2 === 1 && i < arr.length - 1) {
          items.push(
            <Fragment key={`div-${i}`}>
              <span className={styles.rowDivider} aria-hidden />
            </Fragment>
          );
        }
        return items;
      })}
    </section>
  );
}

function ProjectCard({
  project,
  delay,
}: {
  project: WorkProject;
  delay: number;
}) {
  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.75, delay, ease }}
    >
      <Link
        href={`/work/${project.slug}`}
        className={styles.cardLink}
        data-cursor="hover"
        aria-label={`Open ${project.title}`}
      >
        <div className={styles.meta}>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.caption}>{project.caption}</p>
        </div>
        <div className={styles.cover}>
          <Image
            src={project.cover}
            alt={`${project.title} cover`}
            fill
            loading="eager"
            sizes="(max-width: 768px) 100vw, 50vw"
            className={styles.coverImage}
          />
        </div>
      </Link>
    </motion.article>
  );
}
