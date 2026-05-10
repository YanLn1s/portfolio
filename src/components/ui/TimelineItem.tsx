"use client";

import { motion } from "framer-motion";
import { Experience } from "@/lib/types";

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

export function TimelineItem({ experience, index }: TimelineItemProps) {
  const isCurrent = experience.endDate === null;

  return (
    <div className="relative">
      {/* Timeline dot */}
      <motion.div
        className={cn(
          "absolute -left-[27px] top-1 w-[11px] h-[11px] rounded-full border-2 bg-bg-primary z-10",
          isCurrent ? "border-accent bg-accent" : "border-border"
        )}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2, type: "spring", stiffness: 300, damping: 20 }}
      />

      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 + 0.1, duration: 0.4 }}
      >
        <div className="flex items-start justify-between gap-4 mb-1.5">
          <div>
            <h3 className="font-semibold text-text-primary">{experience.role}</h3>
            <p className="text-sm text-text-secondary">
              {experience.companyUrl ? (
                <a
                  href={experience.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-hover transition-colors"
                >
                  {experience.company}
                </a>
              ) : (
                experience.company
              )}
              {experience.location && <> &middot; {experience.location}</>}
            </p>
          </div>
          <span className="text-xs font-mono text-text-secondary whitespace-nowrap mt-1">
            {formatDate(experience.startDate)} —{" "}
            {isCurrent ? "至今" : formatDate(experience.endDate!)}
          </span>
        </div>

        <ul className="space-y-1.5 mb-3">
          {experience.description.map((desc, i) => (
            <li
              key={i}
              className="text-sm text-text-secondary leading-relaxed pl-3 relative before:content-['—'] before:absolute before:left-0 before:text-text-secondary/40"
            >
              {desc}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono text-accent bg-accent/5 rounded px-1.5 py-0.5"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

function formatDate(dateString: string): string {
  const [year, month] = dateString.split("-");
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  return `${months[parseInt(month) - 1]} ${year}`;
}
