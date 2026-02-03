export interface Position {
  title: string;
  type: string;
  location: string;
  description: string;
}

export const POSITIONS: Position[] = [
  {
    title: "Software Engineer",
    type: "Full-time",
    location: "On-site, Delhi",
    description:
      "Build the platform that connects tutors with students. Work with Next.js, React Native, and modern web technologies.",
  },
  {
    title: "Video Editor",
    type: "Part-time / Full-time",
    location: "On-site, Delhi",
    description:
      "Create engaging educational content and marketing materials. Edit tutorial videos and promotional content for our platform.",
  },
  {
    title: "Math Teacher",
    type: "Part-time",
    location: "On-site, Delhi",
    description:
      "No degree required. Must be comfortable teaching in English and understand the South African syllabus. Design learning paths for students, help arrange homework sheets, and provide detailed feedback on the app to develop an intuitive experience for kids.",
  },
];
