export interface WorkProject {
  slug: string;
  title: string;
  client: string;
  industry: string;
  year: string;
  deliverables: string[];
  caption: string;
  introduction: string;
  cover: string;
  gallery: string[];
}

// PLACEHOLDER COPY — swap client/industry/deliverables/introduction per
// project before launch.
export const WORK_PROJECTS: WorkProject[] = [
  {
    slug: "rouge",
    title: "ROUGE",
    client: "Rouge Amsterdam",
    industry: "Hospitality · Events",
    year: "2025",
    deliverables: [
      "UI/UX design",
      "Brand site",
      "Ticketing platform",
      "Engineering",
    ],
    caption: "Event-ticketing platform and brand site for Rouge Amsterdam.",
    introduction:
      "Rouge wanted one home — a place to publish their line-up, sell tickets, and feel like the room. We designed and shipped a brand site and ticketing flow that reads like a magazine and checks out like a kiosk.",
    cover: "/work/rouge.png",
    gallery: ["/work/rouge1.png", "/work/rouge2.png", "/work/rouge3.png"],
  },
  {
    slug: "rec",
    title: "REC",
    client: "REC Berlin",
    industry: "Hospitality · Nightlife",
    year: "2025",
    deliverables: [
      "Brand site",
      "Line-up & event pages",
      "Ticketing integration",
      "Engineering",
    ],
    caption: "Berlin nightclub site — line-ups, bookings, brand.",
    introduction:
      "A Berlin nightclub needed a site that matched the room — heavy, dark, fast. We built a line-up engine and ticketing flow under a brand system that survives a Saturday night.",
    cover: "/work/Rec.png",
    gallery: ["/work/Rec1.png", "/work/Rec2.png"],
  },
  {
    slug: "alt",
    title: "ALT+",
    client: "Alt+ Architecture",
    industry: "Architecture",
    year: "2025",
    deliverables: [
      "Brand identity",
      "Marketing site",
      "Project archive",
      "Engineering",
    ],
    caption: "Minimalist grid-based site for an architecture studio.",
    introduction:
      "Alt+ does precise, restrained work and wanted a site to match. We built a quiet grid system, a project archive that scales, and a typographic identity that lets the work speak.",
    cover: "/work/ALT.svg",
    gallery: ["/work/AltArchitecture1.png", "/work/AltArchitecture2.png"],
  },
  {
    slug: "billy",
    title: "BILLY",
    client: "Billy",
    industry: "Micro SaaS",
    year: "2025",
    deliverables: [
      "UI/UX design",
      "React development",
      "PDF editing & download",
      "Web development",
    ],
    caption: "Open-source invoicing tool for freelancers and small studios.",
    introduction:
      "Like many others, we were looking for a free, simple tool to create invoices on the go. So we built one and made it accessible to everyone — clean form, fast PDF, no account required.",
    cover: "/work/billly.svg",
    gallery: ["/work/billy1.png"],
  },
  {
    slug: "meethub",
    title: "MEETHUB",
    client: "Meethub",
    industry: "Productivity SaaS",
    year: "2025",
    deliverables: [
      "Product design",
      "Web app development",
      "Realtime sync",
      "Branding",
    ],
    caption: "Lightweight meeting workspace built around the agenda, not the call.",
    introduction:
      "Most meeting tools start with the call. Meethub starts with the agenda. We designed and built a realtime workspace where teams write the meeting before it happens — and the call becomes the easy part.",
    cover: "/work/meethub.png",
    gallery: ["/work/meethub1.png", "/work/meethub2.png"],
  },
  {
    slug: "oet",
    title: "OET",
    client: "Confidential",
    industry: "Operations · Internal tools",
    year: "2024",
    deliverables: [
      "Internal platform",
      "Database design",
      "Engineering",
    ],
    caption: "Internal ops platform that replaced three spreadsheets.",
    introduction:
      "An ops team was running a growing business out of three colliding spreadsheets. We replaced them with a single internal platform — same source of truth, role-aware views, audit trail.",
    cover: "/work/oet.svg",
    gallery: ["/work/oet1.png", "/work/oet2.png"],
  },
  {
    slug: "daedstudio",
    title: "DAED STUDIO",
    client: "Daed Studio",
    industry: "Design · Creative",
    year: "2024",
    deliverables: [
      "Portfolio site",
      "CMS",
      "Brand system",
      "Engineering",
    ],
    caption: "Portfolio site for a small design + engineering studio.",
    introduction:
      "Daed wanted a portfolio that read like a film title sequence — confident, dark, paced. We shipped a custom CMS, an editorial type system, and a project layout flexible enough to host every kind of case study they take on.",
    cover: "/work/daedstudio.png",
    gallery: ["/work/daedstudio1.png"],
  },
  {
    slug: "teachbay",
    title: "TEACHBAY",
    client: "Teachbay",
    industry: "Education · SaaS",
    year: "2024",
    deliverables: [
      "Marketing site",
      "Brand refresh",
      "Engineering",
      "Analytics",
    ],
    caption: "Marketing site for a learning platform — fast, modular, brand-led.",
    introduction:
      "Teachbay was outgrowing its marketing site. We rebuilt it as a fast, modular system: brand-led, conversion-aware, and easy for the team to extend without engineering on every change.",
    cover: "/work/teachbay.png",
    gallery: ["/work/teachbay1.png"],
  },
];

export function getProjectBySlug(slug: string): WorkProject | undefined {
  return WORK_PROJECTS.find((p) => p.slug === slug);
}

export function getNextProject(slug: string): WorkProject | undefined {
  const i = WORK_PROJECTS.findIndex((p) => p.slug === slug);
  if (i === -1) return undefined;
  return WORK_PROJECTS[(i + 1) % WORK_PROJECTS.length];
}
