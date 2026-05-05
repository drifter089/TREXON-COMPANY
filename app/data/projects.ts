export interface Project {
  id: string;
  index: string;
  title: string;
  tags: string[];
  image: string;
  year: string;
}

export const PROJECTS: Project[] = [
  {
    id: "net-zero-2050",
    index: "01",
    title: "Net-Zero 2050",
    tags: ["Web App", "Data Viz"],
    image: "/project-1.png",
    year: "2026",
  },
  {
    id: "teachbay",
    index: "02",
    title: "TeachBay",
    tags: ["SaaS", "AI"],
    image: "/project-2.png",
    year: "2026",
  },
  {
    id: "focus-flow",
    index: "03",
    title: "Focus Flow",
    tags: ["Web App", "Dashboard"],
    image: "/project-3.png",
    year: "2025",
  },
  {
    id: "fastfood",
    index: "04",
    title: "FastFood",
    tags: ["E-commerce", "Mobile"],
    image: "/project-4.png",
    year: "2025",
  },
  {
    id: "atelier-co",
    index: "05",
    title: "Atelier Co.",
    tags: ["Branding", "Website"],
    image: "/project-1.png",
    year: "2025",
  },
  {
    id: "pulse-insight",
    index: "06",
    title: "Pulse Insight",
    tags: ["SaaS", "Analytics"],
    image: "/project-2.png",
    year: "2024",
  },
  {
    id: "north-bay",
    index: "07",
    title: "North Bay Studio",
    tags: ["Marketing Site", "CMS"],
    image: "/project-3.png",
    year: "2024",
  },
];
