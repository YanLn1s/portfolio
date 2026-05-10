"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { MagneticWrapper } from "@/components/ui/MagneticWrapper";
import { Project } from "@/lib/types";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const linkUrl = project.liveUrl || project.repoUrl;
  const Tag = linkUrl ? "a" : "div";

  return (
    <MagneticWrapper strength={12}>
      <Tag
        href={linkUrl || undefined}
        target={linkUrl ? "_blank" : undefined}
        rel={linkUrl ? "noopener noreferrer" : undefined}
        className={cn(
          "block group relative rounded-2xl overflow-hidden border border-border bg-bg-secondary transition-colors hover:border-accent/20",
          linkUrl && "cursor-pointer"
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered && linkUrl ? 1.03 : 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          />

          {/* Hover overlay — only if there's a link */}
          {linkUrl && (
            <motion.div
              className="absolute inset-0 bg-accent/80 flex items-center justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {project.liveUrl && (
                <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-text-primary">
                  <ArrowUpRight size={18} />
                </span>
              )}
              {project.repoUrl && (
                <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-text-primary">
                  <ExternalLink size={18} />
                </span>
              )}
            </motion.div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono text-accent tracking-wider">
              {project.year}
            </span>
            {project.featured && (
              <span className="text-[10px] font-mono uppercase tracking-widest text-text-secondary border border-border rounded-full px-2 py-0.5">
                精选
              </span>
            )}
          </div>
          <h3 className="text-lg font-semibold tracking-tight mb-1.5 group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-text-secondary leading-relaxed mb-3 line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono text-text-secondary bg-bg-primary border border-border rounded-md px-2 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Tag>
    </MagneticWrapper>
  );
}
