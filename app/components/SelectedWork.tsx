"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { PROJECTS, type Project } from "@/app/data/projects";
import styles from "./SelectedWork.module.css";

const ease = [0.16, 1, 0.3, 1] as const;
const PREVIEW_W = 360;
const PREVIEW_H = 225;

export default function SelectedWork() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useSpring(mouseX, { stiffness: 220, damping: 28, mass: 0.5 });
  const y = useSpring(mouseY, { stiffness: 220, damping: 28, mass: 0.5 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!listRef.current) return;
    const rect = listRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - PREVIEW_W / 2);
    mouseY.set(e.clientY - rect.top - PREVIEW_H / 2);
  };

  const active = PROJECTS.find((p) => p.id === activeId);

  return (
    <section id="work" className={styles.section}>
      <div className={styles.inner}>
        <motion.header
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.9, ease }}
        >
          <div className={styles.headerTop}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot} aria-hidden />
              Selected Work
            </span>
            <span className={styles.count}>
              <span className={styles.countNum}>{PROJECTS.length}</span>
              <span className={styles.countLabel}>Projects</span>
            </span>
          </div>
          <h2 className={styles.title}>
            Recent <span className={styles.italic}>projects</span>
            <span className={styles.accent}>.</span>
          </h2>
          <p className={styles.subtitle}>
            Hover any line to peek inside.
          </p>
        </motion.header>

        <div
          ref={listRef}
          className={styles.list}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setActiveId(null)}
        >
          {PROJECTS.map((project, i) => (
            <ProjectRow
              key={project.id}
              project={project}
              index={i}
              isActive={activeId === project.id}
              isAnyActive={activeId !== null}
              onHover={() => setActiveId(project.id)}
            />
          ))}

          <motion.div
            className={styles.preview}
            style={{ x, y, opacity: active ? 1 : 0 }}
            transition={{ opacity: { duration: 0.25, ease } }}
            aria-hidden
          >
            <AnimatePresence mode="wait">
              {active && (
                <motion.div
                  key={active.id}
                  className={styles.previewInner}
                  initial={{ opacity: 0, scale: 0.94, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94, y: -12 }}
                  transition={{ duration: 0.45, ease }}
                >
                  <Image
                    src={active.image}
                    alt=""
                    fill
                    sizes="360px"
                    className={styles.previewImage}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface RowProps {
  project: Project;
  index: number;
  isActive: boolean;
  isAnyActive: boolean;
  onHover: () => void;
}

function ProjectRow({ project, index, isActive, isAnyActive, onHover }: RowProps) {
  return (
    <motion.div
      className={`${styles.row} ${isActive ? styles.rowActive : ""} ${
        isAnyActive && !isActive ? styles.rowDimmed : ""
      }`}
      onMouseEnter={onHover}
      data-cursor="hover"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, delay: index * 0.04, ease }}
    >
      <span className={styles.rowIndex}>{project.index}</span>
      <h3 className={styles.rowTitle}>{project.title}</h3>
      <span className={styles.rowTags}>{project.tags.join(" · ")}</span>
      <span className={styles.rowYear}>{project.year}</span>
      <span className={styles.rowArrow} aria-hidden>
        →
      </span>
    </motion.div>
  );
}
