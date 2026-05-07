"use client";

import { Fragment } from "react";
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
  return (
    <main className={styles.page}>
      <Sculpture />
      <Grid />
    </main>
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
            sizes="(max-width: 768px) 100vw, 50vw"
            className={styles.coverImage}
          />
        </div>
      </Link>
    </motion.article>
  );
}
