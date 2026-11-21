import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { WORK_PROJECTS, type WorkProject } from "@/app/data/work";
import styles from "./Work.module.css";

export default function Work() {
  return (
    <main className={styles.page}>
      <section className={styles.intro}>
        <span className={styles.introEyebrow}><span className={styles.introDot} aria-hidden />Selected</span>
        <p className={styles.introBody}>Software, websites, and brand systems — designed and engineered at Threxon. Newest first.</p>
      </section>
      <Grid />
      <section className={styles.closing}>
        <div className={styles.closingInner}>
          <p className={styles.closingKicker}>Working on something?</p>
          <h2 className={styles.closingTitle}>Let&apos;s build it<span className={styles.closingAccent}>.</span></h2>
          <Link href="/contact" className={styles.closingCta}>Start a project <span aria-hidden>→</span></Link>
        </div>
      </section>
    </main>
  );
}

function Grid() {
  return (
    <section className={styles.grid} aria-label="Selected projects">
      <span className={styles.verticalRule} aria-hidden />
      {WORK_PROJECTS.flatMap((project, index, projects) => {
        const items = [<ProjectCard key={project.slug} project={project} />];
        if (index % 2 === 1 && index < projects.length - 1) items.push(<Fragment key={`div-${index}`}><span className={styles.rowDivider} aria-hidden /></Fragment>);
        return items;
      })}
    </section>
  );
}

function ProjectCard({ project }: { project: WorkProject }) {
  return (
    <article className={styles.card}>
      <Link href={`/work/${project.slug}`} className={styles.cardLink} aria-label={`Open ${project.title}`}>
        <div className={styles.meta}><h3 className={styles.title}>{project.title}</h3><p className={styles.caption}>{project.caption}</p></div>
        <div className={styles.cover}><Image src={project.cover} alt={`${project.title} cover`} fill loading="eager" sizes="(max-width: 768px) 100vw, 50vw" className={styles.coverImage} /></div>
      </Link>
    </article>
  );
}
