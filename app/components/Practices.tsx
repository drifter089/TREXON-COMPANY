"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { SERVICES, type Service } from "@/app/data/services";
import DashboardMock from "./mocks/DashboardMock";
import WebsiteMock from "./mocks/WebsiteMock";
import MarketingMock from "./mocks/MarketingMock";
import styles from "./Practices.module.css";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Practices() {
  return (
    <section id="work" className={styles.section}>
      <Header />
      <div className={styles.stack}>
        {SERVICES.map((service, i) => (
          <PracticeBlock
            key={service.id}
            service={service}
            reverse={i % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
}

function Header() {
  return (
    <motion.header
      className={styles.header}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.9, ease }}
    >
      <div className={styles.headerInner}>
        <span className={styles.eyebrow}>
          <span className={styles.eyebrowDot} aria-hidden />
          Practices
        </span>
        <p className={styles.intro}>A studio in three disciplines.</p>
        <h2 className={styles.title}>
          Things we <span className={styles.italic}>make</span>
          <span className={styles.accent}>.</span>
        </h2>
      </div>
    </motion.header>
  );
}

interface BlockProps {
  service: Service;
  reverse: boolean;
}

function PracticeBlock({ service, reverse }: BlockProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Saturate animations between 0.1 and 0.9 of scroll progress so they fully
  // settle even on the last block (which can't always reach progress=1 if the
  // page ends shortly after).
  const rotateYRange = reverse ? [8, 0, -8] : [-8, 0, 8];
  const rotateY = useTransform(scrollYProgress, [0.1, 0.5, 0.9], rotateYRange);
  const rotateX = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [3, 0, -3]);
  const yShift = useTransform(scrollYProgress, [0.1, 0.9], [28, -28]);
  const scale = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0.96, 1.02, 0.96]);

  const images = service.showcase.images;
  const mock = service.showcase.mock;

  return (
    <motion.article
      ref={ref}
      className={`${styles.block} ${reverse ? styles.reverse : ""}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.0, ease }}
    >
      <div className={styles.blockInner}>
        <div className={styles.text}>
          <span className={styles.label}>
            <span className={styles.labelKind}>Practice</span>
            <span className={styles.labelDash} aria-hidden>—</span>
            <span className={styles.labelNum}>№{service.index}</span>
          </span>
          <h3 className={styles.blockTitle}>
            {service.title}
            <span className={styles.accent}>.</span>
          </h3>
          <p className={styles.brief}>{service.brief}</p>
          <ul className={styles.includes}>
            {service.includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className={styles.showcaseWrap}>
          <motion.div
            className={styles.showcase}
            style={{ rotateY, rotateX, y: yShift, scale }}
            {...(mock
              ? {}
              : { "data-cursor": "view", "data-cursor-label": "View" })}
          >
            {mock === "software" ? (
              <DashboardMock />
            ) : mock === "websites" ? (
              <WebsiteMock />
            ) : mock === "marketing" ? (
              <MarketingMock />
            ) : (
              images.map((src, i) => (
                <ImageLayer
                  key={`${src}-${i}`}
                  src={src}
                  alt={service.showcase.project}
                  index={i}
                  total={images.length}
                  progress={scrollYProgress}
                />
              ))
            )}
          </motion.div>
          <span className={styles.showcaseLabel}>
            <span className={styles.asterisk} aria-hidden>*</span>
            {service.showcase.project}
          </span>
          {!mock && images.length > 1 && (
            <ProgressDots
              count={images.length}
              progress={scrollYProgress}
              reverse={reverse}
            />
          )}
        </div>
      </div>
    </motion.article>
  );
}

interface ImageLayerProps {
  src: string;
  alt: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

function ImageLayer({ src, alt, index, total, progress }: ImageLayerProps) {
  const segment = 1 / total;
  const start = index * segment;
  const end = (index + 1) * segment;
  const fadeBand = Math.min(0.08, segment * 0.5);

  // Build keyframes for opacity based on which slot this image owns
  let inputs: number[];
  let outputs: number[];

  if (total === 1) {
    inputs = [0, 1];
    outputs = [1, 1];
  } else if (index === 0) {
    inputs = [0, end - fadeBand, end + fadeBand];
    outputs = [1, 1, 0];
  } else if (index === total - 1) {
    inputs = [start - fadeBand, start + fadeBand, 1];
    outputs = [0, 1, 1];
  } else {
    inputs = [
      Math.max(0, start - fadeBand),
      start + fadeBand,
      end - fadeBand,
      Math.min(1, end + fadeBand),
    ];
    outputs = [0, 1, 1, 0];
  }

  const opacity = useTransform(progress, inputs, outputs);

  return (
    <motion.div className={styles.imageLayer} style={{ opacity }}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 55vw"
        className={styles.showcaseImage}
        priority={index === 0}
      />
    </motion.div>
  );
}

interface ProgressDotsProps {
  count: number;
  progress: MotionValue<number>;
  reverse: boolean;
}

function ProgressDots({ count, progress, reverse }: ProgressDotsProps) {
  return (
    <div
      className={`${styles.dots} ${reverse ? styles.dotsRight : ""}`}
      aria-hidden
    >
      {Array.from({ length: count }).map((_, i) => (
        <Dot key={i} index={i} total={count} progress={progress} />
      ))}
    </div>
  );
}

function Dot({
  index,
  total,
  progress,
}: {
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const segment = 1 / total;
  const center = index * segment + segment / 2;
  const fade = segment * 0.6;
  const opacity = useTransform(
    progress,
    [center - fade, center, center + fade],
    [0.25, 1, 0.25]
  );
  const scale = useTransform(
    progress,
    [center - fade, center, center + fade],
    [1, 1.4, 1]
  );

  return (
    <motion.span
      className={styles.dot}
      style={{ opacity, scale }}
    />
  );
}
