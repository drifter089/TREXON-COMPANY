export type WorkCategory = "Software" | "Websites";

export interface WorkProject {
  slug: string;
  title: string;
  category: WorkCategory;
  year: string;
  role: string;
  caption: string;
  cover: string;
  gallery: string[];
}

export interface WorkPractice {
  id: WorkCategory;
  index: string;
  total: string;
  title: string;
  blurb: string;
}

// PLACEHOLDER COPY — swap captions/roles/years before launch.
export const WORK_PROJECTS: WorkProject[] = [
  // --- Software ---
  {
    slug: "billy",
    title: "BILLY",
    category: "Software",
    year: "2025",
    role: "Product · Engineering",
    caption: "Open-source invoicing tool for freelancers and small studios.",
    cover: "/work/billy1.png",
    gallery: ["/work/billly.svg"],
  },
  {
    slug: "meethub",
    title: "MEETHUB",
    category: "Software",
    year: "2025",
    role: "Product · Engineering",
    caption: "Lightweight meeting workspace built around the agenda, not the call.",
    cover: "/work/meethub2.png",
    gallery: ["/work/meethub1.png", "/work/meethub3.png", "/work/meethub.png"],
  },
  {
    slug: "oet",
    title: "OET",
    category: "Software",
    year: "2024",
    role: "Engineering",
    caption: "Internal ops platform that replaced three spreadsheets.",
    cover: "/work/oet-project-2.png",
    gallery: ["/work/oet-project-4.png", "/work/oet.svg"],
  },

  // --- Websites ---
  {
    slug: "rouge",
    title: "ROUGE",
    category: "Websites",
    year: "2025",
    role: "Design · Engineering",
    caption: "Event-ticketing platform and brand site for ROUGE Amsterdam.",
    cover: "/work/rougegallery.png",
    gallery: [
      "/work/rougetickets.png",
      "/work/ticketsRec.png",
      "/work/ticketsRec2.png",
      "/work/ticketsRec3.png",
      "/work/phonerouge.png",
      "/work/phoneRec1.png",
      "/work/rouge2.png",
    ],
  },
  {
    slug: "alt",
    title: "ALT+",
    category: "Websites",
    year: "2025",
    role: "Design · Engineering",
    caption: "Minimalist grid-based site for an architecture studio.",
    cover: "/work/AltArchitecture.png",
    gallery: ["/work/AltArchitecture2.png", "/work/ALT.svg"],
  },
  {
    slug: "daedstudio",
    title: "DAED STUDIO",
    category: "Websites",
    year: "2024",
    role: "Design · Engineering",
    caption: "Portfolio site for a small design + engineering studio.",
    cover: "/work/daedstudio.png",
    gallery: ["/work/daedstudio1.png"],
  },
  {
    slug: "teachbay",
    title: "TEACHBAY",
    category: "Websites",
    year: "2024",
    role: "Design · Engineering",
    caption: "Marketing site for a learning platform — fast, modular, brand-led.",
    cover: "/work/teachbay.png",
    gallery: ["/work/teachbay1.png"],
  },
];

export const WORK_PRACTICES: WorkPractice[] = [
  {
    id: "Software",
    index: "01",
    total: "02",
    title: "Software",
    blurb: "Custom platforms and internal tools, built to outlive their launch.",
  },
  {
    id: "Websites",
    index: "02",
    total: "02",
    title: "Websites",
    blurb: "Sites that load fast, look unmistakable, and convert past launch.",
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
