export interface WorkProject {
  slug: string;
  title: string;
  year: string;
  role: string;
  caption: string;
  cover: string;
  coverBg: string;
  gallery: string[];
}

// PLACEHOLDER COPY — swap captions/roles/years before launch.
export const WORK_PROJECTS: WorkProject[] = [
  {
    slug: "rouge",
    title: "ROUGE",
    year: "2025",
    role: "Design · Engineering",
    caption: "Event-ticketing platform and brand site for ROUGE Amsterdam.",
    cover: "/work/rouge.png",
    coverBg: "#5E1F2A",
    gallery: ["/work/rouge1.png", "/work/rouge2.png", "/work/rouge3.png"],
  },
  {
    slug: "rec",
    title: "REC",
    year: "2025",
    role: "Design · Engineering",
    caption: "Berlin nightclub site — line-ups, bookings, brand.",
    cover: "/work/Rec.png",
    coverBg: "#8B2E2E",
    gallery: ["/work/Rec1.png", "/work/Rec2.png"],
  },
  {
    slug: "alt",
    title: "ALT+",
    year: "2025",
    role: "Design · Engineering",
    caption: "Minimalist grid-based site for an architecture studio.",
    cover: "/work/ALT.svg",
    coverBg: "#C8B68F",
    gallery: ["/work/AltArchitecture1.png", "/work/AltArchitecture2.png"],
  },
  {
    slug: "billy",
    title: "BILLY",
    year: "2025",
    role: "Product · Engineering",
    caption: "Open-source invoicing tool for freelancers and small studios.",
    cover: "/work/billly.svg",
    coverBg: "#6E59AD",
    gallery: ["/work/billy1.png"],
  },
  {
    slug: "meethub",
    title: "MEETHUB",
    year: "2025",
    role: "Product · Engineering",
    caption: "Lightweight meeting workspace built around the agenda, not the call.",
    cover: "/work/meethub.png",
    coverBg: "#D86B4D",
    gallery: ["/work/meethub1.png", "/work/meethub2.png"],
  },
  {
    slug: "oet",
    title: "OET",
    year: "2024",
    role: "Engineering",
    caption: "Internal ops platform that replaced three spreadsheets.",
    cover: "/work/oet.svg",
    coverBg: "#3D8580",
    gallery: ["/work/oet1.png", "/work/oet2.png"],
  },
  {
    slug: "daedstudio",
    title: "DAED STUDIO",
    year: "2024",
    role: "Design · Engineering",
    caption: "Portfolio site for a small design + engineering studio.",
    cover: "/work/daedstudio.png",
    coverBg: "#1A1714",
    gallery: ["/work/daedstudio1.png"],
  },
  {
    slug: "teachbay",
    title: "TEACHBAY",
    year: "2024",
    role: "Design · Engineering",
    caption: "Marketing site for a learning platform — fast, modular, brand-led.",
    cover: "/work/teachbay.png",
    coverBg: "#C8923D",
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
