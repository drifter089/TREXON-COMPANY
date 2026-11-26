import Image from "next/image";
import styles from "./About.module.css";

type SupplyIconName = "requirement" | "grade" | "quotation" | "handoff";

const COMPANY_IMAGES = [
  {
    src: "/images/hero/industrial-roof.jpg",
    alt: "Industrial roofing panels on a factory building",
  },
  {
    src: "/images/hero/industrial-tanks.jpg",
    alt: "Industrial storage tanks in a manufacturing setting",
  },
  {
    src: "/images/hero/industrial-pipes.jpg",
    alt: "Industrial pipework inside a production facility",
  },
  {
    src: "/images/hero/composite-workshop.jpg",
    alt: "A composite component being finished in a workshop",
  },
];

const SUPPLY_STAGES: { icon: SupplyIconName; title: string; description: string }[] = [
  {
    icon: "requirement",
    title: "Share the requirement",
    description:
      "Start with the application, production process, quantity and delivery area behind the enquiry.",
  },
  {
    icon: "grade",
    title: "Discuss the grade",
    description:
      "Use those practical details to frame a more relevant polyester resin grade conversation.",
  },
  {
    icon: "quotation",
    title: "Receive a quotation",
    description:
      "We bring together the grade direction, commercial requirements and availability into a useful response.",
  },
  {
    icon: "handoff",
    title: "Plan the handoff",
    description:
      "Once the requirement is aligned, local inventory and delivery planning shape the next production-ready step.",
  },
];

export default function About() {
  return (
    <main className={styles.page}>
      <section className={styles.heroSection} aria-labelledby="about-heading">
        <div className={styles.heroInner}>
          <div className={styles.heroImage}>
            <Image
              src="/images/hero/fiberglass-layup.jpg"
              alt="Fiberglass lay-up work in a composite production workshop"
              fill
              priority
              sizes="100vw"
              className={styles.heroImageAsset}
            />
            <div className={styles.heroOverlay}>
              <div className={styles.heroCopy}>
                <h1 id="about-heading" className={styles.title}>About us</h1>
                <p className={styles.intro}>
                  Practical polyester resin supply for FRP and composite manufacturers across Uttar Pradesh.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.company} aria-labelledby="company-heading">
        <div className={styles.companyInner}>
          <div className={styles.companyCopy}>
            <h2 id="company-heading">Our company.</h2>
            <p>
              We supply polyester resin to the businesses that make FRP roofing sheets, panels, tanks, pipe systems and moulded composite components. Our purpose is straightforward: make resin procurement more considered, clear and dependable.
            </p>
            <p>
              We work from the practical details of production—your application, process, quantity and delivery requirement—to help turn an enquiry into a useful grade conversation and commercial response.
            </p>
            <p>
              With local Uttar Pradesh inventory and an official manufacturing partnership with ORCPL, we keep the supply conversation close to the buyer&apos;s day-to-day production needs.
            </p>
          </div>

          <div className={styles.companyImageGrid} aria-label="FRP and composite manufacturing applications">
            {COMPANY_IMAGES.map((image) => (
              <div key={image.src} className={styles.companyImageTile}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 800px) 46vw, 26vw"
                  className={styles.companyImage}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.supplyFlow} aria-labelledby="supply-flow-heading">
        <div className={styles.contentInner}>
          <header className={styles.flowHeader}>
            <h2 id="supply-flow-heading">
              <span>A clearer supply path</span>
              <span>from requirement to delivery.</span>
            </h2>
            <p>
              A clear resin requirement moves through a few connected decisions. Our role is to make each one easier to act on.
            </p>
          </header>

          <div className={styles.flowFrame}>
            <div className={styles.flowMedia} aria-hidden>
              <Image
                src="/images/support/resin-pour-detail.png"
                alt=""
                fill
                sizes="(max-width: 700px) 100vw, 42vw"
                className={styles.flowMediaImage}
              />
            </div>
            <div className={styles.flowSteps}>
              {SUPPLY_STAGES.map((stage) => (
                <article key={stage.title} className={styles.flowStep}>
                  <div className={styles.flowIcon} aria-hidden="true">
                    <SupplyIcon kind={stage.icon} />
                  </div>
                  <div className={styles.flowCopy}>
                    <h3>{stage.title}</h3>
                    <p>{stage.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.partnership} aria-labelledby="partnership-heading">
        <div className={styles.partnershipInner}>
            <div className={styles.partnershipHeading}>
              <h2 id="partnership-heading">
                <span>A clear manufacturing</span>
                <span>partnership.</span>
              </h2>
            </div>
            <div className={styles.partnershipCopy}>
              <p>
                ORCPL is our official manufacturing partner. That connection informs the grade and supply conversations we have with local FRP and composite manufacturers.
              </p>
              <p>
                We are the local supply partner, helping buyers coordinate availability, quotation and delivery around the needs of production. We do not operate or represent ORCPL&apos;s facilities as our own.
              </p>
              <dl className={styles.partnershipFacts}>
                <div>
                  <dt>Manufacturing partner</dt>
                  <dd>ORCPL</dd>
                </div>
                <div>
                  <dt>Local supply focus</dt>
                  <dd>Uttar Pradesh</dd>
                </div>
              </dl>
            </div>
        </div>
      </section>
    </main>
  );
}

function SupplyIcon({ kind }: { kind: SupplyIconName }) {
  const commonProps = {
    className: styles.flowIconAsset,
    viewBox: "0 0 36 36",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.65,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (kind) {
    case "requirement":
      return (
        <svg {...commonProps}>
          <path d="M9 4.5h18v27H9z" />
          <path d="M13 12h10M13 18h10M13 24h6" />
        </svg>
      );
    case "grade":
      return (
        <svg {...commonProps}>
          <path d="M6 10h24M6 18h24M6 26h24" />
          <circle cx="14" cy="10" r="3" fill="currentColor" />
          <circle cx="23" cy="18" r="3" fill="currentColor" />
          <circle cx="17" cy="26" r="3" fill="currentColor" />
        </svg>
      );
    case "quotation":
      return (
        <svg {...commonProps}>
          <path d="M9 4.5h18v27H9z" />
          <path d="M13 12h10M13 18h10M13 24h6" />
          <path d="m11.5 27 2 2 4-4" />
        </svg>
      );
    case "handoff":
      return (
        <svg {...commonProps}>
          <path d="m6 12 12-6 12 6-12 6L6 12Z" />
          <path d="M6 12v12l12 6 12-6V12M18 18v12" />
          <path d="m24 20 3 3 5-5" />
        </svg>
      );
  }
}
