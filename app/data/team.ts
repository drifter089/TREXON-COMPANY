export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  placeholder: string;
  image?: string;
  imagePosition?: string;
  imageScale?: number;
  imageTranslateY?: number;
}

export const TEAM: TeamMember[] = [
  {
    name: "Akshat",
    role: "Software Engineer",
    bio: "Full-stack engineer building the platform that connects tutors with students. Passionate about ed-tech and creating products from scratch.",
    placeholder: "A",
    image: "/akshat.jpeg",
    imageScale: 1.2,
  },
  {
    name: "Kerwin",
    role: "Marketing",
    bio: "Leading marketing efforts to connect South African students with quality tutoring. Building the brand and growing our community.",
    placeholder: "K",
    image: "/kerwin.jpeg",
    imagePosition: "top",
  },
  {
    name: "Aom",
    role: "Software Engineer",
    bio: "Software engineer working on frontend and backend systems. Building the mobile-first platform that students use every day.",
    placeholder: "A",
    image: "/aom.jpeg",
    imageScale: 1.6,
    imagePosition: "60% center",
    imageTranslateY: -22,
  },
  {
    name: "Ajay",
    role: "Management",
    bio: "Overseeing operations and strategy to ensure smooth execution across the team.",
    placeholder: "AJ",
  },
];
