"use client";

import { Fragment } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { WORK_PROJECTS, type WorkProject } from "@/app/data/work";
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
      <WalkBand />
      <Grid />
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
          transition={{ duration: 0.6, ease }}
        >
          <span className={styles.eyebrowDot} aria-hidden />
          .work
        </motion.span>

        <motion.h1
          className={styles.heroTitle}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.1, ease }}
        >
          Selected
          <span className={styles.italic}> work</span>
          <span className={styles.accent}>.</span>
        </motion.h1>

        <motion.p
          className={styles.heroSub}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.3, ease }}
        >
          A small set of things we&apos;ve shipped — for teams who&apos;d
          rather build than pitch.
        </motion.p>
      </div>
    </section>
  );
}

function WalkBand() {
  return (
    <motion.section
      className={styles.walkBand}
      aria-hidden
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.5, ease }}
    >
      <div className={styles.walkInner}>
        <WalkingFigure />
      </div>
    </motion.section>
  );
}

function Grid() {
  return (
    <section className={styles.grid} aria-label="Selected projects">
      {WORK_PROJECTS.flatMap((project, i, arr) => {
        const items = [
          <ProjectCard
            key={project.slug}
            project={project}
            delay={i * 0.05}
          />,
        ];
        // After each completed pair (every 2nd item), insert a row divider —
        // unless it's the final pair.
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
        <div className={styles.cover}>
          <Image
            src={project.cover}
            alt={`${project.title} cover`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={styles.coverImage}
          />
        </div>
        <div className={styles.meta}>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.caption}>{project.caption}</p>
        </div>
      </Link>
    </motion.article>
  );
}
