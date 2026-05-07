"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { WorkProject } from "@/app/data/work";
import styles from "./WorkDetail.module.css";

const ease = [0.16, 1, 0.3, 1] as const;

export default function WorkDetail({
  project,
  next,
}: {
  project: WorkProject;
  next?: WorkProject;
}) {
  return (
    <main className={styles.page}>
      {/* --- Hero --- */}
      <section className={styles.hero}>
        <motion.span
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          <Link href="/work" className={styles.backLink} data-cursor="hover">
            <span aria-hidden>←</span> Work
          </Link>
          <span className={styles.eyebrowSep} aria-hidden>
            /
          </span>
          <span>{project.year}</span>
        </motion.span>

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease }}
        >
          {project.title}
          <span className={styles.titleAccent}>.</span>
        </motion.h1>

        <motion.p
          className={styles.caption}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.3, ease }}
        >
          {project.caption}
        </motion.p>
      </section>

      {/* --- Cover --- */}
      <motion.figure
        className={styles.coverFigure}
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.05, delay: 0.4, ease }}
      >
        <div className={styles.cover}>
          <Image
            src={project.cover}
            alt={`${project.title} cover`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 92vw"
            className={styles.coverImage}
          />
        </div>
      </motion.figure>

      {/* --- Case study body: meta + introduction --- */}
      <section className={styles.body}>
        <motion.aside
          className={styles.meta}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, ease }}
        >
          <div className={styles.metaItem}>
            <dt>Client</dt>
            <dd>{project.client}</dd>
          </div>
          <div className={styles.metaItem}>
            <dt>Industry</dt>
            <dd>{project.industry}</dd>
          </div>
          <div className={styles.metaItem}>
            <dt>Year</dt>
            <dd>{project.year}</dd>
          </div>
          <div className={styles.metaItem}>
            <dt>Deliverables</dt>
            <dd>
              <ul className={styles.deliverables}>
                {project.deliverables.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </dd>
          </div>
        </motion.aside>

        <motion.div
          className={styles.intro}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.85, delay: 0.1, ease }}
        >
          <span className={styles.introKicker}>Introduction</span>
          <p className={styles.introBody}>{project.introduction}</p>
        </motion.div>
      </section>

      {/* --- Gallery --- */}
      {project.gallery.length > 0 && (
        <section
          className={styles.gallery}
          aria-label={`${project.title} gallery`}
        >
          {project.gallery.map((src, i) => (
            <motion.figure
              key={src}
              className={styles.galleryItem}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.85, ease }}
            >
              <div className={styles.galleryImageWrap}>
                <Image
                  src={src}
                  alt={`${project.title} screenshot ${i + 1}`}
                  width={1600}
                  height={1000}
                  sizes="(max-width: 768px) 100vw, 80vw"
                  className={styles.galleryImage}
                />
              </div>
            </motion.figure>
          ))}
        </section>
      )}

      {/* --- Footer nav --- */}
      <section className={styles.footerNav}>
        {next && (
          <Link
            href={`/work/${next.slug}`}
            className={styles.nextLink}
            data-cursor="hover"
          >
            <span className={styles.nextEyebrow}>Next project</span>
            <span className={styles.nextTitle}>
              {next.title}
              <span aria-hidden> →</span>
            </span>
          </Link>
        )}
        <Link href="/work" className={styles.backFooter} data-cursor="hover">
          <span aria-hidden>←</span> Back to all work
        </Link>
      </section>
    </main>
  );
}
