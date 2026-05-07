export type ProjectCategory = "Software" | "Website" | "Marketing";

export interface Project {
  id: string;
  index: string;
  title: string;
  category: ProjectCategory;
  image: string;
  caption: string;
}

export const PROJECTS: Project[] = [
  {
    id: "project-1",
    index: "01",
    title: "Northstar",
    category: "Software",
    image: "/project1.png",
    caption: "Internal ops platform that replaced three spreadsheets.",
  },
  {
    id: "project-5",
    index: "02",
    title: "Vertex",
    category: "Software",
    image: "/project-5.png",
    caption: "Analytics console for a growing fintech product team.",
  },
  {
    id: "project-2",
    index: "03",
    title: "Helix",
    category: "Website",
    image: "/project-2.png",
    caption: "Commerce rebuild that doubled checkout completion rate.",
  },
  {
    id: "project-3",
    index: "04",
    title: "Atlas",
    category: "Website",
    image: "/project-3.png",
    caption: "Brand site for a stealth fintech, shipped in three weeks.",
  },
  {
    id: "project-6",
    index: "05",
    title: "Nimbus",
    category: "Website",
    image: "/project-6.png",
    caption: "Marketing site for a SaaS launch — fast, modular, brand-led.",
  },
  {
    id: "project-4",
    index: "06",
    title: "Glide",
    category: "Marketing",
    image: "/project-4.png",
    caption: "Always-on growth across paid, email, and SEO.",
  },
  {
    id: "project-7",
    index: "07",
    title: "Echo",
    category: "Marketing",
    image: "/project-7.png",
    caption: "Lifecycle and retention engine for a subscription brand.",
  },
];

export interface PracticeBlock {
  id: ProjectCategory;
  index: string;
  total: string;
  title: string;
  description: string;
}

export const PRACTICES: PracticeBlock[] = [
  {
    id: "Software",
    index: "01",
    total: "03",
    title: "Software",
    description:
      "Custom platforms, internal tools, and systems built to outlive their launch.",
  },
  {
    id: "Website",
    index: "02",
    total: "03",
    title: "Websites",
    description:
      "Sites that load fast, look unmistakable, and convert past the launch quarter.",
  },
  {
    id: "Marketing",
    index: "03",
    total: "03",
    title: "Marketing",
    description:
      "Always-on campaigns across paid, email, and SEO — built to compound, not just spend.",
  },
];
