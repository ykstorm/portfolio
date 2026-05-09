import { Metadata } from "next";
import ProjectCard from "@/components/project-card";
import SectionHeader from "@/components/section-header";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects — Lakshyaraj Singh Rao",
  description: "Production systems I've built — AI platforms, DevOps pipelines, and developer tooling.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-[var(--color-bg-primary)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          label="// projects"
          title="Systems I've Built"
          description="Production systems handling real traffic, real money, and real users. Not tutorials — shipped products."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.longDescription}
              tags={project.tags}
              href={project.href}
              repo={project.repo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}