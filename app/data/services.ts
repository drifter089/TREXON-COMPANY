export type MockKind = "software" | "websites" | "marketing";

export interface Service {
  id: string;
  index: string;
  title: string;
  brief: string;
  includes: string[];
  showcase: {
    images: string[];
    project: string;
    mock?: MockKind;
  };
}

export const SERVICES: Service[] = [
  {
    id: "custom-software",
    index: "01",
    title: "Custom Software",
    brief: "Built for the way you actually work.",
    includes: [
      "Web Apps",
      "Mobile",
      "Internal Tools",
      "APIs",
      "Integrations",
    ],
    showcase: {
      images: [],
      project: "Live preview",
      mock: "software",
    },
  },
  {
    id: "websites",
    index: "02",
    title: "Websites",
    brief: "Fast, brand-aligned, built to convert.",
    includes: [
      "Marketing Sites",
      "E-commerce",
      "Brand Systems",
      "CMS",
    ],
    showcase: {
      images: [],
      project: "Live preview",
      mock: "websites",
    },
  },
  {
    id: "digital-marketing",
    index: "03",
    title: "Digital Marketing",
    brief: "Get found. Get clicks. Get clients.",
    includes: [
      "SEO",
      "Paid Ads",
      "Social",
      "Email",
      "Analytics",
    ],
    showcase: {
      images: [],
      project: "Live preview",
      mock: "marketing",
    },
  },
];
