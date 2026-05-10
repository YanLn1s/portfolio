"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { FanGallery } from "@/components/ui/FanGallery";
import { projects, designWorks } from "@/data/projects";
import { Project } from "@/lib/types";
import { cn } from "@/lib/utils";

const tabs = [
  { key: "projects", label: "项目" },
  { key: "design", label: "设计" },
] as const;

interface ProjectsProps {
  githubRepos?: Project[];
}

export function Projects({ githubRepos = [] }: ProjectsProps) {
  const [activeTab, setActiveTab] = useState<string>("projects");

  // Merge: keep manual projects, add GitHub repos that aren't already linked
  const manualUrls = new Set(projects.map((p) => p.repoUrl).filter(Boolean));
  const mergedProjects = [...projects];
  for (const repo of githubRepos) {
    if (repo.repoUrl && !manualUrls.has(repo.repoUrl)) {
      mergedProjects.push({ ...repo, featured: false });
    }
  }

  return (
    <SectionContainer id="work" className="pb-12 md:pb-16">
      <SectionHeading number="01" title="精选作品" />

      {/* Tab switches */}
      <div className="flex gap-2 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={cn(
              "relative px-5 py-2 text-sm font-medium rounded-full transition-colors",
              activeTab === tab.key
                ? "bg-accent text-white"
                : "bg-bg-secondary text-text-secondary hover:text-text-primary border border-border"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        {activeTab === "projects" ? (
          <motion.div
            key="projects"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          >
            {mergedProjects.map((project, index) => (
              <AnimatedReveal key={project.id} delay={index * 0.15}>
                <ProjectCard project={project} />
              </AnimatedReveal>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="design"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <FanGallery works={designWorks} />
          </motion.div>
        )}
      </AnimatePresence>
    </SectionContainer>
  );
}
