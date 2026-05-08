import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import WorkDetail from "@/app/components/WorkDetail";
import {
  WORK_PROJECTS,
  getProjectBySlug,
  getNextProject,
} from "@/app/data/work";

interface Params {
  slug: string;
}

export function generateStaticParams(): Params[] {
  return WORK_PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Work — THREXON" };
  return {
    title: `${project.title} — THREXON`,
    description: project.caption,
  };
}

export default async function WorkProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const next = getNextProject(slug);

  return (
    <>
      <Navbar />
      <WorkDetail project={project} next={next} />
      <Footer />
    </>
  );
}
