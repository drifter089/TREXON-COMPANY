export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  placeholder: string;
}

export const TEAM: TeamMember[] = [
  {
    name: "Your Name",
    role: "Co-Founder & CEO",
    bio: "Full-stack engineer. Previously founding engineer at Acta Ventures. Passionate about ed-tech and building products from scratch.",
    placeholder: "CEO",
  },
  {
    name: "Co-Founder",
    role: "Co-Founder & CTO",
    bio: "Software engineer leading backend architecture and infrastructure. Building the platform that connects tutors to students.",
    placeholder: "CTO",
  },
  {
    name: "Open Role",
    role: "Head of Tutoring",
    bio: "We're looking for someone to lead our tutor team, design curriculum, and ensure quality across all sessions.",
    placeholder: "?",
  },
  {
    name: "Open Role",
    role: "Lead Engineer",
    bio: "Join us to build the mobile-first platform that South African students use every day. Next.js, React Native, and more.",
    placeholder: "?",
  },
];
