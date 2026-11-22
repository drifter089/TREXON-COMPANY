import Image from "next/image";
import Link from "next/link";
import type { WorkProject } from "@/app/data/work";
import styles from "./WorkDetail.module.css";

export default function WorkDetail({ project, next }: { project: WorkProject; next?: WorkProject }) {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <span className={styles.eyebrow}><Link href="/work" className={styles.backLink}><span aria-hidden>←</span> Work</Link><span className={styles.eyebrowSep} aria-hidden>/</span><span>{project.year}</span></span>
        <h1 className={styles.title}>{project.title}<span className={styles.titleAccent}>.</span></h1>
        <p className={styles.caption}>{project.caption}</p>
      </section>
      <figure className={styles.coverFigure}><div className={styles.cover}><Image src={project.cover} alt={`${project.title} cover`} fill priority sizes="(max-width: 768px) 100vw, 92vw" className={styles.coverImage} /></div></figure>
      <section className={styles.body}>
        <aside className={styles.meta}>
          <div className={styles.metaItem}><dt>Client</dt><dd>{project.client}</dd></div>
          <div className={styles.metaItem}><dt>Industry</dt><dd>{project.industry}</dd></div>
          <div className={styles.metaItem}><dt>Year</dt><dd>{project.year}</dd></div>
          <div className={styles.metaItem}><dt>Deliverables</dt><dd><ul className={styles.deliverables}>{project.deliverables.map((item) => <li key={item}>{item}</li>)}</ul></dd></div>
        </aside>
        <div className={styles.intro}><span className={styles.introKicker}>Introduction</span><p className={styles.introBody}>{project.introduction}</p></div>
      </section>
      {project.gallery.length > 0 && <section className={styles.gallery} aria-label={`${project.title} gallery`}>
        {project.gallery.map((src, index) => <figure key={src} className={styles.galleryItem}><div className={styles.galleryImageWrap}><Image src={src} alt={`${project.title} screenshot ${index + 1}`} fill sizes="(max-width: 768px) 100vw, 45vw" className={styles.galleryImage} /></div></figure>)}
      </section>}
      <section className={styles.footerNav}>
        {next && <Link href={`/work/${next.slug}`} className={styles.nextLink}><span className={styles.nextEyebrow}>Next project</span><span className={styles.nextTitle}>{next.title}<span aria-hidden> →</span></span></Link>}
        <Link href="/work" className={styles.backFooter}><span aria-hidden>←</span> Back to all work</Link>
      </section>
    </main>
  );
}
